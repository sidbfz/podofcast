import Header from "@/components/Header";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import Episodes from "@/components/Episodes";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <About />
      <Testimonials />
      <Features />
      <Episodes />
      <Pricing />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
