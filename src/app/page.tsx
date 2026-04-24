"use client";

import Image from "next/image";
import {
  Layout,
  Intro,
  Container,
  Projects,
  Contact,
  Footer,
  Quote,
  DomHead,
} from "../components";
import React, { useEffect } from "react";
import Aos from "aos";

export default function Home() {
  return (
    <React.Fragment>
      {/* <DomHead /> */}
      <Layout>
        <h1>hello</h1>
        {/* <Intro /> */}
        {/* <Projects />
        <Contact />
        <Footer /> */}
      </Layout>
    </React.Fragment>
  );
}
