/* No Animation */
// "use client";
// import { useState } from "react";
// import Image from "next/image"; // Import the Next.js Image component

// const Carousel = () => {
//   // State to track the currently selected topic and background image
//   const [selectedTopic, setSelectedTopic] = useState("Digital Marketing");
//   const [carouselBackground, setCarouselBackground] = useState("/services-images/marketing.jpg");

//   // Array of topics with their content and corresponding background images
//   const topics = [
//     {
//       name: "Digital Marketing",
//       content:
//         "Digital marketing refers to advertising delivered through digital channels such as search engines, websites, social media, email, and mobile apps. It helps businesses reach a larger audience and engage with customers effectively. Strategies include SEO, PPC, content marketing, and social media campaigns. By leveraging data analytics, companies can optimize their campaigns for better ROI. Digital marketing refers to advertising delivered through digital channels such as search engines, websites, social media, email, and mobile apps. It helps businesses reach a larger audience and engage with customers effectively. Strategies include SEO, PPC, content marketing, and social media campaigns. By leveraging data analytics, companies can optimize their campaigns for better ROI.",
//       backgroundImage: "/services-images/marketing.jpg",
//     },
//     {
//       name: "Development",
//       content:
//         "Development involves creating software, websites, or applications to meet specific business needs. It includes front-end and back-end development, database management, and API integrations. Developers use programming languages like JavaScript, Python, and PHP to build scalable and efficient solutions. Good development practices ensure maintainability and performance.",
//       backgroundImage: "/services-images/development.jpg",
//     },
//     {
//       name: "SEO",
//       content:
//         "SEO (Search Engine Optimization) is the practice of optimizing web content to rank higher in search engine results. It involves keyword research, on-page optimization, link building, and technical improvements. A well-executed SEO strategy increases organic traffic and improves visibility. It's essential for businesses looking to grow online.",
//       backgroundImage: "/services-images/seo.jpg",
//     },
//     {
//       name: "Designing",
//       content:
//         "Designing focuses on creating visually appealing and user-friendly interfaces. It includes UI/UX design, graphic design, and branding. Designers use tools like Figma, Adobe XD, and Photoshop to craft engaging experiences. Good design enhances usability and leaves a lasting impression on users.",
//       backgroundImage: "/services-images/design.jpg",
//     },
//     {
//       name: "Content Writing",
//       content:
//         "Content writing involves creating written material for websites, blogs, and marketing campaigns. It aims to inform, engage, and convert readers into customers. Effective content is clear, concise, and optimized for search engines. Writers often specialize in niches like tech, health, or finance.",
//       backgroundImage: "/services-images/content.jpg",
//     },
//     {
//       name: "Ads Campaign",
//       content:
//         "Ads campaigns are strategic efforts to promote products or services through paid advertisements. Platforms like Google Ads, Facebook Ads, and Instagram Ads are commonly used. Successful campaigns target specific audiences, use compelling visuals, and track performance metrics to maximize ROI.",
//       backgroundImage: "/services-images/ads.jpg",
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-3">
//       {/* Main Carousel Section */}
//       <div
//         className="w-full max-w-6xl rounded-lg shadow-lg overflow-hidden relative"
//         style={{
//           height: "400px", // Fixed height for the carousel
//         }}
//       >
//         {/* Static Background Image */}
//         <Image
//           src={carouselBackground} // Dynamically set the background image
//           alt="Carousel Background"
//           layout="fill" // Cover the entire container
//           objectFit="cover" // Ensure the image covers the container without distortion
//           className="rounded-lg"
//         />
//         {/* Overlay for better text visibility */}
//         <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//         {/* Scrollable Content */}
//         <div className="relative z-10 p-6 overflow-y-auto h-full text-white">
//           <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold mb-4 ">{selectedTopic}</h2>
//           <p className="text-lg">{topics.find((topic) => topic.name === selectedTopic)?.content}</p>
//         </div>
//       </div>

