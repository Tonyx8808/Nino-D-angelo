"use client";
import { useState, useEffect } from "react";

const sections = ["home", "biografia", "discografia", "cinema", "contatti"];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.35 }
    );
    sections.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav style={{
      position:"fixed",top:0,left:0,right:0,zIndex:100,
      display:"flex",alignItems:"center",justifyContent:"space-between",
      padding:"0 48px",height:64,
      background:"rgba(14,12,10,0.92)",
      backdropFilter:"blur(12px)",
      borderBottom:"1px solid var(--border)",
    }}>
      <div
        onClick={() => scrollTo("home")}
        style={{ fontFamily:"var(--ff-display)",fontSize:20,fontWeight:600,color:"var(--gold)",letterSpacing:"0.02em",cursor:"pointer" }}
      >
        Nino D&apos;Angelo
      </div>
      <div style={{ display:"flex",gap:36 }}>
        {sections.map((s) => (
          <span
            key={s}
            onClick={() => scrollTo(s)}
            style={{
              fontSize:10,letterSpacing:"0.18em",textTransform:"uppercase",
              color: active === s ? "var(--cream)" : "var(--muted)",
              cursor:"pointer",transition:"color 0.25s",fontWeight:400,
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </nav>
  );
}