import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import wepImage from "@/assets/program-wep.png";
import ymepImage from "@/assets/program-ymep.png";
import cmpImage from "@/assets/program-cmp.png";
import aspImage from "@/assets/program-asp.png";

const programs = [
  {
    title: "Women Empowerment Program (WEP)",
    image: wepImage,
  },
  {
    title: "Youth Mentoring Empowerment Program (YMEP)",
    image: ymepImage,
  },
  {
    title: "Couples Marriage Program (CMP)",
    image: cmpImage,
  },
  {
    title: "Academic Support Program (ASP)",
    image: aspImage,
  },
];

const Programs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Our Programs –{" "}
            <span className="text-primary">Empowering Lives, Building Futures</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto animate-fade-in-up leading-relaxed">
            At TAF, we run targeted programs that address the real needs of vulnerable women, youth,
            children, and families across Nigeria. Each program is designed to break cycles of poverty,
            build stability, and open doors to opportunity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover-lift animate-fade-in-up border-0 rounded-lg cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="bg-[#2C2C2C] p-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white pr-4">
                  {program.title}
                </h3>
                <ArrowRight className="w-6 h-6 text-white flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
