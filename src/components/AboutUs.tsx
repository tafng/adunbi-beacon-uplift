import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="py-6 md:py-8 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            About Us
          </h2>
          
          <p className="text-lg md:text-xl mb-8 leading-relaxed animate-fade-in-up opacity-90 max-w-3xl mx-auto">
            Every contribution you make helps us empower vulnerable women, youth, children, and families across Nigeria.
          </p>

          <div className="aspect-video w-full max-w-3xl mx-auto rounded-lg overflow-hidden border-4 border-[#D4A574] mb-8 animate-fade-in-up">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Q5HBOhApKB4"
              title="The Adunbi Foundation Mission Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <Link to="/about">
            <Button 
              size="lg" 
              className="bg-[#D4A574] hover:bg-[#D4A574]/90 text-white font-semibold uppercase"
            >
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
