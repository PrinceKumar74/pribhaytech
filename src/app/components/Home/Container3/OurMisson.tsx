/* Without Animation: This is the container 3, below the step process  container */
// "use client"
// import Image from "next/image";
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
// import CloudIcon from '@mui/icons-material/Cloud';
// import SchoolIcon from '@mui/icons-material/School';
// import ShieldIcon from '@mui/icons-material/Shield';
// import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';



// const missions = [
//   {
//     icon: <EmojiEventsIcon className="text-white text-4xl" />,
//     description: "Become a leading aviation academy for flight training programs in India and South Africa."
//   },
//   {
//     icon: <CloudIcon className="text-white text-4xl" />,
//     description: "Transform dreams of becoming pilots into reality while promoting a learning environment where every student feels motivated and valued."
//   },
//   {
//     icon: <SchoolIcon className="text-white text-4xl" />,
//     description: "Continue to lead in pilot training education and in training aviation professionals for the global aviation industry."
//   },
//   {
//     icon: <ShieldIcon className="text-white text-4xl" />,
//     description: "Emphasize achieving aviation safety and becoming a benchmark for innovative flight training instruction methods."
//   },
//   {
//     icon: <FlightTakeoffIcon className="text-white text-4xl" />,
//     description: "Help students become commercial pilots, enabling them to enjoy a rewarding career traveling the world within a professional aviation environment."
//   },
// ];

// const OurMission = () => {
//   return (
//     <div className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-[90vw] mx-auto">
//         <div className="text-center mb-8 md:mb-12">
//           <h1 className="text-3xl md:text-4xl font-bold mb-2">
//             Our Mission
//           </h1>
//           <p className="text-gray-500 text-lg md:text-xl mx-auto max-w-2xl">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quo necessitatibus, omnis quia quis nihil.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Image Container */}
//           <div className="relative h-[500px] md:h-[600px]">
//             <div className="absolute inset-0">
//               <div className="relative h-full w-full ">
//                 {/* First Image */}
//                 <div className="absolute left-0 top-0 w-full h-[50%] md:h-[60%] sm:h-[60%]
//                   md:w-[85%] md:left-[0%] lg:w-[80%] lg:left-0 ">
//                   <Image
//                     src="/images/ourmission1.png"
//                     alt="Mission 1"
//                     fill
//                     className="rounded-2xl object-cover shadow-lg -scale-x-100"
//                   />
//                 </div>
//                 {/* Second Image */}
//                 <div className="absolute left-0 bottom-0 w-full h-[45%] lg:h-[60%] md:h-[60%] sm:h-[60%]
//                   md:w-[80%] md:left-[20%] lg:w-[85%] lg:left-[17%]">
//                   <Image
//                     src="/images/ourmission2.png"
//                     alt="Mission 2"
//                     fill
//                     className="rounded-2xl object-cover shadow-lg"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Mission Items */}
//           <div className="flex flex-col gap-4 md:gap-5">
//             {missions.map((mission, index) => (
//               <div 
//                 key={index}
//                 className="bg-sky-100 p-4 md:p-5 rounded-xl shadow-sm lg:pb-10 
//                   hover:shadow-md transition-shadow"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="bg-sky-500 p-2 rounded-xl min-w-[44px] 
//                     flex-shrink-0">
//                     {mission.icon}
//                   </div>
//                   <p className="text-gray-800 text-base md:text-xl">
//                     {mission.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurMission;





























/* With Animation  */
/* This is the container 3, below the step process container */
"use client";
import Image from "next/image";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CloudIcon from "@mui/icons-material/Cloud";
import SchoolIcon from "@mui/icons-material/School";
import ShieldIcon from "@mui/icons-material/Shield";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { motion } from "framer-motion";

const missions = [
  {
    icon: <EmojiEventsIcon className="text-white text-4xl" />,
    description:
      "We aim to achieve a mission that includes solving problems with unmatched innovation, pinpointing the customer's need, and guaranteeing high-quality results.",
  },
  {
    icon: <CloudIcon className="text-white text-4xl" />,
    description:
      "We are dedicated to delivering the highest value in services and products to help make life easier and more efficient for our clients.",
  },
  {
    icon: <SchoolIcon className="text-white text-4xl" />,
    description:
      "We are certain that trust is required for any relationship to prosper. We work to earn our clients' trust through transparency, integrity, and superb customer service.",
  },
  {
    icon: <ShieldIcon className="text-white text-4xl" />,
    description:
      "We constantly strive to invent new ways to adapt to this fast-paced world in order for the business to remain impactful and effectiveness through the in of creativity and technology.",
  },
  {
    icon: <FlightTakeoffIcon className="text-white text-4xl" />,
    description:
      "We believe that intervening in a company's operations goes beyond business. By providing the opportunity to support and make a positive difference in people's lives through services.",
  },
];

// Animation variants
const containerVariants = {
  offscreen: {
    opacity: 0,
    y: 30// Start slightly below the screen
  },
  onscreen: {
    opacity: 1,
    y: 0, // Move to its original position
    transition: {
      staggerChildren: 0.2, // Stagger child animations
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const itemVariants = {
  offscreen: {
    opacity: 0,
    x: -50, // Start slightly to the left
  },
  onscreen: {
    opacity: 1,
    x: 0, // Move to its original position
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.6,
    },
  },
};

const imageVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.8, // Start smaller
  },
  onscreen: {
    opacity: 1,
    scale: 1, // Scale up to normal size
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.6,
    },
  },
};

const OurMission = () => {
  return (
    <div className="bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90vw] mx-auto">
        {/* Heading and Description */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.3 }} // Trigger animation when 50% visible
          variants={containerVariants}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            {/* YOUR MISSION: OUR SOLUTION */}
            OUR MISSION
          </motion.h1>
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.3 }} // Trigger animation when 50% visible
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Image Container */}
          <motion.div
            variants={imageVariants}
            className="relative h-[500px] md:h-[600px]"
          >
            <div className="absolute inset-0">
              <div className="relative h-full w-full">
                {/* First Image */}
                <motion.div
                  variants={imageVariants}
                  viewport={{ once: false, amount: 0.3 }} // Trigger animation when 50% visible
                  className="absolute left-0 top-0 w-full h-[50%] md:h-[60%] sm:h-[60%] md:w-[85%] md:left-[0%] lg:w-[80%] lg:left-0"
                >
                  <Image
                    src="/images/ourmission1.jpg"
                    alt="Mission 1"
                    fill
                    className="rounded-2xl object-cover shadow-lg -scale-x-100"
                  />
                </motion.div>
                {/* Second Image */}
                <motion.div
                  variants={imageVariants}
                  viewport={{ once: false, amount: 0.3 }} // Trigger animation when 50% visible
                  className="absolute left-0 bottom-0 w-full h-[45%] lg:h-[60%] md:h-[60%] sm:h-[60%] md:w-[80%] md:left-[20%] lg:w-[85%] lg:left-[17%]"
                >
                  <Image
                    src="/images/ourmission2.jpg"
                    alt="Mission 2"
                    fill
                    className="rounded-2xl object-cover shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Mission Items */}
          <motion.div
            variants={containerVariants}
            viewport={{ once: false, amount: 0.3 }} // Trigger animation when 50% visible
            className="flex flex-col gap-4 md:gap-5"
          >
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-sky-100 p-4 md:p-5 rounded-xl shadow-sm lg:pb-10 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-sky-500 p-2 rounded-xl min-w-[44px] flex-shrink-0">
                    {mission.icon}
                  </div>
                  <p className="text-gray-800 text-base md:text-xl">
                    {mission.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurMission;