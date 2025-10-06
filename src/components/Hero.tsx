import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-new.png";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Hero = () => {
  const [formData, setFormData] = useState({
    frequency: "one-time",
    amount: "",
    customAmount: "",
    program: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const quickAmounts = ["5000", "10000", "20000"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your donation!",
      description: "Your gift will help transform lives in our community.",
    });
  };

  return (
    <section className="relative bg-gradient-to-br from-white to-gray-50 py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left - Hero Image */}
          <div className="animate-fade-in-up order-2 lg:order-1">
            <img
              src={heroImage}
              alt="The Adunbi Foundation team"
              className="w-full h-[500px] lg:h-[650px] object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Right - Donation Form */}
          <div className="animate-fade-in-up order-1 lg:order-2">
            <div className="bg-gradient-to-br from-[#F5EFE7] to-[#EDE4D6] p-8 lg:p-10 rounded-2xl shadow-2xl border border-[#D4A574]/20">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">💛</span>
                  <h2 className="text-3xl font-bold text-gray-900">Your Gift Transforms Lives</h2>
                </div>
                <p className="text-gray-700 text-lg">
                  Make a difference today with your generous donation
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Frequency Selection */}
                <div>
                  <Label className="text-gray-800 font-semibold mb-3 block text-base">How often would you like to give?</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {["one-time", "monthly", "quarterly"].map((freq) => (
                      <button
                        key={freq}
                        type="button"
                        onClick={() => setFormData({ ...formData, frequency: freq })}
                        className={`py-3 px-4 text-sm font-bold rounded-xl transition-all transform hover:scale-105 ${
                          formData.frequency === freq
                            ? "bg-[#D4A574] text-white shadow-lg"
                            : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#D4A574]/50 hover:shadow-md"
                        }`}
                      >
                        {freq.toUpperCase().replace("-", " ")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Amount Selection */}
                <div>
                  <Label className="text-gray-800 font-semibold mb-3 block text-base">Choose your impact</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {quickAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setFormData({ ...formData, amount: amt, customAmount: "" })}
                        className={`py-4 px-4 text-base font-bold rounded-xl transition-all transform hover:scale-105 ${
                          formData.amount === amt
                            ? "bg-[#D4A574] text-white shadow-lg"
                            : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#D4A574]/50 hover:shadow-md"
                        }`}
                      >
                        ₦{parseInt(amt).toLocaleString()}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, amount: "custom" })}
                      className={`col-span-2 py-4 px-4 text-base font-bold rounded-xl transition-all transform hover:scale-105 ${
                        formData.amount === "custom"
                          ? "bg-[#D4A574] text-white shadow-lg"
                          : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#D4A574]/50 hover:shadow-md"
                      }`}
                    >
                      💝 CUSTOMIZE YOUR GIFT
                    </button>
                  </div>
                </div>

                {/* Custom Amount Input */}
                {formData.amount === "custom" && (
                  <div className="animate-fade-in">
                    <Label htmlFor="customAmount" className="text-gray-800 font-semibold mb-2 block">Enter Your Amount (₦)</Label>
                    <Input
                      id="customAmount"
                      type="number"
                      placeholder="Enter your generous amount"
                      value={formData.customAmount}
                      onChange={(e) =>
                        setFormData({ ...formData, customAmount: e.target.value })
                      }
                      className="bg-white border-2 border-gray-200 focus:border-[#D4A574] rounded-xl py-3 text-base"
                    />
                  </div>
                )}

                {/* Program Selection */}
                <div>
                  <Label htmlFor="program" className="text-gray-800 font-semibold mb-2 block text-base">Support a program close to your heart</Label>
                  <Select
                    value={formData.program}
                    onValueChange={(value) =>
                      setFormData({ ...formData, program: value })
                    }
                  >
                    <SelectTrigger id="program" className="bg-white border-2 border-gray-200 rounded-xl py-6 text-base">
                      <SelectValue placeholder="Choose a program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wep">Women Empowerment Program (WEP)</SelectItem>
                      <SelectItem value="ymep">Youth Mentoring Empowerment Program (YMEP)</SelectItem>
                      <SelectItem value="cmp">Couples Marriage Program (CMP)</SelectItem>
                      <SelectItem value="asp">Academic Support Program (ASP)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-800 font-semibold mb-2 block">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="bg-white border-2 border-gray-200 focus:border-[#D4A574] rounded-xl py-3"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-800 font-semibold mb-2 block">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="bg-white border-2 border-gray-200 focus:border-[#D4A574] rounded-xl py-3"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div>
                  <Label htmlFor="email" className="text-gray-800 font-semibold mb-2 block">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-white border-2 border-gray-200 focus:border-[#D4A574] rounded-xl py-3"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-800 font-semibold mb-2 block">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+234 (000) 000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-white border-2 border-gray-200 focus:border-[#D4A574] rounded-xl py-3"
                  />
                </div>

                {/* Tax Deduction Text */}
                <div className="bg-white/50 p-4 rounded-xl border border-[#D4A574]/20">
                  <p className="text-sm text-gray-700 text-center">
                    ✨ Your donation is tax-deductible to the fullest extent allowed by law. Thank you for your generosity!
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full font-bold bg-gradient-to-r from-[#D4A574] to-[#C89960] hover:from-[#C89960] hover:to-[#B88850] text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all" 
                  size="lg"
                >
                  💛 DONATE NOW
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
