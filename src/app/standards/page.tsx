import Link from "next/link";
export const metadata = { title: "Flange Standards | ASME, API, AWWA, DIN", description: "Reference for the major flange standards: ASME B16.5 and B16.47, API 6A and 6BX, AWWA C207, DIN EN 1092-1." };
export default function StandardsHub() {
  const std = [
    { href: "/standards/asme-flanges", code: "ASME B16.5 / B16.47", body: "Pipe flanges and flanged fittings. B16.5 covers 1/2 to 24 inch NPS. B16.47 covers 26 to 60 inch in Series A and B. Class 75 through 2500." },
    { href: "/standards/api-flanges", code: "API 6A / 6BX", body: "Wellhead and pressure-control flanges for oil and gas service. 2000 PSI through 25000 PSI working pressure classes." },
    { href: "/standards/awwa-flanges", code: "AWWA C207", body: "Steel pipe flanges for waterworks. Class B, D, E, and F covering working pressures from 86 to 300 psi. 4 inch through 144 inch." },
    { href: "/standards/din-flanges", code: "DIN EN 1092-1", body: "European metric flange standard. PN ratings from 6 through 400 bar. DN sizes from 10 through 4000." }
  ];
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><p className="uppercase tracking-widest text-[#DC2626] text-sm mb-3">Standards Reference</p><h1 className="font-display text-5xl font-bold mb-6 text-white">Built to Code</h1><p className="text-xl text-gray-300 leading-relaxed max-w-3xl">Four major standards cover the majority of domestic PVF supply. Each governs different pressure regimes, dimensional families, and material chemistry. Project specifications usually name the standard; the documentation we ship references it.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">{std.map((s) => (<Link key={s.href} href={s.href} className="block bg-white border border-gray-200 rounded p-8 hover:border-[#DC2626] hover:shadow-md transition"><p className="text-[#DC2626] font-display text-2xl font-bold mb-3">{s.code}</p><p className="text-gray-700 leading-relaxed">{s.body}</p></Link>))}</div></section>
    <section className="bg-[#DC2626] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Spec Standard Not Listed?</h2><Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link></div></section>
  </>);
}
