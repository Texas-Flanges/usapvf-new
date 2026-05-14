import Link from "next/link";
export const metadata = { title: "API 6A and 6BX Flanges | Wellhead and Pipeline Pressure", description: "API 6A wellhead and pressure control flanges. 2000 PSI through 25000 PSI working pressure classes. Ring-type joint facings, R and BX ring gaskets. NACE MR0175 sour service availability." };
export default function ApiPage() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><Link href="/standards" className="text-gray-400 hover:text-[#DC2626] text-sm mb-6 inline-block">&larr; Standards</Link><h1 className="font-display text-5xl font-bold mb-6 text-white">API 6A and 6BX</h1><p className="text-xl text-gray-300 max-w-3xl leading-relaxed">The pressure-control standard for wellhead, christmas tree, and surface production equipment in oil and gas service. Where ASME tops out around 2500 PSI, API 6A picks up and runs to 25000 PSI.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-4xl mx-auto prose-content space-y-6">
      <h2 className="font-display text-3xl font-bold text-ink">Pressure Classes</h2>
      <p className="text-lg text-gray-700 leading-relaxed">API 6A flanges are designated by working pressure: 2M (2000 PSI), 3M, 5M, 10M, 15M, 20M, and 25M. The 6B series covers 2M through 5M at standard ring-joint dimensions. The 6BX series covers 10M and above, where the ring gasket geometry differs to handle the higher pressures.</p>
      <p className="text-lg text-gray-700 leading-relaxed">The 2M class is dimensionally close to ASME B16.5 Class 600 but with stricter material and ring-joint requirements. Above 5M, API 6A is the only governing standard for the dimensional family.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Ring Gaskets</h2>
      <p className="text-lg text-gray-700 leading-relaxed">Ring-type joint (RTJ) facings are non-negotiable on API 6A flanges. The metal-to-metal seal between flange face groove and ring gasket is what gives the assembly its pressure integrity. R-type gaskets (oval or octagonal) cover 2M through 5M. BX-type gaskets, with self-energizing geometry, cover 10M and above. Mating the wrong gasket type to the flange compromises the seal. The flange and the gasket are ordered together.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Material Specifications</h2>
      <p className="text-lg text-gray-700 leading-relaxed">API 6A defines material classes AA, BB, CC, DD, EE, FF, and HH based on operating environment. Standard service is BB or CC carbon and low-alloy. Sour service is DD or EE with NACE MR0175 hardness and chemistry control. Severe sour service is FF or HH with additional restrictions on chemistry and heat treatment. The MTR shows the material class and the supporting test data.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Where API 6A Lives</h2>
      <p className="text-lg text-gray-700 leading-relaxed">Wellheads, christmas trees, blowout preventers, choke and kill manifolds, frac trees, and high-pressure flowlines. Drilling, completion, production, and intervention service. The standard does not generally appear on plant process piping or on water service, which fall under ASME or AWWA standards.</p>
    </div></section>
    <section className="bg-[#DC2626] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Wellhead Flange Schedule?</h2><Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link></div></section>
  </>);
}
