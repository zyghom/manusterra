// pages.jsx — Le projet · Devenir partenaire · Contact

// ─────────────────────────────────────────────────────────────────────
// PROJET
// ─────────────────────────────────────────────────────────────────────
function PageProjet({ setRoute, onMecene, tweaks }) {
  return (
    <>
      <section style={{ padding: "min(10vw, 100px) 0 60px" }}>
        <div className="wrap">
          <Reveal><div className="kicker" style={{ marginBottom: 24 }}>01 · Le projet</div></Reveal>
          <Reveal delay={80}>
            <h1 className="display" style={{ fontSize: "clamp(54px, 7.6vw, 120px)", margin: "0 0 30px", maxWidth: 1100 }}>
              Et si tout commençait<br/>par une <span className="italic-serif">rencontre</span>…
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 60, marginTop: 50 }}>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--ink)", fontFamily: "var(--serif)", fontWeight: 300, margin: 0 }}>
                Manus Terra est une association loi 1901 (n°RNA : W382012107) fondée en 2026,
                portée par une famille qui part vivre en fourgon pour aller à la rencontre
                des populations à l'échelle d'une famille, d'un village, d'une petite communauté.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                Le projet associatif formalise une pratique éprouvée depuis Djibouti et l'Éthiopie :
                création du canyon de Mêdého référencé sur descente-canyon.com, cinéma itinérant
                pour sensibiliser aux déchets, formation de guides reprise trois ans plus tard
                par l'État djiboutien, intégration administrative d'une famille éthiopienne.
                Une trajectoire, pas une promesse.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ padding: "30px 0" }}>
        <div className="wrap">
          <Photo
            src="assets/photos/rencontre-village.jpg"
            ratio="21 / 9"
            tag="Archives · Éthiopie"
            caption="Rencontre dans un hameau — région rurale"
            location="Éthiopie · 2014"
            focal="50% 40%"
          />
        </div>
      </section>

      <SignatureBand />

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="kicker" style={{ marginBottom: 18 }}>Six entrées dans le projet</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: "0 0 60px", maxWidth: 700 }}>
              Pourquoi Manus Terra, <span className="italic-serif">aujourd'hui</span>.
            </h2>
          </Reveal>

          <div style={{ display: "grid", gap: 0 }}>
            {[
              { n: "01", t: "Une expérience qui transforme", lead: "On ne comprend pas le monde à distance.", b: "Au fil des années, nous avons vécu des expériences qui ont changé notre regard. Le terrain nous a appris ce qu'aucun rapport ne raconte : la lenteur, l'écoute, l'humilité." },
              { n: "02", t: "Une aventure familiale", lead: "Comprendre avant d'agir.", b: "Nous sommes une famille engagée. Vivre ensemble cette aventure, c'est aussi tenir un engagement dans la durée — et le partager au-delà du foyer." },
              { n: "03", t: "Une autre manière d'agir", lead: "Pas de réponses toutes faites.", b: "Nous arrivons en facilitateurs, jamais en sauveurs. Une solution se construit avec, jamais pour. Elle se nomme avec ceux qu'elle concerne, et elle peut attendre — avant d'être accompagnée." },
              { n: "04", t: "Une route construite", lead: "2028 France · 2029 international.", b: "Une trajectoire posée : expérimenter d'abord, en France, dans une langue et un cadre connus. Déployer ensuite, ailleurs, avec une base solide et des partenaires identifiés." },
              { n: "05", t: "Une démarche partagée", lead: "Une histoire vécue.", b: "Nous souhaitons associer des partenaires — mécènes, entreprises, fondations — non pas comme financeurs invisibles, mais comme témoins et compagnons d'une histoire qui se vit." },
              { n: "06", t: "La naissance de Manus Terra", lead: "Main et terre, en latin.", b: "Le projet associatif formalise ce que nous faisions déjà. Une structure, des statuts, un cadre — pour rendre lisible et durable une pratique née sur le terrain." },
            ].map((bl, i) => (
              <Reveal key={bl.n} delay={i * 50}
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr 1.6fr",
                  gap: 40,
                  padding: "42px 0",
                  borderTop: "1px solid var(--rule)",
                  borderBottom: i === 5 ? "1px solid var(--rule)" : "none",
                  alignItems: "start",
                }}>
                <div className="display" style={{ fontSize: 44, color: "var(--terracotta)" }}>{bl.n}</div>
                <div>
                  <h3 className="serif" style={{ fontSize: 26, fontWeight: 400, margin: "0 0 10px", letterSpacing: "-0.005em" }}>
                    {bl.t}
                  </h3>
                  <p className="italic-serif" style={{ fontSize: 16, color: "var(--ink-mute)", margin: 0 }}>
                    {bl.lead}
                  </p>
                </div>
                <p style={{ fontSize: 15.5, margin: 0, paddingTop: 6 }}>{bl.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ background: "var(--paper-deep)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="wrap">
          <Reveal>
            <div className="kicker" style={{ marginBottom: 18 }}>Calendrier · une route construite</div>
            <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 52px)", margin: "0 0 30px", maxWidth: 760 }}>
              D'une <span className="italic-serif">expérimentation</span> à un déploiement.
            </h2>
          </Reveal>
          <Timeline variant={tweaks.timeline} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 60 }}>
            <Reveal>
              <div className="kicker" style={{ marginBottom: 18 }}>Preuves de terrain</div>
              <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 52px)", margin: 0 }}>
                Djibouti, <span className="italic-serif">Éthiopie</span>.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p style={{ fontSize: 16, lineHeight: 1.6, alignSelf: "end", margin: 0 }}>
                Avant l'association, des années de présence. Quatre projets documentés, dont un canyon
                aujourd'hui référencé internationalement.
              </p>
            </Reveal>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 28 }}>
            <Photo
              src="assets/photos/enfant-jerricane.jpg"
              ratio="4 / 3"
              tag="01 · Djibouti — Obock"
              caption="Canyon de Mêdého — descente-canyon.com"
              location="2018-2021"
              focal="50% 45%"
              tone="duotone"
            />
            <div style={{ display: "grid", gap: 28 }}>
              <Photo
                src="assets/photos/cinema-itinerant.jpg"
                ratio="16 / 10"
                tag="02 · Djibouti"
                caption="Cinéma itinérant"
                location="villages reculés"
                focal="55% 50%"
                tone="duotone"
              />
              <Photo
                src="assets/photos/soin-portrait.jpg"
                ratio="16 / 10"
                tag="03 · Éthiopie"
                caption="Intégration administrative"
                location="région rurale"
                focal="40% 30%"
                tone="duotone"
              />
            </div>
          </div>

          <div style={{ marginTop: 40, padding: 28, borderTop: "1px solid var(--rule)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
            <p style={{ margin: 0, maxWidth: 640 }}>
              Le canyon de Mêdého, dans la région d'Obock, est aujourd'hui référencé sur descente-canyon.com.
              Une idée de formation de guides née en 2018 a été reprise par l'État djiboutien en 2021.
            </p>
            <a className="btn btn-ghost" href="https://descente-canyon.com" target="_blank" rel="noreferrer">
              Voir la fiche du canyon ↗
            </a>
          </div>
        </div>
      </section>

      <ContactCTASection setRoute={setRoute} onMecene={onMecene} />
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────
// PARTENAIRE
// ─────────────────────────────────────────────────────────────────────
function PagePartenaire({ setRoute, onMecene, tweaks }) {
  const [tier, setTier] = useState("indiv");

  const tiers = {
    indiv: {
      label: "Particulier",
      sub: "Engagé, sympathisant, ami du projet",
      cards: [
        { t: "Don ponctuel", a: "à partir de 30 €", d: "Un coup de pouce ponctuel — sans engagement, mais visible. Reçu fiscal sous réserve du rescrit." },
        { t: "Don mensuel", a: "à partir de 15 € / mois", d: "Soutien régulier qui nous permet de tenir la durée. Modulable, suspendable à tout moment." },
        { t: "Mise en relation", a: "Réseau", d: "Vous connaissez un acteur local, un journaliste, un fournisseur ? Présentez-nous." },
      ],
    },
    entr: {
      label: "Entreprise locale",
      sub: "TPE, PME, artisan, indépendant",
      cards: [
        { t: "Mécénat financier", a: "à partir de 500 € / an", d: "Soutien défiscalisable (sous réserve du rescrit). Visibilité sur nos supports, mention dans nos récits." },
        { t: "Mécénat de compétence", a: "Pro bono", d: "Comptabilité, juridique, communication, photo, vidéo — vos savoir-faire valent largement un chèque." },
        { t: "Don en nature", a: "Matériel, services", d: "Aménagement fourgon, équipement nomade, matériel terrain, photo / vidéo, supports imprimés." },
      ],
    },
    fond: {
      label: "Fondation",
      sub: "Fondation privée ou d'entreprise",
      cards: [
        { t: "Subvention programme", a: "Sur dossier", d: "Financement d'un cycle terrain (6 à 12 mois) sur un territoire ciblé, avec livrables documentés." },
        { t: "Partenariat pluri-annuel", a: "Sur convention", d: "Engagement structurant sur 2 à 4 ans, avec reporting, photos, récits et co-construction d'objectifs." },
        { t: "Co-financement projet", a: "Sur appel", d: "Réponse conjointe à des appels à projets thématiques (jeunesse, environnement, médiation)." },
      ],
    },
  };

  const t = tiers[tier];

  return (
    <>
      <section style={{ padding: "min(10vw, 100px) 0 60px" }}>
        <div className="wrap">
          <Reveal><div className="kicker" style={{ marginBottom: 24 }}>04 · Devenir partenaire</div></Reveal>
          <Reveal delay={80}>
            <h1 className="display" style={{ fontSize: "clamp(54px, 7vw, 110px)", margin: "0 0 30px", maxWidth: 1200 }}>
              Construisons<br/>ensemble une aventure<br/><span className="italic-serif">humaine et engagée</span>.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ fontSize: 18, fontFamily: "var(--serif)", fontWeight: 300, maxWidth: 720, margin: 0, color: "var(--ink-soft)" }}>
              Un soutien à Manus Terra ne finance pas seulement un déplacement.
              Il permet de créer les conditions d'une présence humaine, utile et respectueuse sur le terrain.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap">
          <Reveal>
            <div style={{ display: "flex", gap: 8, padding: 6, background: "var(--paper-deep)", borderRadius: 999, border: "1px solid var(--rule)", marginBottom: 50, width: "fit-content" }}>
              {Object.entries(tiers).map(([k, v]) => (
                <button key={k}
                  onClick={() => setTier(k)}
                  style={{
                    padding: "12px 22px",
                    border: 0,
                    background: tier === k ? "var(--ink)" : "transparent",
                    color: tier === k ? "var(--paper)" : "var(--ink-soft)",
                    borderRadius: 999, cursor: "pointer",
                    fontFamily: "var(--sans)", fontSize: 13.5, fontWeight: 500,
                    transition: "all .25s ease",
                  }}>{v.label}</button>
              ))}
            </div>
          </Reveal>

          <div key={tier} style={{ animation: "fadeIn .35s ease" }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>{t.sub}</div>
            <h2 className="display" style={{ fontSize: 40, margin: "0 0 36px", maxWidth: 700 }}>
              Trois manières de soutenir comme <span className="italic-serif">{t.label.toLowerCase()}</span>.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {t.cards.map((c, i) => (
                <div key={c.t} className="card" style={{ padding: 32, position: "relative" }}>
                  <div className="mono" style={{ fontSize: 11, color: "var(--ink-mute)", letterSpacing: "0.16em", marginBottom: 22 }}>
                    0{i+1}
                  </div>
                  <h3 className="serif" style={{ fontSize: 24, fontWeight: 400, margin: "0 0 8px" }}>{c.t}</h3>
                  <div className="mono" style={{ fontSize: 12, color: "var(--terracotta-d)", letterSpacing: "0.06em", marginBottom: 18 }}>
                    {c.a}
                  </div>
                  <p style={{ fontSize: 14.5, margin: 0 }}>{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--paper-deep)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <div className="wrap">
          <Reveal>
            <div className="kicker" style={{ marginBottom: 18 }}>Notre engagement envers vous</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 56px)", margin: "0 0 60px", maxWidth: 800 }}>
              Ce que nous vous <span className="italic-serif">apportons</span>.
            </h2>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0 }}>
            {[
              ["Visibilité ciblée", "Mention sur le site, dans la newsletter, sur les supports photo/vidéo. Sans ostentation, mais juste."],
              ["Valorisation publique", "Une vraie place dans le récit du projet — vos valeurs portées, pas votre logo seul."],
              ["Suivi régulier", "Photos, récits, retours de terrain. Une lettre par saison, des points d'étape annuels."],
              ["Bilans transparents", "Comptes annuels accessibles. Détail de l'usage de chaque soutien matériel ou financier."],
              ["Mise en avant", "Si vous le souhaitez : interview, témoignage, co-publication d'un récit conjoint."],
              ["Participation directe", "Possibilité d'une visite de terrain en France (2028) ou d'une rencontre annuelle avec l'équipe."],
            ].map(([t, b], i) => (
              <div key={t} style={{
                padding: "34px 36px 34px 0",
                borderTop: "1px solid var(--rule)",
                borderBottom: i >= 4 ? "1px solid var(--rule)" : "none",
                paddingLeft: (i % 2 === 1) ? 36 : 0,
                borderLeft: (i % 2 === 1) ? "1px solid var(--rule)" : "none",
              }}>
                <div className="display" style={{ fontSize: 32, marginBottom: 6, color: "var(--ink)" }}>0{i+1}</div>
                <h3 className="serif" style={{ fontSize: 22, fontWeight: 400, margin: "0 0 10px" }}>{t}</h3>
                <p style={{ fontSize: 14.5, margin: 0, maxWidth: 480 }}>{b}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 60, padding: "28px 32px", background: "var(--paper)", border: "1px solid var(--rule)", borderLeft: "3px solid var(--terracotta)" }}>
            <div className="eyebrow" style={{ marginBottom: 8, color: "var(--terracotta-d)" }}>Note fiscale</div>
            <p style={{ margin: 0, fontSize: 15 }}>
              La déductibilité fiscale des dons est <strong style={{ color: "var(--ink)" }}>en cours de demande</strong> auprès de l'administration (procédure de <em>rescrit</em>).
              Nous tiendrons informés tous les mécènes dès obtention.
            </p>
          </div>
        </div>
      </section>

      <ContributionsAddendum />

      <ContactCTASection setRoute={setRoute} onMecene={onMecene} />
    </>
  );
}

function ContributionsAddendum() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 60 }}>
            <div>
              <div className="kicker" style={{ marginBottom: 18 }}>Vos contributions, nos actions</div>
              <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 52px)", margin: 0 }}>
                À quoi servent<br/>concrètement <span className="italic-serif">les soutiens</span>.
              </h2>
            </div>
            <p style={{ fontSize: 16, lineHeight: 1.6, alignSelf: "end", margin: 0 }}>
              Aucun frais de structure caché. Chaque euro et chaque pièce de matériel est tracé,
              documenté, partagé dans nos bilans.
            </p>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
          {[
            { t: "Aménager", c: ["Fourgon (cellule, isolation, couchage)", "Énergie autonome (solaire, batterie)", "Réserves d'eau et de carburant", "Sécurité du véhicule"], n: "01" },
            { t: "Vivre & travailler", c: ["Matériel d'observation terrain", "Photo, vidéo, audio", "Connectivité (satellite, GSM)", "Documentation et impression"], n: "02" },
            { t: "Soutenir sur place", c: ["Initiatives locales identifiées", "Matériel de sensibilisation", "Supports de transformation", "Frais de médiation"], n: "03" },
          ].map((b, i) => (
            <div key={b.n} style={{
              padding: "40px 32px",
              borderLeft: i !== 0 ? "1px solid var(--rule)" : "1px solid var(--rule)",
              borderRight: i === 2 ? "1px solid var(--rule)" : "none",
              borderTop: "1px solid var(--rule)",
              borderBottom: "1px solid var(--rule)",
            }}>
              <div className="display" style={{ fontSize: 56, marginBottom: 8, color: "var(--terracotta)" }}>{b.n}</div>
              <h3 className="serif" style={{ fontSize: 22, fontWeight: 400, margin: "0 0 22px" }}>{b.t}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
                {b.c.map((p) => (
                  <li key={p} style={{ fontSize: 14, color: "var(--ink-soft)", paddingLeft: 16, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 9, width: 6, height: 1, background: "var(--ink-faint)" }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────────────
function PageContact({ setRoute }) {
  const [form, setForm] = useState({ nom: "", email: "", objet: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    const body = `Nom: ${form.nom}\nEmail: ${form.email}\nObjet: ${form.objet}\n\nMessage:\n${form.msg}`;
    const mailto = `mailto:assomanusterra@gmail.com?subject=${encodeURIComponent(form.objet || "Contact via le site")}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setTimeout(() => { setSending(false); setSent(true); }, 500);
  };

  return (
    <>
      <section style={{ padding: "min(10vw, 100px) 0 60px" }}>
        <div className="wrap">
          <Reveal><div className="kicker" style={{ marginBottom: 24 }}>09 · Contact</div></Reveal>
          <Reveal delay={80}>
            <h1 className="display" style={{ fontSize: "clamp(56px, 8vw, 130px)", margin: "0 0 30px", maxWidth: 1200 }}>
              Écrivons-<span className="italic-serif">nous</span>.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p style={{ fontSize: 18, fontFamily: "var(--serif)", fontWeight: 300, maxWidth: 640, margin: 0, color: "var(--ink-soft)" }}>
              Mécénat, presse, partenariat de terrain, simple curiosité — répondez en quelques lignes,
              nous reviendrons vers vous personnellement.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-tight">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "start" }}>
          <Reveal>
            <div style={{ background: "var(--paper-veil)", border: "1px solid var(--rule)", padding: 44 }}>
              {sent ? (
                <div style={{ padding: "30px 0", textAlign: "center" }}>
                  <div className="kicker" style={{ marginBottom: 22, justifyContent: "center" }}>Message envoyé</div>
                  <h3 className="display" style={{ fontSize: 36, margin: "0 0 14px" }}>
                    Merci, <span className="italic-serif">{form.nom || "à très vite"}</span>.
                  </h3>
                  <p style={{ margin: "0 auto 30px", maxWidth: 420 }}>
                    Nous revenons vers vous à <strong style={{ color: "var(--ink)" }}>{form.email}</strong> sous 72 h ouvrées.
                  </p>
                  <button className="btn btn-ghost" onClick={() => { setSent(false); setForm({ nom: "", email: "", objet: "", msg: "" }); }}>
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
                    <div>
                      <label className="lbl">Nom</label>
                      <input className="input" type="text" required value={form.nom} onChange={set("nom")} placeholder="Prénom Nom" />
                    </div>
                    <div>
                      <label className="lbl">Email</label>
                      <input className="input" type="email" required value={form.email} onChange={set("email")} placeholder="vous@exemple.fr" />
                    </div>
                  </div>

                  <label className="lbl">Objet de la demande</label>
                  <input className="input" type="text" required value={form.objet} onChange={set("objet")} placeholder="Ex : question sur le projet, partenariat, presse…" style={{ marginBottom: 22 }} />

                  <label className="lbl">Message</label>
                  <textarea className="ta" required value={form.msg} onChange={set("msg")}
                    placeholder="Quelques lignes suffisent — votre contexte, votre intention, ce que vous aimeriez explorer avec nous."
                    style={{ marginBottom: 22 }} />

                  <label style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 26, fontSize: 13, color: "var(--ink-soft)", cursor: "pointer" }}>
                    <input type="checkbox" required style={{ marginTop: 4, accentColor: "var(--terracotta)" }} />
                    <span>
                      J'accepte que mes données soient utilisées pour traiter ma demande, conformément à la politique RGPD.
                      Pas de transmission à des tiers, désinscription à tout moment.
                    </span>
                  </label>

                  <button type="submit" className="btn">
                    Envoyer le message <span className="btn-arrow"></span>
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Nous joindre directement</div>
              <h3 className="serif" style={{ fontSize: 28, fontWeight: 400, margin: "0 0 30px" }}>
                assomanusterra<wbr/>@gmail.com
              </h3>

              <hr className="rule" style={{ marginBottom: 26 }} />

              <div className="eyebrow" style={{ marginBottom: 8 }}>Téléphone</div>
              <p style={{ fontFamily: "var(--serif)", fontSize: 22, margin: "0 0 26px" }}>+33 6 02 22 82 05</p>

              <hr className="rule" style={{ marginBottom: 26 }} />

              <div className="eyebrow" style={{ marginBottom: 8 }}>Siège social</div>
              <p style={{ margin: "0 0 26px", fontSize: 15.5, lineHeight: 1.55 }}>
                6 chemin des Gélinottes<br/>
                38110 La Tour-du-Pin<br/>
                France
              </p>

              <hr className="rule" style={{ marginBottom: 26 }} />

              <div className="eyebrow" style={{ marginBottom: 8 }}>Statut</div>
              <p style={{ margin: 0, fontSize: 14, color: "var(--ink-soft)" }}>
                Association loi 1901 — n°RNA : W382012107<br/>
                Déductibilité fiscale en cours de demande (rescrit).
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FamilleMiniSection />
    </>
  );
}

function FamilleMiniSection() {
  return (
    <section className="section-tight" style={{ background: "var(--paper-deep)", borderTop: "1px solid var(--rule)" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60 }}>
          <div>
            <div className="kicker" style={{ marginBottom: 16 }}>L'équipe</div>
            <h3 className="display" style={{ fontSize: 36, margin: 0 }}>
              Trois <span className="italic-serif">interlocuteurs</span>.
            </h3>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {[
              ["Angie Rabilloud", "Président · Direction du projet, terrain"],
              ["Medina Rabilloud", "Trésorière · Budget, logistique, mécénat"],
              ["Frédéric Rossi", "Secrétaire · Communication, presse, récits"],
            ].map(([nm, r]) => (
              <div key={nm}>
                <h4 className="serif" style={{ fontSize: 18, fontWeight: 400, margin: "0 0 4px" }}>{nm}</h4>
                <p style={{ fontSize: 13, color: "var(--ink-mute)", margin: 0, lineHeight: 1.5 }}>{r}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { PageProjet, PagePartenaire, PageContact });
