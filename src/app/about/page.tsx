import React from "react";
import FrequentlyAskedQuestions from "./faq/page";
import AboutStory from "./story/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pribhaytech | About ",
  description: "This is the About page",
};
const About = () => {
  return (
    <div>
      <AboutStory />
      <div id="faq">
        <FrequentlyAskedQuestions />
      </div>
    </div>
  );
};

export default About;
