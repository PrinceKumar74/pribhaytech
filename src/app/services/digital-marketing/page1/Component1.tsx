"use client";
import { useEffect,useRef } from "react";
import React from "react";
import { FaCheck, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import Typed from "typed.js";

const Component1 = () => {

  /* Typing Animation */
  const typedRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Digital Marketing Services"],
      typeSpeed: 40,
      backSpeed: 50,
      loop: false,
    });
    return () => {
      typed.destroy();
    };
  })
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center p-4">
      {/* Typing effect */}
      <h1 className="text-3xl md:text-4xl">Our <span ref={typedRef} className="text-sky-500 font-bold "></span></h1>
      <p className="max-w-7xl text-gray-600 md:text-lg lg:text-xl mt-4 mb-10 text-center">
      At PribhayTech, We are Providing Personalized Digital Marketing Solutions to Help Your Business Grow Online. From Different Digital marketing Sections, We Ensure to Meet With your Expectations.
      </p>

      <div className="max-w-7xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Text Section */}
        <div className="p-8 md:w-2/3">
          <h2 className="text-sky-500 font-bold sm:font-semibold text-lg uppercase mb-6">
            About Us
          </h2>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 ">
          Creative Solutions  For Your Business Growth
          </h1>
          {/* Bold line */}
          <div className="flex flex-row gap-2 mb-4">
            <div className="h-3 w-32 rounded-2xl bg-sky-500 my-3"></div>
            <div className="h-3 w-4 rounded-2xl bg-sky-500 my-3"></div>
          </div>
          <p className="text-gray-600 mb-6  md:text-lg lg:text-xl">
          We Specialize In Delivering High Quality, Scalable Digital Marketing, web Development and IT solutions. Our Innovative Strategy which Helps Your Business to Grow On Digital Platform.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 font-semibold text-gray-600">
            <div className="flex items-center ">
              <FaCheck className="text-sky-500 mr-2" />
              <span>24/7 support</span>
            </div>
            <div className="flex items-center ">
              <FaCheck className="text-sky-500 mr-2" />
              <span>Cutting edge solution</span>
            </div>
            <div className="flex items-center ">
              <FaCheck className="text-sky-500 mr-2" />
              <span>Specific Approach</span>
            </div>
            <div className="flex items-center ">
              <FaCheck className="text-sky-500 mr-2" />
              <span>Results the speak</span>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="bg-sky-500 p-3 rounded-full text-white mr-4">
              <FaPhoneAlt />
            </div>
            <div>
              <p className="text-gray-600 font-semibold">
                Call to ask any question
              </p>
              <p className="text-sky-500 font-bold">+91 9990597240</p>
            </div>
          </div>
          <button className="bg-sky-500 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition duration-300">
            Request A Quote
          </button>
        </div>
        {/* Image Section */}
        <div className="lg:w-[4ovw] md:w-1/2 w-full h-72 md:h-auto bg-red-200 relative overflow-hidden">
          {/* Image will be displayed here */}
          <Image
            src="/services-images/ads.jpg"
            alt="Digital Marketing"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Component1;
