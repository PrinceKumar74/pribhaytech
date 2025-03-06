import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WhyJoin = () => {
  // Animation variants
  const textVariants = {
    offscreen: {
      opacity: 0,
      y: 50, // Start slightly below the screen
    },
    onscreen: {
      opacity: 1,
      y: 0, // Move to its original position
      transition: {
        type: "spring", // Smooth spring animation
        bounce: 0.4, // Bounce effect
        duration: 0.8, // Duration of the animation
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
        stiffness: 100, // Controls the stiffness of the spring
        damping: 10, // Controls the damping of the spring
        duration: 0.6,
      },
    },
  };
  return (
    <div className="md:py-20 py-14 flex justify-center items-center md:px-20 px-10 lg:px-32 bg-white">
      <div className="flex flex-col">
        {/* Heading and Paragraph */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.5 }}
          variants={textVariants}
          className="flex flex-col xl:flex-row gap-4"
        >
          {/* Heading */}
          <div className="lg:whitespace-nowrap flex mb-5">
            <p className="md:text-5xl text-4xl font-bold flex-grow md:font-semibold break-words">
              Why Join Pribhaytech?
            </p>
          </div>
          {/* Paragraphs */}
          <div className="flex flex-col">
            <p className="text-xl text-gray-500">
              Alongside being a service provider, PribhayTech is your committed
              partner for success, enabling you to outshine your competitors
              with the latest solutions. Your goals are a priority for us, and
              for that reason, we consistently evolve as a company. We are
              dedicated to accomplish everything with excellence so that
              surpassing expectations becomes the new standard. But it&apos;s
              not just about delivering results; we actually care about your
              business. Every project to us is not only a task, but a long-term
              partnership on trust, commitment, and joint success.
            </p>
          </div>
        </motion.div>
        {/* Images */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.5 }}
          variants={imageVariants}
          className="flex flex-col md:flex-row gap-6 mt-6"
        >
          {/* Left Image */}
          <div className="md:w-[66%] h-96 relative">
            <Image
              src="/images/joinus.jpg"
              layout="fill"
              objectFit="cover"
              alt="plane"
              className="h-full w-full rounded-3xl"
            />
          </div>
          {/* Right Image */}
          <div className="md:w-[33%] h-96 relative">
            <Image
              src="/images/joinus1.jpg"
              layout="fill"
              objectFit="cover"
              alt="plane"
              className="h-full w-full rounded-3xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyJoin;