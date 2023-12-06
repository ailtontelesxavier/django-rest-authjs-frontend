"use client";

import { Button, Input } from "@material-tailwind/react";
import { signOut } from "next-auth/react";


export default function Home() {

  function handleLogout() {

  }
  return (
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
      <Button className="bg-green-200" onClick={() => signOut("credentials")}>
        Logout
      </Button>
    </div>
  );
}
