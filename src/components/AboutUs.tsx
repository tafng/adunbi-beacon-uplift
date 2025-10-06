import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section className="py-6 md:py-8 bg-charcoal text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            About Us
          </h2>
          
          <p className="text-lg md:text-xl mb-4 leading-relaxed animate-fade-in-up opacity-90">
            The Adunbi Foundation (TAF) is dedicated to transforming lives through education, 
            empowerment, and community development. We believe every individual deserves the 
            opportunity to reach their full potential, and we're committed to making that a reality 
            through our comprehensive programs and initiatives.
          </p>

          <div className="border-2 border-primary p-4 md:p-6 rounded-lg mb-4 animate-fade-in-up bg-charcoal/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
              Our Mission
            </h3>
            <p className="text-lg leading-relaxed opacity-90 mb-6">
              To empower underserved communities through accessible education, skill development, 
              and sustainable opportunities that create lasting positive change for individuals, 
              families, and entire communities.
            </p>
            <div className="aspect-video w-full max-w-3xl mx-auto rounded-lg overflow-hidden">
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
          </div>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Learn More About Our Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
