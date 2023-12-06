"use client";
import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";

import NextAuth from "next-auth";


export default function Home() {
  //const data = await getData()
  NextAuth;
  const [response, setResponse] = useState("{}");

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
          "Content-Type": "application/json",
        },
      });
      console.log(JSON.stringify(response.data));
      setResponse(JSON.stringify(response.data));
    } catch (error) {
      setResponse(error.message);
    }
    
  };


  return (
    <div
      className="w-full h-full h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
      }}
    >
      <div className="flex w-full h-screen justify-center items-center flex-col gap-3">
        <div className="relative z-10">
          <form action="#" className="w-96">
            <div className="text-white mb-6">
              <Input label="Username" />
            </div>
            <div className="text-white mb-6">
              <Input label="Password" />
            </div>
          </form>
        </div>
        <Button className="" onClick={() => getUserDetails(false)}>
          Button
        </Button>
        <Button className="bg-green-200" onClick={() => handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
}
