'use client'
import Image from 'next/image'
import {useRouter} from "next/router";
import {SessionProvider, signIn, useSession} from "next-auth/react";
import { ThemeProvider, Button } from "@material-tailwind/react";
import { useState } from 'react';
import axios from 'axios';


export default function Home() {
  //const data = await getData()
  //const {data: session, status} = useSession({required: true});
  const [response, setResponse] = useState("{}");

  const getUserDetails = async (useToken: boolean) => {
    try {
      const response = await axios({
        method: "get",
        url: process.env.NEXT_PUBLIC_BACKEND_URL + "auth/user/",
        headers: useToken ? {Authorization: "Bearer " + session?.access_token} : {},
      });
      console.log(JSON.stringify(response.data));
      setResponse(JSON.stringify(response.data));
    } catch (error) {
      setResponse(error.message);
    }
  };
  return (
    <div className='w-full h-full h-screen bg-gray-700'>
      <Button onClick={() => getUserDetails(false)}>Button</Button>
    </div>
  )
}
