const albums = [
  { year:"1976", title:"'A storia mia ('O Scippo)", desc:"Il primo album, inciso a 19 anni con fondi propri e venduto porta a porta. Successo immediato nel Sud Italia.", badge:"Esordio" },
  { year:"1982", title:"'Nu jeans e 'na maglietta", desc:"Oltre un milione di copie. Il film omonimo batte Flashdance al botteghino. Esplode il 'fenomeno Nino D'Angelo'.", badge:"1M copie" },
  { year:"1987", title:"Cose di cuore", desc:"Picco degli anni d'oro. La canzone Napoli diventa inno dei tifosi azzurri ai tempi del primo scudetto di Maradona.", badge:"Anni d'oro" },
  { year:"1993", title:"Tiempo", desc:"La svolta artistica. Taglio del caschetto biondo, temi sociali, conquista critica e intellettuali. Apprezzamenti di Goffredo Fofi.", badge:"Svolta" },
  { year:"1997", title:"Tano da morire (colonna sonora)", desc:"Per il film di Roberta Torre vince il David di Donatello e il Nastro d'Argento. La consacrazione come artista totale.", badge:"David + Nastro" },
  { year:"2001", title:"Terranera", desc:"Il ritorno alla musica d'autore. Dodici brani di profonda maturità artistica dopo i premi cinematografici.", badge:"Maturità" },
  { year:"2005", title:"Il ragù con la guerra", desc:"Temi urgenti: guerra, camorra di Scampia, vita quotidiana. Nino al meglio come cantautore civile e impegnato.", badge:"Impegno civile" },
  { year:"2012", title:"Tra terra e stelle", desc:"Dopo il one-man-show autobiografico 'C'era una volta… un jeans e una maglietta', un album intenso e riflessivo.", badge:"Autobiografico" },
  { year:"2017", title:"Nino D'Angelo 6.0", desc:"Album che raccoglie i grandi successi e 9 inediti, tra cui Si turnasse a nascere. Sei decenni di carriera celebrati.", badge:"6 decenni" },
  { year:"2021", title:"Il Poeta che non sa parlare", desc:"Album e libro omonimo (Baldini+Castoldi). Nino riflette sulla vita, Napoli e il senso dell'arte. Opera totale.", badge:"Opera totale" },
  { year:"2024", title:"I miei meravigliosi anni 80…e non solo", desc:"L'album più recente: un viaggio attraverso i classici e i successi che hanno definito un'era e un'intera generazione.", badge:"Ultimo album" },
];

export default function Discografia() {
  return (
    <section id="discografia" style={{ padding:"100px 48px",background:"#0A0A0A" }}>
      <div style={{ maxWidth:1100,margin:"0 auto" }}>

        {/* Header */}
        <div style={{ display:"grid",gridTemplateColumns:"1fr auto",alignItems:"end",marginBottom:72,gap:32 }}>
          <div>
            <div className="reveal"><div className="section-eyebrow">Musica</div></div>
            <h2 className="section-h2 reveal reveal-delay-1">Disco<em>grafia</em></h2>
            <p className="reveal reveal-delay-2" style={{ fontSize:13,color:"var(--muted)",marginTop:16,lineHeight:1.8 }}>
              50 anni di carriera &nbsp;·&nbsp; oltre 58 album &nbsp;·&nbsp; colonne sonore, live, raccolte
            </p>
          </div>
          <div className="reveal reveal-delay-2" style={{ textAlign:"right",paddingBottom:6 }}>
            <div style={{ fontFamily:"var(--ff-display)",fontSize:72,fontWeight:700,color:"rgba(201,144,58,0.08)",lineHeight:1 }}>1976</div>
            <div style={{ fontSize:9,letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(201,144,58,0.3)",marginTop:-10 }}>– oggi</div>
          </div>
        </div>

        {/* Album list — editorial rows */}
        <div className="reveal reveal-delay-1">
          {albums.map((a, i) => (
            <div
              key={a.title}
              style={{
                display:"grid",
                gridTemplateColumns:"80px 1fr auto",
                gap:"0 40px",
                alignItems:"start",
                padding:"28px 0",
                borderTop: i === 0 ? "1px solid rgba(201,144,58,0.15)" : "1px solid rgba(255,255,255,0.05)",
                borderBottom: i === albums.length - 1 ? "1px solid rgba(201,144,58,0.15)" : "none",
                transition:"background 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background="rgba(201,144,58,0.03)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background="transparent"; }}
            >
              {/* Year */}
              <div style={{ fontFamily:"var(--ff-display)",fontSize:28,fontWeight:700,color:"var(--gold)",lineHeight:1,paddingTop:2 }}>
                {a.year}
              </div>
              {/* Title + desc */}
              <div>
                <div style={{ fontFamily:"var(--ff-display)",fontSize:19,fontWeight:700,fontStyle:"italic",color:"var(--cream)",marginBottom:8,lineHeight:1.2 }}>
                  {a.title}
                </div>
                <div style={{ fontSize:13,color:"var(--muted)",lineHeight:1.75 }}>{a.desc}</div>
              </div>
              {/* Badge */}
              <div style={{
                fontSize:8,letterSpacing:"0.18em",textTransform:"uppercase",
                color:"rgba(201,144,58,0.6)",
                border:"1px solid rgba(201,144,58,0.18)",
                padding:"5px 12px",
                whiteSpace:"nowrap",
                marginTop:4,
              }}>
                {a.badge}
              </div>
            </div>
          ))}
        </div>

        {/* Feature box */}
        <div className="reveal" style={{ position:"relative",border:"1px solid rgba(201,144,58,0.2)",padding:"52px 48px",textAlign:"center",maxWidth:740,margin:"72px auto 0" }}>
          <div style={{ position:"absolute",top:"-1px",left:"-1px",width:20,height:20,borderStyle:"solid",borderColor:"var(--gold)",borderWidth:"2px 0 0 2px" }}/>
          <div style={{ position:"absolute",bottom:"-1px",right:"-1px",width:20,height:20,borderStyle:"solid",borderColor:"var(--gold)",borderWidth:"0 2px 2px 0" }}/>
          <div className="section-eyebrow" style={{ justifyContent:"center",display:"flex",marginBottom:20 }}>Il Brano Simbolo</div>
          <div style={{ fontFamily:"var(--ff-display)",fontStyle:"italic",fontSize:"clamp(24px,3.5vw,42px)",color:"var(--cream)",marginBottom:20,fontWeight:300,lineHeight:1.2 }}>
            &ldquo;&apos;Nu jeans e &apos;na maglietta&rdquo;
          </div>
          <div style={{ width:48,height:1,background:"var(--gold)",margin:"0 auto 20px",opacity:0.4 }}/>
          <p style={{ fontSize:14,color:"var(--muted)",maxWidth:520,margin:"0 auto",lineHeight:1.9 }}>
            Il brano del 1982 che ha cambiato per sempre la musica napoletana. Oltre un milione di copie. Il film omonimo batte <em>Flashdance</em> al botteghino italiano. L&apos;inno di una generazione.
          </p>
        </div>

      </div>
    </section>
  );
}