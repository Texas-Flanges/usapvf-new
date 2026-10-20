import Link from "next/link";
export const metadata = { title: "Industries We Supply | Oil and Gas, Water, Power, Chemical", description: "USA PVF supplies American-sourced flanges, valves, and fittings across twelve industries from oil and gas pipeline service to municipal waterworks under EPA SRF funding." };
const industries = [
  { slug: "oil-gas", name: "Oil & Gas", line: "API 6A wellhead, MSS SP-44 pipeline, ASME process. NACE sour service." },
  { slug: "petrochemical", name: "Petrochemical", line: "ASME B16.5 and B16.47 process flanges. Chrome-moly F22 and F91. NACE." },
  { slug: "power-generation", name: "Power Generation", line: "Main steam and hot reheat in F91 and F92. F347 austenitic. AWWA on raw water intake." },
  { slug: "waterworks", name: "Water & Wastewater", line: "AWWA C207 plate-cut flanges. AIS-compliant on EPA SRF and USDA Rural Development." },
  { slug: "chemical-processing", name: "Chemical Processing", line: "Stainless F316L and exotic alloys. Inconel, Hastelloy, duplex 2205." },
  { slug: "mining", name: "Mining & Minerals", line: "Slurry service. Duplex 2205 and Hastelloy lining. Heavy ring flanges." },
  { slug: "pulp-paper", name: "Pulp & Paper", line: "Titanium grade 2 for bleach plant. F316L for general process." },
  { slug: "food-beverage", name: "Food & Beverage", line: "Sanitary F316L. Triclamp connections, USDA-approved finishes." },
  { slug: "agriculture", name: "Agriculture", line: "Carbon steel irrigation mains. AWWA C207 for transfer lines." },
  { slug: "hvac", name: "HVAC & Mechanical", line: "Carbon steel chilled water and steam. Class 150 and 300 ASME." },
  { slug: "marine", name: "Marine & Shipbuilding", line: "Monel 400 and copper-nickel for seawater. Bronze for non-magnetic." },
  { slug: "data-centers", name: "Data Centers", line: "Carbon steel chilled water loops. Stainless on humidification. BABA-compliant on federally funded builds." }
];
export default function IndustriesHub() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><p className="uppercase tracking-widest text-[#DC2626] text-sm mb-3">Sectors We Serve</p><h1 className="font-display text-5xl font-bold mb-6 text-white">From Wellhead to Treatment Plant</h1><p className="text-xl text-gray-300 leading-relaxed max-w-3xl">PVF supply across twelve core industries. Different services, different standards, same documentation framework: domestic melt where the funding requires it, full traceability everywhere.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">{industries.map((i) => (<Link key={i.slug} href={`/industries/${i.slug}`} className="block bg-white border border-gray-200 rounded p-5 hover:border-[#DC2626] hover:shadow-md transition"><h2 className="font-display text-xl font-bold text-[#1B1F23] mb-2">{i.name}</h2><p className="text-gray-700 text-sm leading-relaxed">{i.line}</p></Link>))}</div></section>
    <section className="bg-[#DC2626] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Industry-Specific Spec?</h2><Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link></div></section>
  </>);
}
