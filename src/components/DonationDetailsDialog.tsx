import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

interface DonationDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  donationData: {
    frequency: string;
    amount: string;
    customAmount: string;
    program: string;
  };
}

const DonationDetailsDialog = ({ open, onOpenChange, donationData }: DonationDetailsDialogProps) => {
  const [step, setStep] = useState<"details" | "success">("details");
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const getAmount = () => {
    return donationData.amount === "custom" 
      ? donationData.customAmount 
      : donationData.amount;
  };

  const getProgramName = (value: string) => {
    const programs: Record<string, string> = {
      wep: "Women Empowerment Program",
      ymep: "Youth Mentoring Empowerment Program",
      cmp: "Couples Marriage Program",
      asp: "Academic Support Program",
    };
    return programs[value] || value;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
    setTimeout(() => {
      toast({
        title: "Thank you for your donation!",
        description: "Your gift will help transform lives in our community.",
      });
      onOpenChange(false);
      setTimeout(() => {
        setStep("details");
        setPersonalInfo({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        });
      }, 300);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] bg-gradient-to-br from-white to-gray-50">
        {step === "details" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900">
                Complete Your Donation
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Step 2 of 2 - Just a few more details
              </DialogDescription>
            </DialogHeader>

            {/* Donation Summary */}
            <div className="bg-gradient-to-r from-[#F5EFE7] to-[#EDE4D6] p-5 rounded-xl border-2 border-[#D4A574]/30 mb-6">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Your Donation Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Amount:</span>
                  <span className="font-bold text-xl text-[#D4A574]">
                    ₦{parseInt(getAmount()).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Frequency:</span>
                  <span className="font-semibold text-gray-900 capitalize">
                    {donationData.frequency.replace("-", " ")}
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-gray-700">Program:</span>
                  <span className="font-semibold text-gray-900 text-right max-w-[250px]">
                    {getProgramName(donationData.program)}
                  </span>
                </div>
              </div>
            </div>

            {/* Personal Information Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-gray-800 font-semibold mb-2 block">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={personalInfo.firstName}
                    onChange={(e) =>
                      setPersonalInfo({ ...personalInfo, firstName: e.target.value })
                    }
                    required
                    className="bg-white border-2 border-gray-200 focus:border-[#D4A574] rounded-lg"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-800 font-semibold mb-2 block">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={personalInfo.lastName}
                    onChange={(e) =>
                      setPersonalInfo({ ...personalInfo, lastName: e.target.value })
                    }
                    required
                    className="bg-white border-2 border-gray-200 focus:border-[#D4A574] rounded-lg"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-800 font-semibold mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={personalInfo.email}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, email: e.target.value })
                  }
                  required
                  className="bg-white border-2 border-gray-200 focus:border-[#D4A574] rounded-lg"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-800 font-semibold mb-2 block">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+234 (000) 000-0000"
                  value={personalInfo.phone}
                  onChange={(e) =>
                    setPersonalInfo({ ...personalInfo, phone: e.target.value })
                  }
                  required
                  className="bg-white border-2 border-gray-200 focus:border-[#D4A574] rounded-lg"
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700 text-center">
                  🔒 Your information is secure and will never be shared
                </p>
              </div>

              <Button
                type="submit"
                className="w-full font-bold bg-gradient-to-r from-[#D4A574] to-[#C89960] hover:from-[#C89960] hover:to-[#B88850] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                size="lg"
              >
                Complete Donation
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center animate-fade-in">
            <div className="mb-6 flex justify-center">
              <CheckCircle2 className="w-20 h-20 text-green-500 animate-scale-in" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Thank You! 🎉
            </h3>
            <p className="text-gray-700 text-lg mb-2">
              Your generous donation of{" "}
              <span className="font-bold text-[#D4A574]">
                ₦{parseInt(getAmount()).toLocaleString()}
              </span>
            </p>
            <p className="text-gray-600">
              is making a real difference in our community!
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DonationDetailsDialog;
