import { HomeIcon, AcademicCapIcon, ClipboardCheckIcon, UserGroupIcon } from "@heroicons/react/solid";

export default function sidebar() {
    return (   
        <aside className="w-1/4 bg-[#023264] text-white h-screen p-6">
        <div className="flex flex-col items-center mb-8">
          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="w-20 h-20 mb-2" />
          <h1 className="text-xl font-bold">UJUZI</h1>
        </div>
        <ul className="space-y-6">
          <li className="flex items-center space-x-3">
            <HomeIcon className="w-6 h-6 text-yellow-500" />
            <span className="font-semibold text-yellow-500">Home</span>
          </li>
          <li className="flex items-center space-x-3">
            <AcademicCapIcon className="w-6 h-6 text-yellow-500" />
            <span className="font-semibold">Teachers</span>
          </li>
          <li className="flex items-center space-x-3">
            <ClipboardCheckIcon className="w-6 h-6 text-white" />
            <span className="font-semibold">Assessment</span>
          </li>
          <li className="flex items-center space-x-3">
            <UserGroupIcon className="w-6 h-6 text-white" />
            <span className="font-semibold">Trainers</span>
          </li>
        </ul>
      </aside>
    )
}