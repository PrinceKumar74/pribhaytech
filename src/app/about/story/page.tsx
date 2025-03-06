// "use client";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// const AboutStory = () => {
//   const testimonials = [
//     {
//       id: 1,
//       heading: "This is the Heading",
//       text: "The Aircraft Maintenance Technician course turned my fascination with planes into a career. With hands-on training and guidance from industry professionals, I learned everything I needed. I now work for a major airline, ensuring aircraft safety every day. This program was the perfect launchpad for my career!",
//     },
//     {
//       id: 2,
//       heading: "This is the Heading",
//       text: "Joining the Aviation Management program was transformative! The supportive instructors helped me gain the skills needed to obtain my commercial pilot’s license. Now, I’m flying as a first officer for a regional airline, and it’s a dream come true! I highly recommend this course to anyone passionate about aviation.",
//     },
//     {
//       id: 3,
//       heading: "This is the Heading",
//       text: "My aviation course prepared me to become an air traffic controller. The training covered airspace management and included simulations that mirrored real-life scenarios. I passed my certification and secured a position at my local airport! This program was crucial for my success in this exciting field.",
//     },
//     {
//       id: 4,
//       heading: "This is the Heading",
//       text: "The Aircraft Maintenance Technician course turned my fascination with planes into a career. With hands-on training and guidance from industry professionals, I learned everything I needed. I now work for a major airline, ensuring aircraft safety every day. This program was the perfect launchpad for my career!",
//     },
//     {
//       id: 5,
//       heading: "This is the Heading",
//       text: "The Aircraft Maintenance Technician course turned my fascination with planes into a career. With hands-on training and guidance from industry professionals, I learned everything I needed. I now work for a major airline, ensuring aircraft safety every day. This program was the perfect launchpad for my career!",
//     },
//     {
//       id: 6,
//       heading: "This is the Heading",
//       text: "The Aircraft Maintenance Technician course turned my fascination with planes into a career. With hands-on training and guidance from industry professionals, I learned everything I needed. I now work for a major airline, ensuring aircraft safety every day. This program was the perfect launchpad for my career!",
//     },
//     // Add more testimonials as needed
//   ];

//   return (
//     <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
//       <div className="mx-auto max-w-7xl">
//         <h2 className="text-3xl font-bold text-gray-900 text-center">
//           About Us
//         </h2>
//         <div className="flex justify-center">
//           <p className="mt-4 text-lg sm:w-[70%] text-gray-600 text-center">
//             Discover the inspiring success stories of our graduates who have
//             turned their dreams of flying into reality, achieving remarkable
//             careers as professional pilots worldwide.
//           </p>
//         </div>
//         <div className="mt-10 grid gap-4 lg:gap-12 lg:grid-cols-[1fr_1.15fr_1fr] md:mb-20">
//           {testimonials.map((testimonial, index) => {
//             const isMiddle = index % 3 === 1; // Determine if it's the middle card in a row

//             return isMiddle ? (
//               <div key={testimonial.id} className="relative lg:py-24">
//                 <div className="bg-white p-8 rounded-lg shadow-lg lg:absolute lg:inset-0 lg:scale-110 lg:z-10 h-full">
//                   <div className="flex">
//                     <CheckCircleIcon className="text-sky-400 mr-2" />
//                     <p className="text-gray  font-semibold text-lg lg:mb-2">
//                       {testimonial.heading}
//                     </p>
//                   </div>

//                   <p className="text-gray-700 text-lg lg:mb-8">
//                     {testimonial.text}
//                   </p>
//                 </div>
//               </div>
//             ) : (
//               <div
//                 key={testimonial.id}
//                 className="bg-white p-6 rounded-lg shadow-lg h-full"
//               >
//                 <div className="flex">
//                   <CheckCircleIcon className="text-sky-400 mr-2" />
//                   <p className="text-gray  font-semibold text-lg lg:mb-2">
//                     {testimonial.heading}
//                   </p>
//                 </div>

//                 <p className="text-gray-700 text-lg">{testimonial.text}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutStory;




















/* with animation */
"use client";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";

