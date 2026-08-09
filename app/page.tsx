import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Platform from "@/components/sections/Platform";
// import Surfaces from "@/components/sections/Surfaces";
import Investors from "@/components/sections/Investors";
import Security from "@/components/sections/Security";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Surfaces from "@/components/sections/surfaces";

export default function Home() {
  return (
    <main className="flex-1 bg-paper">
      <Navbar />
      <Hero />
      <Problem />
      <Platform />
      <Surfaces />
      <Investors />
      <Security />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
