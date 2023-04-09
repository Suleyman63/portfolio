import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2>
        <>
          <article>
            <p>My name is Suleyman Koc.</p>
            <p>
              I am looking for my full time job. I have been working as a web
              developer for the last year and cooperated with several startups.
            </p>
            <p>
              I cannot say with 100% confidence where I see myself in five years
              or what my big career goal is. The world is changing rapidly, and
              I don't have enough professional experience to be certain about
              such things. However, I know that I can provide a fresh take and
              an extraordinary approach to every project.
            </p>
            <p>
              I am always open to challenges and constructive feedback. I am
              open minded and learn new things quickly. I want to become a team
              player and dedicate all my skills and talents to develop
              high-quality and unique products.
            </p>
          </article>
        </>
      </div>
    </>
  );
};

export default About;
