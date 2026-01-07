import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { CoreStrengths } from "@/components/CoreStrengths";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectGrid } from "@/components/ProjectGrid";
import { SkillGroups } from "@/components/SkillGroups";
import { EducationSection } from "@/components/EducationSection";
import { CollaborationSection } from "@/components/CollaborationSection";
import { Footer } from "@/components/Footer";
import { SideNav } from "@/components/SideNav";
import { resumeData } from "@/content/resume";

export default function Home() {
  return (
    <>
      <Navbar />
      <SideNav />
      <main>
        {/* Hero Section */}
        <Hero />

        <Container>
          {/* About Section */}
          <Section id="about" title="About">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {resumeData.summary}
            </p>
          </Section>

          {/* Core Strengths Section */}
          <Section id="core-strengths" title="Core strengths">
            <CoreStrengths strengths={resumeData.coreStrengths} />
          </Section>

          {/* Skills Section */}
          <Section id="skills" title="Skills">
            <SkillGroups skillGroups={resumeData.skillGroups} />
          </Section>

          {/* Deployed Projects Section */}
          <Section id="projects" title="Deployed, up & running projects">
            <ProjectGrid projects={resumeData.projects} />
          </Section>

          {/* Education & Certifications Section */}
          <Section id="education" title="Education & Certifications">
            <EducationSection
              education={resumeData.education}
              certifications={resumeData.certifications}
            />
          </Section>

          {/* Experience Section */}
          <Section id="experience" title="Experience">
            <ExperienceTimeline experiences={resumeData.experience} />
          </Section>

          {/* Collaboration Section */}
          <Section id="collaboration" title="Collaboration and Opportunities">
            <CollaborationSection />
          </Section>

          {/* Contact Section */}
          <Section id="contact" title="Get in Touch">
            <div className="max-w-xl">
              <p className="text-muted-foreground mb-6">
                Interested in working together or discussing AI strategy? Feel
                free to reach out through any of the channels below.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${resumeData.email}`}
                  className="text-primary hover:underline"
                >
                  {resumeData.email}
                </a>
                <span className="text-muted-foreground">•</span>
                <a
                  href={resumeData.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn
                </a>
                <span className="text-muted-foreground">•</span>
                <a
                  href={resumeData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Section>
        </Container>
      </main>
      <Footer />
    </>
  );
}
