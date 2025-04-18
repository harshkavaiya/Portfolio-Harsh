"use client";

import { motion } from "framer-motion";
import { AnimatedGradient } from "@/components/ui/animated-gradient";

const skills = [
  { name: "JavaScript", level: 95 },
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Next.js", level: 85 },
  { name: "CSS/Tailwind", level: 90 },
  { name: "GraphQL", level: 75 },
  { name: "MongoDB", level: 80 },
  { name: "PostgreSQL", level: 75 },
  { name: "Docker", level: 70 },
  { name: "AWS", level: 65 },
  { name: "UI/UX Design", level: 75 },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/50 relative overflow-hidden">
      <AnimatedGradient
        className="absolute inset-0"
        colors={["#5EEAD4", "#A855F7", "#3B82F6"]}
        blur={150}
      />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Expertise
          </div>
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            My Skills & Proficiency
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development
            world. Here's a snapshot of my technical skills and proficiency
            levels.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="p-4 rounded-xl bg-background/80 backdrop-blur-sm border border-primary/10 transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary/80 to-primary"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold mb-6 text-center">
            Other Skills & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Git",
              "Figma",
              "Jest",
              "Redux",
              "Webpack",
              "Vercel",
              "Netlify",
              "Firebase",
              "Storybook",
              "Cypress",
            ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-primary/10 text-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
