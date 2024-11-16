"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Google from "@/public/images/google.png";
import Preview from "@/public/images/preview.png";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useContext } from "react";
import loginContext from "@/app/authContext";

const formSchema = z.object({
  email: z
    .string({ required_error: "Email required" })
    .email({ message: "Invalid Email Address" }),
  password: z
    .string({ required_error: "Password required" })
    .min(8, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});

function LoginForm() {
  const { setIsLoggedIn } = useContext(loginContext);
  const handleLogin = () => setIsLoggedIn(true);

  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (data) => {
    console.log(data);
    handleLogin();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 font-bold"
      >
        <FormField
          control={form.control}
          {...form.register("email")}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="border-0 rounded-none border-b border-white !text-xl placeholder:text-white"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          {...form.register("password")}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="border-0 rounded-none border-b border-white !text-xl placeholder:text-white"
                  placeholder="Password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button
            className={
              "m-auto !text-base !px-8 !py-3 !rounded-xl " +
              "!text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent " +
              "ring-1 rounded-xl font-semibold text-center hover:brightness-90"
            }
            type="submit"
          >
            <span className={"z-20 text-white"}>Login</span>
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row bg-black p-10 rounded-xl gap-10">
      <div className="flex-[4]">
        <Image className="w-full" src={Preview}></Image>
      </div>
      <div className="*:m-auto space-y-4 flex-[3]">
        <h3 className="text-3xl font-bold text-center p-4">Login</h3>
        <button className="flex justify-center gap-2 items-center ring-1 ring-white p-2 rounded-lg w-3/4">
          <Image className="w-4" src={Google}></Image>Login with Google
        </button>
        <div className="flex justify-center items-center gap-2">
          <div className="w-20 h-[0.1rem] rounded bg-gray-600"></div>
          <p>OR</p>
          <div className="w-20 h-[0.1rem] rounded bg-gray-600"></div>
        </div>
        <LoginForm />
        <div className="flex justify-center p-2">
          <p className="text-sm">Don't have an account? </p>
          <a
            href="/"
            className="pl-2 text-sm bg-transparent text-primary underline"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
