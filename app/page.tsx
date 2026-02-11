import { AboutMe } from "~/components/about-me"
import { Contact } from "~/components/contact"
import { HeroSection } from "~/components/hero-section"
import { Packages } from "~/components/packages"
import { Projects } from "~/components/projects"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <Projects />
      <Packages />
      <Contact />
    </>
  );
}
