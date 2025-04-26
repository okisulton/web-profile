"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { 
  Smartphone, 
  Code, 
  Palette, 
  Database, 
  GitBranch, 
  Zap 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Sample skills data
const skillCategories = [
  {
    id: "mobile",
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "Kotlin", level: 95 },
      { name: "Java", level: 90 },
      { name: "Flutter", level: 75 },
      { name: "React Native", level: 70 },
      { name: "Swift", level: 60 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: Code,
    skills: [
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 70 },
      { name: "TypeScript", level: 65 },
    ],
  },
  {
    id: "design",
    title: "UI/UX Design",
    icon: Palette,
    skills: [
      { name: "Material Design", level: 90 },
      { name: "Figma", level: 80 },
      { name: "Adobe XD", level: 75 },
      { name: "Sketch", level: 65 },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    icon: Database,
    skills: [
      { name: "Firebase", level: 90 },
      { name: "RESTful APIs", level: 85 },
      { name: "Node.js", level: 70 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    id: "tools",
    title: "Version Control & CI/CD",
    icon: GitBranch,
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub Actions", level: 80 },
      { name: "Jenkins", level: 65 },
    ],
  },
  {
    id: "other",
    title: "Performance & Testing",
    icon: Zap,
    skills: [
      { name: "JUnit", level: 85 },
      { name: "Espresso", level: 80 },
      { name: "App Optimization", level: 90 },
      { name: "Accessibility", level: 75 },
    ],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="section-padding bg-card">
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
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiencies.
            </p>
            <div className="w-24 h-1 bg-electric-blue mx-auto mt-4"></div>
          </motion.div>
          
          {/* Skills grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden border-border/80 backdrop-blur bg-card/50 h-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="p-2 rounded-md bg-electric-blue/10">
                        <category.icon className="h-6 w-6 text-electric-blue" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-6">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <p className="text-sm font-medium">{skill.name}</p>
                            <p className="text-sm text-muted-foreground">{skill.level}%</p>
                          </div>
                          <SkillProgress value={skill.level} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

type SkillProgressProps = {
  value: number;
};

// Custom progress component with animated fill
function SkillProgress({ value }: SkillProgressProps) {
  const progressRef = useRef(null);
  const isInView = useInView(progressRef, { once: true });
  
  return (
    <div ref={progressRef} className="relative h-2 w-full bg-secondary rounded-full overflow-hidden">
      <motion.div 
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-electric-blue to-neon-purple"
        initial={{ width: 0 }}
        animate={{ width: isInView ? `${value}%` : 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
      />
    </div>
  );
}