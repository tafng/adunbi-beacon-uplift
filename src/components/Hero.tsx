import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-new.png";
import { useState } from "react";
import DonationDetailsDialog from "./DonationDetailsDialog";
import { Heart, Users, TrendingUp, Sparkles } from "lucide-react";

const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    frequency: "one-time",
    amount: "",
    customAmount: "",
    program: "",
  });

  const quickAmounts = [
    { value: "5000", impact: "Feed 10 families", icon: Heart },
    { value: "10000", impact: "Support 5 students", icon: Users },
    { value: "20000", impact: "Empower 3 women", icon: TrendingUp },
  ];

  const handleDonateClick = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.amount && !formData.customAmount) {
      return;
    }
    if (!formData.program) {
      return;
    }
    
    setDialogOpen(true);
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-[#F5EFE7]/20 py-12 lg:py-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A574]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Left - Hero Image */}
            <div className="animate-fade-in order-2 lg:order-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A574]/20 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <img
                src={heroImage}
                alt="The Adunbi Foundation transforming lives"
                className="relative w-full h-[450px] lg:h-[600px] object-cover rounded-3xl shadow-2xl ring-4 ring-[#D4A574]/10"
              />
              
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-xl border border-[#D4A574]/20 animate-fade-in">
                <p className="text-sm font-semibold text-gray-900">
                  <Sparkles className="inline w-4 h-4 text-[#D4A574] mr-1" />
                  Join 500+ donors this month
                </p>
              </div>
            </div>

            {/* Right - Simplified Donation Form */}
            <div className="animate-fade-in order-1 lg:order-2">
              <div className="bg-gradient-to-br from-white via-[#F5EFE7]/50 to-[#EDE4D6]/50 p-8 lg:p-10 rounded-3xl shadow-2xl border-2 border-[#D4A574]/20 backdrop-blur-sm">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-[#D4A574]/10 px-4 py-2 rounded-full mb-4">
                    <span className="text-sm font-semibold text-[#D4A574]">💛 Make an Impact</span>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                    Your Gift<br />Transforms Lives
                  </h1>
                  <p className="text-gray-700 text-lg">
                    Simple, secure, and making a real difference
                  </p>
                </div>

                <form onSubmit={handleDonateClick} className="space-y-7">
                  {/* Frequency Selection */}
                  <div>
                    <Label className="text-gray-800 font-bold mb-4 block text-lg">How often would you like to give?</Label>
                    <div className="grid grid-cols-3 gap-3">
                      {["one-time", "monthly", "quarterly"].map((freq) => (
                        <button
                          key={freq}
                          type="button"
                          onClick={() => setFormData({ ...formData, frequency: freq })}
                          className={`py-4 px-4 text-sm font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                            formData.frequency === freq
                              ? "bg-gradient-to-br from-[#D4A574] to-[#C89960] text-white shadow-lg ring-2 ring-[#D4A574]/50 ring-offset-2"
                              : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#D4A574]/50 hover:shadow-lg"
                          }`}
                        >
                          {freq.toUpperCase().replace("-", " ")}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Amount Selection with Impact */}
                  <div>
                    <Label className="text-gray-800 font-bold mb-4 block text-lg">Choose your impact</Label>
                    <div className="grid grid-cols-2 gap-4">
                      {quickAmounts.map((amt) => {
                        const Icon = amt.icon;
                        return (
                          <button
                            key={amt.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, amount: amt.value, customAmount: "" })}
                            className={`group py-5 px-4 text-left rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                              formData.amount === amt.value
                                ? "bg-gradient-to-br from-[#D4A574] to-[#C89960] text-white shadow-xl ring-2 ring-[#D4A574]/50 ring-offset-2"
                                : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#D4A574]/50 hover:shadow-xl"
                            }`}
                          >
                            <div className="flex items-start gap-2 mb-1">
                              <Icon className={`w-5 h-5 mt-0.5 ${formData.amount === amt.value ? "text-white" : "text-[#D4A574]"}`} />
                              <span className="font-bold text-xl">
                                ₦{parseInt(amt.value).toLocaleString()}
                              </span>
                            </div>
                            <p className={`text-xs mt-1 ${formData.amount === amt.value ? "text-white/90" : "text-gray-600"}`}>
                              {amt.impact}
                            </p>
                          </button>
                        );
                      })}
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, amount: "custom" })}
                        className={`col-span-2 py-5 px-4 text-center font-bold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                          formData.amount === "custom"
                            ? "bg-gradient-to-br from-[#D4A574] to-[#C89960] text-white shadow-xl ring-2 ring-[#D4A574]/50 ring-offset-2"
                            : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#D4A574]/50 hover:shadow-xl"
                        }`}
                      >
                        <Sparkles className="inline w-5 h-5 mr-2 mb-1" />
                        CUSTOMIZE YOUR GIFT
                      </button>
                    </div>
                  </div>

                  {/* Custom Amount Input */}
                  {formData.amount === "custom" && (
                    <div className="animate-fade-in">
                      <Label htmlFor="customAmount" className="text-gray-800 font-bold mb-3 block text-lg">
                        Enter Your Amount (₦)
                      </Label>
                      <Input
                        id="customAmount"
                        type="number"
                        placeholder="Your generous amount"
                        value={formData.customAmount}
                        onChange={(e) =>
                          setFormData({ ...formData, customAmount: e.target.value })
                        }
                        className="bg-white border-2 border-gray-200 focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574]/20 rounded-xl py-6 text-lg font-semibold"
                      />
                    </div>
                  )}

                  {/* Program Selection */}
                  <div>
                    <Label htmlFor="program" className="text-gray-800 font-bold mb-3 block text-lg">
                      Support a program close to your heart
                    </Label>
                    <Select
                      value={formData.program}
                      onValueChange={(value) =>
                        setFormData({ ...formData, program: value })
                      }
                    >
                      <SelectTrigger id="program" className="bg-white border-2 border-gray-200 focus:border-[#D4A574] focus:ring-2 focus:ring-[#D4A574]/20 rounded-xl py-7 text-base hover:shadow-lg transition-all">
                        <SelectValue placeholder="Choose a program ❤️" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wep">Women Empowerment Program (WEP)</SelectItem>
                        <SelectItem value="ymep">Youth Mentoring Empowerment Program (YMEP)</SelectItem>
                        <SelectItem value="cmp">Couples Marriage Program (CMP)</SelectItem>
                        <SelectItem value="asp">Academic Support Program (ASP)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Trust Signal & CTA */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200/50">
                      <p className="text-sm text-gray-700 text-center font-medium">
                        ✨ Tax-deductible • 🔒 100% Secure • 💛 Trusted by 500+ donors
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full font-bold text-lg bg-gradient-to-r from-[#D4A574] to-[#C89960] hover:from-[#C89960] hover:to-[#B88850] text-white shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 transition-all duration-300" 
                      size="lg"
                    >
                      💛 DONATE NOW
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DonationDetailsDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        donationData={formData}
      />
    </>
  );
};

export default Hero;
