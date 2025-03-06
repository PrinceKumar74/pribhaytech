// export default function ServicesSection() {
//     const services = [
//       {
//         title: "Cyber Security",
//         description: "Cybersecurity refers to the practice of protecting computer systems, networks, and digital data from theft, damage, or unauthorized access."
//       },
//       {
//         title: "Data Analytics",
//         description: "Data analytics is the process of examining, cleaning, transforming, and interpreting data to discover meaningful insights, patterns, and trends."
//       },
//       {
//         title: "Web Development",
//         description: "Web development is the process of creating and maintaining websites or web applications for the Internet. It involves a combination of skills and technologies to design, build, and manage websites."
//       },
//       {
//         title: "App Development",
//         description: "App development refers to the process of creating software applications, often designed to run on mobile devices like smartphones and tablets, but it can also refer to applications for desktop computers or web-based platforms."
//       },
//       {
//         title: "SEO Optimization",
//         description: "SEO (Search Engine Optimization) is the process of improving the visibility and ranking of a website or web page in search engine results. This is done to increase organic (non-paid) traffic to a website."
//       }
//     ];
  
//     return (
//       <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           {/* Header Section */}
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4 md:text-4xl">
//               OUR SERVICES
//             </h2>
//             <p className="text-xl text-gray-600 mb-8 md:text-2xl md:max-w-2xl md:mx-auto">
//               Custom IT Solutions for Your Successful Business
//             </p>
//           </div>
  
//           {/* Services Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//             {services.map((service, index) => (
//               <div 
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//               >
//                 <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {service.description}
//                 </p>
//               </div>
//             ))}
//           </div>
  
//           {/* Call to Action Section */}
//           <div className="text-center bg-blue-50 py-12 px-4 rounded-lg">
//             <h3 className="text-2xl font-bold text-gray-900 mb-4">
//               Call Us For Quote
//             </h3>
//             <p className="text-gray-600 mb-6 max-w-xl mx-auto">
//               I'm just a text-based AI and I'm unable to make phone calls. However, if you're looking to request a quote from a specific business or service, you should find their contact information on their website or in any materials they've provided.
//             </p>
//             <div className="flex flex-col items-center space-y-4">
//               <a 
//                 href="tel:+911234567890"
//                 className="text-blue-600 text-xl font-semibold hover:text-blue-800 transition-colors"
//               >
//                 +91 1234567890
//               </a>
//               <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium">
//                 PRICING PLANS
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }













import React from "react";
import { Shield, BarChart, Globe, Smartphone, Search } from "lucide-react";

const services = [
  {
    title: "Know Your Unique Requirements",
    description:
      "It starts with really understanding your business goals and problems. This creates a custom solution for your organization to match with your vision and objectives.",
    icon: <Shield size={32} className="text-white" />,
  },
  {
    title: "Building a Custom Plan",
    description:
      "Our Team Is Highly Focus on a step-by-step plan with the Help of Digital Marketing, Development, and design services. Each Solution is Carefully aligned to Ensure Maximum Impact for your Business.",
    icon: <BarChart size={32} className="text-white" />,
  },
  {
    title: "Executing Plan with Accuracy",
    description:
      "We Highly Focus on the Quality and Details that we have gathered Then We Execute the plan Well, With the Use of the Latest and Upcoming Tools and Techniques. Our team focuses on every single moment. ",
    icon: <Globe size={32} className="text-white" />,
  },
  {
    title: "Transforming For Your Business Growth",
    description:
      "We Continuously monitor and Adjust the Strategies to Give the Best Results. Our Data-driven Approach Helps us to Optimize Campaigns and Give Maximum ROI and Sustainable Growth.",
    icon: <Smartphone size={32} className="text-white" />,
  },
  {
    title: "Building Long-term Success",
    description:
      "We do not stop after the success is achieved. We primarily focus on long-term growth, building lasting relationships, and providing continuous support to keep your business up to date.",
    icon: <Search size={32} className="text-white" />,
  },
];

const contactNumber:string = "+91 9990597240"
const callUsForQuote:string = "SEO (Search Engine Optimization) is the process of improving the visibility and ranking of a website or web page in search engine results. SEO (Search Engine Optimization) is the process of improving the visibility and ranking of a website or web page in search engine results"

const ITServicesGrid = () => {
  return (
    <section className="py-12 flex flex-col items-center  bg-white text-center ">
      <h2 className="text-sky-500 text-sm font-semibold uppercase">Our Marketing</h2>
      <h1 className="max-w-2xl text-3xl md:text-4xl font-bold text-gray-900 mt-2">
        Custom IT Solutions for Your Successful Business
      </h1>

       {/* Bold line */}
       <div className="flex flex-row gap-2 mb-4">
            <div className="h-3 w-32 rounded-2xl bg-sky-500 my-3"></div>
            <div className="h-3 w-4 rounded-2xl bg-sky-500 my-3"></div>
          </div>


      {/* Services Grid  */}
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-sky-200 p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="w-16 h-16 bg-sky-500 flex items-center justify-center transform rotate-45 my-8 mb-10">
              <div className="transform -rotate-45">{service.icon}</div>
            </div>
            <h3 className="text-lg font-semibold  text-gray-900">{service.title}</h3>
            <p className="text-gray-700 mt-2 mb-5">{service.description}</p>
          </div>
          
        ))}
        <div className="bg-sky-500  rounded-lg py-6 shadow-md flex flex-col items-center text-center text-white hover:scale-105 transition-transform duration-300 ">
          <p className="font-bold md:mt-6 md:font-semibold text-2xl mb-5 px-6">Call Us For Quote</p>
          <p className=" text-sm text-left mb-7 lg:mb-9 px-6">{callUsForQuote}</p>
          <p className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">{contactNumber}</p>
          
        </div>
      </div>
    </section>
  );
};

export default ITServicesGrid;
