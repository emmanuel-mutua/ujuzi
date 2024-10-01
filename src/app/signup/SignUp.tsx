"use client";

import React, { useState } from "react";
import Link from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [kicdNumber, setkicdNumber] = useState("");

  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleKicdNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setkicdNumber(e.target.value);

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCPassword(e.target.value);
  

  const handleSignUp = async () => {
    try {

    
    } catch (error) {
      setErrorMessage("An error occurred during signup.");
    }
  };

  const handleGoogleRegistration = async () => {
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
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="bg-white p-10 shadow-lg rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">SIGNUP</h2>
          {errorMessage && (
            <div className="text-red-500 mb-4">{errorMessage}</div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2" aria-placeholder="Enter Email">
                Email
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
            <label htmlFor="kicdNumber" className="block text-gray-700 font-bold mb-2">
              KICD Number
            </label>
            <input
              type="text"
              id="kicdNumber"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={kicdNumber}
              onChange={handleKicdNumberChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cpassword" className="block text-gray-700 font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={cpassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              onClick={handleSignUp}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-4 rounded focus:outline-none focus:shadow-outline"
            >
              SIGUP
            </button>
          </div><br />
          
          <h4 className="text-gray-700 text-center">Or</h4>
          <div className="mt-6 text-center">
            
            <button
              onClick={handleGoogleRegistration}
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4"
            >
              <img src="images/google.png" alt="Google" className="w-5 h-5 mr-4" />
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
