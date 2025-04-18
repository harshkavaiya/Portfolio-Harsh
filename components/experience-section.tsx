"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Class 11-12",
    company: "Vidhya Bharti School",
    period: "2020 - 2022",
    description:
      "Lead the frontend development team in building a SaaS platform. Implemented new features and optimized performance.",
    type: "education",
  },
  {
    id: 2,
    title: "Bechalor of computer application",
    company: "Adarsh BCA College",
    period: "2022 - 2025",
    description:
      "Developed and maintained multiple client projects. Worked with React, Node.js, and various databases.",
    type: "education",
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    company: "Coding Academy",
    period: "2018",
    description:
      "Intensive 12-week program focused on modern web development technologies and best practices.",
    type: "work",
  },
  {
    id: 4,
    title: "Junior Developer",
    company: "StartUp Vision",
    period: "2016 - 2018",
    description:
      "Assisted in developing web applications and gained experience in frontend technologies.",
    type: "work",
  },
  {
    id: 5,
    title: "B.S. in Computer Science",
    company: "Tech University",
    period: "2012 - 2016",
    description:
      "Focused on software engineering and web technologies. Graduated with honors.",
    type: "education",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Journey
          </div>
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that have shaped
            my career in web development.
          </p>
        </motion.div>
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20" />

          {/* Timeline items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "left-timeline" : "right-timeline"
              }`}
            >
              <div
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                  }`}
                >
                  <div className="p-4 rounded-xl bg-background/80 backdrop-blur-sm border border-primary/10 dark:border-primary/30 transition-all duration-300 hover:border-primary/50 dark:hover:border-primary/50">
                    <h3 className="font-bold text-xl">{exp.title}</h3>
                    <h4 className="text-primary font-medium">{exp.company}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {exp.period}
                    </p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background border border-primary shadow-lg">
                  {exp.type === "work" ? (
                    <Briefcase className="h-6 w-6 text-primary" />
                  ) : (
                    <GraduationCap className="h-6 w-6 text-primary" />
                  )}
                </div>
                <div className="w-1/2" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
