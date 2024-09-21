"use client";

import React, { useState } from "react";
import Link from "next/link";

const Home = () => (
  <div className="flex h-screen bg-blue-900">
    <div className="w-1/4 bg-blue-900 p-8 text-white flex flex-col items-center">
      <img src="/logo.png" alt="Ujuzi Logo" className="w-24 h-24 mb-8" />
      <Link href="/" className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0a1 1 0 001 1v4a1 1 0 011 1h2a1 1 0 011-1v-4a1 1 0 001-1"
          />
        </svg>
        <span className="font-bold">Home</span>
      </Link>
      <Link href="/teachers" className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="font-bold">Teachers</span>
      </Link>
      <Link href="/assessment" className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="font-bold">Assessment</span>
      </Link>
      <Link href="/resources" className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.488 9H15.512M20.488 15H15.512"
          />
        </svg>
        <span className="font-bold">Resources</span>
      </Link>
      <Link href="/dashboard" className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
        <span className="font-bold">Dashboard</span>
      </Link>
    </div>
    <div className="w-3/4 bg-blue-900 flex items-center justify-center p-16 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">WELCOME TO UJUZI</h1>
        <p className="text-lg mb-8">
          Discover about CBC training and management
        </p>
      </div>
      <img
        src="/classroom.jpg"
        alt="Classroom"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

export default Home;