// components.jsx — Nav, Footer, shared UI

const { useState, useEffect, useRef } = React;

// ── helpers ─────────────────────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // If already visible at mount, add the class immediately (no flicker, no IO needed)
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 0) && r.bottom > 0) {
      // Tiny rAF so transition still triggers from initial state.
      requestAnimationFrame(() => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, as: As = "div", className = "", style }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Skip animation if reduced motion or page is hidden at mount (screenshots, prerender)
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    if (document.visibilityState === "hidden") return;
    const r = el.getBoundingClientRect();
    if (r.top < (window.innerHeight || 0) && r.bottom > 0) return;
    el.classList.add("r-hidden");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <As
      ref={ref}
      className={"reveal " + className}
      style={{ ...style, transitionDelay: delay + "ms" }}
    >
      {children}
    </As>
  );
}

// ── Photo placeholder ──────────────────────────────────────────────
function Photo({ ratio = "1 / 1", tag, caption, location, src, alt, tone, focal, eager, children, style, className = "" }) {
  return (
    <div className={"photo " + (src ? "photo-real " : "") + className} style={{ aspectRatio: ratio, ...style }}>
      {src ? (
        <img
          src={src}
          alt={alt || caption || "Manus Terra"}
          loading={eager ? "eager" : "lazy"}
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover",
            objectPosition: focal || "center",
            filter: tone === "duotone" ? "grayscale(0.4) sepia(0.15) contrast(1.02)" : (tone === "warm" ? "saturate(0.92) contrast(1.02)" : "none"),
          }}
        />
      ) : null}
      {tag ? <span className="tag">{tag}</span> : null}
      {children}
      {(caption || location) ? (
        <div className={"caption " + (src ? "caption-on" : "")}>
          <span>{caption}</span>
          <span>{location}</span>
        </div>
      ) : null}
    </div>
  );
}

// ── Navigation ─────────────────────────────────────────────────────
function Nav({ route, setRoute, onMecene }) {
  const links = [
    { id: "home", label: "Accueil" },
    { id: "projet", label: "Le projet" },
    { id: "partenaire", label: "Devenir partenaire" },
    { id: "don", label: "Faire un don" },
    { id: "contact", label: "Contact" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [route]);

  // Prevent body scroll while open
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [menuOpen]);

  const go = (id) => { setRoute(id); setMenuOpen(false); };

  return (
    <nav className="nav">
      <div className="wrap nav-row">
        <div className="nav-brand" onClick={() => go("home")}>
          <img src="assets/logo-mark.svg" alt="Manus Terra" />
          <div>
            <div className="nm">MANUS TERRA</div>
            <div className="tg">Association · 2026</div>
          </div>
        </div>
        <div className="nav-links">
          {links.map((l) => (
            <span
              key={l.id}
              className={"nav-link " + (route === l.id ? "active" : "")}
              onClick={() => setRoute(l.id)}
            >
              {l.label}
            </span>
          ))}
          <button className="nav-cta" onClick={onMecene}>Devenir mécène</button>
        </div>
        <button
          className={"nav-toggle " + (menuOpen ? "open" : "")}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="bars"><span></span></span>
        </button>
      </div>
      <div className={"nav-sheet " + (menuOpen ? "open" : "")}>
        {links.map((l) => (
          <span
            key={l.id}
            className={"ms-link " + (route === l.id ? "active" : "")}
            onClick={() => go(l.id)}
          >
            {l.label}
          </span>
        ))}
        <button
          className="btn ms-cta"
          onClick={() => { setMenuOpen(false); onMecene(); }}
        >
          Devenir mécène <span className="btn-arrow"></span>
        </button>
      </div>
    </nav>
  );
}

// ── Footer ─────────────────────────────────────────────────────────
function Footer({ setRoute }) {
  return (
    <footer className="foot">
      <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48 }}>
        <div>
          <div className="display" style={{ fontSize: 28, color: "oklch(0.92 0.008 70)", marginBottom: 14 }}>
            Manus<span className="italic-serif"> Terra</span>
          </div>
          <p style={{ color: "oklch(0.72 0.008 70)", fontSize: 14, maxWidth: 340 }}>
            Association loi 1901 à but humanitaire. Nous allons à la rencontre des réalités humaines, à l'échelle d'une famille, d'un village, d'une petite communauté.
          </p>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Site</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10, fontSize: 13.5 }}>
            <li onClick={() => setRoute("projet")} style={{ cursor: "pointer" }}>Le projet</li>
            <li onClick={() => setRoute("partenaire")} style={{ cursor: "pointer" }}>Devenir partenaire</li>
            <li onClick={() => setRoute("don")} style={{ cursor: "pointer" }}>Faire un don</li>
            <li onClick={() => setRoute("contact")} style={{ cursor: "pointer" }}>Contact</li>
          </ul>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Suivre</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10, fontSize: 13.5 }}>
            <li>Instagram <span style={{ color: "oklch(0.55 0.008 70)", fontFamily: "var(--mono)", fontSize: 10, marginLeft: 6 }}>à venir</span></li>
            <li>YouTube <span style={{ color: "oklch(0.55 0.008 70)", fontFamily: "var(--mono)", fontSize: 10, marginLeft: 6 }}>à venir</span></li>
            <li>LinkedIn <span style={{ color: "oklch(0.55 0.008 70)", fontFamily: "var(--mono)", fontSize: 10, marginLeft: 6 }}>à venir</span></li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Contact</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10, fontSize: 13.5 }}>
            <li>contact@manusterra.fr</li>
            <li>+33 6 02 22 82 05</li>
            <li style={{ color: "oklch(0.72 0.008 70)" }}>20 rue Bellerive<br/>38300 Bourgoin-Jallieu</li>
          </ul>
        </div>
      </div>
      <div className="wrap" style={{ marginTop: 56, paddingTop: 24, borderTop: "1px solid oklch(0.3 0.008 70)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontFamily: "var(--mono)", fontSize: 11, color: "oklch(0.65 0.008 70)", letterSpacing: "0.06em" }}>
        <span>© 2026 Manus Terra — Association loi 1901</span>
        <span style={{ display: "flex", gap: 22 }}>
          <a href="#">Mentions légales</a>
          <a href="#">Statuts (PDF)</a>
          <a href="#">RGPD</a>
        </span>
      </div>
    </footer>
  );
}

