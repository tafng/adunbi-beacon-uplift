import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GetInvolved from "@/components/GetInvolved";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import wepImage from "@/assets/program-wep.png";
import ymepImage from "@/assets/program-ymep.png";
import cmpImage from "@/assets/program-cmp.png";
import aspImage from "@/assets/program-asp.png";
import { Calendar } from "lucide-react";

const programs = [
  {
    title: "Women Empowerment Program (WEP)",
    image: wepImage,
    description: "Training, mentoring & start-up capital to help women build financial independence.",
  },
  {
    title: "Youth Mentoring Empowerment Program (YMEP)",
    image: ymepImage,
    description: "Supporting young entrepreneurs with skills, mentorship & seed funding.",
  },
  {
    title: "Couples Marriage Program (CMP)",
    image: cmpImage,
    description: "Strengthening families with guidance on finance, communication & care.",
  },
  {
    title: "Academic Support Program (ASP)",
    image: aspImage,
    description: "Scholarships & educational assistance for vulnerable children.",
  },
];

const ProgramsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center bg-charcoal">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 to-charcoal/70" />
        <div className="relative z-10 text-center px-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-white">PROGRAMS & </span>
            <span className="text-primary">EVENTS</span>
          </h1>
          <p className="text-lg text-white/90 text-center">
            Empowering lives, building stronger communities.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-charcoal/80 px-4 py-2 inline-block mb-2">
                      <h3 className="text-sm font-bold text-white">
                        {program.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-card">
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <Button variant="default" className="w-full md:w-auto">
                    READ MORE
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-primary">Upcoming</span> Events
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 text-center border-2 border-dashed border-muted-foreground/30">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-primary" />
              <p className="text-xl font-semibold text-muted-foreground mb-4">
                No upcoming events
              </p>
              <Button variant="outline">
                VIEW EVENT HIGHLIGHTS
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Past Events/<span className="text-primary">Highlights</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card
                key={item}
                className="relative h-48 overflow-hidden group cursor-pointer border-0"
              >
                <div className="absolute inset-0 bg-charcoal flex items-center justify-center">
                  <p className="text-white font-semibold text-center px-4">
                    Women Empowerment Program (WEP)
                  </p>
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <GetInvolved />
      
      <Footer />
    </div>
  );
};

export default ProgramsPage;
