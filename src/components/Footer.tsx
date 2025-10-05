import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive our latest updates and stories.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-charcoal text-background">
      {/* Newsletter Section */}
      <div className="border-b border-primary/30">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Connected</h3>
            <p className="text-lg opacity-90 mb-6">
              Subscribe to our newsletter for inspiring stories and updates
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/10 border-primary/30 text-background placeholder:text-background/60"
                required
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-primary">The Adunbi Foundation</h4>
            <p className="opacity-90 leading-relaxed">
              Empowering lives and building futures through education, empowerment, and community development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="opacity-90 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="opacity-90 hover:text-primary transition-colors">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="#events" className="opacity-90 hover:text-primary transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#get-involved" className="opacity-90 hover:text-primary transition-colors">
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary">Our Programs</h4>
            <ul className="space-y-2">
              <li className="opacity-90">Scholarship Program</li>
              <li className="opacity-90">Skills Development</li>
              <li className="opacity-90">Community Outreach</li>
              <li className="opacity-90">Youth Empowerment</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 opacity-90">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                <span>info@adunbifoundation.org</span>
              </li>
              <li className="flex items-start gap-2 opacity-90">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 opacity-90">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-primary" />
                <span>123 Hope Street, Community Center</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-primary/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="opacity-75">
              © {new Date().getFullYear()} The Adunbi Foundation. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
