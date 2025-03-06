
"use client";
import Image from "next/image";
import React from "react";
import Typed from "typed.js";
import {useEffect, useRef} from "react";

const TechStack = () => {
  // Data array containing information about different technology stacks
  const techData = [
    {
      id: 1, // Unique identifier for each section
      title: "01. Website Development (Angular, React, Vue, HTML5, CSS)", // Title of the section
      description:
        "Sometimes, You Need Simple, Fast-loading, Interactive Websites That Showcase your Business, Then Our Static Websites are Here to Meet Your Expectations, For those who looking for More Flexibility and Designs then Our Dynamic Websites Allow You To Easily Add More Contents and features as your Business Require",
      icons: [
        { name: "Angular", url: "/development/angular.png" },
        { name: "React", url: "/development/reactjs.png" },
        { name: "Vue", url: "/development/vue.png" },
        { name: "HTML5", url: "/development/html.png" },
        { name: "CSS", url: "/development/css.png" },
      ],
    },
    {
      id: 2,
      title: "02. Software Development (Frontend, Backend, Full Stack, DevOps, Mobile, Cloud)",
      description:
        "Our Team Delivers Software Development Services That Need Custom Software To Enhance Their Operations. We Build Everything From Simple Tools to Complex Enterprise Systems, Ensuring That Every Segment of Software is Well Crafted to Handle Real-world Problems. We Focus on Security, Usability, and Scalability, We Provide Software That grow as your Business Does ",
        icons: [
            { name: ".Net", url: "/development/net.png" },
            { name: "PHP", url: "/development/php.png" },
            { name: "Python", url: "/development/image.png" },
            { name: "Nodejs", url: "/development/nodejs.png" },
          ],
    },
    {
      id: 3,
      title: "03. Mobile Development (Android, iOS, React Native, Flutter, Kotlin)",
      description:
        "If you Are Looking for sell anything online, We Expertise in Creating Secure, Attractive E-commerce websites That makes Great experience for Your Customers. Whatever Your Requirements, We are Ready for Creating the Websites That Match Your Needs, So Let’s  Build Something Creative That Match Your Vision And Give Better Results.",
        icons: [
            { name: "Android", url: "/development/android.png" },
            { name: "iOS", url: "/development/ios.png" },
            { name: "React Native", url: "/development/reactNative.png" },
            { name: "Kotlin ", url: "/development/kotlin.png" },
            { name: "Flutter ", url: "/development/flutter.png" },
          ],
    },
    {
      id: 4,
      title: "04. Maintenance and Testing (Git, GitHub,  Jira, Docker)",
      description:
        "We Need to Ensure That Work Doesn’t Face Any Problem After Launch. Our Maintenance and testing Services Ensure That Your Website, App, Or Software Continues to run Smoothly and Securely. We Actively monitor your Systems, Find Potential Issues Before They Become Problems, and Perform Regular Updates to keep Everything Perfectly.",
        icons: [
            { name: "Git", url: "/development/git.png" },
            { name: "GitHub", url: "/development/github.png" },
            { name: "Jira", url: "/development/jira.png" },
            { name: "Docker", url: "/development/docker.png" },
          ],
    },
    {
        id: 5,
        title: "05. API Integrations(GraphQL, Postman, Laravel, Node.js, Django)",
        description:
          "To Ensure Your Digital Platform works smoothly With Other Systems, We are Doing Api Integration Services. If you are looking for Payment gateways, social media platforms, or Third-party Tools, We are here to make sure all your Needs and Services work Together Effortlessly, Giving a Great User Experience and Expanding the Functionality of Your Digital Platforms.",
          icons: [
            { name: "GraphQL", url: "/development/graphql.png" },
            { name: "Postman", url: "/development/postman.png" },
            { name: "Larvael", url: "/development/laravel.png" },
            { name: "Node.js", url: "/development/nodejs.png" },
            { name: "Django", url: "/development/django.png" },
          ],
      },
      {
        id: 6,
        title: "06. E-commerce & CMS (Magento, Shopify, WooCommerce, WordPress, Drupal)",
        description:
          "If you Are Looking for sell anything online, We Expertise in Creating Secure, Attractive E-commerce websites That makes Great experience for Your Customers. Whatever Your Requirements, We are Ready for Creating the Websites That Match Your Needs, So Let’s  Build Something Creative That Match Your Vision And Give Better Results.",
          icons: [
              { name: "Magento", url: "/development/magento.png" },
              { name: "Shopify", url: "/development/shopify.png" },
              { name: "WooCommerce", url: "/development/woo.png" },
              { name: "WordPress ", url: "/development/wordpress.png" },
              { name: "Drupal ", url: "/development/drupal.png" },
            ],
      }
  ];


  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Frontend","Backend","Mobile Apps","Blockchain","Full-Stack Technologies","E-commerce & CMS"],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col items-center py-10 px-6">
      {/* Main heading for the Technology Stack section */}
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Covering A Wide Tech <span ref={typedRef} className="text-sky-500"></span>
      </h2>
      {/* Subheading providing additional context */}
      <p className="max-w-6xl text-center text-gray-600 mt-2">
      At Pribhaytech, We have Expertise in Creating Quality, Custom Different Development Options That are Create to Grow With Your Business. If You Are Looking For a Brand New Website, A Mobile App, or Different Software Systems, Then We Are Here For You, Our Well Experienced Team is Here to Bring Your Vision to Business.
      </p>

      {/* Container for displaying all technology sections */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Loop through each technology stack and render its details */}
        {techData.map((tech) => (
          <div
            key={tech.id} // Unique key for React to identify each section
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:scale-105 transition-transform duration-300"
          >
            {/* Section title */}
            <h3 className="text-xl text-gray-600 font-semibold mb-3">{tech.title}</h3>
            {/* Section description */}
            <p className="text-gray-700 mb-4">{tech.description}</p>
            {/* Icons representing technologies */}
            <div className="flex space-x-5 mt-4">
              {tech.icons.map((icon, index) => (
                <Image src={icon.url} alt={icon.name} key={index} width={40} height={40} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;