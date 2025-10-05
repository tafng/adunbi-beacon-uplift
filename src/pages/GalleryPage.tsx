import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const GalleryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [storyForm, setStoryForm] = useState({
    name: "",
    email: "",
    story: "",
  });

  const totalPages = 5;

  // Placeholder gallery images
  const galleryImages = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    category: i % 3 === 0 ? "events" : i % 3 === 1 ? "programs" : "community",
    description: "No Description",
  }));

  const handleStorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Story submitted!",
      description: "Thank you for sharing your story with us.",
    });
    setStoryForm({ name: "", email: "", story: "" });
  };

  const handlePrevImage = () => {
    if (selectedImage !== null && selectedImage > 1) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null && selectedImage < galleryImages.length) {
      setSelectedImage(selectedImage + 1);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-charcoal/90">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-12 tracking-wide">
              GALLERY
            </h1>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr,200px] gap-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-14 pl-6 pr-12 text-lg bg-white border-0 rounded-lg"
                />
                <Button
                  size="icon"
                  className="absolute right-2 top-2 bg-transparent hover:bg-transparent text-charcoal"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
              <Select value={filter} onValueChange={setFilter}>
                <SelectTrigger className="h-14 bg-white border-0 text-lg">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="events">Events</SelectItem>
                  <SelectItem value="programs">Programs</SelectItem>
                  <SelectItem value="community">Community</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="aspect-[4/3] bg-gradient-to-br from-amber-500 to-primary rounded-lg cursor-pointer hover-scale overflow-hidden"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/30"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-12 h-12 rounded-full border-2 border-primary bg-white disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full font-bold transition-colors ${
                  currentPage === i + 1
                    ? "bg-primary text-charcoal"
                    : "text-primary hover:bg-primary/10"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="w-12 h-12 rounded-full border-2 border-primary bg-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center hover:bg-primary/90 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-charcoal" />
            </button>
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
                  At TAF, we run targeted programs that address the real needs
                  of vulnerable.
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

      {/* Lightbox Dialog */}
      <Dialog
        open={selectedImage !== null}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl bg-white p-8">
          <div className="relative">
            {/* Main Image */}
            <div className="aspect-[4/3] bg-gradient-to-br from-amber-500 to-primary rounded-lg mb-4">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/30"></div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevImage}
              disabled={selectedImage === 1}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center hover:bg-primary/90 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-charcoal" />
            </button>
            <button
              onClick={handleNextImage}
              disabled={selectedImage === galleryImages.length}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center hover:bg-primary/90 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-charcoal" />
            </button>

            {/* Description */}
            <DialogDescription className="text-center text-foreground/70 mb-4">
              No Description
            </DialogDescription>

            {/* Thumbnail Strip */}
            <div className="flex gap-2 justify-center overflow-x-auto pb-2">
              {galleryImages.slice(0, 7).map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image.id)}
                  className={`w-20 h-16 bg-gradient-to-br from-amber-500 to-primary rounded cursor-pointer flex-shrink-0 hover-scale ${
                    selectedImage === image.id ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary/30"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default GalleryPage;
