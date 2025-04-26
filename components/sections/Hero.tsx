"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <motion.section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
      style={{
        opacity,
      }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80 z-0"></div>
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--electric-blue)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--electric-blue)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"></div>
      
      {/* Content container */}
      <div className="container-width relative z-10">
        <motion.div 
          className="text-center space-y-6"
          style={{ translateY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hello, I'm{" "}
            <span className="gradient-text">Oki Sulton</span>
          </motion.h1>
          
          <motion.div
            className="text-2xl md:text-3xl lg:text-4xl font-medium h-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <TypeAnimation
              sequence={[
                'Mobile Android Developer',
                2000,
                'Kotlin Expert',
                2000,
                'UI/UX Enthusiast',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-electric-blue electric-blue-glow"
              repeat={Infinity}
            />
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Creating innovative mobile experiences that delight users and solve real-world problems.
          </motion.p>
          
          <motion.div 
            className="flex justify-center gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <Button
              onClick={() => {
                  const element = document.getElementById("project");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }
              size="lg"
              className="bg-electric-blue hover:bg-electric-blue/80 text-background"
            >
              View My Work
            </Button>
            <Button
              onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }
              size="lg"
              variant="outline"
              className="border-neon-purple text-neon-purple hover:bg-neon-purple/10"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={30} className="text-electric-blue" />
        </a>
      </motion.div>
    </motion.section>
  );
}