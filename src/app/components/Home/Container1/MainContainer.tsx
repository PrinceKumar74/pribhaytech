// /* This is the main container for the home page below the Navbar -->1*/
// "use client";
// import './homepage.css'
// import { useTheme } from "next-themes";
// import { Waves } from "@/components/ui/waves-background";
// const MainContainer = () => {
//     const { theme } = useTheme();

//   return (
//     <div>
//       <div className="h-[90vh] mb-0 w-full  relative">
//         <div className="absolute top-0 left-0 right-0 bottom-0  -z-10">
//           {/* <Waves
//             lineColor={
//               theme === "dark"
//                 ? "rgba(255, 255, 255, 0.3)"
//                 // : "rgba(0, 0, 0, 0.3)"
//             }
//             backgroundColor="transparent"
//             waveSpeedX={0.0125}
//             waveSpeedY={0.0125}
//             waveAmpX={40}
//             waveAmpY={20}
//             friction={0.9}
//             tension={0.01}
//             maxCursorMove={120}
//             xGap={12}
//             yGap={36}
//           /> */}
//         </div>

//         <div>
//           <div className="flex flex-col items-center justify-center h-full">
//             <h1 className="xl:text-7xl lg:text-6xl md:text-5xl text-4xl  font-bold text-gray-800 mb-4 mt-10">
//               Welcome to PRIBHAYTECH
//             </h1>
//             <p className="text-2xl font-bold my-5 text-gray-600 mb-8">
//               Step Into the Future with PribhayTech
//             </p>
//             <p className="text-lg text-gray-600 mb-8 mx-5 sm:mx-10 md:mx-16 lg:mx-20">
//               In Today’s Fast-Paced Digital World, Staying Ahead Isn’t Just and
//               Option – It’s a Necessity. At PribhayTech, We Don’t Just Help
//               Businesses Survive; We Empower Them to thrive. Whether you’re a
//               startup aiming to make your mark or an established brand ready to
//               dominate, we are your go-to partner for innovations, growth, and
//               Success.{" "}
//             </p>
//             <button className="glow-on-hover" type="button">
//               <a
//                 href="/about"
//                 className="text-lg"
//               >
//                 Learn More
//               </a>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MainContainer










"use client";
import { motion } from "framer-motion";
import "./homepage.css";
import { useTheme } from "next-themes";
import { Waves } from "@/components/ui/waves-background";
import { useEffect, useState } from "react";

const MainContainer = () => {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size and update state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Disable touch events globally for Waves on mobile
  useEffect(() => {
    if (isMobile) {
      document.body.style.touchAction = "auto"; // Allow default touch behavior
    }
  }, [isMobile]);

  return (
    <section className="grid  place-content-center gap-2 px-8 py-24 md:py-20 lg:py-12 text-black">
      {/* Waves Container */}
      <div
        className={`absolute top-0 left-0 h-full right-0 bottom-0 -z-10 ${
          isMobile ? "pointer-events-none" : ""
        }`}
      >
        <WavesWrapper isMobile={isMobile}>
          <Waves
            lineColor={
              theme === "dark"
                ? "rgba(255, 255, 255, 0.3)"
                : "rgba(0, 0, 0, 0.3)"
            }
            backgroundColor="transparent"
            waveSpeedX={0.0125}
            waveSpeedY={0.0125}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </WavesWrapper>
      </div>

      {/* Content */}
      <div className="hover:text-sky-400">
        <FlipLink>PRIBHAYTECH</FlipLink>
      </div>
      <div className="hover:text-sky-400">
        <FlipLink>MAKES</FlipLink>
      </div>
      <div className="hover:text-sky-400">
        <FlipLink>BRAND</FlipLink>
      </div>
      <div className="hover:text-sky-400">
        <FlipLink>VIRAL</FlipLink>
      </div>
      <p className="text-2xl font-bold mt-5 lg:mt-0 text-gray-600 mb-8">
        Step Into the Future with PribhayTech
      </p>
      <a href="/about" className="text-lg mt-">
        <button className="glow-on-hover" type="button">
          Learn More
        </button>
      </a>
    </section>
  );
};

// FlipLink Component (unchanged)
const DURATION = 0.25;
const STAGGER = 0.025;
const FlipLink = ({ children }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      whileTap="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-[50px] font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
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
            {l}
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
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

// Wrapper for Waves Component
const WavesWrapper = ({ isMobile, children }) => {
  useEffect(() => {
    if (isMobile) {
      // Prevent touch events from propagating
      const handleTouchStart = (e) => e.stopPropagation();
      const handleTouchMove = (e) => e.stopPropagation();
      const handleTouchEnd = (e) => e.stopPropagation();

      document.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleTouchEnd, { passive: false });

      return () => {
        document.removeEventListener("touchstart", handleTouchStart);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };
    }
  }, [isMobile]);

  return <>{children}</>;
};

export default MainContainer;
