"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
export default function Component1() {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: ["Content Writing Services"],
      typeSpeed: 30,
      backSpeed: 30,
      loop: false,
      showCursor: true,
      cursorChar: "|",
    });

    // Clean up the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  });

  // Array of business challenges
  const challenges = [
    {
      number: "01",
      title: "Content Writing",
      content:
        "Great materials are driven by research and observations that create  trust in readers. Our content writing services are focused in making valuable and attractive materials that are not only connected with your audience but you also increase your online presence. Do you have a well-dressed blog post, notice of information, articles  or products that change, our authors are specialized in making these kind of contents .",
    },
    {
      number: "02",
      title: "Copywriting",
      content:
        "When you are inspired to work for your observers, copywriting is the key. Writing a catchy title, persuasion advertisement copy, or a high-differential landing page, our experts know copywriting to sell sounds who sold them. We focus on bravery and vowels, use the art of compose which is an attractive call for the action that it is running and selling.  ",
    },
    {
      number: "03",
      title: "Script Writing",
      content:
        "Script writing became an important part of this era, as it was during this  time  that video content began to dominate. Weather it’s for an interpreter video, a corporate advertisement and or for the YouTube Series, our screen writers are here to bring your ideas to life . Our script-writers create the narratives to work for your brand and make possible that your message makes a gesture for you.",
    },
    {
      number: "04",
      title: "Ghostwriting",
      content:
        "Sometimes, you have thoughts, but need help to bring your ideas to life. Ghostwriting is the a solution. Whether it is for the book, blog, article, or speech, our ghostwriting services allow you to  share your thoughts with specialists who will handle all the writing part. We work behind the curtains, ensuring  that your voice is heard in the every word we write.",
    },
    {
      number: "05",
      title: "Seo-Appropriate and Reader-Friendly.",
      content:
        "We understand the importance of striking the balance of information and attractiveness. The content that reaches your viewer. Our content writers stay up to date  with newest instincts . We use proper keywords that makes sure that your materials are properly categorized in searches for devices in a conversational, easy tone.",
    },
    {
      number: "06",
      title: "Why Choose Us?",
      content:
        "In the Pribhaytech, we understand that every business requires unique materials. That’s why our writing services are designed according to your specific goals. We work closely with  you to understand your audience, your brand identity and your vision.  We are here to make sure that your message is delivered in the most elegant and effective way possible",
    },
  ];

  return (
    <div className=" text-white py-16 px-6 md:px-20 relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/services-images/content2.jpg"
          layout="fill"
          objectFit="cover"
          alt="content-writing"
          className="w-full h-auto"
        />
        {/* Colored Overlay */}
        <div
          className="absolute inset-0 bg-blue-900 opacity-90"
          style={{ mixBlendMode: "multiply" }}
        ></div>
      </div>
      {/* Main Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Resolving Business Challenges with{" "}
          <span ref={typedTextRef} className="text-yellow-500"></span>
        </h2>
        <p className="mt-4 text-lg max-w-6xl mx-auto text-white">
        Whether You want to enlarge your observers, to enhance your online presence, or to create materials. Our writing services has been made for your help to achieve your goals. On Pribhaytech, We give you a detailed series of writing services for your  business from the blog post to the script, our writers are experienced and wrote the content who makes people addicted to reading.
        </p>
      </div>

      {/* Challenges Grid */}
      <div className="grid md:grid-cols-2 gap-10 mt-12">
        {challenges.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            {/* Number Circle */}
            <div className="w-20  p-3 flex items-center justify-center border-4 border-black border-1 rounded-full text-xl font-bold text-black bg-white">
              <div className="mx-1">{item.number}</div>
            </div>
            {/* Content */}
            <div>
              <h3 className="text-xl font-semibold text-yellow-500">
                {item.title}
                {/* heading */}
              </h3>
              <p className="mt-2 text-gray-100 text-lg">{item.content}</p>
              {/* paragraph */}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center text-white text-xl mt-16">
        <p>Do you have a custom project in mind ?</p>
        <Link href="/contact">
          <button className="bg-sky-500 text-white px-8 py-3 rounded-md hover:bg-sky-600 transition-colors font-medium mt-5">
            Let&apos;s Help you
          </button>
        </Link>
      </div>
    </div>
  );
}
