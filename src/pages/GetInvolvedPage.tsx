import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Gift, Users, Handshake } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const GetInvolvedPage = () => {
  const { toast } = useToast();
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interests: "",
  });

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your donation!",
      description: "Your generosity helps us transform lives.",
    });
  };

  const handleVolunteerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('volunteers')
        .insert([
          {
            name: volunteerForm.name,
            email: volunteerForm.email,
            phone: volunteerForm.phone,
            message: volunteerForm.message,
            interests: volunteerForm.interests,
          }
        ]);

      if (error) throw error;

      toast({
        title: "Thank you for volunteering!",
        description: "We'll be in touch with you soon.",
      });
      setVolunteerForm({ name: "", email: "", phone: "", message: "", interests: "" });
    } catch (error) {
      console.error('Error submitting volunteer form:', error);
      toast({
        title: "Error submitting form",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-muted to-background py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                GET <span className="text-primary">INVOLVED</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Empowering lives, building stronger communities.
              </p>
            </div>
          </div>
        </section>

        {/* Donate Section */}
        <section id="donate" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Left Side - Message */}
              <div className="bg-primary/10 rounded-lg p-12 text-center">
                <Gift className="w-24 h-24 mx-auto mb-8 text-primary" />
                <p className="text-sm font-medium mb-6 bg-background/80 rounded-full px-6 py-2 inline-block">
                  Every gift helps us reach more families in need
                </p>
                <h2 className="text-5xl md:text-6xl font-bold mb-4">
                  Your Gift<br />
                  Transforms<br />
                  <span className="italic font-serif text-primary">Lives</span>
                </h2>
              </div>

              {/* Right Side - Donation Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Donation Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleDonateSubmit} className="space-y-6">
                    {/* Amount Selection */}
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-3">
                        {["5000", "10000", "20000"].map((amount) => (
                          <Button
                            key={amount}
                            type="button"
                            variant={donationAmount === amount ? "default" : "outline"}
                            onClick={() => {
                              setDonationAmount(amount);
                              setCustomAmount("");
                            }}
                          >
                            ₦{parseInt(amount).toLocaleString()}
                          </Button>
                        ))}
                      </div>
                      <Input
                        placeholder="CUSTOM FEE"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setDonationAmount("");
                        }}
                      />
                    </div>

                    {/* Frequency */}
                    <div className="space-y-2">
                      <Label>Frequency</Label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { value: "one-time", label: "ONE-TIME" },
                          { value: "monthly", label: "MONTHLY" },
                          { value: "quarterly", label: "QUARTERLY" },
                        ].map((freq) => (
                          <Button
                            key={freq.value}
                            type="button"
                            variant={frequency === freq.value ? "default" : "outline"}
                            onClick={() => setFrequency(freq.value)}
                          >
                            {freq.label}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Program Selection */}
                    <div className="space-y-2">
                      <Label>Select the program you want to donate into</Label>
                      <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                        <option>Select a program</option>
                        <option>Youth Mentorship & Empowerment Program (YMEP)</option>
                        <option>Women Empowerment Program (WEP)</option>
                        <option>Community Outreach Program</option>
                        <option>Advocacy & Sensitization Program (ASP)</option>
                        <option>Capacity Building & Mentorship Program (CMP)</option>
                        <option>Education Support Program</option>
                      </select>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      A Secure payment. 100% of your donation goes directly into TAF programs.
                    </p>

                    <Button type="submit" className="w-full" size="lg">
                      DONATE
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section id="volunteer" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-primary">Volunteer</span>
                </h2>
              </div>

              <Card className="border-2 border-primary/20">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <img
                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"
                        alt="Volunteer speaking"
                        className="rounded-lg w-full h-48 object-cover"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop"
                        alt="Volunteers at work"
                        className="rounded-lg w-full h-48 object-cover"
                      />
                    </div>
                    <p className="text-center text-muted-foreground">
                      At TAF, we run targeted programs that address the real needs of vulnerable.
                    </p>
                  </div>

                  <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Name *"
                          required
                          value={volunteerForm.name}
                          onChange={(e) =>
                            setVolunteerForm({ ...volunteerForm, name: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <Input
                          placeholder="Email *"
                          type="email"
                          required
                          value={volunteerForm.email}
                          onChange={(e) =>
                            setVolunteerForm({ ...volunteerForm, email: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Phone Number *"
                          required
                          value={volunteerForm.phone}
                          onChange={(e) =>
                            setVolunteerForm({ ...volunteerForm, phone: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <Input placeholder="Location (Optional)" />
                      </div>
                    </div>
                    <div>
                      <Textarea
                        placeholder="Tell us why you want to volunteer *"
                        required
                        value={volunteerForm.message}
                        onChange={(e) =>
                          setVolunteerForm({ ...volunteerForm, message: e.target.value })
                        }
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partner Section */}
        <section id="partner" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Partner <span className="text-primary">With Us</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  At The Adunbi Charity Foundation (TAF), we believe that lasting change is only possible
                  when we work together. By partnering with us, you join a movement dedicated to
                  transforming lives, empowering communities, and creating opportunities for those who
                  need them most.
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="why-partner" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold">
                    Why Partner With Us?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-3">
                    <p>
                      <strong>Proven Impact:</strong> Our programs have directly improved the lives of
                      thousands of individuals across communities.
                    </p>
                    <p>
                      <strong>Collaborative Approach:</strong> We work hand-in-hand with partners to
                      design and implement impactful initiatives.
                    </p>
                    <p>
                      <strong>Transparency & Accountability:</strong> We ensure that every contribution
                      is used effectively and report regularly on our progress.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="ways-to-partner" className="border rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-semibold">
                    Ways to partner with us
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-3">
                    <p>
                      <strong>Corporate Sponsorship:</strong> Support our programs through financial
                      contributions or in-kind donations.
                    </p>
                    <p>
                      <strong>Program Collaboration:</strong> Co-create and implement programs that align
                      with your organization's values and goals.
                    </p>
                    <p>
                      <strong>Employee Engagement:</strong> Encourage your team to volunteer or
                      participate in our initiatives.
                    </p>
                    <p>
                      <strong>Event Partnerships:</strong> Partner with us for fundraising events,
                      awareness campaigns, or community outreach activities.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default GetInvolvedPage;
