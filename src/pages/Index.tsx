import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import AboutUs from "@/components/AboutUs";
import Programs from "@/components/Programs";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <ImpactStats />
        <section id="about">
          <AboutUs />
        </section>
        <section id="programs">
          <Programs />
        </section>
        <section id="events">
          <Events />
        </section>
        <Testimonials />
        <section id="get-involved">
          <GetInvolved />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
