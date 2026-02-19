import Image from "next/image";
import Navigation from "@/components/Navigation";
import Mainlanding1 from "@/components/Mainlanding1";
import Landing2 from "@/components/Landing2";
import Landing3 from "@/components/Landing3";
import Landing4 from "@/components/Landing4";
import Landing5 from "@/components/Landing5";

export default function Home() {
  return (
   <>
   <Navigation>
   </Navigation>
    <Mainlanding1></Mainlanding1>
    <Landing2></Landing2>
    <Landing3></Landing3>
    <Landing4></Landing4>
    <Landing5></Landing5>
   </>
  );
}
