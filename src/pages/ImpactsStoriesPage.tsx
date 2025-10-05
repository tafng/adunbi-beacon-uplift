import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { getFormattedStats } from "@/data/impactStats";

const ImpactsStoriesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [storyForm, setStoryForm] = useState({
    name: "",
    email: "",
    story: "",
  });

  const impactStats = getFormattedStats();

  const handleStorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Story submitted!",
      description: "Thank you for sharing your story with us.",
    });
    setStoryForm({ name: "", email: "", story: "" });
  };


  const stories = [
    { name: "Ademola Joshua", role: "Recipient", isNew: true },
    { name: "Full name", role: "Role", isNew: true },
    { name: "Full name", role: "Role", isNew: true },
    { name: "Full name", role: "Role", isNew: true },
    { name: "Full name", role: "Role", isNew: true },
    { name: "Full name", role: "Role", isNew: true },
  ];

  const galleryImages = [
    { id: 1, alt: "Foundation activity 1" },
    { id: 2, alt: "Foundation activity 2" },
    { id: 3, alt: "Foundation activity 3" },
    { id: 4, alt: "Foundation activity 4" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Stats */}
      <section className="relative bg-gradient-to-br from-primary via-amber-500 to-orange-500 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide">
              IMPACT & STORIES
            </h1>
            <p className="text-white/90 text-lg">Real Impact. Real People.</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-14 pl-6 pr-12 text-lg bg-white border-0 rounded-lg shadow-lg"
              />
              <Button
                size="icon"
                className="absolute right-2 top-2 bg-primary hover:bg-primary/90"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/90 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {stories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover-lift"
              >
                <div className="relative">
                  {story.isNew && (
                    <Badge className="absolute top-4 left-4 bg-destructive text-white">
                      NEW
                    </Badge>
                  )}
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary/30"></div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-1">{story.name}</h3>
                  <p className="text-muted-foreground mb-4">{story.role}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-charcoal font-bold">
                    VIEW STORY
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-primary to-amber-600">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-primary/30"></div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Featured Story
              </h2>
              <p className="text-lg leading-relaxed mb-6 text-white/90">
                "At 16, we ran targeted programs that address the real needs of
                vulnerable boys, youths, families, individuals across Nigeria
                states. Our focus is on these amazing women who dedicated their
                entire careers and gave talent a springboard for life at 16. we
                target programs that address the real needs of vulnerable
                women, youths and families, across Nigeria states. Although
                can't do it all, we target programs that address the real needs
                of vulnerable women, youths, families, all."
              </p>
              <p className="text-primary font-bold text-lg">– Peter Jones</p>
            </div>
          </div>
        </div>
      </section>

      {/* More Stories */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div
                key={`story-${index}`}
                className="bg-white rounded-lg overflow-hidden shadow-md hover-lift"
              >
                <div className="relative">
                  {story.isNew && (
                    <Badge className="absolute top-4 left-4 bg-destructive text-white">
                      NEW
                    </Badge>
                  )}
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-primary/30"></div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-1">{story.name}</h3>
                  <p className="text-muted-foreground mb-4">{story.role}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-charcoal font-bold">
                    VIEW STORY
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
            Gallery
          </h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="aspect-square bg-gradient-to-br from-primary to-amber-600 rounded-lg hover-scale cursor-pointer"
              ></div>
            ))}
          </div>
          <div className="text-center">
            <Button className="bg-primary hover:bg-primary/90 text-charcoal font-bold px-8 py-6 text-lg">
              VIEW MORE
            </Button>
          </div>
        </div>
      </section>

      {/* Share Your Story Form */}
      <section className="py-20 bg-gradient-to-br from-primary via-amber-500 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto border-4 border-charcoal rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-charcoal">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Share your foundation story
                </h2>
                <p className="text-lg">
                  Are there at-risk targeted programs in vulnerable teens in
                  need of vulnerable?
                </p>
              </div>
              <form onSubmit={handleStorySubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Name"
                  value={storyForm.name}
                  onChange={(e) =>
                    setStoryForm({ ...storyForm, name: e.target.value })
                  }
                  className="bg-white border-0 h-12"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={storyForm.email}
                  onChange={(e) =>
                    setStoryForm({ ...storyForm, email: e.target.value })
                  }
                  className="bg-white border-0 h-12"
                  required
                />
                <Textarea
                  placeholder="Your story"
                  value={storyForm.story}
                  onChange={(e) =>
                    setStoryForm({ ...storyForm, story: e.target.value })
                  }
                  className="bg-white border-0 min-h-32"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-charcoal hover:bg-charcoal/90 text-white font-bold h-12 text-lg"
                >
                  SHARE YOUR STORY
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImpactsStoriesPage;
