import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Xamid4.css";

const Xamid4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (delay) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 1, delay },
    }),
  };

  return (
    <div className="xamid4" ref={ref}>
      <div className="container">
        <div className="xamid4_weapper">
          <motion.img
            src="./Me.png"
            alt=""
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          />

          <div className="xam4-cont">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              About <a>Me</a>
            </motion.h1>

            {/* Абзацы с задержкой */}
            <motion.p
              custom={0.2}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and writing clear,
              readable, highly performant code matters to me.
            </motion.p>

            <motion.p
              custom={0.6}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </motion.p>

            <motion.p
              custom={1.0}
              variants={textVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xamid4;
