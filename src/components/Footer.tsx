import logo from "@/assets/logo-footer.png";
import poweredBy from "@/assets/powered-by.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
                <Link to="/programs" className="text-white/80 hover:text-primary transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/80 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-primary transition-colors">
                  About Us
                </Link>
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
                <Link to="/get-involved#donate" className="text-white/80 hover:text-primary transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link to="/get-involved#volunteer" className="text-white/80 hover:text-primary transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="/get-involved#partner" className="text-white/80 hover:text-primary transition-colors">
                  Partner with us
                </Link>
              </li>
            </ul>
          </div>

          {/* RESOURCES Column */}
          <div>
            <h4 className="text-primary text-sm font-semibold mb-6 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/impacts-stories" className="text-white/80 hover:text-primary transition-colors">
                  Impact Stories
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-white/80 hover:text-primary transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT US Column */}
          <div>
            <h4 className="text-primary text-sm font-semibold mb-6 uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="text-white/80 flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  <div>08083593842</div>
                  <div>08053170006</div>
                </div>
              </li>
              <li className="text-white/80 flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@taf.ng" className="hover:text-primary transition-colors">
                  info@taf.ng
                </a>
              </li>
              <li className="text-white/80 flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>No 12 Rawng Pam street Jos, Plateau State</span>
              </li>
            </ul>
          </div>

          {/* Logo Column */}
          <div className="flex justify-end">
            <img 
              src={logo} 
              alt="The Adunbi Foundation" 
              className="h-16"
            />
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
                href="https://www.facebook.com/profile.php?id=61581595237910"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/theadunbifoundation"
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
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-white/60">© 2025 — All rights reserved</p>
          <img 
            src={poweredBy} 
            alt="Powered by" 
            className="h-5"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
