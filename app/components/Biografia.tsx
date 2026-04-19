export default function Biografia() {
  const timeline = [
    { year:"1957", event:"Nasce il 21 giugno a San Pietro a Patierno, Napoli", left:true },
    { year:"1976", event:"Primo album: 'A storia mia ('O Scippo), venduto porta a porta", left:false },
    { year:"1982", event:"'Nu jeans e 'na maglietta — oltre un milione di copie vendute", left:true },
    { year:"1986", event:"Primo artista italiano ad esibirsi all'Olympia di Parigi dopo Celentano", left:false },
    { year:"1993", event:"Album Tiempo: svolta artistica, conquista la stima della critica", left:true },
    { year:"1998", event:"David di Donatello e Nastro d'Argento per la colonna sonora di Tano da morire", left:false },
    { year:"1999", event:"Sanremo con Senza giacca e cravatta — ottavo posto", left:true },
    { year:"2021", event:"Il Poeta che non sa parlare — album e libro autobiografico", left:false },
    { year:"2025", event:"Nino. 18 giorni — film biopic diretto dal figlio Toni D'Angelo", left:true },
  ];

  return (
    <section id="biografia" style={{ padding:"100px 48px",background:"#0D0B09" }}>
      <div style={{ maxWidth:1100,margin:"0 auto" }}>
        <div className="reveal"><div className="section-eyebrow">La Storia</div></div>
        <h2 className="section-h2 reveal reveal-delay-1">Biogra<em>fia</em></h2>

        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,margin:"72px 0 80px" }}>
          <div className="reveal reveal-delay-1">
            <div style={{ fontFamily:"var(--ff-display)",fontSize:96,fontWeight:700,color:"rgba(201,144,58,0.08)",lineHeight:0.75,marginBottom:-12 }}>N</div>
            <div style={{ fontFamily:"var(--ff-display)",fontSize:18,fontStyle:"italic",color:"var(--gold)",marginBottom:20 }}>Le Origini</div>
            <p style={{ fontSize:15,lineHeight:1.9,color:"#B0A898",marginBottom:20 }}>
              Gaetano D&apos;Angelo, detto <strong style={{ color:"var(--cream)",fontWeight:500 }}>Nino</strong>, nasce il <strong style={{ color:"var(--cream)",fontWeight:500 }}>21 giugno 1957</strong> a San Pietro a Patierno, periferia nord-orientale di Napoli. Primo di sei figli, padre calzolaio, madre casalinga. Lascia presto la scuola e lavora come commesso, cantante ai matrimoni e gelataio alla stazione di Napoli Centrale.
            </p>
            <p style={{ fontSize:15,lineHeight:1.9,color:"#B0A898" }}>
              Nel <strong style={{ color:"var(--cream)",fontWeight:500 }}>1976</strong>, a soli 19 anni, riesce a raccogliere i fondi per incidere il suo primo 45 giri, <em style={{ color:"var(--gold)" }}>'A storia mia ('O scippo)</em>, che vende porta a porta. Nasce il cantautore. Dal <strong style={{ color:"var(--cream)",fontWeight:500 }}>1979</strong> è sposato con Annamaria Gallo; hanno due figli, Antonio (regista) e Vincenzo (giornalista).
            </p>
          </div>
          <div className="reveal reveal-delay-2">
            <div style={{ fontFamily:"var(--ff-display)",fontSize:18,fontStyle:"italic",color:"var(--gold)",marginBottom:20,marginTop:68 }}>Il Fenomeno e la Svolta</div>
            <p style={{ fontSize:15,lineHeight:1.9,color:"#B0A898",marginBottom:20 }}>
              Il <strong style={{ color:"var(--cream)",fontWeight:500 }}>1982</strong> segna l&apos;esplosione del &quot;fenomeno Nino D&apos;Angelo&quot;: l&apos;album <em style={{ color:"var(--gold)" }}>'Nu jeans e 'na maglietta</em> supera il milione di copie. Inconfondibile con il caschetto biondo, diventa il simbolo dei ragazzi delle periferie del Sud. Nel <strong style={{ color:"var(--cream)",fontWeight:500 }}>1986</strong> debutta all&apos;Olympia di Parigi — primo italiano dopo Celentano.
            </p>
            <p style={{ fontSize:15,lineHeight:1.9,color:"#B0A898" }}>
              Nel <strong style={{ color:"var(--cream)",fontWeight:500 }}>1991</strong>, dopo la scomparsa dei genitori, taglia il caschetto biondo e avvia una profonda svolta artistica. Con l&apos;album <em style={{ color:"var(--gold)" }}>Tiempo</em> (1993) conquista la stima della critica. Nel <strong style={{ color:"var(--cream)",fontWeight:500 }}>1998</strong> vince il <strong style={{ color:"var(--cream)",fontWeight:500 }}>David di Donatello</strong> e il <strong style={{ color:"var(--cream)",fontWeight:500 }}>Nastro d&apos;Argento</strong> per la colonna sonora di <em style={{ color:"var(--gold)" }}>Tano da morire</em>.
            </p>
          </div>
        </div>

        <div className="reveal">
          <div style={{ fontFamily:"var(--ff-display)",fontStyle:"italic",fontSize:22,color:"var(--cream)",textAlign:"center",marginBottom:48,fontWeight:300 }}>
            Tappe Fondamentali
          </div>
          <div style={{ position:"relative",maxWidth:680,margin:"0 auto" }}>
            <div style={{ position:"absolute",left:"50%",top:0,bottom:0,width:1,background:"var(--border)",transform:"translateX(-50%)" }}/>
            {timeline.map((item) => (
              <div key={item.year} style={{ display:"flex",alignItems:"center",marginBottom:32 }}>
                <div style={{ flex:1,textAlign:item.left ? "right" : "left",padding:item.left ? "0 40px 0 0" : "0 0 0 40px" }}>
                  {item.left && (
                    <>
                      <div style={{ fontFamily:"var(--ff-display)",fontSize:24,fontWeight:700,color:"var(--gold)",lineHeight:1,marginBottom:4 }}>{item.year}</div>
                      <div style={{ fontSize:12,color:"var(--muted)",lineHeight:1.6 }}>{item.event}</div>
                    </>
                  )}
                </div>
                <div style={{ width:12,height:12,borderRadius:"50%",background:"var(--gold)",border:"2px solid #0D0B09",flexShrink:0,zIndex:1 }}/>
                <div style={{ flex:1,padding:item.left ? "0 0 0 40px" : "0 40px 0 0",textAlign:item.left ? "left" : "right" }}>
                  {!item.left && (
                    <>
                      <div style={{ fontFamily:"var(--ff-display)",fontSize:24,fontWeight:700,color:"var(--gold)",lineHeight:1,marginBottom:4 }}>{item.year}</div>
                      <div style={{ fontSize:12,color:"var(--muted)",lineHeight:1.6 }}>{item.event}</div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}