import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import DonationDetailsDialog from "./DonationDetailsDialog";
import { Gift } from "lucide-react";
import heroLeftImage from "@/assets/hero-left.png";

const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    frequency: "one-time",
    amount: "",
    customAmount: "",
    program: "",
  });

  const quickAmounts = ["5000", "10000", "20000"];

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
      <section className="min-h-screen pt-20 relative overflow-hidden">
        {/* Full-Width Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroLeftImage} 
            alt="TAF volunteers making a difference" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">
            
            {/* Hero Text - Left Side */}
            <div className="text-white space-y-6 animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Lives <br />
                <span className="text-[#D4A574]">Today</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 max-w-lg">
                Join TAF in empowering communities through education, mentorship, and sustainable development programs.
              </p>
              <div className="flex gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-[#D4A574]" />
                  <span>100% goes to programs</span>
                </div>
              </div>
            </div>

            {/* Floating Glassmorphism Donation Card - Right Side */}
            <div className="lg:ml-auto w-full max-w-md animate-scale-in">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 sm:p-8 rounded-2xl shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Donation Options
                </h2>

                <form onSubmit={handleDonateClick} className="space-y-6">
                  {/* Preset Amounts */}
                  <div>
                    <div className="flex gap-3 mb-3">
                      {quickAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => setFormData({ ...formData, amount, customAmount: "" })}
                          className={`flex-1 py-3 px-4 text-sm font-semibold rounded-lg border-2 transition-all ${
                            formData.amount === amount
                              ? "bg-[#D4A574] text-white border-[#D4A574] shadow-lg"
                              : "bg-white/10 text-white border-white/30 hover:border-[#D4A574] hover:bg-white/20"
                          }`}
                        >
                          ₦{parseInt(amount).toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, amount: "custom" })}
                      className={`w-full py-3 px-4 text-sm font-semibold rounded-lg border-2 transition-all ${
                        formData.amount === "custom"
                          ? "bg-[#D4A574] text-white border-[#D4A574] shadow-lg"
                          : "bg-white/10 text-white border-white/30 hover:border-[#D4A574] hover:bg-white/20"
                      }`}
                    >
                      CUSTOM FEE
                    </button>
                  </div>

                  {/* Custom Amount Input */}
                  {formData.amount === "custom" && (
                    <div className="animate-fade-in">
                      <Input
                        id="customAmount"
                        type="number"
                        placeholder="Enter amount"
                        value={formData.customAmount}
                        onChange={(e) =>
                          setFormData({ ...formData, customAmount: e.target.value })
                        }
                        className="bg-white/20 backdrop-blur-sm border-2 border-white/30 focus:border-[#D4A574] rounded-lg py-3 text-base text-white placeholder:text-white/60"
                      />
                    </div>
                  )}

                  {/* Frequency Selection */}
                  <div>
                    <div className="grid grid-cols-3 gap-3">
                      {["one-time", "monthly", "quarterly"].map((freq) => (
                        <button
                          key={freq}
                          type="button"
                          onClick={() => setFormData({ ...formData, frequency: freq })}
                          className={`py-3 px-2 text-xs font-bold uppercase rounded-lg border-2 transition-all ${
                            formData.frequency === freq
                              ? "bg-[#D4A574] text-white border-[#D4A574] shadow-lg"
                              : "bg-white/10 text-white border-white/30 hover:border-[#D4A574] hover:bg-white/20"
                          }`}
                        >
                          {freq.replace("-", " ")}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div>
                    <Label htmlFor="program" className="text-white text-sm mb-2 block">
                      Select the program you want to donate into
                    </Label>
                    <Select
                      value={formData.program}
                      onValueChange={(value) =>
                        setFormData({ ...formData, program: value })
                      }
                    >
                      <SelectTrigger id="program" className="bg-white/20 backdrop-blur-sm border-2 border-white/30 focus:border-[#D4A574] rounded-lg py-3 text-sm text-white">
                        <SelectValue placeholder="Select program" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900/95 backdrop-blur-xl border-white/20">
                        <SelectItem value="wep" className="text-white hover:bg-white/10">Women Empowerment Program (WEP)</SelectItem>
                        <SelectItem value="ymep" className="text-white hover:bg-white/10">Youth Mentoring Empowerment Program (YMEP)</SelectItem>
                        <SelectItem value="cmp" className="text-white hover:bg-white/10">Couples Marriage Program (CMP)</SelectItem>
                        <SelectItem value="asp" className="text-white hover:bg-white/10">Academic Support Program (ASP)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Trust Message */}
                  <p className="text-xs text-white/80 text-center">
                    🔒 A Secure payment. 100% of your donation goes directly into TAF programs.
                  </p>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full font-bold text-base py-6 bg-[#D4A574] hover:bg-[#C89960] text-white rounded-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105" 
                  >
                    DONATE
                  </Button>
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