// ── Mécène modal ───────────────────────────────────────────────────
function MeceneModal({ open, onClose }) {
  const [tier, setTier] = useState("indiv");
  const [amount, setAmount] = useState(50);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) { setSent(false); }
  }, [open]);

  if (!open) return null;
  return (
    <div className="modal-bd" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <span className="eyebrow">Soutenir Manus Terra</span>
        <h3 className="display" style={{ fontSize: 36, margin: "10px 0 6px" }}>
          {sent ? <>Merci pour votre <span className="italic-serif">élan</span>.</> : <>Devenir <span className="italic-serif">mécène</span></>}
        </h3>
        {sent ? (
          <>
            <p style={{ marginTop: 14, marginBottom: 26 }}>
              Nous revenons vers vous très vite à <strong style={{ color: "var(--ink)" }}>{email || "votre adresse"}</strong> avec les modalités pratiques et un premier point sur le projet.
            </p>
            <button className="btn" onClick={onClose}>Fermer</button>
          </>
        ) : (
          <>
            <p style={{ marginTop: 12, marginBottom: 24, color: "var(--ink-soft)" }}>
              Soutien financier, matériel, mise en relation… nous adaptons les modalités à votre engagement.
              La déductibilité fiscale est <em>en cours de demande</em> (rescrit).
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 18 }}>
              {[["indiv","Particulier"],["entr","Entreprise"],["fond","Fondation"]].map(([id,lbl]) => (
                <button key={id}
                  onClick={() => setTier(id)}
                  style={{
                    padding: "12px 8px",
                    border: "1px solid " + (tier === id ? "var(--ink)" : "var(--rule)"),
                    background: tier === id ? "var(--ink)" : "transparent",
                    color: tier === id ? "var(--paper)" : "var(--ink-soft)",
                    fontFamily: "var(--sans)", fontSize: 13,
                    cursor: "pointer", borderRadius: 2
                  }}>{lbl}</button>
              ))}
            </div>

            <label className="lbl">Montant indicatif · mensuel</label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 20 }}>
              {[25, 50, 100, 250].map((v) => (
                <button key={v}
                  onClick={() => setAmount(v)}
                  style={{
                    padding: "12px 8px",
                    border: "1px solid " + (amount === v ? "var(--terracotta)" : "var(--rule)"),
                    background: amount === v ? "color-mix(in oklab, var(--terracotta) 8%, var(--paper))" : "transparent",
                    color: amount === v ? "var(--terracotta-d)" : "var(--ink-soft)",
                    fontFamily: "var(--serif)", fontSize: 18,
                    cursor: "pointer", borderRadius: 2
                  }}>{v}&thinsp;€</button>
              ))}
            </div>

            <label className="lbl">Adresse email</label>
            <input className="input" type="email" placeholder="prenom@exemple.fr"
              value={email} onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: 20 }} />

            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <button className="btn" onClick={() => setSent(true)} disabled={!email}>
                Continuer <span className="btn-arrow"></span>
              </button>
              <button onClick={onClose} style={{ background: "none", border: 0, padding: "12px 8px", cursor: "pointer", color: "var(--ink-mute)", fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}>Plus tard</button>
            </div>

            <p style={{ fontFamily: "var(--mono)", fontSize: 10.5, color: "var(--ink-mute)", marginTop: 22, letterSpacing: "0.04em" }}>
              Ce formulaire engage uniquement une prise de contact. Aucun prélèvement automatique.
            </p>
          </>
        )}

        <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "none", border: 0, fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", cursor: "pointer", color: "var(--ink-mute)" }}>FERMER ×</button>
      </div>
    </div>
  );
}

Object.assign(window, { Reveal, Photo, Nav, Footer, MeceneModal, useReveal });
