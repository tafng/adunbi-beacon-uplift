import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-new.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="The Adunbi Foundation team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            Empowering Lives,{" "}
            <span className="text-[#D4A574]">Building Futures</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Join us in transforming lives through education, empowerment, and community
            development. Every contribution makes a lasting impact.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="font-semibold bg-[#D4A574] hover:bg-[#C89960] text-white">
              Learn More
            </Button>
            <Button size="lg" variant="outline" className="font-semibold border-white text-white bg-white/10 hover:bg-white/20">
              Our Impact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
