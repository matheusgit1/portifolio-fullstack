"use client";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
// import Contact from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <About />
      <Hero />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}
