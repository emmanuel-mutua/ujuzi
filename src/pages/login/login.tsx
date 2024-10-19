"use client";

import React, { useState } from "react";
import Link from "next/link";
import '../global.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);


  const handleLogin = async () => {
    try {
      if (email === "test@example.com" && password === "1234") {
        console.log("Login successful!");
      } else {
        setErrorMessage("Invalid email or Password");
      }
    } catch (error) {
      setErrorMessage("An error occurred during login.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      //handle login
    } catch (error) {
      
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="relative hidden lg:block w-1/2 h-full">
        <img
          src="/images/image.png" 
          alt="Welcome to Ujuzi"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-transparent bg-opacity-70 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 z-20">
          <h1 className="text-5xl font-bold mb-4">Welcome to Ujuzi</h1>
          <p className="text-lg text-center">
            Login now and gain immediate access to exclusive content and expert trainers
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="bg-white p-10 shadow-lg rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">LOGIN</h2>
          {errorMessage && (
            <div className="text-red-500 mb-4">{errorMessage}</div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="text"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
         
          <div className="flex items-center justify-center">
            <Link
              href="/teacher/teachers"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-center focus:outline-none focus:shadow-outline"
            >
                Login
            </Link>
            
          </div>
          <br/>
          <div className="flex items-center justify-center">
          <p className="text-black">Don't have an account?</p>
          <Link
              href="/signup/signup"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              SignUp
            </Link>
           </div>
<p className="text-black text-center">Or</p>
          <div className="mt-1 text-center">
            <button
              onClick={handleGoogleLogin}
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4"
            >
              <img src="images/google.png" alt="Google" className="w-5 h-5 mr-2" />
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
