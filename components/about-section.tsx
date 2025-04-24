"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import Profile from "@/public/file (1).jpg";
import { Mail, MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-10 bg-muted/50 relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-5 md:gap-12 items-center"
        >
          <div className="md:w-1/2">
            <div className="relative p-2 w-full mx-auto md:mx-0 overflow-hidden rounded-md">
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem translateZ="80" className="w-full">
                    <Image
                      src={Profile}
                      className="h-full w-full object-cover object-center rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-block rounded-lg bg-primary/10 dark:bg-white/80 px-3 py-1 text-sm text-primary mb-3">
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
              and established compa
            </p>
            nies to create efficient, scalable, and user-friendly applications.
            <p className="text-muted-foreground mb-4">
              When I'm not coding, you can find me hiking, reading, or
              experimenting with new technologies. I'm always looking for new
              challenges and opportunities to grow as a developer.
            </p>
            <div className="grid grid-cols-1 text-left gap-2 mt-8">
              <div className="p-6 rounded-xl bg-background/80 backdrop-blur-sm border border-primary/10 transition-all duration-300 hover:border-primary/30">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Location</h3>
                    <p className="text-muted-foreground">Ahmdabad, Gujarat</p>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-xl bg-background/80 backdrop-blur-sm border border-primary/20 transition-all duration-300 hover:border-primary/50">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-muted-foreground">
                      hkavaiya001@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
