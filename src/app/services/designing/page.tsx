import React from 'react'
import Component1 from './page1/Component1'
import Component2 from './page2/Component2'
import Component3 from './page3/Component3'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pribhaytech | Designing Services ",
  description: "This is the Designing page",
};
 const page = () => {
  return (
    
    <div>
     <Component1/>
     <Component2/>
     <Component3/>
    </div>
     
  )
}

export default page
