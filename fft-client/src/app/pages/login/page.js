"use client";
import { login } from "@/app/slice/authSlice";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (response.ok) {
        // Handle successful response
        const data = await response.json();
        dispatch(login({ user: data.userId, token: data.token }));
        router.push("/");
      } else {
        // Handle error response
        const errorMessage = await response.json(); // Extract error message from response body
        console.error("Login failed:", errorMessage.message);
      }
    } catch (error) {
      // Handle network error
      console.error("Network error:", error.message);
    }
  };

  return (
    <div className="max-h-screen my-48 py-8 px-8 bg-transparent shadow-2xl max-w-2xl mx-auto rounded-2xl min-h-fit hover:shadow-lg">
      <div className=" pb-4 text-6xl text-center text-yellow-600/80 font-bold ">
        <span className="py-4">Login</span>
      </div>
      <hr className=" text-center border-2 mx-10 border-yellow-300" />
      <div className="flex items-center justify-center p-3 mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1 text-white mx-0 md:mx-36">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <span className="text-[#FEAF05] py-4 text-xl">Your email</span>
              <br />
              <input
                type="email"
                placeholder="test@email.com"
                id="email"
                name="email"
                className="w-3/4 md:w-full h-10 pl-2 rounded-md bg-gradient-to-r from-yellow-100 to-yellow-500 border-2 hover:bg-gradient-radial"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <br />

              <span className="text-[#FEAF05] py-4 text-xl">Password</span>
              <br />
              <input
                type="password"
                placeholder="*******"
                id="password"
                name="password"
                className="w-3/4 md:w-full h-10 pl-2 rounded-md bg-gradient-to-r from-yellow-100 to-yellow-500 border-2 hover:bg-gradient-radial"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              />
              <br />
              <button
                type="submit"
                className="border mt-4 px-2 py-1 bg-yellow-500 rounded-lg hover:bg-transparent hover:border-yellow-700 hover:text-black"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex flex-col md:flex-row gap-2 text-sm mt-5">
            <span>Dont Have an account?</span>
            <Link
              href="/pages/register"
              className="text-black/60 cursor-pointer"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
