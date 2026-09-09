// home.jsx — Home page sections

function PageHome({ setRoute, onMecene, tweaks }) {
  return (
    <>
      <HeroSection onMecene={onMecene} setRoute={setRoute} />
      <ProjetSection setRoute={setRoute} timelineVariant={tweaks.timeline} />
      <SignatureBand />
      <HeroBanner />
      <DemarcheSection />
      <TerrainSection />
      {/* Sections partenaire et contributions désactivées */}
      <FamilleSection />
      <SuivreSection />
      <ContactCTASection setRoute={setRoute} onMecene={onMecene} />
    </>);

}

// ── Hero banner photo ──────────────────────────────────────────────
function HeroBanner() {
  return (
    <section style={{ padding: "0 0 clamp(40px, 6vw, 80px)", margin: "32px 0px 0px" }}>
      <div className="wrap">
        <Reveal>
          <Photo
            src="assets/photos/rencontre-mains.jpg"
            ratio="21 / 9"
            tag="Terrain · Éthiopie"
            caption="La main, le geste, le seuil de la rencontre"
            location="archives 2019"
            focal="60% 50%"
            eager />

          <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.06em", color: "var(--ink-mute)" }}>
            <span>Photographie d'archives — projets Manus Terra antérieurs (2018-2024)</span>
            <span>↳ voir nos terrains</span>
          </div>
        </Reveal>
      </div>
    </section>);

}

// ── HERO ────────────────────────────────────────────────────────────
function HeroSection({ onMecene, setRoute }) {
  return (
    <section style={{
      position: "relative",
      padding: "min(14vw, 140px) 0 min(12vw, 110px)",
      overflow: "hidden",
      isolation: "isolate"
    }}>
      {/* Background photo */}
      <img
        src="assets/photos/hero-rencontre.jpg"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "50% 50%",
          zIndex: -3,
          filter: "saturate(0.92) contrast(1.02)"
        }} />

      {/* Tonal overlay for readability */}
      <div style={{
        position: "absolute", inset: 0, zIndex: -2,
        background:
        "linear-gradient(180deg, oklch(0.16 0.012 60 / 0.78) 0%, oklch(0.18 0.014 60 / 0.62) 35%, oklch(0.20 0.014 60 / 0.70) 70%, oklch(0.12 0.012 60 / 0.92) 100%)"
      }} />
      {/* Subtle vignette */}
      <div style={{
        position: "absolute", inset: 0, zIndex: -2, pointerEvents: "none",
        background: "radial-gradient(80% 60% at 50% 40%, transparent 0%, oklch(0.10 0.012 60 / 0.35) 100%)"
      }} />
      {/* Large faded logo watermark */}
      <img
        src="assets/logo-mark-mono-cream.svg"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "50%", top: "50%",
          transform: "translate(-50%, -52%)",
          width: "min(78vw, 1080px)",
          height: "auto",
          zIndex: -1,
          opacity: 0.085,
          pointerEvents: "none"
        }} />


      <div className="wrap" style={{ textAlign: "center", maxWidth: 1100, position: "relative" }}>
        <div className="kicker hero-on-photo" style={{ justifyContent: "center", marginBottom: 26 }}>
          Association loi 1901
        </div>

        <div className="serif" style={{

          letterSpacing: "0.42em",

          marginBottom: 30,
          textTransform: "uppercase",

          textShadow: "0 1px 8px oklch(0.12 0.012 60 / 0.6)", maxWidth: "996px", width: "100%", marginInline: "auto", fontWeight: "400", fontSize: "clamp(16px, 4vw, 29px)", color: "rgb(186, 94, 57)", textAlign: "center"
        }}>
          Manus&nbsp;&nbsp;Terra
        </div>

        <h1 className="display hero-headline" style={{ fontSize: "clamp(44px, 6.4vw, 92px)", margin: "0 0 26px", lineHeight: 1.02 }}>
          Aller à la rencontre<br />
          des <span className="italic-serif">réalités humaines</span>.
        </h1>

        <p style={{
          fontFamily: "var(--serif)", fontWeight: 300,
          fontSize: "clamp(18px, 1.6vw, 22px)",
          lineHeight: 1.45,
          color: "oklch(0.92 0.012 78 / 0.94)",
          maxWidth: 620, margin: "0 auto 44px",
          fontVariationSettings: "'opsz' 28",
          textShadow: "0 1px 8px oklch(0.12 0.012 60 / 0.6)"
        }}>
          Relier l'humain, le territoire et l'engagement<span style={{ color: "oklch(0.78 0.13 50)" }}>.</span>
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn btn-on-photo-primary" onClick={() => setRoute("projet")} style={{ backgroundColor: "rgb(200, 94, 55)" }}>
            Découvrir la démarche <span className="btn-arrow"></span>
          </button>
          <button className="btn btn-on-photo-ghost" onClick={() => setRoute("contact")}>
            Nous contacter
          </button>
        </div>
      </div>
    </section>);

}

