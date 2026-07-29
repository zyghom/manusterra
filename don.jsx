// don.jsx — Page « Faire un don »

function PageDon({ setRoute, onMecene }) {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section style={{
        position: "relative", padding: "min(12vw, 110px) 0 80px",
        overflow: "hidden", isolation: "isolate"
      }}>
        <img
          src="assets/photos/carte-nuit.jpg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", zIndex: -3,
            filter: "saturate(0.85) contrast(1.05)"
          }}
        />
        <div style={{
          position: "absolute", inset: 0, zIndex: -2,
          background: "linear-gradient(180deg, oklch(0.14 0.012 60 / 0.72) 0%, oklch(0.16 0.014 60 / 0.86) 100%)"
        }} />

        <div className="wrap" style={{ position: "relative", color: "var(--paper)" }}>
          <Reveal>
            <div className="kicker hero-on-photo" style={{ marginBottom: 24, color: "oklch(0.84 0.08 50)" }}>
              <span style={{ background: "oklch(0.84 0.08 50)" }} />
              Soutenir le projet
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="display hero-headline" style={{
              fontSize: "clamp(40px, 6vw, 88px)", margin: "0 0 24px",
              color: "var(--paper)", lineHeight: 1.04
            }}>
              Faire un <span className="italic-serif">don</span>,<br/>
              c'est faire un pas.
            </h1>
            <p style={{
              fontFamily: "var(--serif)", fontWeight: 300,
              fontSize: "clamp(17px, 1.5vw, 21px)",
              lineHeight: 1.5, margin: 0,
              maxWidth: 580,
              color: "oklch(0.92 0.012 78 / 0.94)",
              fontVariationSettings: "'opsz' 28"
            }}>
              Chaque contribution — même modeste — renforce notre autonomie, notre présence
              sur le terrain et notre capacité à agir. Aucun frais de structure caché :
              tout revient au projet.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── COMMENT SOUTENIR ────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 70 }}>
            <Reveal>
              <div className="kicker" style={{ marginBottom: 18 }}>Votre soutien · 01</div>
              <h2 className="display" style={{
                fontSize: "clamp(34px, 4vw, 52px)",
                margin: "0 0 24px"
              }}>
                Plusieurs manières<br/>de <span className="italic-serif">contribuer</span>.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p style={{ fontSize: 17, lineHeight: 1.65, margin: 0, alignSelf: "end" }}>
                Soutien financier, matériel, mise en relation… nous adaptons les modalités
                à votre engagement. La déductibilité fiscale est <em>en cours de demande</em> (rescrit).
              </p>
            </Reveal>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { n: "01", t: "Don ponctuel", a: "À partir de 30 €", d: "Un coup de pouce ponctuel — sans engagement, mais visible. Reçu fiscal sous réserve du rescrit.", accent: "var(--terracotta)" },
              { n: "02", t: "Don mensuel", a: "À partir de 15 € / mois", d: "Soutien régulier qui nous permet de tenir la durée. Modulable, suspendable à tout moment.", accent: "var(--ochre)" },
              { n: "03", t: "Don en nature", a: "Matériel, services", d: "Aménagement fourgon, équipement nomade, matériel terrain, photo / vidéo, supports imprimés.", accent: "var(--dust-blue-d)" },
            ].map((c, i) => (
              <Reveal key={c.n} delay={i * 80} className="card" style={{ padding: 36 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                  <span style={{ width: 28, height: 1, background: c.accent }} />
                  <div className="mono" style={{ fontSize: 11, color: c.accent, letterSpacing: "0.16em" }}>
                    {c.n}
                  </div>
                </div>
                <h3 className="serif" style={{ fontSize: 24, fontWeight: 400, margin: "0 0 6px" }}>{c.t}</h3>
                <div className="mono" style={{ fontSize: 12, color: "var(--terracotta-d)", letterSpacing: "0.06em", marginBottom: 18 }}>
                  {c.a}
                </div>
                <p style={{ fontSize: 14.5, margin: 0 }}>{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALLOCATION ──────────────────────────────── */}
      <section className="section" style={{ background: "var(--paper-deep)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="wrap">
          <Reveal>
            <div className="kicker" style={{ marginBottom: 18 }}>Allocation · 02</div>
            <h2 className="display" style={{ fontSize: "clamp(28px, 3vw, 38px)", margin: "0 0 24px" }}>
              À quoi sert votre <span className="italic-serif">soutien</span>.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div style={{ borderTop: "1px solid var(--rule)" }}>
              {[
                ["Aménagement du fourgon", "12 000 €", "Cellule, isolation, couchage, énergie autonome (solaire, batterie), réserves d'eau et de carburant."],
                ["Matériel terrain", "5 000 €", "Observation, photo, vidéo, audio, connectivité satellite et GSM, sécurité."],
                ["Documentation", "4 000 €", "Récits, podcast, vidéos, supports imprimés, site web — pour partager ce qui se vit."],
                ["Initiatives locales", "4 000 €", "Premier fonds dédié à des projets identifiés sur le terrain, en co-construction."],
              ].map(([t, a, b]) => (
                <div key={t} style={{
                  padding: "22px 0",
                  borderBottom: "1px solid var(--rule)",
                  display: "grid", gridTemplateColumns: "1fr auto",
                  gap: 20, alignItems: "baseline"
                }}>
                  <div>
                    <h4 className="serif" style={{
                      fontSize: 20, fontWeight: 400, margin: "0 0 6px",
                      letterSpacing: "-0.005em"
                    }}>{t}</h4>
                    <p style={{ fontSize: 14.5, margin: 0, color: "var(--ink-soft)" }}>{b}</p>
                  </div>
                  <div className="mono" style={{
                    fontSize: 18, color: "var(--terracotta-d)",
                    letterSpacing: "0.02em", fontWeight: 500
                  }}>{a}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div style={{
              marginTop: 40,
              padding: "26px 30px",
              background: "var(--paper)",
              borderLeft: "3px solid var(--terracotta)"
            }}>
              <div className="eyebrow" style={{ marginBottom: 10, color: "var(--terracotta-d)" }}>
                Transparence totale
              </div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55 }}>
                Aucun frais de structure caché. Chaque euro et chaque pièce de matériel
                est tracé, documenté, partagé dans nos bilans annuels accessibles à tous
                les donateurs et mécènes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PHOTO TERRAIN ──────────────────────────── */}
      <section style={{ padding: "clamp(40px, 6vw, 80px) 0" }}>
        <div className="wrap">
          <Reveal>
            <Photo
              src="assets/photos/rencontre-village.jpg"
              ratio="21 / 9"
              tag="Archives · Éthiopie"
              caption="Le terrain, déjà éprouvé"
              location="2014"
              focal="50% 40%"
            />
          </Reveal>
        </div>
      </section>

      {/* ── L'ÉQUIPE ───────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="kicker" style={{ marginBottom: 18 }}>L'équipe · 03</div>
            <h3 className="display" style={{ fontSize: "clamp(26px, 2.8vw, 36px)", margin: "0 0 24px" }}>
              Qui porte ce projet.
            </h3>
          </Reveal>
          <Reveal delay={80}>
            <div style={{ display: "grid", gap: 14 }}>
              {[
                ["Angie Rabilloud", "Président · Fondateur", "Porteur du projet depuis ses premières aventures à Djibouti et en Éthiopie."],
                ["Medina Rabilloud", "Trésorière", "Tient le cap matériel et budgétaire. Logistique tenable, jour après jour."],
                ["Frédéric Rossi", "Secrétaire", "Garant de la mémoire, des récits, de la documentation."],
              ].map(([nm, role, txt]) => (
                <div key={nm} style={{
                  padding: "20px 24px",
                  border: "1px solid var(--rule)",
                  background: "var(--paper)",
                  display: "grid", gridTemplateColumns: "1.4fr 2fr",
                  gap: 24, alignItems: "center"
                }}>
                  <div>
                    <h4 className="serif" style={{
                      fontSize: 20, fontWeight: 400, margin: "0 0 4px"
                    }}>{nm}</h4>
                    <div className="mono" style={{
                      fontSize: 11, color: "var(--terracotta-d)",
                      letterSpacing: "0.14em", textTransform: "uppercase"
                    }}>{role}</div>
                  </div>
                  <p style={{ fontSize: 14, color: "var(--ink-soft)", margin: 0, lineHeight: 1.5 }}>
                    {txt}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA MÉCÈNE ─────────────────────────────── */}
      <section className="section" style={{ background: "var(--ink)", color: "var(--paper)" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <Reveal>
            <div className="kicker" style={{
              marginBottom: 22, justifyContent: "center",
              color: "oklch(0.84 0.08 50)"
            }}>
              <span style={{ background: "oklch(0.84 0.08 50)" }} />
              Aller plus loin
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="display" style={{
              fontSize: "clamp(34px, 4.4vw, 60px)",
              margin: "0 0 18px",
              maxWidth: 900, marginInline: "auto",
              color: "var(--paper)"
            }}>
              Envie de vous engager <span className="italic-serif" style={{ color: "oklch(0.84 0.08 50)" }}>durablement</span> ?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p style={{
              fontSize: 16, maxWidth: 540, margin: "0 auto 30px",
              color: "oklch(0.84 0.008 70)"
            }}>
              Le mécénat permet un engagement structurant — financier, matériel ou par
              mise en relation. Parlons-en.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn" style={{
                background: "oklch(0.84 0.08 50)",
                borderColor: "oklch(0.84 0.08 50)",
                color: "var(--ink)"
              }} onClick={onMecene}>
                Devenir mécène <span className="btn-arrow"></span>
              </button>
              <button className="btn btn-ghost" style={{
                borderColor: "oklch(0.78 0.008 70)",
                color: "var(--paper)"
              }} onClick={() => setRoute("contact")}>
                Nous écrire
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactCTASection setRoute={setRoute} onMecene={onMecene} />
    </>
  );
}

Object.assign(window, { PageDon });
