import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Menu />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