// ── Signature band ──────────────────────────────────────────────────
function SignatureBand() {
  return (
    <section style={{ background: "var(--ink)", color: "var(--paper)", padding: "clamp(60px, 8vw, 110px) 0" }}>
      <div className="wrap" style={{ textAlign: "center" }}>
        <Reveal>
          <div className="eyebrow" style={{ color: "oklch(0.62 0.012 70)", justifyContent: "center", display: "flex", marginBottom: 22 }}>
            Notre conviction
          </div>
        </Reveal>
        <Reveal delay={100}>
          <p className="display" style={{
            fontSize: "clamp(30px, 4.2vw, 56px)", margin: 0, color: "var(--paper)",
            maxWidth: 1000, marginInline: "auto", lineHeight: 1.1
          }}>
            Les solutions durables naissent toujours de la <span className="italic-serif" style={{ color: "oklch(0.84 0.08 50)" }}>rencontre humaine</span>.
          </p>
        </Reveal>
      </div>
    </section>);

}

// ── Le projet ───────────────────────────────────────────────────────
function ProjetSection({ setRoute, timelineVariant }) {
  const blocs = [
  { num: "01", t: "Une expérience qui transforme", b: "Au fil des années, nous avons vécu des expériences… on ne comprend pas le monde à distance." },
  { num: "02", t: "Une aventure familiale", b: "Nous sommes une famille engagée… comprendre avant d'agir." },
  { num: "03", t: "Une autre manière d'agir", b: "Nous ne venons pas avec des réponses toutes faites… avant d'être accompagnée." },
  { num: "04", t: "Une route construite", b: "2028 en France, 2029/2030 à l'international — une trajectoire éprouvée pas à pas." },
  { num: "05", t: "Une démarche partagée", b: "Nous souhaitons associer des partenaires… une histoire vécue." },
  { num: "06", t: "La naissance de Manus Terra", b: "Formaliser une pratique éprouvée depuis Djibouti et l'Éthiopie en une structure associative." }];


  return (
    <section className="section" id="le-projet">
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 60, alignItems: "end", marginBottom: 70 }}>
          <div>
            <Reveal>
              <div className="kicker" style={{ marginBottom: 20 }}>Le projet · 01</div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: 0 }}>
                Et si tout commençait<br />par une <span className="italic-serif">rencontre</span>…
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div style={{ borderLeft: "1px solid var(--rule)", paddingLeft: 28 }}>
              <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0 }}>
                Manus Terra est née d'une conviction simple : <strong style={{ color: "var(--ink)" }}>on ne comprend pas le monde à distance</strong>.
                Là où les grandes ONG opèrent à l'échelle d'un pays, nous travaillons à l'échelle d'une famille,
                d'un village, d'une petite communauté — pendant six à douze mois, en immersion directe.
              </p>
            </div>
          </Reveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
          {blocs.map((bl, i) =>
          <Reveal key={bl.num} delay={i * 60}
          style={{
            padding: "32px 30px",
            borderTop: "1px solid var(--rule)",
            borderLeft: i % 3 !== 0 ? "1px solid var(--rule)" : "none",
            borderBottom: i >= 3 ? "1px solid var(--rule)" : "none",
            background: i === 4 ? "color-mix(in oklab, var(--terracotta) 5%, var(--paper-veil))" : "transparent"
          }}>
              <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.16em", marginBottom: 22 }}>
                {bl.num}
              </div>
              <h3 className="serif" style={{ fontSize: 22, fontWeight: 400, margin: "0 0 12px", letterSpacing: "-0.005em" }}>
                {bl.t}
              </h3>
              <p style={{ fontSize: 14.5, margin: 0 }}>{bl.b}</p>
            </Reveal>
          )}
        </div>

        <Reveal>
          <div style={{ marginTop: 90, marginBottom: 30 }}>
            <div className="kicker" style={{ marginBottom: 16 }}>Calendrier · une route construite</div>
            <h3 className="display" style={{ fontSize: "clamp(32px, 3.5vw, 48px)", margin: 0, maxWidth: 720 }}>
              D'une <span className="italic-serif">expérimentation</span><br />à un déploiement.
            </h3>
          </div>
        </Reveal>

        <Timeline variant={timelineVariant} />
      </div>
    </section>);

}

