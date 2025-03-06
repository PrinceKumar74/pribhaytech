"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Component1() {
  // Create a reference for the element where the typing effect will occur
  const typedTextRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js when the component mounts
    const typed = new Typed(typedTextRef.current, {
      strings: ["Ads Campaign Services"], // Words to type
      typeSpeed: 30, // Speed of typing
      backSpeed: 30, // Speed of deleting
      loop: false, // Loop the animation
      showCursor: true, // Show the cursor
      cursorChar: "|", // Cursor character
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
      title: "Google Ads",
      content:
        "Google Ads is perhaps the most powerful tool for online marketing. Each day, billions of people search on Google, making it one of the best platforms for businesses to connect with customers at the right time. What we do for our clients - Creating ads is just one step in our Google Ads Services, which include highly effective targeting and cost-efficient campaigns that enhance website traffic. ",
    },
    {
      number: "02",
      title: "Instagram Ads",
      content:
        "Instagram Ads strive to connect with an audience through visuals, and is certainly ideal for a host of brands. Instagram stands on top of the list when it comes to targeting the younger audience as it has over a billion active users who primarily source information by looking at visuals. With varying options available, such as photo video or carousel ads, attention grabbing Instagram campaigns are not far off from reality.",
    },
    {
      number: "03",
      title: "Facebook Ads",
      content:
        "Utilized by millions, Facebook ads are one of the best ways to reach different types of audience. If your goals include raising brand awareness, driving traffic to your website, or even generating leads, facebook ads can assist you with any of these goals. We specializes in running customized campaigns that use Facebook's targeting features so that you reach the specific audience you want at the right time. ",
    },
    {
      number: "04",
      title: "Social Media Optimization Services",
      content:
        "With Pribhaytech, your brand is guaranteed to get boosted brand recognition and awareness from social media platforms. Pribhaytech guarantees maintenance of professionalism in social media profiles and marketing through expertly cropping and tailoring engaging content for targeting audiences. Boost organic reach on Facebook Instagram, Linkedin and Twitter via specialized techniques.",
    },
    {
      number: "05",
      title: "Driving Relevant Traffic by Ad Campaigns",
      content:
        "Together, we will come up with the right  ad strategy such as image or video ads or even carousel ads depending on your objectives. Optimizing and tracking performance will make sure that your  ads are engaging your target audience in the best way possible to lead to conversions.",
    },
    {
      number: "06",
      title: "Why Choose Us?",
      content:
        "In the Pribhaytch we not just run ads - we make extensive advertising strategies that help you add Run more meaningful results with your ideal customers. Whether you want to run Google advertising, Instagram ad, or Facebook advertising, we tailor each campaign for your unique business needs and goals. ",
    },
  ];

  return (
    <div className="bg-[#0d144b] text-white py-16 px-6 md:px-20">
      {/* Main Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Resolving Business Challenges with{" "}
          <span ref={typedTextRef} className="text-sky-500"></span>
        </h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto text-white">
        Our skilled team will follow your campaigns carefully, adjust strategies Use date -driven insights to continue adaptation of performance and results
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
                {item.title}{/* heading */}
              </h3>
              <p className="mt-2 text-white text-lg">{item.content}</p>{/* paragraph */}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center text-white text-xl mt-16">

      <p>Do you have a custom project in mind ?</p>
      <Link href="/contact"><button className="bg-sky-500 text-white px-8 py-3 rounded-md hover:bg-sky-600 transition-colors font-medium mt-5">Let&apos;s Help you</button></Link>
      
      </div>
    </div>
  );
}
