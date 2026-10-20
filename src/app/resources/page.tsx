import Link from "next/link";
export const metadata = { title: "Engineering Resources | Flange Dimensions, MTR, CAD Drawings", description: "Engineering reference for steel pipe flange supply: dimensional tables, MTR documentation, CAD drawings, technical specifications, and federal compliance reference." };
export default function ResourcesHub() {
  const r = [
    { href: "/resources/flange-dimensions", title: "Flange Dimensions", body: "ASME B16.5 and B16.47 dimensional tables. OD, bolt circle, bolt count, thickness by class and size." },
    { href: "/resources/mtr-documentation", title: "MTR Documentation", body: "What goes on a mill test report. EN 10204 3.1 and 3.2 certificates. Domestic melt traceability." },
    { href: "/resources/cad-drawings", title: "CAD Drawings", body: "Flange CAD drawings in DWG, DXF, STEP, and IGES. Library on the parent site." },
    { href: "/resources/technical-specs", title: "Technical Specs", body: "Material grade quick reference, pressure-temperature tables, NACE hardness limits." },
    { href: "/tools", title: "Engineering Tools", body: "Bolt torque calculator, flange dimension lookup, pressure-temperature rating tool." }
  ];
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><p className="uppercase tracking-widest text-[#DC2626] text-sm mb-3">Reference</p><h1 className="font-display text-5xl font-bold mb-6 text-white">Engineering Resources</h1><p className="text-xl text-gray-300 leading-relaxed max-w-3xl">Dimensional tables, documentation reference, CAD libraries, and calculators. The reference content that gets a flange order from spec to ship without surprises.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">{r.map((x) => (<Link key={x.href} href={x.href} className="block bg-white border border-gray-200 rounded p-6 hover:border-[#DC2626] hover:shadow-md transition"><h2 className="font-display text-xl font-bold text-[#1B1F23] mb-2">{x.title}</h2><p className="text-gray-700 leading-relaxed text-sm">{x.body}</p></Link>))}</div></section>
    <section className="bg-[#DC2626] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Reference Question Not Covered?</h2><Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Send a Question</Link></div></section>
  </>);
}
