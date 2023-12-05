'use client'
import Image from 'next/image'
import {useRouter} from "next/router";
import {SessionProvider, signIn, useSession} from "next-auth/react";
import { ThemeProvider, Button, Input } from "@material-tailwind/react";
import { useState } from 'react';
import axios from 'axios';
import { getServerSession } from "next-auth/next"
import NextAuth from "next-auth";

export default function Home() {
  //const data = await getData()
  NextAuth
  const [response, setResponse] = useState("{}");
  //const {data: session, status} = getServerSession({required: true});
  const getUserDetails = async (useToken: boolean) => {
    try {
      const response = await axios({
        method: "POST",
        url: process.env.NEXT_PUBLIC_BACKEND_URL + "auth/login/",
        data: {
          username: "user1",
          password: "complexpassword123",
        },
        //headers: useToken ? {Authorization: "Bearer " + session?.access_token} : {},
        headers: {
          'Content-Type': 'application/json'
          }
      });
      console.log(JSON.stringify(response.data));
      setResponse(JSON.stringify(response.data));
    } catch (error) {
      setResponse(error.message);
    }
  };
  return (
    <div className='w-full h-full h-screen flex justify-center items-center bg-gray-700'>
      <Button onClick={() => getUserDetails(false)}>Button</Button>

      <div className='relative z-10'>
        <form action="#" className='w-96'>
          <div className="text-white mb-6">
            <Input label='Username'/>
          </div>
          <div className="text-white mb-6">
            <Input label='Password'/>
          </div>
        </form>
      </div>
    </div>
  )
}