const AboutStory = () => {
  const testimonials = [
    {
      id: 1,
      heading: "Website Development That Drives Results",
      text: "Our expert web development team crafts visually stunning and high-performing websites tailored to your brand. From responsive design to seamless user experience, we ensure your online presence stands out and converts visitors into customers."
    },
    {
      id: 2,
      heading: "Content Writing That Engages & Converts",
      text: "Words have power! Our professional content writers create compelling, SEO-friendly content that captivates your audience, boosts engagement, and enhances your brand’s online authority."
    },
    {
      id: 3,
      heading: "SEO Strategies That Boost Your Rankings",
      text: "We optimize your website to rank higher on search engines and drive organic traffic. With our cutting-edge SEO strategies, keyword research, and link-building techniques, we help you achieve long-term online success."
    },
    {
      id: 4,
      heading: "Digital Marketing to Expand Your Reach",
      text: "Our digital marketing experts create data-driven campaigns to increase your brand visibility and customer engagement. From social media marketing to email campaigns, we help you connect with the right audience."
    },
    {
      id: 5,
      heading: "PPC & Ads Campaigns for Instant Growth",
      text: "Maximize your ROI with our targeted pay-per-click (PPC) advertising and strategic ad campaigns. We help businesses generate leads, increase conversions, and scale efficiently through optimized ad placements."
    },
    {
      id: 6,
      heading: "Branding That Makes You Unforgettable",
      text: "Your brand identity matters! We craft unique and impactful branding strategies that define your business, build trust, and leave a lasting impression on your audience."
    },
    {
      id: 7,
      heading: "Social Media Management for Engagement",
      text: "We manage your social media presence with engaging content, strategic posting, and audience interaction, ensuring your brand stays relevant and top-of-mind in the digital world."
    },
    {
      id: 8,
      heading: "Graphic Design That Speaks Volumes",
      text: "Our creative designers bring your vision to life with stunning visuals, logos, and marketing materials that captivate your audience and elevate your brand image."
    },
    {
      id: 9,
      heading: "E-Commerce Solutions That Drive Sales",
      text: "We build high-performing e-commerce websites optimized for conversions. From seamless product listings to secure payment integrations, we help you create a smooth online shopping experience."
    }
  ];
  
  // Animation variants
  const cardVariants = {
    offscreen: {
      x: -100, // Start off-screen to the left
      opacity: 0, // Fully transparent
    },
    onscreen: {
      x: 0, // Move to its original position
      opacity: 1, // Fully visible
      transition: {
        type: "spring", // Smooth spring animation
        bounce: 0.6, // Bounce effect
        duration: 1, // Duration of the animation
      },
    },
  };

  return (
    <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl font-bold text-gray-900 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About Us
        </motion.h2>

        {/* Animated Description */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="mt-4 text-lg sm:w-[70%] text-gray-600 text-center">
          We are a creative web development agency dedicated to crafting stunning, user-friendly websites that drive results and elevate your brand.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mt-10 grid gap-4 lg:gap-12 lg:grid-cols-[1fr_1.15fr_1fr] md:mb-20">
          {testimonials.map((testimonial, index) => {
            const isMiddle = index % 3 === 1; // Determine if it's the middle card in a row
            return isMiddle ? (
              <motion.div
                key={testimonial.id}
                className="relative lg:py-24"
                variants={cardVariants} // Use the defined variants
                initial="offscreen" // Initial state
                whileInView="onscreen" // Trigger animation when in view
                viewport={{ once: false, amount: 0.5 }} // Replay every time, trigger when 50% visible
              >
                <div className="bg-white p-8 rounded-lg shadow-lg lg:absolute lg:inset-0 lg:scale-110 lg:z-10 h-full">
                  <div className="flex">
                    <CheckCircleIcon className="text-sky-400 mr-2" />
                    <p className="text-gray font-semibold text-lg lg:mb-2">
                      {testimonial.heading}
                    </p>
                  </div>
                  <p className="text-gray-700 text-lg lg:mb-8">
                    {testimonial.text}
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-lg h-full"
                variants={cardVariants} // Use the same variants
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.5 }}
              >
                <div className="flex">
                  <CheckCircleIcon className="text-sky-400 mr-2" />
                  <p className="text-gray font-semibold text-lg lg:mb-2">
                    {testimonial.heading}
                  </p>
                </div>
                <p className="text-gray-700 text-lg">{testimonial.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutStory;