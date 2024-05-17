"use client";
import TextField from "@mui/material/TextField";
import { signIn } from "next-auth/react";

export default function Form() {
  return (
    <>
      <div className="text-white ">
        <h1 className="text-4xl mb-4 font-bold">Welcome Back </h1>

        <p className="text-sm">
          Today is a new day.Its your day. you shape it.
        </p>
        <p className="text-sm">Sign in to continue writing</p>
        <form className="mt-8 space-y-6">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
      </div>
    </>
  );
}
