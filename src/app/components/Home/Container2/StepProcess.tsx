// /* This is second container of the home page below the main container --->2 */
// "use client";
// import SchoolIcon from "@mui/icons-material/School";
// import PeopleIcon from "@mui/icons-material/People";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
// import PersonIcon from "@mui/icons-material/Person";

// const StepProcess = () => {
//   return (
//     <div className=" pb-10 pt-2 lg:pt-2 bg-white">
//       {/* Blue line on the top */}
//       <div className="flex flex-col ">
//         {/* Heading */}
//         <div className="w-full ">
//           <div className="w-full  flex flex-col justify-center text-center ">
//             <p className=" text-3xl font-semibold ">
//               How we will take your business from zero to hero
//               <br />
//             </p>
//             Lorem ipsum dolor sit amet, consectetur{" "}
//           </div>
//         </div>


//         {/* Complex Work */}
//         {/* <div className="p-10 lg:px-32 md:px-20 relative"> */}
//         <div className="  relative mx-10 md:mx-20 lg:mx-32 mt-10">
//           <div className="mx-8">


//             {/* left */}
//           <div className="flex flex-row pt-0  border-dashed border-black border-4 border-t-0 border-r-0 rounded-tl-none rounded-r-none rounded-2xl p-2">
//             {/* Icon */}
//             <div className="bg-gray-900 absolute left-1 flex justify-center items-center rounded-2xl">
//               <SchoolIcon className="text-white text-4xl m-3" />
//             </div>
//             <div className="w-[65vw] ml-7">
//               <p className="text-xl font-semibold ">An Empowering Journey</p>
//               <span className="text-sm">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
//                 repudiandae eius nulla fugit modi perferendis. Laborum
//                 accusantium similique, dolore consequuntur tenetur enim
//                 possimus, doloribus asperiores animi quae error et blanditiis?
//               </span>
//             </div>
//           </div>



//           {/* Right */}
          
//           <div className="border-4 border-black border-dashed rounded-2xl p-2  border-t-0 border-l-0 rounded-bl-none rounded-tr-none flex justify-end flex-row ">
//             {/* Icon */}
//             <div className="bg-gray-900 absolute right-1 mt-10  flex justify-center items-center rounded-2xl">
//               <PeopleIcon className="text-white text-4xl m-3" />
//             </div>
//             <div className="text-right  w-[65vw] mr-7">
//               <p className="text-xl font-semibold mt-10">
                
//                 Strong Sense Of Community
//               </p>
//               <span className="text-sm">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
//                 repudiandae eius nulla fugit modi perferendis. Laborum
//                 accusantium similique, dolore consequuntur tenetur enim
//                 possimus, doloribus asperiores animi quae error et blanditiis?
//               </span>
//             </div>
//           </div>
          

//           {/* left */}
//           <div className="border-dashed  border-black border-4 border-t-0 border-r-0 rounded-tl-none rounded-r-none rounded-2xl p-2">
//             {/* Icon */}
//             <div className="bg-gray-900 mt-10 absolute left-1 flex justify-center items-center rounded-2xl">
//               <LocationOnIcon className="text-white text-4xl m-3" />
//             </div>
//             <div className="w-[65vw] ml-7">
                
//               <p className="text-xl font-semibold mt-10 ">
//                 The World's Finest Flight Training Academy, Worldwide
//               </p>
//               <span className="text-sm">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
//                 repudiandae eius nulla fugit modi perferendis. Laborum
//                 accusantium similique, dolore consequuntur tenetur enim
//                 possimus, doloribus asperiores animi quae error et blanditiis?
//               </span>
//             </div>
//           </div>

//           {/* Right */}
//           <div className="border-4  border-black border-dashed rounded-2xl p-2  border-t-0 border-l-0 rounded-bl-none rounded-tr-none flex justify-end flex-row ">
//             {/* Icon */}
//             <div className="bg-gray-900 mt-10 absolute right-1 flex justify-center items-center rounded-2xl">
//               <HealthAndSafetyIcon className="text-white text-4xl m-3" />
//             </div>
//             <div className="text-right  w-[65vw] mr-7">
//               <p className="text-xl font-semibold mt-10">
//                 Safety Precautions At Pilot Aviation Academy
//               </p>
//               <span className="text-sm">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
//                 repudiandae eius nulla fugit modi perferendis. Laborum
//                 accusantium similique, dolore consequuntur tenetur enim
//                 possimus, doloribus asperiores animi quae error et blanditiis?
//               </span>
//             </div>
//           </div>
//           {/* left */}
//           <div className="border-dashed  border-black border-4 border-t-0 border-r-0 rounded-tl-none rounded-r-none rounded-2xl p-2">
//             {/* Icon */}
//             <div className="bg-gray-900 mt-10 absolute left-1 flex justify-center items-center rounded-2xl">
//               <PersonIcon className="text-white text-4xl m-3" />
//             </div>
//             <div className="w-[65vw] ml-7">
//               <p className="text-xl font-semibold mt-10">
//                 Professional Pilot Training Environment At RMC Aviation Academy
//               </p>
//               <span className="text-sm">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
//                 repudiandae eius nulla fugit modi perferendis. Laborum
//                 accusantium similique, dolore consequuntur tenetur enim
//                 possimus, doloribus asperiores animi quae error et blanditiis?
//               </span>
//             </div>
//           </div>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepProcess;










