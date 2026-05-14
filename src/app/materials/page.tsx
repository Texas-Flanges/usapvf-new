import Link from "next/link";
export const metadata = { title: "Flange Materials | Carbon, Stainless, Alloy, Exotic", description: "Material grade reference for steel pipe flanges. Carbon, stainless, chrome-moly alloy, duplex, and nickel-alloy grades. ASTM designators, applications, and domestic-melt availability." };
export default function MaterialsHub() {
  const mats = [
    { href: "/materials/carbon-steel", title: "Carbon Steel", body: "A105, A350 LF2 and LF3, A516-70, A36, A694 F42 through F70. The default material family for industrial pressure service.", grades: ["A105", "A350 LF2", "A516-70", "A694 F60"] },
    { href: "/materials/stainless-steel", title: "Stainless Steel", body: "F304, F304L, F316, F316L, F321, F347, plus dual-certified options. Corrosion resistance and food and chemical service.", grades: ["F304L", "F316L", "F321", "F347"] },
    { href: "/materials/alloy-steel", title: "Alloy Steel", body: "Chrome-moly F11, F22, F91, F92 for elevated temperature and creep service. A350 LF3 for low-temperature carbon-nickel.", grades: ["F11", "F22", "F91", "LF3"] },
    { href: "/materials/exotic-alloys", title: "Exotic Alloys", body: "Duplex 2205, super duplex 2507, Inconel 625 and 825, Hastelloy C-276, Monel 400, titanium grade 2. Corrosive duty and specialty service.", grades: ["2205", "Inc 625", "Hast C-276", "Monel 400"] }
  ];
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><p className="uppercase tracking-widest text-[#DC2626] text-sm mb-3">Material Reference</p><h1 className="font-display text-5xl font-bold mb-6 text-white">Grades We Stock and Supply</h1><p className="text-xl text-gray-300 leading-relaxed max-w-3xl">The material grade decides what the flange can do. Pressure, temperature, corrosion resistance, sour service, and low-temperature toughness all flow from the chemistry and the heat treatment. Domestic-melt availability covers the major grades.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">{mats.map((m) => (<Link key={m.href} href={m.href} className="block bg-white border border-gray-200 rounded p-8 hover:border-[#DC2626] hover:shadow-md transition"><h2 className="font-display text-2xl font-bold text-[#1B1F23] mb-3">{m.title}</h2><p className="text-gray-700 leading-relaxed mb-4">{m.body}</p><div className="flex flex-wrap gap-2">{m.grades.map((g) => <span key={g} className="text-xs bg-[#F8F6F0] text-[#1B1F23] px-3 py-1 rounded-full font-semibold">{g}</span>)}</div></Link>))}</div></section>
    <section className="bg-[#DC2626] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Specific Grade Question?</h2><Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link></div></section>
  </>);
}
