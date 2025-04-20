"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform built with Next.js, Stripe, and a headless CMS.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["React", "Firebase", "Material UI", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Fitness Tracker",
    description:
      "A mobile-responsive fitness tracking application with progress visualization.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["GraphQL", "Chart.js", "MongoDB", " Apollo"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description:
      "A mobile-responsive fitness tracking application with progress visualization.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["GraphQL", "Chart.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Fitness Tracker",
    description:
      "A mobile-responsive fitness tracking application with progress visualization.",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["GraphQL", "Chart.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Portfolio
          </div>
          <h2 className="text-4xl font-extrabold mb-4 text-transparent bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 bg-clip-text">
            My Recent Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project showcases my
            skills and passion for development.
          </p>
        </motion.div>

        <HoverEffect items={projects} />

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full group relative overflow-hidden border-primary text-primary"
          >
            <Link href="#">
              <span className="relative z-10">View All Projects</span>
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
