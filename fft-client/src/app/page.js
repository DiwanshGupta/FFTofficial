"use client";
import { useEffect } from "react";
import Contact from "./components/contact";
import Service from "./components/services";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div>
        <Service />
        <Contact />
      </div>
    </>
  );
}
