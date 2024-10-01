import Image from "next/image";
import Login from "./login/login";
import SignUp from "./signup/SignUp";

export default function Home() {
  return (
    <div>
     <Login />
     {/* <SignUp /> */}
    </div>
  );
}
