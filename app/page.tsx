import { AboutMe } from "~/components/about-me"
import { Contact } from "~/components/contact"
import { HeroSection } from "~/components/hero-section"
import { Packages } from "~/components/packages"
import { Projects } from "~/components/projects"
import { Skills } from "~/components/skills"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Projects />
      <Packages />
      <Skills />
      <Contact />
    </>
  );
}
