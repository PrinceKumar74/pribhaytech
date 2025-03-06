import React from "react";
import Component1 from "./page1/Component1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pribhaytech | Ads Campaign Services ",
  description: "This is the Ads Campaign Services page",
};
const page = () => {
  return (
    
      <div>
        <Component1 />
      </div>
    
  );
};

export default page;
