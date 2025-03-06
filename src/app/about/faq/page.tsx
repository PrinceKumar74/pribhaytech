/* without animation */
// "use client"
// import React from 'react';
// import Accordion, { AccordionSlots, accordionClasses } from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails, { accordionDetailsClasses } from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Fade from '@mui/material/Fade';

// const FrequentlyAskedQuestions = () => {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpansion = () => {
//     setExpanded((prevExpanded) => !prevExpanded);
//   };

//   const faqItems = [
//     {
//       id: 1,
//       title: "Custom transition using Fade",
//       content: "alok ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
//       useFade: true
//     },
//     {
//       id: 2,
//       title: "Default transition using Collapse",
//       content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
//     },
//     {
//       id: 3,
//       title: "Another common question",
//       content: "Example content for frequently asked question."
//     },
//     {
//       id: 4,
//       title: "General inquiry",
//       content: "More example text for demonstration purposes."
//     },
//     {
//       id: 5,
//       title: "Final question",
//       content: "Final example content to complete the FAQ section."
//     }
//   ];

//   return (
//     <div className="flex justify-center items-center py-10">
//       <div className="flex flex-col md:flex-row mx-10 md:mx-24 lg:mx-32">
//         <div className="flex flex-col md:w-[20vw] lg:w-[15vw] md:mr-5">
//           <p className='text-xl font-medium mb-2'>Most Questions</p>
//           <p className='text-3xl md:text-[3vw] lg:text-[3vw] font-bold md:leading-tight'>Frequently Asked Questions</p>
          
//         </div>
        
//         <div className="w-full lg:flex-1">
//           {faqItems.map((item, index) => (
//             <Accordion
//               key={item.id}
//               expanded={index === 0 ? expanded : undefined}
//               onChange={index === 0 ? handleExpansion : undefined}
//               slots={item.useFade ? { transition: Fade as AccordionSlots['transition'] } : undefined}
//               slotProps={item.useFade ? { transition: { timeout: 400 } } : undefined}
//               sx={[
//                 item.useFade && expanded ? {
//                   [`& .${accordionClasses.region}`]: { height: 'auto' },
//                   [`& .${accordionDetailsClasses.root}`]: { display: 'block' },
//                 } : item.useFade ? {
//                   [`& .${accordionClasses.region}`]: { height: 0 },
//                   [`& .${accordionDetailsClasses.root}`]: { display: 'none' },
//                 } : {}
//               ]}
//               className="mb-6 last:mb-0" // Added spacing between accordions
//             >
//               <AccordionSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls={`panel${item.id}-content`}
//                 id={`panel${item.id}-header`}
//               >
//                 <Typography component="span">{item.title}</Typography>
//               </AccordionSummary>
//               <AccordionDetails>
//                 <Typography>{item.content}</Typography>
//               </AccordionDetails>
//             </Accordion>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FrequentlyAskedQuestions;














/* With Animation  */
"use client";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

const FrequentlyAskedQuestions = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const faqItems = [
    {
      id: 1,
      title: "What Services Do You Offer?",
      content:
        "We Offer a Wide Range of Services, Like Digital Marketing, Website Development, SEO, designs, ad campaigns, and Software services.",
    },
    {
      id: 2,
      title: "How Can Your Services Help My Business?",
      content:
        "Our Services Help you to Establish of Strong Online Presence, Drive Targeted Traffic, Enhance Customer Engagement, and Increase Conversions that Grow Your Business in a Challenging Digital Market.",
    },
    {
      id: 3,
      title: "What Makes You Different from Other Agencies?",
      content: "We Focus on Personalized and customized solutions, combining Industry Expertise With Creative Strategy, Our team is dedicated to understanding your unique needs and Crafting strategies that define your Business.",
    },
    {
      id: 4,
      title: "How Do you Determine the Right Strategy for My Business?",
      content: "First, We Start With Understanding your Goals, Requirements, Challenges, and Target Audience. Then, we Are moving Forward to Build a Customized plan that Meets Your Business Needs, Using our data-driven insights to guide our decisions",
    },
    {
      id: 5,
      title: "Do you Work With small businesses or Just Large Companies?",
      content: "We are Working with Businesses of all sizes, from Startups to well-formed Companies. Whether You are just starting or looking to expand we are here to serve With your unique needs.",
    },
  ];

  // Animation variants
  const itemVariants = {
    offscreen: {
      x: 100, // Start off-screen to the right
      opacity: 0, // Fully transparent
    },
    onscreen: {
      x: 0, // Move to its original position
      opacity: 1, // Fully visible
      transition: {
        type: "spring", // Smooth spring animation
        bounce: 0.4, // Bounce effect
        duration: 0.8, // Duration of the animation
      },
    },
  };

  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex flex-col md:flex-row mx-10 md:mx-24 lg:mx-32">
        {/* Left Section */}
        <div className="flex flex-col md:w-[20vw] lg:w-[15vw] md:mr-5">
          <p className="text-xl font-medium mb-2">Most Questions</p>
          <p className="text-3xl md:text-[3vw] lg:text-[3vw] font-bold md:leading-tight">
            Frequently Asked Questions
          </p>
        </div>

        {/* Right Section (FAQ Items) */}
        <div className="w-full lg:flex-1">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial="offscreen" // Initial state
              whileInView="onscreen" // Trigger animation when in view
              viewport={{ once: false, amount: 0.5 }} // Replay every time, trigger when 50% visible
              variants={itemVariants} // Use the defined variants
              style={{ marginBottom: "1rem" }} // Add spacing between items
            >
              <Accordion
                expanded={index === 0 ? expanded : undefined}
                onChange={index === 0 ? handleExpansion : undefined}
                className="mb-6 last:mb-0"
              >
                {/* Accordion Summary */}
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${item.id}-content`}
                  id={`panel${item.id}-header`}
                >
                  <Typography  component="span" style={{ fontWeight: "600"  }}>{item.title}</Typography>
                </AccordionSummary>

                {/* Accordion Details */}
                <AccordionDetails>
                  <Typography>{item.content}</Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;















