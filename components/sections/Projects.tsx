"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

// Sample project data
const projects = [
  {
    id: 1,
    title: "FinWallet Mobile App",
    description: "A comprehensive financial management application with budgeting, transaction tracking, and investment insights.",
    image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg",
    tags: ["Kotlin", "MVVM", "Finance"],
    repoUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Mobile App"
  },
  {
    id: 2,
    title: "HealthTracker",
    description: "Fitness and health monitoring app with customizable workout plans, nutrition tracking, and progress analytics.",
    image: "https://images.pexels.com/photos/3927385/pexels-photo-3927385.jpeg",
    tags: ["Kotlin", "Jetpack Compose", "Health"],
    repoUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Mobile App"
  },
  {
    id: 3,
    title: "Smart Home Control",
    description: "IoT application for managing smart home devices with voice commands, scheduling, and energy optimization.",
    image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
    tags: ["Java", "IoT", "Smart Home"],
    repoUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "IoT"
  },
  {
    id: 4,
    title: "TravelBuddy",
    description: "Travel companion app with itinerary planning, location-based recommendations, and expense tracking.",
    image: "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg",
    tags: ["Kotlin", "Maps API", "Travel"],
    repoUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Mobile App"
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce mobile application with product catalog, cart management, and secure payment integration.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    tags: ["Kotlin", "Firebase", "E-Commerce"],
    repoUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "E-Commerce"
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media managers to track engagement, schedule posts, and analyze performance.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    tags: ["React Native", "Analytics", "Social Media"],
    repoUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: "Analytics"
  }
];

const categories = ["All", "Mobile App", "IoT", "E-Commerce", "Analytics"];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
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
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section-padding bg-background">
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
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my recent work and the innovative solutions I've built.
            </p>
            <div className="w-24 h-1 bg-neon-purple mx-auto mt-4"></div>
          </motion.div>
          
          {/* Category filters */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category 
                    ? "bg-electric-blue hover:bg-electric-blue/80 text-background" 
                    : "border-electric-blue/30 text-foreground hover:bg-electric-blue/10"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>
          
          {/* Projects grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(176,38,255,0.2)] border-border/80 bg-card/50 backdrop-blur">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-card text-xs px-2 py-0.5">
                          <Tag size={10} className="mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </CardContent>
                  
                  <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-card text-foreground hover:text-electric-blue hover:border-electric-blue gap-2"
                      asChild
                    >
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={14} />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-electric-blue hover:bg-electric-blue/80 text-background gap-2"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Show more button */}
          <motion.div variants={itemVariants} className="flex justify-center mt-12">
            <Button
              variant="outline"
              className="border-neon-purple text-neon-purple hover:bg-neon-purple/10"
            >
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}