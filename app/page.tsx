"use client";
import { useReveal } from "./useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuoteBand from "./components/QuoteBand";
import Biografia from "./components/Biografia";
import NapuleBand from "./components/NapoliBand";
import Discografia from "./components/Discografia";
import Cinema from "./components/Cinema";
import Footer from "./components/Footer";

export default function Page() {
  useReveal();
  return (
    <>
      <Navbar />
      <Hero />
      <QuoteBand />
      <Biografia />
      <NapuleBand />
      <Discografia />
      <Cinema />
      <Footer />
    </>
  );
}