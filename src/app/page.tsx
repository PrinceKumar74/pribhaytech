import HomePage from "./components/Home/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pribhaytech | Home ",
  description: "This is the Home page",
}
export default function Home() {

  return (
   
    <div className="h-full w-full">
      <HomePage/>
    </div>
 
  );
}
