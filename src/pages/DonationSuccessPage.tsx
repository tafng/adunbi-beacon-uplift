import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const DonationSuccessPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-cream via-white to-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-14 h-14 text-charcoal" />
              </div>
            </div>

            {/* Success Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Thank you for your donation!
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-12 leading-relaxed">
              Your gift will help transform lives in our community.
            </p>

            {/* Additional Info */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-charcoal mb-4">
                What happens next?
              </h2>
              <ul className="text-left space-y-4 text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>You will receive a confirmation email with your donation receipt</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>Your contribution will directly support our programs and initiatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span>We'll keep you updated on the impact your donation makes</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                className="bg-primary hover:bg-primary/90 text-charcoal font-bold px-8 py-6 text-lg"
              >
                <a href="/">Return to Home</a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="border-2 border-primary text-charcoal font-bold px-8 py-6 text-lg hover:bg-primary/10"
              >
                <a href="/impacts-stories">View Our Impact</a>
              </Button>
            </div>

            {/* Social Share */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-foreground/70 mb-4">
                Help us spread the word about our mission
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  variant="outline"
                  className="border-primary text-charcoal hover:bg-primary/10"
                  asChild
                >
                  <a 
                    href="https://facebook.com/sharer/sharer.php?u=https://adunbifoundation.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Share on Facebook
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-charcoal hover:bg-primary/10"
                  asChild
                >
                  <a 
                    href="https://twitter.com/intent/tweet?text=I just donated to The Adunbi Foundation!" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Share on Twitter
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DonationSuccessPage;
