import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
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
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* INFO Column */}
          <div>
            <h4 className="text-primary text-sm font-semibold mb-6 uppercase tracking-wider">
              Info
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#programs" className="text-white/80 hover:text-primary transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#events" className="text-white/80 hover:text-primary transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* GET INVOLVED Column */}
          <div>
            <h4 className="text-primary text-sm font-semibold mb-6 uppercase tracking-wider">
              Get Involved
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#donate" className="text-white/80 hover:text-primary transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#volunteer" className="text-white/80 hover:text-primary transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#partner" className="text-white/80 hover:text-primary transition-colors">
                  Partner with us
                </a>
              </li>
            </ul>
          </div>

          {/* PROGRAMS Column */}
          <div>
            <h4 className="text-primary text-sm font-semibold mb-6 uppercase tracking-wider">
              Programs
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#impact" className="text-white/80 hover:text-primary transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="#stories" className="text-white/80 hover:text-primary transition-colors">
                  Share your story
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT US Column */}
          <div>
            <h4 className="text-primary text-sm font-semibold mb-6 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="text-white/80">+1 (999) 999-99-99</li>
              <li className="text-white/80">hello@logoipsum.com</li>
              <li className="text-white/80">London</li>
            </ul>
          </div>

          {/* Logo Column */}
          <div className="flex justify-end">
            <div className="text-right">
              <div className="flex items-center gap-3 justify-end">
                <div className="w-16 h-16 bg-primary rounded-sm flex items-center justify-center">
                  <span className="text-charcoal font-bold text-xl">TAF</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">ADUNBI</h3>
                  <p className="text-white/60 text-xs">FOUNDATION</p>
                  <p className="text-primary text-xs italic">Transforming lives</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mailing List Section */}
        <div className="grid md:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <h4 className="text-primary text-sm font-semibold mb-4 uppercase tracking-wider">
              Join Our Mailing List
            </h4>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-black border-0 h-12"
                required
              />
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-charcoal font-bold h-12 text-lg"
              >
                SUBSCRIBE
              </Button>
            </form>
          </div>

          {/* Social Media & Follow Us */}
          <div>
            <h4 className="text-primary text-sm font-semibold mb-4 uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-white/60">© 2025 — All rights reserved</p>
          <p className="text-white/60">
            Powered by <span className="text-white">eckplus</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
