import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Users, Briefcase } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const GetInvolved = () => {
  const [storyForm, setStoryForm] = useState({
    name: "",
    email: "",
    story: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for sharing!",
      description: "Your story inspires us to continue our mission.",
    });
    setStoryForm({ name: "", email: "", story: "" });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            Get Involved
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Be part of the change. Every action, big or small, makes a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8 hover-lift animate-fade-in-up">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Donate</h3>
            <p className="text-muted-foreground mb-6">
              Your financial support helps us expand our programs and reach more lives.
            </p>
            <Button className="font-semibold">Make a Donation</Button>
          </div>

          <div className="text-center p-8 hover-lift animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Volunteer</h3>
            <p className="text-muted-foreground mb-6">
              Share your time and talents to directly impact our community programs.
            </p>
            <Button variant="outline" className="border-primary font-semibold">
              Join Our Team
            </Button>
          </div>

          <div className="text-center p-8 hover-lift animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Partner</h3>
            <p className="text-muted-foreground mb-6">
              Collaborate with us to create sustainable community solutions together.
            </p>
            <Button variant="outline" className="border-primary font-semibold">
              Become a Partner
            </Button>
          </div>
        </div>

        {/* Share Your Story Section */}
        <div className="max-w-2xl mx-auto bg-primary/5 p-8 md:p-12 rounded-lg border-2 border-primary/20">
          <h3 className="text-3xl font-bold mb-4 text-center">Share Your Foundation Story</h3>
          <p className="text-muted-foreground text-center mb-8">
            Have you been impacted by TAF? We'd love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={storyForm.name}
                onChange={(e) =>
                  setStoryForm({ ...storyForm, name: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={storyForm.email}
                onChange={(e) =>
                  setStoryForm({ ...storyForm, email: e.target.value })
                }
                required
              />
            </div>

            <div>
              <Label htmlFor="story">Your Story</Label>
              <Textarea
                id="story"
                placeholder="Tell us how The Adunbi Foundation has impacted your life..."
                className="min-h-[150px]"
                value={storyForm.story}
                onChange={(e) =>
                  setStoryForm({ ...storyForm, story: e.target.value })
                }
                required
              />
            </div>

            <Button type="submit" className="w-full font-semibold" size="lg">
              Share Your Story
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
