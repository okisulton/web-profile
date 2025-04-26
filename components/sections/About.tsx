"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { 
  Award, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Download 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="section-padding bg-card py-24">
      <div className="container-width">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section heading */}
          <motion.div variants={itemVariants} className="text-center space-y-2 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get to know me better: my background, experience, and what drives me.
            </p>
            <div className="w-24 h-1 bg-electric-blue mx-auto mt-4"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image column */}
            <motion.div
              variants={itemVariants}
              className="relative mx-auto lg:mx-0"
            >
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                  alt="Oki Sulton"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 384px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-20 h-20 border-t-4 border-r-4 border-electric-blue"></div>
                <div className="absolute -bottom-2 -left-2 w-20 h-20 border-b-4 border-l-4 border-neon-purple"></div>
              </div>
              
              {/* Experience highlight */}
              <motion.div 
                variants={itemVariants}
                className="absolute -bottom-6 -right-6 bg-card border border-border p-4 rounded-lg shadow-lg"
              >
                <p className="text-3xl font-bold gradient-text">5+</p>
                <p className="text-sm text-muted-foreground">Years of Experience</p>
              </motion.div>
            </motion.div>
            
            {/* Content column */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Mobile Android Developer & UI/UX Specialist
              </h3>
              
              <p className="text-muted-foreground">
                {"I'm"} a passionate Mobile Android Developer with over 5 years of experience 
                creating innovative, user-friendly applications. I specialize in Kotlin 
                development and have a strong eye for UI/UX design principles.
              </p>
              
              <p className="text-muted-foreground">
                My approach combines technical expertise with creative problem-solving 
                to deliver mobile solutions that exceed client expectations and delight users.
              </p>
              
              {/* Personal info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-electric-blue" />
                  <span>Born: June 12, 1992</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-electric-blue" />
                  <span>Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-electric-blue" />
                  <span>B.Sc. Computer Science</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-electric-blue" />
                  <span>Google Certified Android Developer</span>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              {/* Key achievements */}
              <div className="space-y-4">
                <h4 className="text-lg font-medium">Key Achievements</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-electric-blue/20 flex items-center justify-center mt-0.5">
                      <span className="text-electric-blue text-sm">✓</span>
                    </div>
                    <p className="text-muted-foreground">Created 20+ published apps with combined 500K+ downloads</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-electric-blue/20 flex items-center justify-center mt-0.5">
                      <span className="text-electric-blue text-sm">✓</span>
                    </div>
                    <p className="text-muted-foreground">Led a team of 5 developers for a major fintech application</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-electric-blue/20 flex items-center justify-center mt-0.5">
                      <span className="text-electric-blue text-sm">✓</span>
                    </div>
                    <p className="text-muted-foreground">Reduced app crash rate by 85% through architecture redesign</p>
                  </li>
                </ul>
              </div>
              
              <Button className="mt-6 bg-neon-purple hover:bg-neon-purple/80 gap-2">
                <Download size={16} />
                Download CV
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}