// ── Démarche ────────────────────────────────────────────────────────
function DemarcheSection() {
  const cols = [
  {
    n: "01",
    t: "Ce que nous faisons",
    lead: "Observer",
    pts: ["Immersion sur le terrain", "Observation des réalités locales", "Rencontres avec les acteurs", "Compréhension des besoins réels"],
    accent: "var(--terracotta)"
  },
  {
    n: "02",
    t: "Comment nous agissons",
    lead: "Comprendre",
    pts: ["Prendre le temps", "Créer du lien", "S'adapter aux contextes", "Co-construire avec les populations"],
    accent: "var(--ink)"
  },
  {
    n: "03",
    t: "Ce que cela permet",
    lead: "Agir",
    pts: ["Actions utiles et adaptées", "Compréhension fine des territoires", "Projets ancrés dans la réalité", "Transmission et sensibilisation"],
    accent: "var(--dust-blue-d)"
  }];

  return (
    <section className="section" style={{ background: "var(--paper-deep)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
      <div className="wrap">
        <div style={{ marginBottom: 70 }}>
          <Reveal><div className="kicker" style={{ marginBottom: 20 }}>Notre démarche · 02</div></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "end" }}>
            <Reveal delay={80}>
              <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: 0 }}>
                Observer<span style={{ color: "var(--terracotta)" }}>.</span>{" "}
                Comprendre<span style={{ color: "var(--ink)" }}>.</span>{" "}
                <span className="italic-serif">Agir</span><span style={{ color: "var(--dust-blue-d)" }}>.</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p style={{ fontSize: 17, margin: 0, maxWidth: 460 }}>
                Chaque territoire rencontré devient un lieu d'apprentissage, d'action et de transformation.
                Trois temps, jamais inversés.
              </p>
            </Reveal>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
          {cols.map((c, i) =>
          <Reveal key={c.n} delay={i * 100}
          style={{
            padding: "44px 32px",
            borderTop: "1px solid var(--rule)",
            borderBottom: "1px solid var(--rule)",
            borderLeft: i !== 0 ? "1px solid var(--rule)" : "none",
            background: "var(--paper)",
            position: "relative"
          }}>
              <span style={{ position: "absolute", left: 0, top: 0, width: 4, height: 60, background: c.accent }} />
              <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.16em", marginBottom: 24 }}>
                {c.n} / 03
              </div>
              <div className="display" style={{ fontSize: 48, marginBottom: 6, color: c.accent }}>
                {c.lead}
              </div>
              <h3 className="eyebrow" style={{ marginBottom: 24 }}>{c.t}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14 }}>
                {c.pts.map((p) =>
              <li key={p} style={{ display: "flex", gap: 12, fontSize: 15, color: "var(--ink-soft)" }}>
                    <span style={{ width: 16, color: "var(--ink-faint)", fontFamily: "var(--mono)", fontSize: 11, paddingTop: 4 }}>—</span>
                    <span>{p}</span>
                  </li>
              )}
              </ul>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

