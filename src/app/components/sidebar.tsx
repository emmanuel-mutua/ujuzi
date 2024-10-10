
import { HomeIcon, AcademicCapIcon, ClipboardCheckIcon, UserGroupIcon } from "@heroicons/react/solid";
import Link from 'next/link';
export default function Sidebar() {
  return (
    <aside className="w-1/4 bg-blue-900 text-white h-screen p-6">
      <div className="flex items-center space-x-2 mb-8">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-bold">UJUZI</h1>
      </div>
      <ul className="space-y-4">
        <li>
          <Link href="/" className="font-semibold text-yellow-500">Home</Link>
        </li>
        <li>
          <Link href="/teachers">Teachers</Link>
        </li>
        <li>
          <Link href="/assessment">Assessment</Link>
        </li>
        <li>
          <Link href="/trainers">Trainers</Link>
        </li>
      </ul>
    </aside>
  );
}
