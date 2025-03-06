"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Monitor, Clock, Award } from "lucide-react";
import Typed from "typed.js"; // Import Typed.js

const Component2 = () => {
  // Create a reference for the element where the typing effect will occur
  const typedTextRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js when the component mounts
    const typed = new Typed(typedTextRef.current, {
      strings: ["Build", "Develop", "Scale", "Optimize"], // Words to type
      typeSpeed: 50, // Speed of typing
      backSpeed: 30, // Speed of deleting
      loop: true, // Loop the animation
      showCursor: true, // Show the cursor
      cursorChar: "|", // Cursor character
    });

    // Cleanup the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="flex flex-col items-center text-center p-6 md:p-12 bg-gray-50">
      <h2 className="text-xl font-bold sm:font-semibold text-sky-500">
        WHY CHOOSE US
      </h2>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mt-2">
        {/* Typing effect */}
        We Are Here to <span ref={typedTextRef} className="text-sky-500"></span>{" "}
        Your Application
      </h1>
      <div className="flex flex-row gap-2">
        <div className="h-3 w-32 rounded-2xl bg-sky-500 my-4"></div>
        <div className="h-3 w-4 rounded-2xl bg-sky-500 my-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-6xl">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="bg-sky-500 p-3 rounded-full text-white">
            <Monitor size={32} />
          </div>
          <h3 className="text-lg font-semibold">Cutting Edge Solution</h3>
          <p className="text-gray-700 max-w-xs">
          We Study and Use the Latest and Advanced Technologies To Keep Your Business Ahead of The Market.
          </p>
        </div>
        {/* Image */}
        <div className="relative w-full h-72 lg:h-auto md:col-span-1 overflow-hidden rounded-lg bg-red-200">
          <Image
            src="/services-images/development.jpg"
            alt="Team working together"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="bg-sky-500 p-3 rounded-full text-white">
            <Clock size={32} />
          </div>
          <h3 className="text-lg font-semibold">24/7 Support</h3>
          <p className="text-gray-700 max-w-xs">
          We are Here For Your Problems, Giving Support Whenever you want whether it is day or night.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full max-w-6xl">
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="bg-sky-500 p-3 rounded-full text-white">
            <Award size={32} />
          </div>
          <h3 className="text-lg font-semibold">Results that Speak</h3>
          <p className="text-gray-700 max-w-xs">
          Our Approaches meet Massive Growth to the Business, Whether it is increasing traffic, sales, value, or Brand visibility in the market.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="bg-sky-500 p-3 rounded-full text-white">
            <Monitor size={32} />
          </div>
          <h3 className="text-lg font-semibold">Specific Approach</h3>
          <p className="text-gray-700 max-w-xs">
          Every Project has its own USP So We Handle Every Project Differently, Give Specific solutions for your brand and goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Component2;