//       {/* Topic Containers */}
//       <div
//         className="flex overflow-hidden mt-8 w-full max-w-6xl"
//         onMouseEnter={(e) => e.currentTarget.style.animationPlayState = "paused"}
//         onMouseLeave={(e) => e.currentTarget.style.animationPlayState = "running"}
//       >
//         {/* Inner container for the moving animation */}
//         <div className="animate-scroll flex space-x-4">
//           {Array(2)
//             .fill(topics) // Duplicate the topics array to create an infinite loop effect
//             .flat()
//             .map((topic, index) => (
//               <div
//                 key={index}
//                 className="w-40 h-40 rounded-lg shadow-md cursor-pointer overflow-hidden relative transition-transform duration-300 hover:scale-105"
//                 onClick={() => {
//                   setSelectedTopic(topic.name); // Update the selected topic
//                   setCarouselBackground(topic.backgroundImage); // Update the carousel background image
//                 }}
//               >
//                 {/* Background Image */}
//                 <Image
//                   src={topic.backgroundImage} // Set the background image for each container
//                   alt={topic.name}
//                   layout="fill" // Cover the entire container
//                   objectFit="cover" // Ensure the image covers the container without distortion
//                   className="rounded-lg"
//                 />
//                 {/* Overlay for better text visibility */}
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                   <h3 className="text-white text-lg font-medium text-center">{topic.name}</h3>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;















"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image"; // Import the Next.js Image component
import Link from "next/link"; // Import the Next.js Link component
import "@/app/components/Home/Container1/homepage.css";

