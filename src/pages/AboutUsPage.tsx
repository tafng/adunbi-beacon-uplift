import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getFormattedStats } from "@/data/impactStats";
import aboutHeroBg from "@/assets/about-hero-bg.png";
import founder1 from "@/assets/founder-1.png";
import founder2 from "@/assets/founder-2.png";
import founder3 from "@/assets/founder-3.png";
import bauhausPattern from "@/assets/bauhaus-pattern.png";

const AboutUsPage = () => {
  const impactStats = getFormattedStats();

  const values = [
    "At TAF, we run targeted programs that address the real needs of vulnerable women.",
    "At TAF, we run targeted programs that address the real needs of vulnerable women.",
    "At TAF, we run targeted programs that address the real needs of vulnerable women.",
    "At TAF, we run targeted programs that address the real needs of vulnerable women.",
    "At TAF, we run targeted programs that address the real needs of vulnerable women.",
  ];

  const communities = [
    { id: 1, name: "Community 1" },
    { id: 2, name: "Community 2" },
    { id: 3, name: "Community 3" },
    { id: 4, name: "Community 4" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aboutHeroBg} 
            alt="About Us Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 tracking-wide">
              ABOUT US
            </h1>
            <p className="text-white/90 text-xl">Founder Story</p>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Story Text */}
            <div className="mb-12 space-y-6">
              <p className="text-lg leading-relaxed text-foreground">
                The Adunbi Foundation (TAF) was birthed from a deep passion to see vulnerable communities—particularly women, youth, children, and families—lifted from cycles of poverty and neglect. Our founder, driven by personal conviction and a clear sense of purpose, envisioned a platform where tangible support meets genuine care, where lives are not just impacted but transformed.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                From humble beginnings, TAF has grown into a trusted nonprofit organization committed to creating lasting change across Nigeria. We focus on sustainable empowerment—through education, skill acquisition, community development, and compassionate outreach. Every program we run is rooted in the belief that every person, regardless of their background, deserves access to opportunities that unlock their full potential.
              </p>
            </div>

            {/* Three Founder Images Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img 
                  src={founder1} 
                  alt="Founder speaking at event" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img 
                  src={founder2} 
                  alt="Founder addressing audience" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-lg">
                <img 
                  src={founder3} 
                  alt="Founder speaking passionately" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom Text */}
            <div>
              <p className="text-lg leading-relaxed text-foreground">
                Established in 2019, The Adunbi Foundation continues to expand its reach, partnering with stakeholders, donors, and communities to bring hope where it's needed most. We are more than an organization—we are a movement fueled by compassion, integrity, and a relentless commitment to uplifting lives across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-foreground font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative border-[3px] border-[#4ECDC4] bg-[#F5F0E8] rounded-lg overflow-hidden">
              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-0">
                {/* Mission */}
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#E8B84A] text-center">
                    Mission
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700">
                    We shall undertake empowerment programs and projects to support Women, Youth, Children, and Orphans ; and such activities that may be incidental to the realization of the overall vision of the organization
                  </p>
                </div>

                {/* Vertical Dotted Divider */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-24 w-px border-l-2 border-dotted border-gray-400"></div>

                {/* Vision */}
                <div className="p-8 md:p-12 border-t md:border-t-0 md:border-l-0 border-dotted border-gray-300">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#E8B84A] text-center">
                    Vision
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700">
                    It is our vision to provide social support to Africa's vulnerable, ensuring stability and promoting the idea for purposeful living.
                  </p>
                </div>
              </div>

              {/* Bauhaus Pattern at Bottom */}
              <div className="w-full h-20 md:h-24 overflow-hidden">
                <img 
                  src={bauhausPattern} 
                  alt="" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Communities Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
            Communities Served
          </h2>
          <p className="text-center text-lg text-foreground/80 mb-12 max-w-3xl mx-auto">
            At TAF, we run targeted programs that address the real needs of vulnerable women, youth, children, and families across Nigeria. Each program is designed to break cycles of poverty, build stability, and equip beneficiaries with opportunities
          </p>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {communities.map((community) => (
              <div
                key={community.id}
                className="aspect-square bg-charcoal rounded-lg flex items-center justify-center text-white text-4xl font-bold"
              >
                {community.id}
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button className="bg-primary hover:bg-primary/90 text-charcoal font-bold px-8 py-6 text-lg">
              SEE MORE
            </Button>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto border-4 border-primary rounded-lg p-8 md:p-12 bg-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                  Get Involved
                </h2>
                <p className="text-lg text-foreground">
                  At TAF, we run targeted programs that address the real needs of vulnerable
                </p>
              </div>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-cream border-border h-12"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-charcoal font-bold h-12 text-lg">
                  GET INVOLVED
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
