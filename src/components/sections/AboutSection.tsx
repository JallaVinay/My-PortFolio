

import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding pt-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-hero rounded-full blur-3xl opacity-30 animate-glow-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dwzpwhdho/image/upload/v1755959987/profile-photo_ccwwuy.png"
                  alt="Vinay Jalla - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-4"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Vinay Jalla
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-primary font-medium mb-6"
              >
                Full Stack Developer | MERN Stack | JavaScript & Python
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <p className="text-muted-foreground leading-relaxed">
                I'm a Computer Engineering student graduating in{" "}
                <span className="text-primary font-semibold">2025</span>,
                skilled in the{" "}
                <span className="text-primary font-semibold">MERN stack</span>{" "}
                with strong knowledge of{" "}
                <span className="text-accent font-semibold">JavaScript </span>
                 and <span className="text-accent font-semibold">Python</span>.
                I’ve built projects like an{" "}
                <span className="font-semibold">
                  e-commerce platform (NxtTrendz)
                </span>{" "}
                and a{" "}
                <span className="font-semibold">job search app (Jobby)</span>,
                where I worked on API integration, authentication, and
                responsive UI design.
              </p>

              <br/>

              <p className="text-muted-foreground leading-relaxed">
                Certified in{" "}
                <span className="font-semibold">
                  Python, Databases, and JavaScript
                </span>
                , I’m passionate about creating scalable, user-friendly web
                applications and eager to contribute to impactful projects.
                Outside of coding, I enjoy cooking and following tech podcasts
                to stay updated with the latest trends.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {[
                "MERN Stack",
                "JavaScript",
                "Python",
                "Web Development",
                "APIs & Authentication",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
