//"use client";

import { cookies } from "next/headers";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  function handleLogout() {
    cookies().delete('auth_token')
    router.push("/");
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
      <Button className="bg-green-200" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
