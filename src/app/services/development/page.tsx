import React from "react";
import Component1 from "./page1/Component1";
import Component2 from "./page2/Component2";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pribhaytech | Development Services ",
  description: "This is the Development page",
};
const page = () => {
  return (
     
      <div>
        <Component1 />
        <Component2 />
      </div>
    
  );
};

export default page;
