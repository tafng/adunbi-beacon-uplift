import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getFormattedStats } from "@/data/impactStats";

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
      <section className="relative bg-charcoal pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 tracking-wide">
              ABOUT US
            </h1>
            <p className="text-white/90 text-xl">Founder Story</p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Story Text */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg leading-relaxed text-foreground mb-8">
              At TAF, we run targeted programs that address the real needs of vulnerable women, youth, children, and families across Nigeria. Each program is designed to break cycles of poverty, build stability, and equip beneficiaries with opportunities to transform their lives. Whether it's providing scholarships to students in need, teaching youth essential skills for employment, or offering resources for widows and orphans—we keep people at the center of everything we do. We believe in creating lasting change, one family at a time.
            </p>
          </div>

          {/* Three Images Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="aspect-[3/4] bg-gradient-to-br from-amber-600 to-primary rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/30"></div>
              </div>
            </div>
            <div className="aspect-[3/4] bg-gradient-to-br from-primary to-amber-500 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/30"></div>
              </div>
            </div>
            <div className="aspect-[3/4] bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/30"></div>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed text-foreground">
              At TAF, we run targeted programs that address the real needs of vulnerable women, youth, children, and families across Nigeria. Each program is designed to break cycles of poverty, build stability, and equip beneficiaries with opportunities at TAF, we run targeted programs that address the real needs of vulnerable women, youth, children, and families across Nigeria. Each program is designed to break cycles of poverty, build stability, and equip beneficiaries with opportunities at TAF, we run targeted programs that address the real needs of vulnerable women, youth, children, and families across Nigeria. Each program is designed to break cycles of poverty, build stability, and equip beneficiaries with opportunities at TAF, we run targeted programs that address the real needs of vulnerable women, youth, children.
            </p>
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

      {/* Impact Story Section */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="aspect-square bg-gradient-to-br from-primary to-amber-600 rounded-lg"></div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Impact Story
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                At TAF, we run targeted programs that address the real needs of vulnerable women, youth, children, and families across Nigeria. Each program is designed to break cycles of poverty, build stability, and equip beneficiaries with opportunities at TAF, we run targeted programs that address the real needs of vulnerable women, youth, children, and families across Nigeria. Each program is designed to break cycles of poverty, build stability, and equip beneficiaries with opportunities at TAF, we run targeted programs that address the real needs of vulnerable women, youth, children.
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <p className="text-lg leading-relaxed text-white/90">
              At TAF, we run targeted programs that address the real needs of vulnerable women, youth, children, and families across Nigeria. Each program is designed to break cycles of poverty, build stability, and equip beneficiaries with opportunities at TAF, we run targeted programs that address the real needs of vulnerable women, youth, children, and families across Nigeria. Each program is designed to break cycles of poverty, build stability, and equip beneficiaries with opportunities at TAF, we run targeted programs that address the real needs of vulnerable women, youth, children.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {/* Mission */}
            <div className="relative">
              <div className="absolute -bottom-8 -left-8 w-full h-32 opacity-20">
                <div className="flex gap-2">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="w-12 h-12"
                      style={{
                        background: ["#E8B84A", "#FF6B6B", "#4ECDC4", "#95E1D3", "#F38181"][i % 5],
                        transform: i % 2 === 0 ? "rotate(45deg)" : "none",
                        borderRadius: i % 3 === 0 ? "50%" : "0",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Mission
              </h2>
              <p className="text-lg leading-relaxed text-foreground">
                We shall undertake empowerment programs designed to break cycles of poverty for Women, Children, and Orphans, and teach as activities that may be incidental to the realization of the overall vision of the organization
              </p>
            </div>

            {/* Vision */}
            <div className="relative">
              <div className="absolute -bottom-8 -right-8 w-full h-32 opacity-20">
                <div className="flex gap-2 justify-end">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="w-12 h-12"
                      style={{
                        background: ["#E8B84A", "#FF6B6B", "#4ECDC4", "#95E1D3", "#F38181"][i % 5],
                        transform: i % 2 === 0 ? "rotate(45deg)" : "none",
                        borderRadius: i % 3 === 0 ? "50%" : "0",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Vision
              </h2>
              <p className="text-lg leading-relaxed text-foreground">
                To create safe and empowering spaces for Africa's vulnerable, ensuring stability and promoting the ideal for purposeful living
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Values
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 rounded-full bg-primary flex-shrink-0"></div>
                <p className="text-lg text-foreground pt-3">{value}</p>
              </div>
            ))}
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
