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
        <div className="eyebrow">Site en construction</div>
        <h1 className="display mnt-title">
          Manus<span className="italic-serif"> Terra</span>
        </h1>
        <p className="mnt-lead">
          Notre nouveau site prend forme. En attendant, suivez la préparation de nos
          premières immersions sur nos réseaux, ou écrivez-nous.
        </p>

        <ul className="mnt-links">
          {reseaux.map((r) => (
            <li key={r.name}>
              <a href={r.href} target="_blank" rel="noopener noreferrer">{r.name} ↗</a>
            </li>
          ))}
        </ul>

        <a className="mnt-mail" href="mailto:assomanusterra@gmail.com">assomanusterra@gmail.com</a>
      </div>

      <footer className="mnt-foot">
        <span>© 2026 Manus Terra — Association loi 1901 — n°RNA : W382012107</span>
        <a href="assets/statuts-manus-terra.pdf" target="_blank" rel="noreferrer">Statuts (PDF)</a>
      </footer>
    </div>
  );
}

Object.assign(window, { PageMaintenance });
