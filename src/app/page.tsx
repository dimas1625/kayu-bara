import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import ReservationWidget from "@/components/ReservationWidget";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <MenuSection />
      <Testimonials />
      <ReservationWidget />
      <Footer />
    </main>
  );
}

