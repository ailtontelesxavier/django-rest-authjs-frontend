"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Profile = () => {
  const router = useRouter();
  var credentials = new Map();

  const { data: session, status } = useSession({ required: true });
  const [response, setResponse] = useState("{}");

  const getUserDetails = async (useToken: boolean) => {
    try {
      const response = await axios({
        method: "POST",
        url: process.env.NEXT_PUBLIC_BACKEND_URL + "auth/login/",
        //headers: useToken ? {Authorization: "Bearer " + session?.access_token} : {},
        /*headers: {
          "Content-Type": "application/json",
        },*/
      });
      console.log(JSON.stringify(response.data));
      setResponse(JSON.stringify(response.data));
    } catch (error) {
      setResponse(error.message);
    }
  };

  return (
    <>
      {session ? <span>Estou logado</span> : <span>nao logado</span>}
      <button
        type="button"
        onClick={() =>
          signIn("credentials", credentials, { callbackUrl: "/interno" })
        }
        className="text-white bg-blue-700 hover:bg-blue-800 focus:bg-blue-gray-400"
      >
        Login
      </button>
      <button
        type="button"
        onClick={() => signOut("credentials")}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:bg-blue-gray-400"
      >
        Sair
      </button>
    </>
  );
};

export default Profile;
