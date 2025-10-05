import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "The Adunbi Foundation gave me more than money, they gave me hope. Through their scholarship program, I was able to pursue my dreams and build a better future.",
    author: "Sarah M.",
    role: "Scholarship Recipient",
  },
  {
    quote:
      "TAF's empowerment programs taught me skills I never knew I had. Today, I run my own business and support my family with confidence.",
    author: "James O.",
    role: "Program Graduate",
  },
  {
    quote:
      "Being part of TAF's community outreach has been life-changing. It's beautiful to see how we can all come together to lift each other up.",
    author: "Grace A.",
    role: "Community Volunteer",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-charcoal text-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary animate-fade-in-up">
            Stories of Impact
          </h2>
          <p className="text-lg opacity-90 animate-fade-in-up">
            Hear from those whose lives have been transformed
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-background/10 backdrop-blur-sm border-2 border-primary/30 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-primary mb-4" />
                <p className="text-lg leading-relaxed mb-6 opacity-90">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-primary/30 pt-4">
                  <p className="font-bold text-primary">{testimonial.author}</p>
                  <p className="text-sm opacity-75">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