// ── Terrain ─────────────────────────────────────────────────────────
function TerrainSection() {
  const projets = [
  { tag: "01 · Djibouti", lieu: "Région d'Obock", titre: "Canyon de Mêdého", txt: "Création et référencement d'un canyon désormais ouvert aux descentes encadrées.", ratio: "4 / 5", ext: "https://descente-canyon.com", src: "assets/photos/enfant-jerricane.jpg", focal: "60% 40%" },
  { tag: "02 · Djibouti", lieu: "Villages reculés", titre: "Cinéma itinérant", txt: "Sensibiliser à la gestion des déchets, projection dans des hameaux sans accès à l'écrit.", ratio: "4 / 5", src: "assets/photos/cinema-itinerant.jpg", focal: "55% 40%" },
  { tag: "03 · Djibouti", lieu: "État djiboutien", titre: "Lancement de guides officiels", txt: "Une idée de terrain reprise par l'État trois ans plus tard, formalisée en cursus officiel.", ratio: "4 / 5", src: "assets/photos/carte-nuit.jpg", focal: "50% 50%" },
  { tag: "04 · Éthiopie", lieu: "Région rurale", titre: "Aide au dispensaire", txt: "Soutien médical auprès d'un dispensaire en zone rurale.", ratio: "4 / 5", src: "assets/photos/soin-portrait.jpg", focal: "40% 30%" }];

  return (
    <section className="section">
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 70 }}>
          <Reveal>
            <div className="kicker" style={{ marginBottom: 20 }}>Le terrain · 03</div>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: 0 }}>
              Quatre preuves<br /><span className="italic-serif">concrètes</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0, alignSelf: "end", maxWidth: 480 }}>
              Avant d'être une association, Manus Terra est une pratique. Djibouti, Éthiopie : des projets menés sur le terrain,
              référencés, repris, prolongés. Pas une promesse — un historique.
            </p>
          </Reveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
          {projets.map((p, i) =>
          <Reveal key={p.titre} delay={i * 80}>
              <Photo ratio={p.ratio} tag={p.tag} caption={p.titre} location={p.lieu} src={p.src} focal={p.focal} tone="duotone" />
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

// ── Partenaire ──────────────────────────────────────────────────────
function PartenaireSection({ setRoute, onMecene }) {
  const cols = [
  {
    n: "01",
    t: "Pourquoi nous soutenir",
    pts: [
    "Donner du sens à votre engagement",
    "Participer à un projet humain et concret",
    "Soutenir des actions utiles sur le terrain",
    "Contribuer à une démarche durable",
    "S'associer à une aventure engagée"]

  },
  {
    n: "02",
    t: "Comment nous soutenir",
    pts: [
    "Soutien financier (mécénat)",
    "Soutien matériel (équipement, logistique)",
    "Mise en relation et réseau",
    "Partenariats de terrain",
    "Accompagnement du projet"]

  },
  {
    n: "03",
    t: "Ce que nous vous apportons",
    pts: [
    "Visibilité sur nos supports",
    "Valorisation de votre engagement",
    "Suivi du projet (photos, récits, retours)",
    "Mise en avant de votre contribution",
    "Participation à une aventure humaine forte"]

  }];

  return (
    <section className="section" style={{ background: "var(--ink)", color: "var(--paper)" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 70, alignItems: "end" }}>
          <Reveal>
            <div className="kicker" style={{ marginBottom: 20, color: "oklch(0.62 0.012 70)" }}>
              <span style={{ background: "oklch(0.62 0.012 70)" }} /> Devenir partenaire · 04
            </div>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: 0, color: "var(--paper)" }}>
              Construisons<br />ensemble<br />
              une aventure <span className="italic-serif" style={{ color: "oklch(0.84 0.08 50)" }}>humaine</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0, color: "oklch(0.84 0.008 70)", maxWidth: 480 }}>
              Soutenir Manus Terra, c'est créer les conditions d'une présence humaine, utile et respectueuse sur le terrain.
              La déductibilité fiscale est <em>en cours de demande</em> (rescrit).
            </p>
          </Reveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid oklch(0.32 0.008 70)" }}>
          {cols.map((c, i) =>
          <Reveal key={c.n} delay={i * 100}
          style={{
            padding: "42px 32px",
            borderRight: i !== 2 ? "1px solid oklch(0.32 0.008 70)" : "none",
            borderBottom: "1px solid oklch(0.32 0.008 70)"
          }}>
              <div className="mono" style={{ fontSize: 11, color: "oklch(0.62 0.012 70)", letterSpacing: "0.16em", marginBottom: 22 }}>
                {c.n} / 03
              </div>
              <h3 className="serif" style={{ fontSize: 26, fontWeight: 400, color: "var(--paper)", margin: "0 0 26px", letterSpacing: "-0.005em" }}>
                {c.t}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14 }}>
                {c.pts.map((p) =>
              <li key={p} style={{ display: "flex", gap: 14, fontSize: 14.5, color: "oklch(0.86 0.008 70)" }}>
                    <span style={{ width: 14, color: "oklch(0.84 0.08 50)", fontFamily: "var(--mono)", fontSize: 11, paddingTop: 3 }}>—</span>
                    <span>{p}</span>
                  </li>
              )}
              </ul>
            </Reveal>
          )}
        </div>

        <div style={{ marginTop: 56, display: "flex", gap: 14, flexWrap: "wrap" }}>
          <button className="btn" style={{ background: "oklch(0.84 0.08 50)", borderColor: "oklch(0.84 0.08 50)", color: "var(--ink)" }} onClick={onMecene}>
            Devenir mécène <span className="btn-arrow"></span>
          </button>
          <button className="btn btn-ghost" style={{ borderColor: "oklch(0.78 0.008 70)", color: "var(--paper)" }} onClick={() => setRoute("partenaire")}>
            Voir le dossier complet
          </button>
        </div>
      </div>
    </section>);

}

