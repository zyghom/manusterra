// timeline.jsx — the tweakable 2028 → 2029 timeline

const { useState: useStateTl } = React;

function Timeline({ variant = "horizon" }) {
  if (variant === "compass") return <TimelineCompass />;
  if (variant === "route")   return <TimelineRoute />;
  return <TimelineHorizon />;
}

// ── Variant A : Horizon (default — quiet horizontal line, two anchors) ─────
function TimelineHorizon() {
  return (
    <div style={{ position: "relative", padding: "80px 0 30px" }}>
      <div style={{
        position: "absolute", left: "8%", right: "8%", top: "50%",
        height: 1, background: "var(--ink-faint)",
      }} />
      <div style={{
        position: "absolute", left: "8%", top: "calc(50% - 6px)",
        width: 12, height: 12, borderRadius: "50%", background: "var(--terracotta)",
        boxShadow: "0 0 0 6px color-mix(in oklab, var(--terracotta) 18%, transparent)",
      }} />
      <div style={{
        position: "absolute", right: "8%", top: "calc(50% - 6px)",
        width: 12, height: 12, borderRadius: "50%", background: "var(--dust-blue)",
        boxShadow: "0 0 0 6px color-mix(in oklab, var(--dust-blue) 18%, transparent)",
      }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, position: "relative", zIndex: 1 }}>
        <div style={{ paddingRight: 40, textAlign: "left", marginTop: 90, paddingLeft: "8%" }}>
          <div className="eyebrow" style={{ color: "var(--terracotta-d)", marginBottom: 10 }}>2028 · France</div>
          <h3 className="display" style={{ fontSize: 44, margin: "0 0 14px" }}>
            Expérimenter <span className="italic-serif">la vie</span><br/>en fourgon
          </h3>
          <p style={{ maxWidth: 380 }}>
            Ajuster notre organisation, consolider la démarche, éprouver le quotidien à plusieurs sur le terrain français.
          </p>
        </div>
        <div style={{ paddingLeft: 40, textAlign: "right", paddingRight: "8%" }}>
          <div className="eyebrow" style={{ color: "var(--dust-blue-d)", marginBottom: 10, justifyContent: "flex-end" }}>2029 · International</div>
          <h3 className="display" style={{ fontSize: 44, margin: "0 0 14px" }}>
            Déployer avec <span className="italic-serif">une base</span><br/>solide
          </h3>
          <p style={{ maxWidth: 380, marginLeft: "auto" }}>
            Partir avec une expérience concrète et des partenaires locaux identifiés, dans la continuité de Djibouti et de l'Éthiopie.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Variant B : Route (carnet de voyage — dashed path with stops) ─────────
function TimelineRoute() {
  return (
    <div style={{ position: "relative", padding: "30px 0" }}>
      <svg viewBox="0 0 1000 320" preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
        <path d="M 60 180 C 240 80, 360 280, 540 160 S 820 60, 940 200"
          stroke="var(--terracotta)"
          strokeWidth="1.4"
          strokeDasharray="2 6"
          fill="none"
          opacity="0.85" />
        <circle cx="60" cy="180" r="6" fill="var(--terracotta)" />
        <circle cx="60" cy="180" r="14" fill="none" stroke="var(--terracotta)" strokeWidth="1" opacity="0.4" />
        <circle cx="940" cy="200" r="6" fill="var(--dust-blue)" />
        <circle cx="940" cy="200" r="14" fill="none" stroke="var(--dust-blue)" strokeWidth="1" opacity="0.4" />
      </svg>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", position: "relative", zIndex: 1, alignItems: "start", minHeight: 320 }}>
        <div>
          <div className="eyebrow" style={{ color: "var(--terracotta-d)", marginBottom: 10 }}>Étape · 01</div>
          <div className="mono" style={{ fontSize: 12, color: "var(--ink-mute)", letterSpacing: "0.1em", marginBottom: 4 }}>2028</div>
          <h3 className="display" style={{ fontSize: 32, margin: "0 0 14px" }}>
            En France
          </h3>
          <p style={{ fontSize: 14.5 }}>
            Expérimenter la vie en fourgon, ajuster l'organisation, consolider la démarche sur le terrain français.
          </p>
        </div>
        <div style={{ textAlign: "center", paddingTop: 130 }}>
          <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            de la rencontre…<br/>
            <span className="italic-serif" style={{ fontFamily: "var(--serif)", textTransform: "none", fontSize: 18, color: "var(--ink-soft)", letterSpacing: "0.02em" }}>…à l'action</span>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div className="eyebrow" style={{ color: "var(--dust-blue-d)", marginBottom: 10, justifyContent: "flex-end" }}>Étape · 02</div>
          <div className="mono" style={{ fontSize: 12, color: "var(--ink-mute)", letterSpacing: "0.1em", marginBottom: 4 }}>2029</div>
          <h3 className="display" style={{ fontSize: 32, margin: "0 0 14px" }}>
            À l'international
          </h3>
          <p style={{ fontSize: 14.5, marginLeft: "auto" }}>
            Déployer le projet avec une base solide, une expérience concrète, des partenaires locaux engagés.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Variant C : Compass (vertical milestones, more detailed) ──────────────
function TimelineCompass() {
  const rows = [
    { year: "2026", title: "Naissance de l'association", note: "Statuts déposés, bureau constitué.", accent: "var(--ink)" },
    { year: "2027", title: "Préparation", note: "Aménagement du fourgon, identification des premiers territoires, recherche de mécènes.", accent: "var(--ochre)" },
    { year: "2028", title: "Expérimentation en France", note: "Vie nomade, immersion dans des villages, ajustement de la démarche.", accent: "var(--terracotta)" },
    { year: "2029", title: "Déploiement international", note: "Premiers terrains hors France, dans le sillage de Djibouti et de l'Éthiopie.", accent: "var(--dust-blue)" },
  ];
  return (
    <div style={{ display: "grid", gap: 0, position: "relative", padding: "20px 0" }}>
      {rows.map((r, i) => (
        <div key={r.year} style={{
          display: "grid", gridTemplateColumns: "140px 28px 1fr",
          gap: 24, alignItems: "start",
          padding: "28px 0",
          borderTop: i === 0 ? "1px solid var(--rule)" : "none",
          borderBottom: "1px solid var(--rule)",
        }}>
          <div>
            <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.18em" }}>ÉTAPE 0{i+1}</div>
            <div className="display" style={{ fontSize: 48, marginTop: 4, color: r.accent }}>{r.year}</div>
          </div>
          <div style={{ position: "relative", height: "100%", paddingTop: 18 }}>
            <span style={{
              position: "absolute", left: "50%", top: 16, width: 9, height: 9,
              transform: "translateX(-50%) rotate(45deg)",
              background: r.accent,
            }} />
            <span style={{
              position: "absolute", left: "50%", top: 30, bottom: -28,
              width: 1, background: "var(--rule)", transform: "translateX(-50%)",
              display: i === rows.length - 1 ? "none" : "block",
            }} />
          </div>
          <div style={{ paddingTop: 14 }}>
            <h4 className="serif" style={{ fontSize: 24, margin: "0 0 8px", fontWeight: 400 }}>{r.title}</h4>
            <p style={{ fontSize: 14.5, maxWidth: 560 }}>{r.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

window.Timeline = Timeline;
