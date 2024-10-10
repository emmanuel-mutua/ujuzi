import Image from "next/image";
import Login from "./login/login";
import SignUp from "./signup/SignUp";
import HomeContent from "./Home/home";
import Teachers from "./teachers/Teacher";

export default function Home() {
  return (
    <div>
       {/* <HomeContent/> */}
     {/* <Login /> */}
     {/* <SignUp /> */}
     <Teachers />
    </div>
  );
}
