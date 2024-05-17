/* eslint-disable react/no-unescaped-entities */
"use client";
import TextField from "@mui/material/TextField";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@mui/material";
import { createUser } from "@/lib/actions";

export default function Form() {
  return (
    <>
      <div className="text-white ">
        <div className="mr-4 justify-left mt-4">
          <form className="flex flex-col" action={createUser}>
            <Card className="mr-16 justify-center">
              <CardHeader>
                <CardTitle>Welcome</CardTitle>
                <CardDescription>
                  Today is a new day. It's your day. You shape it.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Input
                  type="text"
                  name="name"
                  className="m-4 w-72"
                  placeholder="name"
                />
                <Input
                  type="email"
                  name="email"
                  className="m-4 w-72"
                  placeholder="email"
                />
                <Input
                  type="password"
                  name="password"
                  className="m-4 w-72"
                  placeholder="password"
                />
              </CardContent>
              <CardFooter className="content-center">
                <Button type="submit">Sign Up</Button>
              </CardFooter>
            </Card>
          </form>
        </div>
      </div>
    </>
  );
}
