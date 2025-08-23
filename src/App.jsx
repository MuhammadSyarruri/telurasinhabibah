import AboutSection from "./assets/section/About";
import FooterSection from "./assets/section/Footer";
import HeroSection from "./assets/section/Hero";
import LocationSection from "./assets/section/Location";
import MitraSection from "./assets/section/Mitra";
import NavbarSection from "./assets/section/Navbar";
import ProcessSection from "./assets/section/Process";
import ProductSection from "./assets/section/Product";

export default function App() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <ProductSection />
      <LocationSection />
      <MitraSection />
      <FooterSection />
    </>
  );
}
