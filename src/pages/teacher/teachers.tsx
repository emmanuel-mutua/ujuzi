"use client";
import { useEffect, useState } from 'react'
import axios from 'axios'
import Sidebar from '../../app/components/sidebar';
import '../global.css'
import { HomeIcon, ClipboardCheckIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/solid'

export default function Teachers() {
const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch data from API
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('/api/teachers') // Assuming '/api/teachers' is the endpoint
        setTeachers(response.data)
      } catch (err) {
        
      } finally {
        setLoading(false)
      }
    }

    fetchTeachers()
  }, [])

  // Display loading or error
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="flex">
      <Sidebar />

      {/* Main content */}
      <main className="w-3/4 bg-white p-8">
        {/* Search Bar */}
        <div className="flex justify-end mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg px-4 py-2 w-1/3"
          />
        </div>

        {/* Teachers Table */}
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Teacher Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">TSC No.</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Location</th>
              <th className="border border-gray-300 px-4 py-2 text-left">School</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Tests</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr key={index} className="border-b">
                <td className="border border-gray-300 px-4 py-2">
                  <input type="checkbox" className="mr-2" /> {teacher.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">{teacher.tsc}</td>
                <td className="border border-gray-300 px-4 py-2">{teacher.email}</td>
                <td className="border border-gray-300 px-4 py-2">{teacher.location}</td>
                <td className="border border-gray-300 px-4 py-2">{teacher.school}</td>
                <td className="border border-gray-300 px-4 py-2">{teacher.tests}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="mt-4 text-center">
          <span className="mx-1 text-gray-500">1</span>
          <span className="mx-1 text-gray-500">2</span>
          <span className="mx-1 text-gray-500">3</span>
          <span className="mx-1 text-gray-500">4</span>
          <span className="mx-1 text-gray-500">5</span>
          <span className="mx-1 text-gray-500">6</span>
          <span className="mx-1 text-gray-500">7</span>
        </div>
      </main>
    </div>
  )
}

interface Teacher {
    name: string;
    tsc: string;
    email: string;
    location: string;
    school: string;
    tests: number;
  }
  