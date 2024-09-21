"use client";

import React, { useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [tscNumber, setTscNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleTscNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTscNumber(e.target.value);
  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setOtp(e.target.value);

  const handleLogin = async () => {
    try {
      if (email === "test@example.com" && tscNumber === "123456" && otp === "1234") {
        console.log("Login successful!");
      } else {
        setErrorMessage("Invalid email, TSC number, or OTP.");
      }
    } catch (error) {
      setErrorMessage("An error occurred during login.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      // Firebase Google sign-in logic goes here
    } catch (error) {
      setErrorMessage("Error logging in with Google.");
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left Section with Image */}
      <div className="relative hidden lg:block w-1/2 h-full">
        <img
          src="/images/image.png" // Ensure this path points to the image location
          alt="Welcome to Ujuzi"
          className="object-cover w-full h-full"
        />
        {/* Blur and Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700 to-transparent bg-opacity-70 backdrop-blur-sm"></div>
        {/* Welcome Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 z-20">
          <h1 className="text-5xl font-bold mb-4">Welcome to Ujuzi</h1>
          <p className="text-lg text-center">
            Login now and gain immediate access to exclusive content and expert trainers
          </p>
        </div>
      </div>

      {/* Right Section (Login Form) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="bg-white p-10 shadow-lg rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">LOGIN</h2>
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
            <label htmlFor="tscNumber" className="block text-gray-700 font-bold mb-2">
              TSC Number
            </label>
            <input
              type="text"
              id="tscNumber"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={tscNumber}
              onChange={handleTscNumberChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-gray-700 font-bold mb-2">
              OTP (One Time Password)
            </label>
            <input
              type="password"
              id="otp"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={otp}
              onChange={handleOtpChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleLogin}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <Link
              href="/register"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Register
            </Link>
          </div>
          <div className="mt-6 text-center">
            <span className="text-gray-700">Or sign in with</span>
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
