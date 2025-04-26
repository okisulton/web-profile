"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechFirst",
    company: "TechFirst",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    quote: "Oki's expertise in mobile development transformed our app. He delivered an intuitive, high-performance solution that exceeded our expectations and delighted our users."
  },
  {
    id: 2,
    name: "David Chen",
    position: "Product Manager",
    company: "InnovateX",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    quote: "Working with Oki was a game-changer for our product. His attention to detail and problem-solving skills helped us overcome complex technical challenges while keeping the user experience seamless."
  },
  {
    id: 3,
    name: "Anita Patel",
    position: "CTO",
    company: "FinWave",
    image: "https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg",
    quote: "Oki delivered our fintech app with exceptional quality and attention to security. His expertise in Kotlin and clean architecture ensured our platform is both robust and maintainable."
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    position: "Startup Founder",
    company: "HealthSync",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    quote: "From concept to launch, Oki was instrumental in bringing our health tech vision to life. His technical skills, combined with an understanding of UX principles, created an app our users love."
  }
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
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
    <section id="testimonials" className="section-padding bg-background">
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
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What my clients say about working with me.
            </p>
            <div className="w-24 h-1 bg-neon-purple mx-auto mt-4"></div>
          </motion.div>
          
          {/* Testimonials carousel */}
          <motion.div variants={itemVariants}>
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem 
                    key={testimonial.id} 
                    className="md:basis-1/2 lg:basis-1/3 pl-4 md:pl-6"
                  >
                    <div className="p-1 h-full">
                      <Card className="border-border/80 bg-card/50 backdrop-blur h-full transition-all duration-300 hover:shadow-[0_0_25px_rgba(176,38,255,0.2)]">
                        <CardContent className="flex flex-col p-6 h-full">
                          <Quote className="h-8 w-8 text-electric-blue mb-4" />
                          
                          <blockquote className="text-muted-foreground mb-6 flex-1">
                            {testimonial.quote}
                          </blockquote>
                          
                          <div className="flex items-center gap-4 mt-auto">
                            <div className="relative h-12 w-12 rounded-full overflow-hidden">
                              <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                fill
                                className="object-cover"
                                sizes="48px"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {testimonial.position}, {testimonial.company}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-4 mt-8">
                <CarouselPrevious className="relative static" />
                <CarouselNext className="relative static" />
              </div>
            </Carousel>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}