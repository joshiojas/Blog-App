"use server";
import LoginForm from "@/components/loginForm";
import Signup from "@/components/signup";
import Image from "next/image";
export default async function Page() {
  return (
    <>
      <div className="grid grid-cols-2 text-white m-32 justify-center">
        <Signup />
        <Image
          src="https://images.unsplash.com/photo-1546074177-ffdda98d214f"
          alt="login"
          width={500}
          height={500}
        />
      </div>
    </>
  );
}
