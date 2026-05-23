import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ServiceSection from "./components/ServiceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0C0C0C] text-white">

      <Navbar />

      <HeroSection />

      <AboutSection />

      <ExperienceSection />

      <ServiceSection />

      <ProjectsSection />

      <ContactSection />

      <Footer />


    </div>
  );
}

{/* <ContactSection /> */}

export default App;