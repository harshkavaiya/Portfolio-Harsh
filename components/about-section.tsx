"use client";

import { MovingBorder } from "@/components/ui/moving-border";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import Profile from "@/public/file (1).jpg";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50 relative overflow-hidden">
      <Spotlight className="hidden md:block" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="md:w-1/2">
            <div className="relative w-full mx-auto md:mx-0 overflow-hidden rounded-md">
              <CardContainer className="inter-var ">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem translateZ="100" className="w-full">
                    <Image
                      src={Profile}
                      className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-3">
              About Me
            </div>
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Passionate Developer & Designer
            </h2>
            <p className="text-muted-foreground mb-4">
              I'm a passionate Full Stack Developer with over 5 years of
              experience building web applications. I specialize in JavaScript,
              React, Node.js, and modern web technologies.
            </p>
            <p className="text-muted-foreground mb-4">
              My journey in web development started when I built my first
              website at the age of 16. Since then, I've worked with startups
              and established companies to create efficient, scalable, and
              user-friendly applications.
            </p>
            <p className="text-muted-foreground mb-4">
              When I'm not coding, you can find me hiking, reading, or
              experimenting with new technologies. I'm always looking for new
              challenges and opportunities to grow as a developer.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-lg bg-background/80 backdrop-blur-sm border border-primary/10 transition-all duration-300 hover:border-primary/30">
                <h3 className="font-medium text-lg">Location</h3>
                <p className="text-muted-foreground">Botad, Gujarat - 364710</p>
              </div>
              <div className="p-4 rounded-lg bg-background/80 backdrop-blur-sm border border-primary/10 transition-all duration-300 hover:border-primary/30">
                <h3 className="font-medium text-lg">Email</h3>
                <p className="text-muted-foreground">
                  harshkavaiya30@gmail.com
                </p>
              </div>
              <div className="p-4 rounded-lg bg-background/80 backdrop-blur-sm border border-primary/10 transition-all duration-300 hover:border-primary/30">
                <h3 className="font-medium text-lg">Education</h3>
                <p className="text-muted-foreground">
                  B.C.A From Adarsh BCA College
                </p>
              </div>
              <div className="p-4 rounded-lg bg-background/80 backdrop-blur-sm border border-primary/10 transition-all duration-300 hover:border-primary/30">
                <h3 className="font-medium text-lg">Employment</h3>
                <p className="text-muted-foreground">Available for hire</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