/* with animation  */
"use client";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PersonIcon from "@mui/icons-material/Person";
import { motion } from "framer-motion";

const StepProcess = () => {
  // Animation variants for staggered appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="pb-10 pt-2 lg:pt-2 bg-[#FBFBFB]">
      {/* Blue line on the top */}
      <div className="flex flex-col">
        {/* Heading */}
        <div className="w-full">
          <div className="w-full flex flex-col justify-center text-center">
            <p className="text-3xl font-semibold">
              How we will take your business from zero to hero
              <br />
            </p>
            We tailor our approach to meet your specific needs and goals.          </div>
        </div>

        {/* Animated Steps */}
        <motion.div
          className="relative mx-10 md:mx-20 lg:mx-32 mt-10"
          variants={containerVariants} // Apply container animation
          initial="hidden" // Start in hidden state
          whileInView="visible" // Animate when in viewport
        >
          <div className="mx-8">
            {/* Left Step */}
            <motion.div
              className="flex flex-row pt-0 border-dashed border-black border-4 border-t-0 border-r-0 rounded-tl-none rounded-r-none rounded-2xl p-2"
              variants={itemVariants} // Apply individual item animation
            >
              {/* Icon */}
              <div className="bg-gray-900 absolute left-1 flex justify-center items-center rounded-2xl">
                <SchoolIcon className="text-white text-4xl m-3" />
              </div>
              <div className="w-[65vw] ml-7">
                <p className="text-xl font-semibold">Know Your Unique Requirements</p>
                <span className="text-md text-gray-700">
                It starts with really understanding your business goals and problems. This creates a custom solution for your organization to match with your vision and objectives.
                </span>
              </div>
            </motion.div>

            {/* Right Step */}
            <motion.div
              className="border-4 border-black border-dashed rounded-2xl p-2 border-t-0 border-l-0 rounded-bl-none rounded-tr-none flex justify-end flex-row"
              variants={itemVariants}
            >
              {/* Icon */}
              <div className="bg-gray-900 absolute right-1 mt-10 flex justify-center items-center rounded-2xl">
                <PeopleIcon className="text-white text-4xl m-3" />
              </div>
              <div className="text-right w-[65vw] mr-7">
                <p className="text-xl font-semibold mt-10">
                Building a Custom Plan
                </p>
                <span className="text-md text-gray-700">
                Our Team Is Highly Focus on a step-by-step plan with the Help of Digital Marketing, Development, and design services. Each Solution is Carefully aligned to Ensure Maximum Impact for your Business.
                </span>
              </div>
            </motion.div>

            {/* Left Step */}
            <motion.div
              className="border-dashed border-black border-4 border-t-0 border-r-0 rounded-tl-none rounded-r-none rounded-2xl p-2"
              variants={itemVariants}
            >
              {/* Icon */}
              <div className="bg-gray-900 mt-10 absolute left-1 flex justify-center items-center rounded-2xl">
                <LocationOnIcon className="text-white text-4xl m-3" />
              </div>
              <div className="w-[65vw] ml-7">
                <p className="text-xl font-semibold mt-10">
                Executing Plan with Accuracy                </p>
                <span className="text-md text-gray-700">
                We Highly Focus on the Quality and Details that we have gathered Then We Execute the plan Well, With the Use of the Latest and Upcoming Tools and Techniques. Our team focuses on every single moment.
                </span>
              </div>
            </motion.div>

            {/* Right Step */}
            <motion.div
              className="border-4 border-black border-dashed rounded-2xl p-2 border-t-0 border-l-0 rounded-bl-none rounded-tr-none flex justify-end flex-row"
              variants={itemVariants}
            >
              {/* Icon */}
              <div className="bg-gray-900 mt-10 absolute right-1 flex justify-center items-center rounded-2xl">
                <HealthAndSafetyIcon className="text-white text-4xl m-3" />
              </div>
              <div className="text-right w-[65vw] mr-7">
                <p className="text-xl font-semibold mt-10">
                Transforming For Your Business Growth
                </p>
                <span className="text-md text-gray-700">
                We Continuously monitor and Adjust the Strategies to Give the Best Results. Our Data-driven Approach Helps us to Optimize Campaigns and Give Maximum ROI and Sustainable Growth.
                </span>
              </div>
            </motion.div>

            {/* Left Step */}
            <motion.div
              className="border-dashed border-black border-4 border-t-0 border-r-0 rounded-tl-none rounded-r-none rounded-2xl p-2"
              variants={itemVariants}
            >
              {/* Icon */}
              <div className="bg-gray-900 mt-10 absolute left-1 flex justify-center items-center rounded-2xl">
                <PersonIcon className="text-white text-4xl m-3" />
              </div>
              <div className="w-[65vw] ml-7">
                <p className="text-xl font-semibold mt-10">
                Building Long-term Success
                </p>
                <span className="text-md text-gray-700">
                We do not stop after the success is achieved. We primarily focus on long-term growth, building lasting relationships, and providing continuous support to keep your business up to date.
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StepProcess;