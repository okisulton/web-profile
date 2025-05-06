"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle
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
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Get form data
      const formData = new FormData(e.currentTarget);
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');
      
      // Create URL with query parameters
      const url = new URL("https://script.google.com/macros/s/AKfycbzUGgG7NaxvAMDLyG6vR5wNHL670S15qfrSF6L-3jXt3kRR95LwJjkQcR42W4Hzzta4/exec");
      url.searchParams.append('name', name as string);
      url.searchParams.append('email', email as string);
      url.searchParams.append('subject', subject as string);
      url.searchParams.append('message', message as string);
      
      // Send request to Google Apps Script
      const response = await fetch(url.toString(), {
        method: 'POST',
        mode: 'no-cors', // Using no-cors mode since Apps Script may not support CORS
      });
      
      // Since we're using no-cors, we can't actually read the response
      // So we'll just assume it worked if no error was thrown
      
      if (formRef.current) {
        formRef.current.reset();
      }
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll respond to your message soon.",
        // icon: <CheckCircle2 className="h-5 w-5 text-green-500" />
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
        // icon: <AlertCircle className="h-5 w-5" />
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    <p className="text-muted-foreground">os.alimie@gmail.com</p>
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
                    <p className="text-muted-foreground">+62 822 3594 0085</p>
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
                    <p className="text-muted-foreground">Temanggung, Indonesia</p>
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
                          name="name"
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
                          name="email"
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
                        name="subject"
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
                        name="message"
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