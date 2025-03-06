'use client'; 
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Image from 'next/image';
import Link from 'next/link';

export default function OffshoreDevelopment() {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: ["Innovative Designs"],
      typeSpeed: 40, 
      backSpeed: 50,
      loop: false,
      showCursor: true,
      cursorChar: "|",
    });

    // Cleanup function
    return () => {
      typed.destroy();
    };
  }, []); // Add empty dependency array to avoid unnecessary re-renders

  const benefits = [
    { number: 1, text: 'Stunning and responsive web designs tailored to your brand' },
    { number: 2, text: 'Intuitive UI/UX designs for an enhanced user experience' },
    { number: 3, text: 'Unique and memorable logo designs that represent your brand identity' },
    { number: 4, text: 'Creative and eye-catching banner designs for effective marketing' },
    { number: 5, text: 'User-centered design approach to maximize engagement and conversions' },
    { number: 6, text: 'Seamless integration of visual elements across all platforms' },
    { number: 7, text: 'Cutting-edge design tools and techniques for top-quality results' },
    { number: 8, text: 'Consistent branding across all visual materials' },
  ];
  
  const leftBenefits = benefits.slice(0, 4);
  const rightBenefits = benefits.slice(4);

  return (
    <section className="flex flex-col items-center text-center px-6 py-12 md:px-16 lg:px-24">
      <h2 className="text-3xl md:text-4xl font-semibold">
        {/* typing effect */}
        Empower Your Business with <span ref={typedTextRef} className="text-sky-500"></span>
      </h2>
      <p className="text-gray-600 mt-4 md:max-w-3xl">
        Get complete <span className="text-sky-500">custom tailored</span> design that brings your ideas to life and help you reach to the customer eyes. We make designs which are eye catching, innovative and always fresh
      </p>
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Benefits Column */}
        <div className="grid grid-cols-1 gap-4 text-left">
          {leftBenefits.map((benefit, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <span className="font-bold text-sky-500">{benefit.number}. </span> {benefit.text}
            </div>
          ))}
        </div>
        {/* Image */}
        <div className="w-full max-w-md hidden md:block">
          <Image 
            src="/services-images/content.jpg" 
            alt="Offshore Development Center" 
            width={500} 
            height={500} 
            layout="responsive"
            className="rounded-lg"
          />
        </div>
        {/* Right Benefits Column */}
        <div className="grid grid-cols-1 gap-4 text-left mt-4 md:mt-0">
          {rightBenefits.map((benefit, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <span className="font-bold text-sky-500">{benefit.number}. </span> {benefit.text}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <p className="text-gray-700">Want to know more about our solutions?</p>

        <Link href="/contact">
        <button className="mt-4 bg-sky-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-sky-600">
          Contact Us Today
        </button>
        </Link>
        
      </div>
    </section>
  );
}