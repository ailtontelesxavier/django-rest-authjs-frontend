"use client"
//'use server'

import { Button, Input } from "@material-tailwind/react";
import {SessionProvider, signIn, signOut, useSession} from "next-auth/react";

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server"
import { useRouter } from "next/navigation";
//import handleLogin from "@/functions/handleAuth";

import { useState } from "react";
import axios from "axios";
import SignInButton from "@/components/SignInButton";

export default function Home() {
  const router = useRouter();
  //const {data: session, status} = useSession();

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

  function handleLogin() {

    console.log("Auth token");
  }

  return (
    <div
      className="w-full h-full h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
      }}
    >
      <SessionProvider session={useSession}>
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
        <Button className="" onClick={() => signIn(undefined, {callbackUrl: "/interno/"})}>
          Button
        </Button>
        <Button className="bg-green-200" onClick={() => null}>
          Login
        </Button>
        <SignInButton />
      </div>
      </SessionProvider>
    </div>
  );
}
