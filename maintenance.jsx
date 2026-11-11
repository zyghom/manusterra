// maintenance.jsx — Page d'attente « site en construction »
// Activée par MAINTENANCE dans app.jsx. Ajouter ?apercu à l'URL pour voir le site complet.

function PageMaintenance() {
  const reseaux = [
    { name: "Instagram", href: "https://www.instagram.com/assomanusterra/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/association-manus-terra/" },
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61595743671273" },
  ];

  return (
    <div className="mnt">
      <div className="mnt-inner">
        <img className="mnt-logo" src="assets/logo-mark.svg" alt="" aria-hidden="true" />
        <div className="eyebrow">Notre association prend forme</div>
        <h1 className="display mnt-title">
          Manus<span className="italic-serif"> Terra</span>
        </h1>
        <p className="mnt-sub">Aller à la rencontre des réalités humaines</p>
        <p className="mnt-lead">
          Née de rencontres et d'expériences humaines, Manus Terra construit aujourd'hui un projet
          associatif itinérant fondé sur une démarche simple : observer, comprendre, agir.
        </p>
        <p className="mnt-lead">
          Notre site évolue actuellement pour mieux vous présenter notre histoire, notre démarche
          et les prochaines étapes du projet. À très bientôt pour la suite de l'aventure !
        </p>

        <ul className="mnt-links">
          {reseaux.map((r) => (
            <li key={r.name}>
              <a href={r.href} target="_blank" rel="noopener noreferrer">{r.name} ↗</a>
            </li>
          ))}
        </ul>

        <p className="mnt-contact">
          Pour nous contacter :{" "}
          <a className="mnt-mail" href="mailto:assomanusterra@gmail.com">assomanusterra@gmail.com</a>
        </p>
      </div>

      <footer className="mnt-foot">
        <span>© 2026 Manus Terra — Association loi 1901 — n°RNA : W382012107</span>
        <a href="assets/statuts-manus-terra.pdf" target="_blank" rel="noreferrer">Statuts (PDF)</a>
      </footer>
    </div>
  );
}

Object.assign(window, { PageMaintenance });
