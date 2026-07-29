// legal.jsx — Mentions légales & RGPD

function PageMentions({ setRoute }) {
  return (
    <section style={{ padding: "min(10vw, 100px) 0 60px" }}>
      <div className="wrap" style={{ maxWidth: 800 }}>
        <Reveal><div className="kicker" style={{ marginBottom: 24 }}>Informations légales</div></Reveal>
        <Reveal delay={80}>
          <h1 className="display" style={{ fontSize: "clamp(40px, 6vw, 72px)", margin: "0 0 50px" }}>
            Mentions <span className="italic-serif">légales</span>.
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <div style={{ display: "grid", gap: 40 }}>
            <div>
              <h2 className="serif" style={{ fontSize: 24, fontWeight: 400, margin: "0 0 12px" }}>Éditeur du site</h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                <strong>Manus Terra</strong><br/>
                Association loi 1901 — n°RNA : W382012107<br/>
                Siège social : 6 chemin des Gélinottes, 38110 La Tour-du-Pin, France<br/>
                Email : <a href="mailto:assomanusterra@gmail.com" style={{ color: "var(--terracotta-d)" }}>assomanusterra@gmail.com</a><br/>
                Téléphone : +33 6 02 22 82 05<br/>
                Directeur de la publication : Angie Rabilloud, Président
              </p>
            </div>

            <div>
              <h2 className="serif" style={{ fontSize: 24, fontWeight: 400, margin: "0 0 12px" }}>Hébergement</h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                Ce site est hébergé par <strong>Vercel Inc.</strong><br/>
                440 N Baxter St, Los Angeles, CA 90012, États-Unis<br/>
                Site web : <span style={{ color: "var(--terracotta-d)" }}>vercel.com</span>
              </p>
            </div>

            <div>
              <h2 className="serif" style={{ fontSize: 24, fontWeight: 400, margin: "0 0 12px" }}>Propriété intellectuelle</h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes) est la propriété
                exclusive de l'association Manus Terra ou de ses partenaires. Toute reproduction, représentation,
                modification, publication ou adaptation de tout ou partie des éléments du site est interdite
                sans autorisation écrite préalable.
              </p>
            </div>

            <div>
              <h2 className="serif" style={{ fontSize: 24, fontWeight: 400, margin: "0 0 12px" }}>Responsabilité</h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                Manus Terra s'efforce de fournir des informations aussi précises que possible.
                Toutefois, l'association ne pourra être tenue responsable des omissions, des inexactitudes
                ou des carences dans la mise à jour. Les informations sont données à titre indicatif
                et sont susceptibles d'évoluer.
              </p>
            </div>

            <div>
              <h2 className="serif" style={{ fontSize: 24, fontWeight: 400, margin: "0 0 12px" }}>Liens hypertextes</h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                Le site peut contenir des liens vers d'autres sites. Manus Terra ne dispose d'aucun
                contrôle sur le contenu de ces sites tiers et décline toute responsabilité quant
                à leur contenu.
              </p>
            </div>

            <div>
              <h2 className="serif" style={{ fontSize: 24, fontWeight: 400, margin: "0 0 12px" }}>Cookies</h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                Ce site n'utilise aucun cookie de traçage, cookie publicitaire ou outil d'analyse tiers.
                Aucune donnée de navigation n'est collectée.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PageRGPD({ setRoute }) {
  return (
    <section style={{ padding: "min(10vw, 100px) 0 60px" }}>
      <div className="wrap" style={{ maxWidth: 800 }}>
        <Reveal><div className="kicker" style={{ marginBottom: 24 }}>Protection des données</div></Reveal>
        <Reveal delay={80}>
          <h1 className="display" style={{ fontSize: "clamp(40px, 6vw, 72px)", margin: "0 0 50px" }}>
            Politique de <span className="italic-serif">confidentialité</span>.
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <div style={{ display: "grid", gap: 40 }}>
            <div>
              <h2 className="serif" style={{ fontSize: 24, fontWeight: 400, margin: "0 0 12px" }}>Responsable du traitement</h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                <strong>Manus Terra</strong><br/>
                Association loi 1901 — n°RNA : W382012107<br/>
                6 chemin des Gélinottes, 38110 La Tour-du-Pin, France<br/>
                Contact : <a href="mailto:assomanusterra@gmail.com" style={{ color: "var(--terracotta-d)" }}>assomanusterra@gmail.com</a>
              </p>
            </div>

            <div>
              <h2 className="serif" style={{ fontSize: 24, fontWeight: 400, margin: "0 0 12px" }}>Données collectées</h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                Les seules données personnelles collectées sur ce site sont celles que vous communiquez
                volontairement via le formulaire de contact : nom, adresse email et contenu de votre message.
                Aucune donnée n'est collectée automatiquement (pas de cookies, pas d'outils d'analyse).
              </p>
            </div>

            <div>
              <h2 className="serif" style={{ fontSize: 24, fontWeight: 400, margin: "0 0 12px" }}>Finalité du traitement</h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                Vos données sont utilisées exclusivement pour répondre à votre demande de contact.
                Elles ne sont jamais transmises à des tiers, jamais utilisées à des fins commerciales
                et ne font l'objet d'aucun profilage.
              </p>
            </div>

            <div>
              <h2 className="serif" style={{ fontSize: 24, fontWeight: 400, margin: "0 0 12px" }}>Base légale</h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                Le traitement repose sur votre consentement (article 6.1.a du RGPD),
                exprimé par la validation du formulaire de contact.
              </p>
            </div>

            <div>
              <h2 className="serif" style={{ fontSize: 24, fontWeight: 400, margin: "0 0 12px" }}>Durée de conservation</h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                Vos données sont conservées le temps nécessaire au traitement de votre demande,
                puis supprimées dans un délai maximum de 12 mois.
              </p>
            </div>

            <div>
              <h2 className="serif" style={{ fontSize: 24, fontWeight: 400, margin: "0 0 12px" }}>Vos droits</h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                Conformément au Règlement Général sur la Protection des Données (RGPD),
                vous disposez des droits suivants :
              </p>
              <ul style={{ fontSize: 15, lineHeight: 1.65, margin: "12px 0 0", paddingLeft: 20 }}>
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement (« droit à l'oubli »)</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
                <li>Droit d'opposition</li>
              </ul>
              <p style={{ fontSize: 15, lineHeight: 1.65, margin: "12px 0 0" }}>
                Pour exercer ces droits, adressez votre demande à :
                <a href="mailto:assomanusterra@gmail.com" style={{ color: "var(--terracotta-d)", marginLeft: 4 }}>assomanusterra@gmail.com</a>
              </p>
            </div>

            <div>
              <h2 className="serif" style={{ fontSize: 24, fontWeight: 400, margin: "0 0 12px" }}>Réclamation</h2>
              <p style={{ fontSize: 15, lineHeight: 1.65, margin: 0 }}>
                En cas de litige, vous pouvez introduire une réclamation auprès de la CNIL
                (Commission Nationale de l'Informatique et des Libertés) : <span style={{ color: "var(--terracotta-d)" }}>www.cnil.fr</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

Object.assign(window, { PageMentions, PageRGPD });
