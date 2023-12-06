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

export default function Home() {


  return (
    <div
      className="w-full h-full h-screen bg-cover bg-no-repeat"
    >
      <div className="flex w-full h-screen justify-center items-center flex-col gap-3">
        <Button className="bg-green-200" onClick={() => null}>
          Login
        </Button>
      </div>
    </div>
  );
}
