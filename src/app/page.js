"use client";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import { useRef } from "react";

export default function Home() {
  const aboutmeRef = useRef();
  const portfolioRef = useRef();
  const skillsRef = useRef();
  return (
    <>
      <header className="w-full ">
        <Header
          aboutme={aboutmeRef}
          portfolio={portfolioRef}
          skills={skillsRef}
        />
      </header>
      <main className="w-full lg:h-[100vh]">
        <Landing />
      </main>
      <section ref={aboutmeRef} className="w-full  mt-[90px] ">
        <AboutMe />
      </section>
      <section ref={skillsRef} className="w-full mt-[90px]">
        <Skills />
      </section>
      <section ref={portfolioRef} className="w-full mt-[90px]">
        <Projects />
      </section>
      <footer className="w-full mt-[40px]">
        <Footer />
      </footer>
    </>
  );
}
