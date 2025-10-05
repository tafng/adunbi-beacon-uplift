import { Card, CardContent } from "@/components/ui/card";
import educationImage from "@/assets/program-education.jpg";
import empowermentImage from "@/assets/program-empowerment.jpg";
import communityImage from "@/assets/program-community.jpg";

const programs = [
  {
    title: "TAF Scholarship Program",
    image: educationImage,
    description:
      "Providing educational opportunities through scholarships that open doors to brighter futures for deserving students.",
  },
  {
    title: "TAF Empowerment & Skills Development",
    image: empowermentImage,
    description:
      "Equipping individuals with practical skills and knowledge needed to thrive in today's competitive landscape.",
  },
  {
    title: "TAF Community Outreach",
    image: communityImage,
    description:
      "Building stronger communities through programs that bring people together and create lasting positive impact.",
  },
];

const Programs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary animate-fade-in-up">
            Our Programs
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Empowering Lives, Building Futures
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift animate-fade-in-up border-2 border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover hover-scale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-background">
                    {program.title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