// ── Contributions ───────────────────────────────────────────────────
function ContributionsSection() {
  const cols = [
  {
    n: "01", t: "Besoins matériels", accent: "var(--terracotta)",
    pts: ["Aménagement et équipement de la base mobile", "Matériel d'autonomie et de vie nomade", "Matériel de terrain et d'observation", "Supports de sensibilisation et de transformation", "Équipement photo, vidéo et communication"]
  },
  {
    n: "02", t: "Besoins financiers", accent: "var(--ochre)",
    pts: ["Préparation du projet en France", "Déplacement et frais logistiques", "Assurance, entretien et sécurité", "Documentation des actions réalisées", "Soutien à des initiatives locales identifiées"]
  },
  {
    n: "03", t: "Suivi des partenaires", accent: "var(--dust-blue-d)",
    pts: ["Partage régulier de l'avancée du projet", "Photos, récits et retours de terrain", "Bilans des actions soutenues", "Valorisation des partenaires engagés", "Transparence sur l'utilisation des soutiens"]
  }];

  return (
    <section className="section">
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 70 }}>
          <Reveal>
            <div className="kicker" style={{ marginBottom: 20 }}>Vos contributions · 05</div>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: 0 }}>
              Vos contributions,<br />
              <span className="italic-serif">nos actions</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0, alignSelf: "end" }}>
              Chaque contribution renforce notre autonomie, notre présence sur le terrain
              et notre capacité à agir de manière utile, adaptée et transparente.
              Aucun frais de structure : tout revient au projet.
            </p>
          </Reveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {cols.map((c, i) =>
          <Reveal key={c.n} delay={i * 100} className="card" style={{ padding: 36 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
                <span style={{ width: 28, height: 1, background: c.accent }} />
                <div className="mono" style={{ fontSize: 11, color: c.accent, letterSpacing: "0.16em" }}>
                  {c.n}
                </div>
              </div>
              <h3 className="serif" style={{ fontSize: 24, fontWeight: 400, margin: "0 0 24px" }}>{c.t}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
                {c.pts.map((p) =>
              <li key={p} style={{ fontSize: 14, color: "var(--ink-soft)", paddingLeft: 20, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 9, width: 8, height: 1, background: c.accent }} />
                    {p}
                  </li>
              )}
              </ul>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

// ── Famille ─────────────────────────────────────────────────────────
function FamilleSection() {
  const people = [
  { nm: "Angie Rabilloud", role: "Président · Responsable mécénat", txt: "Porteur du projet depuis ses premières aventures à Djibouti et en Éthiopie. Trace la route, ouvre les portes, formalise la démarche." },
  { nm: "Medina Rabilloud", role: "Trésorière", txt: "Tient le cap matériel et budgétaire du projet. Convertit l'élan en logistique tenable, jour après jour." },
  { nm: "Frédéric Rossi", role: "Secrétaire · Agent de presse", txt: "Garant de la mémoire, des récits et de la documentation. Relie ce qui se vit sur le terrain à ce qui en restera." }];

  return (
    <section className="section" style={{ background: "var(--paper-deep)" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 70 }}>
          <Reveal>
            <div className="kicker" style={{ marginBottom: 20 }}>La famille · 06</div>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: 0 }}>
              Une <span className="italic-serif">famille</span><br />derrière le projet.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ fontSize: 17, lineHeight: 1.6, margin: 0, alignSelf: "end", maxWidth: 480 }}>
              Trois personnes, une base mobile, des années d'expérience de terrain et la volonté de continuer ensemble.
              On ne porte pas un projet humanitaire seul ; on l'habite.
            </p>
          </Reveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }}>
          {people.map((p, i) =>
          <Reveal key={p.nm} delay={i * 100}>
              <Photo ratio="4 / 5" tag={`Portrait · 0${i + 1}`} caption={p.nm} location="La Tour-du-Pin" />
              <h4 className="serif" style={{ fontSize: 24, fontWeight: 400, margin: "22px 0 4px" }}>{p.nm}</h4>
              <div className="eyebrow" style={{ marginBottom: 14 }}>{p.role}</div>
              <p style={{ fontSize: 14.5, margin: 0 }}>{p.txt}</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}

// ── Suivre ──────────────────────────────────────────────────────────
function SuivreSection() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  return (
    <section className="section">
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <Reveal>
            <div className="kicker" style={{ marginBottom: 20 }}>Suivre l'aventure · 07</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: "0 0 20px" }}>
              Lire la route<br /><span className="italic-serif">en train de s'écrire</span>.
            </h2>
            <p style={{ fontSize: 16, maxWidth: 460, margin: 0 }}>
              Récits, photos, étapes — recevez une lettre par saison, sans tapage.
              Les réseaux suivront : Instagram, YouTube, LinkedIn, peut-être Twitch.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="card" style={{ padding: 36 }}>
              <label className="lbl">La lettre — une fois par saison</label>
              <div style={{ display: "flex", gap: 8 }}>
                <input className="input" type="email" placeholder="prenom@exemple.fr" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button className="btn" onClick={() => {if (email) setOk(true);}}>
                  S'inscrire
                </button>
              </div>
              {ok ?
              <p className="mono" style={{ fontSize: 11, color: "var(--terracotta-d)", letterSpacing: "0.08em", marginTop: 16 }}>
                  ✓ MERCI — VOUS RECEVREZ LA PROCHAINE LETTRE
                </p> :

              <p className="mono" style={{ fontSize: 10.5, color: "var(--ink-mute)", letterSpacing: "0.06em", marginTop: 16 }}>
                  Pas de spam — conformité RGPD, désinscription en un clic.
                </p>
              }

              <hr className="rule-dash" style={{ margin: "28px 0" }} />

              <div className="eyebrow" style={{ marginBottom: 14 }}>Ailleurs (à venir)</div>
              <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
                {["Instagram", "YouTube", "LinkedIn", "Twitch"].map((s) =>
                <span key={s} style={{ fontSize: 13, color: "var(--ink-soft)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    {s}
                    <span className="mono" style={{ fontSize: 9.5, color: "var(--ink-mute)", letterSpacing: "0.1em" }}>SOON</span>
                  </span>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}

// ── Contact CTA ─────────────────────────────────────────────────────
function ContactCTASection({ setRoute, onMecene }) {
  return (
    <section style={{ background: "color-mix(in oklab, var(--terracotta) 12%, var(--paper))", padding: "clamp(70px, 8vw, 120px) 0" }}>
      <div className="wrap" style={{ textAlign: "center" }}>
        <Reveal>
          <div className="kicker" style={{ marginBottom: 22, justifyContent: "center", color: "var(--terracotta-d)" }}>
            <span style={{ background: "var(--terracotta-d)" }} />
            Ensemble · 08
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display" style={{ fontSize: "clamp(36px, 5vw, 64px)", margin: "0 0 14px", maxWidth: 900, marginInline: "auto" }}>
            Faisons de chaque rencontre<br />une action <span className="italic-serif">concrète</span>, utile et humaine.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{ fontSize: 16, maxWidth: 560, margin: "0 auto 36px" }}>
            Question, partenariat, presse — contactez-nous, sans engagement.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn" onClick={() => setRoute("contact")}>
              Nous contacter <span className="btn-arrow"></span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>);

}

Object.assign(window, { PageHome, ContactCTASection, HeroSection, SignatureBand });
