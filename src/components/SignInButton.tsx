'use client'
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInButton = () => {
    const router = useRouter();
    const {data: session, status} = useSession();
    var credentials = new Map();
    credentials.username = 'user1';
    credentials.password = 'complexpassword123';
    console.log(session);
    console.log(useSession());
    console.log(status === 'authenticated');
    if (status === 'authenticated') {
        //router.push("profile");
        //return;
      }
    return (
        <>
        <button type="button"
        onClick={() => signIn("credentials", credentials, {callbackUrl: "/interno"})}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:bg-blue-gray-400">
            Login
        </button>
        </>
    );
}

export default SignInButton;