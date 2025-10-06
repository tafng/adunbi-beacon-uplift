import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getFormattedStats } from "@/data/impactStats";
import { DollarSign, FileText, Book } from "lucide-react";
import aboutHeroBg from "@/assets/about-hero-bg.png";
import founder1 from "@/assets/founder-1.png";
import founder2 from "@/assets/founder-2.png";
import founder3 from "@/assets/founder-3.png";
import bauhausPattern from "@/assets/bauhaus-pattern.png";

const AboutUsPage = () => {
  const navigate = useNavigate();
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
      <section className="py-20 bg-[#F5F0E8]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#E8B84A]">
            Communities Served
          </h2>
          
          <div className="max-w-5xl mx-auto space-y-6 mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              TAF's work is situated in Nigeria, specifically in the North Central and South-South geopolitical zones. 
              We work with marginalized and vulnerable populations comprising of women, young people and children living 
              in communities with poor access to social safety nets and other social amenities. These communities are 
              characterized by entrenched socio-economic and socio-cultural challenges which results in deep rooted poverty 
              and inequalities.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              We focus on populations affected by sexual and gender-based violence, sexual and reproductive health issues, 
              social exclusion, child protection and safeguarding challenges, unemployed youth and teenage mothers, children 
              with special needs, girls at risk of early marriage, and out-of-school children.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              We understand that gender inequalities, poverty and hunger, violent extremism and insurgency, environmental 
              degradation and climate change, displacements due to conflicts and disasters, breakdown in governance, early 
              marriage, and economic downturns are issues that drive vulnerability, hence we aim to address these root causes 
              in our programs and projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {communities.map((community) => (
              <div
                key={community.id}
                className="aspect-square bg-[#2D2D2D] rounded-lg shadow-lg flex items-center justify-center text-white text-4xl font-bold"
              >
                {community.id}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Milestones */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#E8B84A]">
            Achievements & Milestones
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Seed Capital Awards */}
            <div className="border-[3px] border-[#E8B84A] rounded-lg p-8 bg-white text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-[3px] border-[#E8B84A] flex items-center justify-center">
                <DollarSign className="w-10 h-10 text-[#E8B84A]" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Seed Capital Awards
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Provisions of startup funding to launch/scale business ideas
              </p>
            </div>

            {/* Official Business Registration */}
            <div className="border-[3px] border-[#E8B84A] rounded-lg p-8 bg-white text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-[3px] border-[#E8B84A] flex items-center justify-center">
                <FileText className="w-10 h-10 text-[#E8B84A]" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Official Business Registration
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Provision of free business registration with the Corporate Affairs Commission (CAC)
              </p>
            </div>

            {/* Educational Support */}
            <div className="border-[3px] border-[#E8B84A] rounded-lg p-8 bg-white text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-[3px] border-[#E8B84A] flex items-center justify-center">
                <Book className="w-10 h-10 text-[#E8B84A]" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Educational Support
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Provision of scholarships and academic assistance to children of widows, orphans, and low-income families—supporting access to primary, secondary, and tertiary education
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto border-[3px] border-[#E8B84A] rounded-lg p-8 md:p-12 bg-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E8B84A]">
                  Get Involved
                </h2>
                <p className="text-lg text-gray-700">
                  At TAF, we run targeted programs that address the real needs of vulnerable
                </p>
              </div>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white border-gray-300 h-12"
                />
                <Button 
                  onClick={() => navigate('/get-involved')}
                  className="w-full bg-[#E8B84A] hover:bg-[#E8B84A]/90 text-white font-bold h-12 text-lg"
                >
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
