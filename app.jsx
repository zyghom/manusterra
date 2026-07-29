// app.jsx — Router shell

const { useState: useStateA, useEffect: useEffectA } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "timeline": "compass"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = useStateA("home");
  const [mecOpen, setMecOpen] = useStateA(false);

  // Scroll to top on route change
  useEffectA(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [route]);

  const open = () => setMecOpen(true);
  const close = () => setMecOpen(false);

  return (
    <>
      <Nav route={route} setRoute={setRoute} onMecene={open} />
      <main key={route}>
        {route === "home" && <PageHome setRoute={setRoute} onMecene={open} tweaks={tweaks} />}
        {route === "projet" && <PageProjet setRoute={setRoute} onMecene={open} tweaks={tweaks} />}
        {route === "partenaire" && <PagePartenaire setRoute={setRoute} onMecene={open} tweaks={tweaks} />}
        {route === "don" && <PageDon setRoute={setRoute} onMecene={open} tweaks={tweaks} />}
        {route === "contact" && <PageContact setRoute={setRoute} onMecene={open} tweaks={tweaks} />}
      </main>
      <Footer setRoute={setRoute} />

      <MeceneModal open={mecOpen} onClose={close} />

      <TweaksPanel title="Tweaks · Manus Terra">
        <TweakSection label="Timeline 2028 → 2029" />
        <TweakRadio
          label="Style"
          value={tweaks.timeline}
          options={[
            { label: "Horizon", value: "horizon" },
            { label: "Route", value: "route" },
            { label: "Étapes", value: "compass" },
          ]}
          onChange={(v) => setTweak("timeline", v)}
        />
        <div style={{ fontSize: 11, color: "rgba(41,38,27,.5)", lineHeight: 1.5, marginTop: 4 }}>
          Visible dans la section <strong style={{ color: "rgba(41,38,27,.8)" }}>Calendrier</strong> de la home et de la page <em>Le projet</em>.
        </div>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
