"use client";
import { HomeIcon, ClipboardCheckIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/solid'
import Sidebar from '../components/sidebar';

export default function HomeContent() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      <main className="w-3/4 bg-white flex flex-col items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-textPrimary mb-4">WELCOME TO UJUZI</h1>
          <p className="text-lg text-textPrimary">Discover about CBC training and management</p>
          <button className="mt-8 px-6 py-2 bg-secondary text-white font-semibold rounded-full bg-yellow-600">
            SIGN UP
          </button>
        </div>
      </main>
    </div>
  )
}
