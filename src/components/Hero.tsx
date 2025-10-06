import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import DonationDetailsDialog from "./DonationDetailsDialog";
import { Gift } from "lucide-react";

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
      <section className="min-h-screen">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left Panel - Decorative */}
          <div className="bg-[#F5EFE7] flex items-center justify-center p-8 lg:p-16">
            <div className="max-w-md text-center space-y-6">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#D4A574] rounded-full">
                <Gift className="w-12 h-12 text-white" />
              </div>
              <p className="text-sm text-gray-600 uppercase tracking-wide">
                Every gift helps us reach more families in need
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Your Gift<br />Transforms <span className="text-[#D4A574] italic">Lives</span>
              </h1>
            </div>
          </div>

          {/* Right Panel - Donation Form */}
          <div className="bg-white flex items-center justify-center p-6 lg:p-16">
            <div className="w-full max-w-md">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
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
                          className={`flex-1 py-3 px-4 text-sm font-semibold rounded border-2 transition-all ${
                            formData.amount === amount
                              ? "bg-[#D4A574] text-white border-[#D4A574]"
                              : "bg-white text-gray-700 border-gray-300 hover:border-[#D4A574]"
                          }`}
                        >
                          ₦{parseInt(amount).toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, amount: "custom" })}
                      className={`w-full py-3 px-4 text-sm font-semibold rounded border-2 transition-all ${
                        formData.amount === "custom"
                          ? "bg-[#D4A574] text-white border-[#D4A574]"
                          : "bg-white text-gray-700 border-gray-300 hover:border-[#D4A574]"
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
                        className="bg-white border-2 border-gray-300 focus:border-[#D4A574] rounded py-3 text-base"
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
                          className={`py-3 px-2 text-xs font-bold uppercase rounded border-2 transition-all ${
                            formData.frequency === freq
                              ? "bg-[#D4A574] text-white border-[#D4A574]"
                              : "bg-white text-gray-700 border-gray-300 hover:border-[#D4A574]"
                          }`}
                        >
                          {freq.replace("-", " ")}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div>
                    <Label htmlFor="program" className="text-gray-700 text-sm mb-2 block">
                      Select the program you want to donate into
                    </Label>
                    <Select
                      value={formData.program}
                      onValueChange={(value) =>
                        setFormData({ ...formData, program: value })
                      }
                    >
                      <SelectTrigger id="program" className="bg-white border-2 border-gray-300 focus:border-[#D4A574] rounded py-3 text-sm">
                        <SelectValue placeholder="Select program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wep">Women Empowerment Program (WEP)</SelectItem>
                        <SelectItem value="ymep">Youth Mentoring Empowerment Program (YMEP)</SelectItem>
                        <SelectItem value="cmp">Couples Marriage Program (CMP)</SelectItem>
                        <SelectItem value="asp">Academic Support Program (ASP)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Trust Message */}
                  <p className="text-xs text-gray-600 text-center">
                    🔒 A Secure payment. 100% of your donation goes directly into TAF programs.
                  </p>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full font-bold text-base py-6 bg-[#D4A574] hover:bg-[#C89960] text-white rounded transition-all" 
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
