import React from "react";
import Component1 from "./page1/Component1";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pribhaytech | Content Writing ",
  description: "This is the Content Writing page",
};
const page = () => {
  return (
      <div>
        <Component1 />
      </div>
  );
};

export default page;
