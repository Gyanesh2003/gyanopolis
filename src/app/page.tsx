import Hero from "./components/Hero";
import About from "./components/About";
import DomainSkills from "./components/DomainSkills";
import Projects from "./components/Projects";
import SkillsSlider from "./components/SkillsSlider";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <Hero />
      <About />
      <DomainSkills />
      <Projects />
      <SkillsSlider />
      <Contact />
    </main>
  );
}
