export default function FeatureGrid() {
  const features = [
    "Layout-aware extraction",
    "Handwriting detection",
    "Clause drift tracking",
    "Risk heat mapping",
    "Negotiation suggestions",
    "Enterprise confidence scoring",
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 px-16 pb-24">
      {features.map((f, i) => (
        <div
          key={i}
          className="p-6 bg-white border rounded-xl shadow-sm font-semibold"
        >
          {f}
        </div>
      ))}
    </div>
  );
}
