import Image from "next/image";
import Login from "./login/login";
import SignUp from "./signup/SignUp";
import Index from "./pages/index"
import Teachers from "./pages/teachers";

export default function Home() {
  return (
    <div>
       <Index />
     {/* <Login /> */}
     {/* <SignUp /> */}
     {/* <Teachers /> */}
    </div>
  );
}
