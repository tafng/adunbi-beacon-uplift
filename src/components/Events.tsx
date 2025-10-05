import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const events = [
  {
    title: "TAFEES 2025",
    subtitle: "The Adunbi Foundation Economic Empowerment Summit",
    date: "Coming Soon",
    description:
      "Join us for our flagship event focused on economic empowerment, networking, and skill development for the next generation of leaders.",
  },
  {
    title: "Annual Charity Gala",
    subtitle: "Celebrating Impact, Inspiring Change",
    date: "December 2025",
    description:
      "An evening of celebration, storytelling, and fundraising to support our mission of transforming lives through education.",
  },
];

const Events = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary animate-fade-in-up">
            Events & Highlights
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in-up">
            Join us in making a difference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {events.map((event, index) => (
            <Card
              key={index}
              className="hover-lift animate-fade-in-up border-2 border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">{event.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                <p className="text-lg text-primary mb-4">{event.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {event.description}
                </p>
                <Button variant="outline" className="border-primary hover:bg-primary hover:text-primary-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 animate-fade-in-up">Upcoming Events</h3>
          <p className="text-muted-foreground mb-8 animate-fade-in-up">
            Stay tuned for more exciting events and opportunities to get involved
          </p>
          <Button size="lg" className="animate-fade-in-up font-semibold">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
