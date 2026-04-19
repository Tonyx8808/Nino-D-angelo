"use client";

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" style={{
      minHeight:"100vh",display:"flex",alignItems:"center",
      padding:"80px 48px 100px",position:"relative",overflow:"hidden",
    }}>
      <div style={{
        position:"absolute",inset:0,pointerEvents:"none",
        background:"radial-gradient(ellipse 60% 70% at 75% 50%,rgba(201,144,58,0.06) 0%,transparent 65%),radial-gradient(ellipse 40% 40% at 20% 80%,rgba(201,144,58,0.04) 0%,transparent 60%)",
      }}/>
      <div style={{ position:"absolute",top:24,left:24,right:24,bottom:24,border:"1px solid rgba(201,144,58,0.1)",pointerEvents:"none" }}/>

      <div style={{
        position:"relative",zIndex:1,
        display:"grid",gridTemplateColumns:"1fr 1fr",
        gap:64,alignItems:"center",maxWidth:1100,margin:"0 auto",width:"100%",
      }}>
        <div>
          <div className="reveal" style={{ fontSize:10,letterSpacing:"0.22em",textTransform:"uppercase",color:"var(--gold)",marginBottom:24,display:"flex",alignItems:"center",gap:12 }}>
            <span style={{ width:32,height:1,background:"var(--gold)",display:"block" }}/>
            Cantautore · Attore · Regista · Icona Napoletana
          </div>
          <h1 className="reveal reveal-delay-1" style={{ fontFamily:"var(--ff-display)",fontSize:"clamp(64px,8vw,108px)",fontWeight:300,lineHeight:0.88,color:"var(--cream)",marginBottom:8 }}>
            Nino
          </h1>
          <h1 className="reveal reveal-delay-2" style={{ fontFamily:"var(--ff-display)",fontSize:"clamp(64px,8vw,108px)",fontWeight:700,fontStyle:"italic",lineHeight:0.88,color:"var(--gold)",marginBottom:40 }}>
            D&apos;Angelo
          </h1>
          <div className="reveal reveal-delay-2" style={{ width:80,height:1,background:"var(--gold)",marginBottom:28,opacity:0.5 }}/>
          <p className="reveal reveal-delay-3" style={{ fontFamily:"var(--ff-display)",fontStyle:"italic",fontSize:"clamp(15px,1.8vw,19px)",color:"#B0A898",lineHeight:1.85,marginBottom:44,maxWidth:440 }}>
            &ldquo;La voce di Napoli da 50 anni. Dal 1976 ad oggi, una carriera unica nella storia della musica napoletana.&rdquo;
          </p>
          <div className="reveal reveal-delay-3" style={{ display:"flex",gap:14,flexWrap:"wrap",marginBottom:64 }}>
            <button onClick={() => scrollTo("discografia")} style={{
              fontSize:10,letterSpacing:"0.18em",textTransform:"uppercase",
              padding:"14px 28px",background:"var(--gold)",color:"var(--ink)",
              border:"none",cursor:"pointer",fontWeight:500,fontFamily:"var(--ff-body)",
              transition:"background 0.25s",
            }}>
              Discografia
            </button>
            <button onClick={() => scrollTo("biografia")} style={{
              fontSize:10,letterSpacing:"0.18em",textTransform:"uppercase",
              padding:"13px 28px",background:"transparent",color:"var(--cream)",
              border:"1px solid rgba(245,240,232,0.25)",cursor:"pointer",fontWeight:400,fontFamily:"var(--ff-body)",
              transition:"border-color 0.25s",
            }}>
              La Biografia
            </button>
          </div>
          <div className="reveal reveal-delay-4" style={{ display:"flex",gap:48,flexWrap:"wrap" }}>
            {[["50+","Anni di carriera"],["58+","Album pubblicati"],["26+","Film"],["2","Premi David + Nastro"]].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily:"var(--ff-display)",fontSize:40,fontWeight:700,color:"var(--gold)",lineHeight:1,marginBottom:6 }}>{n}</div>
                <div style={{ fontSize:9,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--muted)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo */}
        <div className="reveal reveal-delay-2" style={{ position:"relative",height:480,display:"flex",alignItems:"center",justifyContent:"center" }}>
          <div style={{ position:"absolute",width:380,height:380,borderRadius:"50%",border:"1px solid var(--border)" }}/>
          <div style={{ position:"absolute",width:400,height:400,borderRadius:"50%",border:"2px solid transparent",borderTopColor:"var(--gold)",borderRightColor:"var(--gold)",opacity:0.35,transform:"rotate(-30deg)" }}/>
          <div style={{
            width:300,height:300,borderRadius:"50%",
            overflow:"hidden",border:"3px solid var(--gold)",
            boxShadow:"0 0 0 8px rgba(201,144,58,0.08),0 32px 64px rgba(0,0,0,0.6)",
            position:"relative",zIndex:1,
          }}>
            <img src="/nino.webp" alt="Nino D'Angelo" style={{ width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top" }}/>
          </div>
          <div style={{ position:"absolute",top:"8%",right:-10,background:"var(--gold)",color:"var(--ink)",fontSize:9,letterSpacing:"0.2em",textTransform:"uppercase",padding:"8px 16px",fontWeight:500,zIndex:2 }}>
            Attivo dal 1976
          </div>
          <div style={{ position:"absolute",bottom:"18%",left:-30,background:"var(--gold)",color:"var(--ink)",fontSize:9,letterSpacing:"0.2em",textTransform:"uppercase",padding:"8px 16px",fontWeight:500,zIndex:2 }}>
            David di Donatello 1998
          </div>
        </div>
      </div>
    </section>
  );
}