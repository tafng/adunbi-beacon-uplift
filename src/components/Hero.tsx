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
    paymentMethod: "card",
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
    <section className="relative bg-white py-12 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Hero Image */}
          <div className="animate-fade-in-up">
            <img
              src={heroImage}
              alt="The Adunbi Foundation team"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right - Donation Form */}
          <div className="animate-fade-in-up">
            <div className="bg-[#F5EFE7] p-8 rounded-lg shadow-xl">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💛</span>
                  <h2 className="text-2xl font-bold text-gray-900">Your Gift Transforms Lives</h2>
                </div>
                <p className="text-gray-600">
                  Make a difference today with your generous donation
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Frequency Selection */}
                <div>
                  <Label className="text-gray-700 mb-2 block">Select Frequency</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {["one-time", "monthly", "quarterly"].map((freq) => (
                      <button
                        key={freq}
                        type="button"
                        onClick={() => setFormData({ ...formData, frequency: freq })}
                        className={`py-2 px-3 text-sm font-semibold rounded-md transition-colors ${
                          formData.frequency === freq
                            ? "bg-[#D4A574] text-white"
                            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {freq.toUpperCase().replace("-", " ")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Amount Selection */}
                <div>
                  <Label className="text-gray-700 mb-2 block">Select Amount</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {quickAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setFormData({ ...formData, amount: amt, customAmount: "" })}
                        className={`py-3 px-4 text-sm font-semibold rounded-md transition-colors ${
                          formData.amount === amt
                            ? "bg-[#D4A574] text-white"
                            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        ₦{parseInt(amt).toLocaleString()}
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, amount: "custom" })}
                      className={`col-span-2 py-3 px-4 text-sm font-semibold rounded-md transition-colors ${
                        formData.amount === "custom"
                          ? "bg-[#D4A574] text-white"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      CUSTOMIZE
                    </button>
                  </div>
                </div>

                {/* Custom Amount Input */}
                {formData.amount === "custom" && (
                  <div>
                    <Label htmlFor="customAmount" className="text-gray-700">Enter Custom Amount (₦)</Label>
                    <Input
                      id="customAmount"
                      type="number"
                      placeholder="Enter amount"
                      value={formData.customAmount}
                      onChange={(e) =>
                        setFormData({ ...formData, customAmount: e.target.value })
                      }
                      className="bg-white"
                    />
                  </div>
                )}

                {/* Program Selection */}
                <div>
                  <Label htmlFor="program" className="text-gray-700">Select Program</Label>
                  <Select
                    value={formData.program}
                    onValueChange={(value) =>
                      setFormData({ ...formData, program: value })
                    }
                  >
                    <SelectTrigger id="program" className="bg-white">
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
                    <Label htmlFor="firstName" className="text-gray-700">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="bg-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="bg-white"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div>
                  <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-white"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+234 (000) 000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="bg-white"
                  />
                </div>

                {/* Payment Method */}
                <div>
                  <Label className="text-gray-700 mb-2 block">Payment Options</Label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === "card"}
                        onChange={(e) =>
                          setFormData({ ...formData, paymentMethod: e.target.value })
                        }
                        className="w-4 h-4 text-[#D4A574]"
                      />
                      <span className="text-gray-700">Credit/Debit Card</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank"
                        checked={formData.paymentMethod === "bank"}
                        onChange={(e) =>
                          setFormData({ ...formData, paymentMethod: e.target.value })
                        }
                        className="w-4 h-4 text-[#D4A574]"
                      />
                      <span className="text-gray-700">Bank Transfer</span>
                    </label>
                  </div>
                </div>

                {/* Tax Deduction Text */}
                <p className="text-xs text-gray-600">
                  Your donation is tax-deductible to the fullest extent allowed by law.
                </p>

                <Button type="submit" className="w-full font-semibold bg-[#D4A574] hover:bg-[#C89960] text-white" size="lg">
                  DONATE
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
