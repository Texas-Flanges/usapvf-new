import Link from "next/link";

export const metadata = {
  title: "Products | Flanges, Fittings, Valves, Custom Machining",
  description: "USA PVF supplies flanges, pipe fittings, valves, and custom machining with full BAA, BABA, and AIS compliance documentation. ASME, API, AWWA, DIN standards. Carbon, stainless, alloy, exotic materials."
};

export default function ProductsHub() {
  const products = [
    { href: "/products/flanges", title: "Flanges", body: "Weld neck, blind, slip-on, threaded, socket weld, lap joint, reducing, orifice, spectacle blind, long weld neck, plate. ASME B16.5, B16.47 Series A and B, API 6A, AWWA C207, DIN EN 1092-1, MSS SP-44.", chips: ["Class 150 to 2500", "API 2000 to 20000 PSI", "1/2 in to 60 in", "Custom over 60 in"] },
    { href: "/products/fittings", title: "Pipe Fittings", body: "Butt-weld, socket-weld, and threaded fittings. Elbows (45 and 90), tees, reducers (concentric and eccentric), caps, couplings, unions, swages. ASME B16.9 and B16.11 dimensions.", chips: ["SCH 10 to XXH", "Seamless or welded", "1/8 in to 48 in", "Long-radius bends"] },
    { href: "/products/valves", title: "Valves", body: "Gate, globe, check, ball, and butterfly valves for piping system service. API 6D pipeline ratings, ASME B16.34 process ratings. NACE MR0175 sour service availability.", chips: ["API 6D pipeline", "ASME B16.34", "Bolted and welded", "Class 150 to 1500"] },
    { href: "/products/custom-machining", title: "Custom Machining", body: "Non-standard bores, overbore conditions, special facings, RTJ grooves, weld overlay, hard facing, hubbed plate flanges. When the catalog dimension does not fit the job.", chips: ["CNC turn and mill", "Bore mods", "RTJ retrofit", "Weld overlay"] }
  ];
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="uppercase tracking-widest text-[#DC2626] text-sm mb-3">Product Lines</p>
          <h1 className="font-display text-5xl font-bold mb-6 text-white">What We Supply</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Four product categories. Every piece traceable to a mill heat. Every order documented to the federal domestic content standard the project requires.
          </p>
        </div>
      </section>
      <section className="bg-cream py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {products.map((p) => (
            <Link key={p.href} href={p.href} className="block bg-white border border-gray-200 p-8 rounded-lg hover:border-[#DC2626] hover:shadow-md transition">
              <h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-4">{p.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{p.body}</p>
              <ul className="flex flex-wrap gap-2 mb-4">
                {p.chips.map((c) => <li key={c} className="text-xs bg-[#F8F6F0] text-[#1B1F23] px-3 py-1 rounded-full font-semibold">{c}</li>)}
              </ul>
              <span className="text-[#DC2626] font-semibold">View Details &rarr;</span>
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-[#DC2626] py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl mb-4">Send a Spec, Not a Catalog Number</h2>
          <p className="text-xl mb-8">We work from drawings, BOMs, or descriptions. The quote includes documentation scope for the applicable federal standard.</p>
          <Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link>
        </div>
      </section>
    </>
  );
}
