const BackgroundEffects = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
    <div className="absolute inset-0 bg-bg" />
    <div className="absolute inset-0 bg-grid opacity-[0.03] dark:opacity-[0.04]" />
    <div className="orb orb-1" />
    <div className="orb orb-2" />
    <div className="orb orb-3" />
  </div>
);

export default BackgroundEffects;
