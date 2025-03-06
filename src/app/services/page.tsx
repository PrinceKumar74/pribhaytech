import Carousel from "./Carousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pribhaytech | Services ",
  description: "This is the Services page",
};
const page = () => {
  return (
    <div className="relative">
      <Carousel />
    </div>
  );
};

export default page;
