"use client";

const contacts = [
  { label:"Sito Ufficiale", value:"ninodangelo.it", icon:"🌐" },
  { label:"Facebook", value:"@NinoDAngeloOfficial", icon:"📘" },
  { label:"Instagram", value:"@ninodangelo_official", icon:"📷" },
  { label:"YouTube", value:"Nino D'Angelo Official", icon:"▶" },
];

const navLinks = ["home","biografia","discografia","cinema"];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="contatti" style={{ padding:"100px 48px 0",background:"#080806" }}>
      <div style={{ maxWidth:1100,margin:"0 auto" }}>
        <div className="reveal"><div className="section-eyebrow">Connettiti</div></div>
        <h2 className="section-h2 reveal reveal-delay-1">Con<em>tatti</em></h2>

        <div className="reveal reveal-delay-1" style={{ display:"flex",gap:1,background:"var(--border)",border:"1px solid var(--border)",marginTop:64,flexWrap:"wrap" }}>
          {contacts.map((c) => (
            <div key={c.label} style={{ flex:1,minWidth:160,background:"var(--ink)",padding:"32px 24px",textAlign:"center",transition:"background 0.25s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background="#181410"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background="var(--ink)"; }}
            >
              <span style={{ fontSize:16,marginBottom:14,display:"block",opacity:0.7 }}>{c.icon}</span>
              <div style={{ fontSize:8,letterSpacing:"0.25em",textTransform:"uppercase",color:"var(--gold)",marginBottom:8 }}>{c.label}</div>
              <div style={{ fontSize:11,color:"var(--muted)" }}>{c.value}</div>
            </div>
          ))}
        </div>

        <div style={{ borderTop:"1px solid var(--border)",paddingTop:28,marginTop:48,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16 }}>
          <div style={{ fontFamily:"var(--ff-display)",fontStyle:"italic",fontSize:22,color:"var(--gold)" }}>Nino D&apos;Angelo</div>
          <div style={{ fontSize:10,color:"#3A3530",letterSpacing:"0.05em" }}>© 2024 Fan Site — Omaggio al Re della Neomelodica Napoletana</div>
          <div style={{ display:"flex",gap:24 }}>
            {navLinks.map((s) => (
              <span key={s} onClick={() => scrollTo(s)} style={{ fontSize:8,letterSpacing:"0.2em",textTransform:"uppercase",color:"#3A3530",cursor:"pointer",transition:"color 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.color="var(--gold)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.color="#3A3530"; }}
              >{s}</span>
            ))}
          </div>
        </div>
        <div style={{ height:32 }}/>
      </div>
    </section>
  );
}