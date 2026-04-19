const films = [
  { year:"1981", title:"Celebrità", role:"Attore & colonna sonora", note:"Esordio cinematografico, regia Ninì Grassia" },
  { year:"1983", title:"'Nu jeans e 'na maglietta", role:"Attore & colonna sonora", note:"Regia Mariano Laurenti — batte Flashdance al botteghino" },
  { year:"1986", title:"Giuro che ti amo", role:"Attore, regista & colonna sonora", note:"Prima regia — tra i pochi film italiani da lui anche diretto" },
  { year:"1987", title:"Quel ragazzo della curva B", role:"Attore & colonna sonora", note:"La canzone Napoli diventa inno dei tifosi di Maradona" },
  { year:"1997", title:"Tano da morire", role:"Colonna sonora", note:"Regia Roberta Torre — David di Donatello + Nastro d'Argento" },
  { year:"2000", title:"Aitanic", role:"Attore, regista & colonna sonora", note:"Seconda regia — musical napoletano" },
  { year:"2003", title:"Il cuore altrove", role:"Attore", note:"Regia Pupi Avati" },
  { year:"2024", title:"Vita da Carlo 3", role:"Attore", note:"Regia Carlo Verdone" },
  { year:"2025", title:"Nino. 18 giorni", role:"Attore protagonista", note:"Film biopic, regia del figlio Toni D'Angelo" },
];

export default function Cinema() {
  return (
    <section id="cinema" style={{ padding:"100px 48px",background:"#0D0B09" }}>
      <div style={{ maxWidth:1100,margin:"0 auto" }}>
        <div className="reveal"><div className="section-eyebrow">Arte</div></div>
        <h2 className="section-h2 reveal reveal-delay-1">Cinema <em>&amp; TV</em></h2>

        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:80,marginTop:64,alignItems:"start" }}>
          <div className="reveal reveal-delay-1">
            <p style={{ fontFamily:"var(--ff-display)",fontStyle:"italic",fontSize:"clamp(18px,2.2vw,24px)",color:"var(--gold)",lineHeight:1.7,marginBottom:28,paddingLeft:20,borderLeft:"2px solid var(--gold)" }}>
              «Ho recitato in più di 26 film e lavorato alla colonna sonora di 18 progetti cinematografici.»
            </p>
            <p style={{ fontSize:14,color:"#B0A898",lineHeight:1.9,marginBottom:16 }}>
              Dal 1981, Nino D&apos;Angelo affianca alla musica una prolifica carriera cinematografica. I film degli anni &apos;80 — storie di riscatto popolare napoletano — conquistano il grande pubblico nonostante l&apos;ostilità della critica.
            </p>
            <p style={{ fontSize:14,color:"#B0A898",lineHeight:1.9,marginBottom:16 }}>
              La svolta arriva con <strong style={{ color:"var(--cream)",fontWeight:500 }}>Tano da morire</strong> (1997) di Roberta Torre: la sua colonna sonora gli vale il <strong style={{ color:"var(--cream)",fontWeight:500 }}>David di Donatello</strong> e il <strong style={{ color:"var(--cream)",fontWeight:500 }}>Nastro d&apos;Argento</strong>.
            </p>
            <p style={{ fontSize:14,color:"#B0A898",lineHeight:1.9 }}>
              Nel 2025 esce <em style={{ color:"var(--gold)" }}>Nino. 18 giorni</em>, biopic diretto dal figlio <strong style={{ color:"var(--cream)",fontWeight:500 }}>Toni D&apos;Angelo</strong>, che racconta 18 giorni cruciali della sua vita. Ha anche scritto 4 libri, tra cui l&apos;autobiografia <em style={{ color:"var(--gold)" }}>L&apos;ignorante intelligente</em> (Mondadori, 2000).
            </p>
          </div>
          <div className="reveal reveal-delay-2">
            <table style={{ width:"100%",borderCollapse:"collapse" }}>
              <thead>
                <tr>
                  {["Anno","Titolo","Ruolo"].map((h) => (
                    <th key={h} style={{ fontSize:8,letterSpacing:"0.25em",textTransform:"uppercase",color:"var(--gold)",textAlign:"left",padding:"0 0 14px",borderBottom:"1px solid var(--border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {films.map((f) => (
                  <tr key={f.title} style={{ borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
                    <td style={{ fontFamily:"var(--ff-display)",fontSize:18,fontWeight:700,color:"var(--gold)",padding:"14px 12px 14px 0",verticalAlign:"top" }}>{f.year}</td>
                    <td style={{ padding:"14px 12px",verticalAlign:"top" }}>
                      <div style={{ fontFamily:"var(--ff-display)",fontStyle:"italic",fontSize:14,color:"var(--cream)",marginBottom:3 }}>{f.title}</div>
                      <div style={{ fontSize:10,color:"var(--muted)",lineHeight:1.5 }}>{f.note}</div>
                    </td>
                    <td style={{ fontSize:10,color:"var(--muted)",padding:"14px 0 14px 12px",verticalAlign:"top",whiteSpace:"nowrap" }}>{f.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}