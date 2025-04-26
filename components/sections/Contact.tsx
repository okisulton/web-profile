"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
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
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      if (formRef.current) {
        formRef.current.reset();
      }
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll respond to your message soon.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-card">
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
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? {"I'd"} love to hear from you.
            </p>
            <div className="w-24 h-1 bg-electric-blue mx-auto mt-4"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact cards */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-4">
              <Card className="transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] border-border/80 bg-card/50 backdrop-blur">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-electric-blue/10">
                    <Mail className="h-6 w-6 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">contact@okisulton.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] border-border/80 bg-card/50 backdrop-blur">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-electric-blue/10">
                    <Phone className="h-6 w-6 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+62 812 3456 7890</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] border-border/80 bg-card/50 backdrop-blur">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-full bg-electric-blue/10">
                    <MapPin className="h-6 w-6 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Jakarta, Indonesia</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Contact form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card className="overflow-hidden border-border/80 bg-card/50 backdrop-blur">
                <CardContent className="p-6 md:p-8">
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          required
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Your Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="bg-background"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Project Inquiry"
                        required
                        className="bg-background"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project..."
                        rows={6}
                        required
                        className="bg-background resize-none"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full md:w-auto bg-neon-purple hover:bg-neon-purple/80 gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}