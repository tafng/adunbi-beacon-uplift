import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-image.jpg";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const [formData, setFormData] = useState({
    giftType: "",
    amount: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your donation!",
      description: "Your gift will help transform lives in our community.",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Empowering Lives,{" "}
              <span className="text-primary">Building Futures</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Join us in transforming lives through education, empowerment, and community
              development. Every contribution makes a lasting impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="font-semibold">
                Learn More
              </Button>
              <Button size="lg" variant="outline" className="font-semibold">
                Our Impact
              </Button>
            </div>
          </div>

          {/* Right - Donation Form */}
          <div className="animate-fade-in-up lg:ml-8">
            <div className="bg-secondary/50 backdrop-blur-sm p-8 rounded-lg border-2 border-primary/20 shadow-xl">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💛</span>
                  <h2 className="text-2xl font-bold">Your Gift Transforms Lives</h2>
                </div>
                <p className="text-muted-foreground">
                  Make a difference today with your generous donation
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="giftType">Type of Gift</Label>
                  <Select
                    value={formData.giftType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, giftType: value })
                    }
                  >
                    <SelectTrigger id="giftType">
                      <SelectValue placeholder="Select gift type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="one-time">One-Time Gift</SelectItem>
                      <SelectItem value="monthly">Monthly Donation</SelectItem>
                      <SelectItem value="yearly">Yearly Donation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    value={formData.amount}
                    onChange={(e) =>
                      setFormData({ ...formData, amount: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <Button type="submit" className="w-full font-semibold" size="lg">
                  DONATE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="The Adunbi Foundation volunteers making a difference"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      </div>
    </section>
  );
};

export default Hero;
