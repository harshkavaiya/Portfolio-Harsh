import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "next-themes";
import UnderDevelopment from "@/components/under-development";

export default function Home() {
  const underDevelop = false;
  return (
    <ThemeProvider attribute="class">
      {underDevelop ? (
        <UnderDevelopment />
      ) : (
        <div className="min-h-screen bg-background">
          <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <div className="font-bold text-xl">
                <a href="#" className="flex items-center gap-2">
                  <span className="text-primary">Harsh Kavaiya</span>
                </a>
              </div>
              <nav className="hidden md:flex gap-6">
                <a
                  href="#about"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#skills"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#experience"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </nav>
              <div className="flex items-center gap-4">
                <ModeToggle />
                <Button className="hidden md:flex" asChild>
                  <a href="#contact">Hire Me</a>
                </Button>
              </div>
            </div>
          </header>
          <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ExperienceSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
}