const Carousel = () => {
  // Array of topics with their content and corresponding background images
  const topics = [
    {
      name: "DIGITAL MARKETING",
      //content edited
      content:
        "In Todays Digital World, Online Presence Is Too much Important for Any Business Growth. We provide The strategies that are Designed to Enhance the reach and engagement of the target Audience Through Different Platforms Like Social Media Marketing, Influencer Marketing, Performance Marketing, Email Marketing and Many More. We are Highly Focus on Giving Organic Results, Digital marketing  helps you in Different segment like if you are looking for Generating leads, Increase Website Traffic or boosting your sales it helps everywhere. We Regularly Focus and Optimize Campaigns to Ensure the maximum ROI.",
      backgroundImage: "/services-images/marketing.jpg",
      path: "/services/digital-marketing", // Destination page
    },
    {
      name: "DEVELOPMENT",
      content://not to be edited
        "At Pribhaytech, We have Expertise in Creating Quality, Custom Different Development Options That are Create to Grow With Your Business. If You Are Looking For a Brand New Website, A Mobile App, or Different Software Systems, Then We Are Here For You, Our Well Experienced Team is Here to Bring Your Vision to Business.",
      backgroundImage: "/services-images/development.jpg",
      path: "/services/development", // Destination page
    },
    {
      name: "SEO",
      content://not to be edited
        "Pribhaytech will optimize your website’s SEO alongside improving its Google ranking. Gain Pribhaytech's competitive advantage and benefit from our ingenious keyword research, on-page & off-page SEO, and other technical optimization services. Generate organic traffic using the most effective strategies with our result-driven team. To increase your website traffic reach out to our SEO specialists",
      backgroundImage: "/services-images/seo.jpg",
      path: "/services/seo", // Destination page
    },
    {
      //not to be edited
      name: "DESIGNING",
      content:
        "The best ideas of the world are often coming from the sight in today's world, so the designer is the key to how people see your brand. Website for your website Makeover, or the influence of the attractive signs is required to assist your ideas in reality. In Pribhaytech we pay attention to style and practicality, ensuring that our designers are not only wonderful but also influence your business effectively.",
      backgroundImage: "/services-images/design.jpg",
      path: "/services/designing", // Destination page
    },
    {
      name: "CONTENT WRITING",
      content://not to be edited
        "Whether You want to enlarge your observers, to enhance your online presence, or to create materials. Our writing services has been made for your help to achieve your goals. On Pribhaytech, We give you a detailed series of writing services for your business from the blog post to the script, our writers are experienced and wrote the content who makes people addicted to reading.",
      backgroundImage: "/services-images/content.jpg",
      path: "/services/content-writing", // Destination page
    },
    {
      name: "ADS CAMPAIGN",
      content://not to be edited
        "We don't just set  Ads and forget them, we continuously modify them for the best results. It's not just about spending your budget; it's about putting it to the right use. We emphasize the architecture of your ad accounts to improve all the important metrics, from clicks to conversions, and from the cost per conversion to the cost per revenue..",
      backgroundImage: "/services-images/ads.jpg",
      path: "/services/ads-campaign", // Destination page
    },
  ];

  // State to track the currently selected topic and background image
  const [selectedTopic, setSelectedTopic] = useState(topics[0].name); // Initialize with the first topic's name
  const [carouselBackground, setCarouselBackground] = useState(
    topics[0].backgroundImage
  ); // Initialize with the first topic's background image
//bg-[#FFF6DA]
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF6DA] px-3 py-10">
      {/* "Our Services" Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-800 ">
        Our Services
      </h1>
      <p className="max-w-6xl text-center text-gray-800 text-lg mb-12">
      We provide the best services. Pribhaytech is a dynamic, versatile and full-service digital marketing agency that doesn’t rely on smoke and mirrors to attract new clients. Instead, Pribhaytech trusts its own search engine optimization (SEO) and marketing skills to drive new customers to our website.
      </p>
      {/* Main Carousel Section */}
      <div
        className="w-full max-w-6xl rounded-lg shadow-lg overflow-hidden relative"
        style={{
          height: "400px", // Fixed height for the carousel
        }}
      >
        {/* Static Background Image */}
        <Image
          src={carouselBackground} // Dynamically set the background image
          alt="Carousel Background"
          layout="fill" // Cover the entire container
          objectFit="cover" // Ensure the image covers the container without distortion
          className="rounded-lg"
        />
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Scrollable Content */}
        <div className="relative z-10 p-6 overflow-y-auto h-full text-white">
          {/* Title Animation with Flip Effect */}
          <FlipLink className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 block">
            {selectedTopic}
          </FlipLink>
          {/* Description Paragraph */}
          <p className="text-xl whitespace-pre-wrap">
            {topics
              .find((topic) => topic.name === selectedTopic)
              ?.content.split("")
              .map((char, index) => (
                <span key={index}>{char}</span>
              ))}
          </p>
          {/* Learn More Button */}
          {/* Link to the selected topic's page */}
          <div className="mt-6">
            <Link
              href={
                topics.find((topic) => topic.name === selectedTopic)?.path ||
                "/"
              }
            >
              <button className="glow-on-hover" type="button">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Topic Containers */}
      <motion.div
        className="flex overflow-hidden mt-8 w-full max-w-6xl"
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {/* Inner container for the moving animation */}
        <motion.div
          className="flex space-x-4"
          animate={{ x: "-50%" }} // Move the container horizontally
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          }}
        >
          {Array(2)
            .fill(topics) // Duplicate the topics array to create an infinite loop effect
            .flat()
            .map((topic, index) => (
              <motion.div
                key={index}
                className="w-40 h-40 rounded-lg shadow-md cursor-pointer overflow-hidden relative"
                whileHover={{ scale: 1.05 }} // Scale up on hover
                whileTap={{ scale: 0.95 }} // Scale down on click
                transition={{ duration: 0.3 }}
                onClick={() => {
                  setSelectedTopic(topic.name); // Update the selected topic
                  setCarouselBackground(topic.backgroundImage); // Update the carousel background image
                }}
              >
                {/* Background Image */}
                <Image
                  src={topic.backgroundImage} // Set the background image for each container
                  alt={topic.name}
                  layout="fill" // Cover the entire container
                  objectFit="cover" // Ensure the image covers the container without distortion
                  className="rounded-lg"
                />
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white text-lg font-medium text-center">
                    {topic.name}
                  </h3>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// FlipLink Component (Updated to Handle Spaces Properly)
const DURATION = 0.25;
const STAGGER = 0.025;
const FlipLink = ({ children, className }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      whileTap="hovered"
      className={`relative block overflow-hidden whitespace-nowrap ${className}`}
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}{" "}
            {/* Replace spaces with non-breaking spaces */}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}{" "}
            {/* Replace spaces with non-breaking spaces */}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default Carousel;











