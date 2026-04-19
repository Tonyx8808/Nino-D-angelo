export default function NapoliBand() {
  return (
    <div style={{ padding:"80px 48px",textAlign:"center",background:"linear-gradient(180deg,#0A0A0A 0%,#0D0A06 50%,#0A0A0A 100%)" }}>
      <div className="reveal">
        <div className="section-eyebrow" style={{ justifyContent:"center",display:"flex" }}>Il Brano</div>
        <h2 style={{ fontFamily:"var(--ff-display)",fontSize:"clamp(48px,8vw,96px)",fontWeight:300,fontStyle:"italic",color:"var(--cream)",lineHeight:1,marginBottom:8 }}>
          Si turnasse
        </h2>
        <h2 style={{ fontFamily:"var(--ff-display)",fontSize:"clamp(48px,8vw,96px)",fontWeight:700,fontStyle:"italic",color:"var(--gold)",lineHeight:1,marginBottom:28 }}>
          a nascere
        </h2>
        <div style={{ width:60,height:1,background:"var(--gold)",margin:"0 auto 16px",opacity:0.5 }}/>
        <p style={{ fontSize:10,letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--muted)",marginBottom:52 }}>
          dall&apos;album <span style={{ color:"var(--gold)" }}>6.0</span> &nbsp;·&nbsp; 2017
        </p>

        <div style={{ maxWidth:640,margin:"0 auto",textAlign:"left" }}>
          {[
            { v:"Io si turnasse a nascere vulesse essere 'e ccà", accent:true },
            { v:"E nun vulesse crescere, pè nun me rassignà", accent:false },
            { v:"Nun me perdesse n'alba che saglie arete 'o mare", accent:false },
            { v:"Nun aspettasse 'e stelle, pè nun m'addurmì maje", accent:false },
            { v:"E a chi nun crede 'e favole, nun 'o lassasse maje sule", accent:true },
          ].map((item, i) => (
            <p key={i} style={{
              fontFamily:"var(--ff-display)",
              fontStyle:"italic",
              fontSize:"clamp(15px,1.8vw,21px)",
              color: item.accent ? "var(--cream)" : "#8A7A68",
              lineHeight:1.75,
              margin:0,
              paddingLeft: !item.accent ? 24 : 0,
            }}>
              {item.v}
            </p>
          ))}
          <p style={{ fontFamily:"var(--ff-display)",fontStyle:"italic",fontSize:"clamp(15px,1.8vw,21px)",color:"rgba(201,144,58,0.25)",lineHeight:1.75,margin:0,paddingTop:4 }}>
            · · ·
          </p>
        </div>

        <p style={{ fontFamily:"var(--ff-display)",fontStyle:"italic",fontSize:"clamp(13px,1.5vw,16px)",color:"#4A4038",maxWidth:520,margin:"44px auto 0",lineHeight:1.9 }}>
          Pubblicata l&apos;8 dicembre 2017 — colonna sonora del cortometraggio <em style={{ color:"#6A5A48" }}>Vivi la vita</em> con Alvaro Vitali.
        </p>
      </div>
    </div>
  );
}