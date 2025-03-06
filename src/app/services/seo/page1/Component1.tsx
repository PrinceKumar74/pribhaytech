// "use client";
// import React from "react";
// import { useEffect, useRef } from "react";
// import Typed from "typed.js";

// const Component1 = () => {
//   const typedTextRef = useRef(null);
//   useEffect(() => {
//     const typed = new Typed(typedTextRef.current, {
//       strings: ["Search Engine Optimization"],
//       typeSpeed: 40,
//       backSpeed: 50,
//       loop: false,
//       showCursor: true,
//       cursorChar: "|",
//     });

//     //cleanup the Typed instance on component unmount
//     return () => {
//       typed.destroy();
//     };
//   });

//   return (
//     <div>

//     </div>
//   );
// };

// export default Component1;

"use client";
import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";

const industries = [
  {
    title: "Discover",
    description:
      "As your search engine optimization company, we take the time to understand your business needs, demands and expectations. During the discovery phase, we set up a meeting with your key company stakeholders and conduct an initial site review. Afterwards, we identify your key performance indicators (KPIs), determine your conversion path and perform extensive keyword research. Doing so allows us to gain in-depth knowledge of your company’s processes, site purpose and goals.",
    image: "/services-images/development.jpg",
    
  },
  {
    title: "Analyze",
    description:
      "The next step is analysis, which covers competitive benchmarking, in-depth site audit, site analytics review and link risk assessment. In this stage, we collect and analyze all your business data to determine the factors that affect your digital presence. We look at your historical traffic patterns, on-site technical issues, competitor’s backlink strategies and link building tactics. We utilize the analytics results in formulating the best approach for your SEO.",
    image: "/services-images/seo.jpg",
   
  },
  {
    title: "Strategize",
    description:
      "In this phase, we start executing the SOMP. We optimize your web pages and blog posts with high-performing keywords, improve your site structure and manage your business listings. Our SEO company also leverages a multiple channel strategy to improve your overall SEO results. We implement social media management campaigns and reach out to third-party websites to increase your online reach.",
    image: "/services-images/content.jpg",
    
  },
  {
    title: "Measure",
    description:
      "From the moment you sign up with our SEO company, we set up a tracking system that allows us to monitor your online progress and understand the impact of your SEO campaign. We monitor and analyze your analytics, keyword rankings and KPI. Our SEO experts also look at your organic traffic, bounce rate, conversion rate, local visibility and click-through rates (CTRs). By monitoring your SEO efforts, we gain actionable insights and improve your optimization strategies.",
    image: "/services-images/content2.jpg",
    
  },
  {
    title: "Report",
    description:
      "Our SEO team schedules regular consultations and monthly reports with your project managers to keep you up-to-date with your campaign progress. During our consultation, we present a comprehensive report that provides an overview of your site performance. This includes your KPI trends, overall traffic and ranking. Every month, we create a new 90-day roadmap, so you know exactly how your campaign is doing and what to expect.",
    image: "/services-images/content3.jpg",
    
  },
  {
    title: "Adjust",
    description:
      "As part of our ongoing SEO efforts, we continuously adjust our optimization strategies based on the latest algorithm updates and market trends. Search engines are dynamically changing and industry demands are continuously evolving. As such, we take a proactive approach to ensure your website ranks high on search results. Trust our SEO team to make the necessary adjustments and keep you informed of your campaign progress at all times.",
    image: "/services-images/design.jpg",
    
  },
];

export default function IndustryExpertise() {
  const typedTextRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: ["SEO Services"],
      typeSpeed: 40,
      backSpeed: 50,
      loop: false,
      showCursor: true,
      cursorChar: "|",
    });

    //cleanup the Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  });
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3">
          Search Engine Optimization –{" "}
          <span className="text-sky-500" ref={typedTextRef}></span>
        </h2>
        <p  className="text-center mb-12">Let’s face it. You know what you need but you just don’t know how to get it. Our SEO specialists hear that over and over from SEO clients who contact Thrive Internet Marketing Agency.</p>

        <div className="space-y-20">
          {industries.map((industry, index) => (
            <section
              key={industry.title}
              className="grid md:grid-cols-2 gap-8 md:gap-12"
            >
              {/* Image container - alternates sides for even items */}
              <div
                className={`relative h-96 ${
                  index % 2 === 0 ? "md:order-2" : ""
                }`}
              >
                <div className="relative h-full w-full rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content container */}
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-6 md:text-lg">{industry.description}</p>
                
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
