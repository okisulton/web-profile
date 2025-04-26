import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="container-width py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Oki Sulton</h3>
            <p className="text-muted-foreground">
              Mobile Android Developer crafting exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#about" 
                  className="text-muted-foreground hover:text-electric-blue transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="#projects" 
                  className="text-muted-foreground hover:text-electric-blue transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="#skills" 
                  className="text-muted-foreground hover:text-electric-blue transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className="text-muted-foreground hover:text-electric-blue transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://github.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-foreground hover:text-electric-blue transition-colors"
              >
                <Github size={20} />
              </Link>
              <Link 
                href="https://linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-foreground hover:text-electric-blue transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link 
                href="https://twitter.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-foreground hover:text-electric-blue transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-foreground hover:text-electric-blue transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link 
                href="mailto:contact@okisulton.com" 
                aria-label="Email"
                className="text-foreground hover:text-electric-blue transition-colors"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Oki Sulton. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}