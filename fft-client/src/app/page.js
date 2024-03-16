"use client";
import { useEffect } from "react";
import Contact from "./components/contact";
import Service from "./components/services";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroBanner from "./components/layout/HeroBanner";
import Analytics from "./components/Analytics";
import Testimonials from "./components/Testimonials";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  // Now you can console log the token
  return (
    <>
      <div>
        <HeroBanner />
        <Analytics />
        <Service />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
}
