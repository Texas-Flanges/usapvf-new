import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Industry {
  slug: string;
  name: string;
  hero: string;
  intro: string;
  body: string[];
  standards: string[];
  materials: string[];
}

const industries: Industry[] = [
  { slug: "oil-gas", name: "Oil & Gas", hero: "Pipeline, Wellhead, and Production PVF",
    intro: "API 6A wellhead pressure, MSS SP-44 pipeline flanges, ASME B16.5 process. From the surface tree to the refinery gate.",
    body: ["Upstream service centers on API 6A and 6BX flanges for wellhead, christmas tree, and BOP equipment. Working pressures from 2000 PSI through 25000 PSI. Ring-type joint facings with matching R and BX ring gaskets shipped together. NACE MR0175 hardness compliance for sour service heats.",
      "Midstream service runs MSS SP-44 pipeline flanges in API 5L X-grade pipe matching. A694 forged flanges in grades F42 through F70 mate to X42 through X70 pipe. Class 600 through Class 1500 covers most transmission service. Pipeline flanges ship with charpy impact testing per project specification.",
      "Downstream refining and processing returns to ASME B16.5 and B16.47 in process service. Chrome-moly F22 and F91 in hot side service, A105 and F316L in general process. The documentation package includes MTR, NACE if applicable, and any project-specific NDE reports."],
    standards: ["API 6A / 6BX", "MSS SP-44", "ASME B16.5 / B16.47", "NACE MR0175"],
    materials: ["A105", "A350 LF2", "A694 F60", "F22", "F91", "F316L"] },
  { slug: "petrochemical", name: "Petrochemical", hero: "Plant Process Flange Supply",
    intro: "Refinery and petrochemical plant process piping. ASME B16.5 and B16.47 across the temperature spectrum, with chrome-moly alloy for hot side service.",
    body: ["Petrochemical plants run the full pressure-temperature spectrum on the same site. Cold side cracking units sit at ambient pressure and temperature. Hot side reactor effluent runs above 800 degrees F. The flange supply has to cover both with grade-appropriate material.",
      "Chrome-moly F22 and F91 cover the elevated temperature reactor and heater service. Stainless F316L handles corrosive acid alkylation and aromatic recovery service. A105 carbon covers utility and intermediate temperature lines. The metallurgy is decided line by line, often inside the same skid.",
      "NACE MR0175 compliance is common on sour crude service and on amine treaters. The MTR shows the hardness data, the chemistry, and the heat treatment record. The compliance letter references the applicable NACE annex and the project standard."],
    standards: ["ASME B16.5", "ASME B16.47", "NACE MR0175", "API 6A on flow lines"],
    materials: ["A105", "F11", "F22", "F91", "F304L", "F316L", "Inconel 625"] },
  { slug: "power-generation", name: "Power Generation", hero: "Main Steam, Reheat, and Balance of Plant",
    intro: "Power plant flange supply across coal, gas, nuclear, and combined-cycle service. F91 and F92 on main steam, F347 on auxiliary, AWWA on raw water intake.",
    body: ["Main steam and hot reheat headers run in F91 modified 9 chromium-moly at temperatures from 1050 to 1200 degrees F. Welding consumables and procedures are tightly controlled. F92 with tungsten substitution extends service into ultra-supercritical units.",
      "Auxiliary and balance of plant service uses F347 stabilized austenitic for high-temperature steam and F316L for condensate and feedwater service. Carbon A105 handles utility air, instrument air, and lower-temperature service.",
      "Raw water intake and circulating water lines move into AWWA C207 plate-cut territory at the larger diameters. Class D or Class E covers most intake pressures. The intake station may have AIS compliance requirements if the utility is federally funded."],
    standards: ["ASME B16.5", "ASME B16.47", "AWWA C207 on raw water", "ASME Section III for nuclear"],
    materials: ["F91", "F92", "F347", "F316L", "A105", "A516-70"] },
  { slug: "waterworks", name: "Water & Wastewater", hero: "AWWA Plate-Cut Flange Supply",
    intro: "Municipal water and wastewater piping. AWWA C207 plate-cut flanges from 4 inch to 144 inch. AIS-compliant for EPA SRF and USDA Rural Development funded projects.",
    body: ["AWWA C207 governs the majority of waterworks flange supply. Class B covers low-pressure transmission. Class D is the workhorse at 175 psi working pressure. Class E and F cover high service. The class is selected against static pressure plus surge, not just operating pressure.",
      "Plate-cut construction from domestic-melt A36 or A516-70 plate is the standard process. Bolt patterns match the mating valve or pipe component. Custom diameters beyond 144 inch are routine on large transmission projects, with project drawing tolerance governing the dimensional QC.",
      "AIS compliance covers most EPA Clean Water and Drinking Water SRF projects, plus USDA Rural Development water programs. The documentation chain starts at the mill heat lot and runs through fabrication. The compliance letter references the SRF program and the project number."],
    standards: ["AWWA C207", "AWWA C504 (butterfly)", "AWWA C515 (gate)", "AIS for federal SRF"],
    materials: ["A36", "A516-70", "Ductile iron components"] },
  { slug: "chemical-processing", name: "Chemical Processing", hero: "Corrosion-Resistant PVF for Chemical Service",
    intro: "Chemical plant flanges across acid, caustic, and chloride service. Stainless, duplex, and nickel alloys to match the specific corrosion environment.",
    body: ["Sulfuric acid service runs in Inconel 825 for concentrated acid and Hastelloy C-276 for dilute mixed acid. Phosphoric acid uses duplex 2205 and 2507. Hydrochloric acid usually means Hastelloy or pure tantalum at the most extreme. The selection is a function of acid concentration, temperature, and any oxidizing impurities.",
      "Caustic service runs in carbon steel at room temperature and shifts to nickel alloys above 200 degrees F. Stress corrosion cracking is the main failure mode. Chloride service is a stainless killer; F316L holds at ambient temperatures but pits and cracks above 140 degrees F in dilute chloride. Duplex 2205 buys headroom; super duplex 2507 buys more.",
      "Documentation includes PMI on every flange face for grade verification, MTR with chemistry, and corrosion test reports where the project specifies pitting (ASTM G48) or stress corrosion (NACE TM0177) data."],
    standards: ["ASME B16.5", "NACE MR0175", "NACE TM0177"],
    materials: ["F316L", "Duplex 2205", "Super duplex 2507", "Inconel 625", "Inconel 825", "Hastelloy C-276", "Titanium"] },
  { slug: "mining", name: "Mining & Minerals", hero: "Slurry, Tailings, and Process Plant PVF",
    intro: "Mineral processing plant and slurry transport flange supply. Heavy plate ring flanges for tailings, duplex and lined for abrasive slurry, AWWA on water management.",
    body: ["Tailings transport runs in large diameter heavy-wall pipe with AWWA-style flanges sized to the project drawing. Class D and Class E ratings cover most tailings pump pressure ranges. Plate thickness scales with diameter; custom dimensions out to 100+ inches are common.",
      "Abrasive slurry service drives wear-resistant linings on flange faces and bores. Stellite hard facing on RTJ grooves, ceramic-loaded urethane linings on pipe and flange interior, or chrome carbide overlay for severe abrasion. The lining material and thickness are project-specific.",
      "Water management around the mine site uses AWWA C207 ring flanges for clear water and stainless or duplex on process water with elevated chloride. Pump station piping often runs to 150 psi working pressure on long-distance transfers."],
    standards: ["AWWA C207", "ASME B16.5 (plant)", "Custom plate drawings"],
    materials: ["A36", "A516-70", "Duplex 2205", "Hastelloy", "Stellite hard facing"] },
  { slug: "pulp-paper", name: "Pulp & Paper", hero: "Bleach Plant and Pulp Mill PVF",
    intro: "Pulp and paper mill flange supply. Titanium for the bleach plant, F316L on stock prep, exotic alloys on the most aggressive service.",
    body: ["Bleach plant service is one of the most aggressive corrosion environments in industry. Chlorine dioxide bleach stages run titanium grade 2 flanges. The mating fasteners are Monel 400 or Hastelloy. F316L survives in low-concentration bleach stages but pits and cracks in concentrated service.",
      "Stock prep, white water, and pulp transfer lines run F316L and duplex 2205 depending on chloride content. Black liquor service in the recovery cycle runs carbon A105 at moderate temperature and chrome-moly F22 in evaporator and concentrator service.",
      "Documentation includes PMI on each flange, MTR with chemistry, and corrosion test data where the project specifies it. Titanium MTRs include the iron and oxygen content limits that govern grade compliance."],
    standards: ["ASME B16.5", "TAPPI standards for sanitary"],
    materials: ["Titanium grade 2", "F316L", "Duplex 2205", "Hastelloy C-276", "A105"] },
  { slug: "food-beverage", name: "Food & Beverage", hero: "Sanitary PVF for Food Processing",
    intro: "Food and beverage plant flange supply. Sanitary F316L, USDA-approved surface finish, triclamp and weld connections to mate process equipment.",
    body: ["The default material is F316L stainless with a 32 Ra or finer surface finish on product-contact surfaces. Electropolish is common for dairy and pharmaceutical-grade installations. The flange face is finished to the same standard as the bore where it sees product.",
      "Sanitary connections are typically triclamp (ISO 2852 or 3A) rather than ASME flanges, but ASME B16.5 raised face flanges are used at utility connections, CIP supply, and steam supply where standard pressure ratings apply. The flange grade is still F316L on any line that may see indirect product contact.",
      "Documentation includes USDA acceptance letters where required, FDA-grade gasket and elastomer certifications, and the standard MTR chain. Surface finish reports are provided on request."],
    standards: ["3A Sanitary Standards", "ISO 2852", "ASME B16.5 on utility"],
    materials: ["F316L", "F304L"] },
  { slug: "agriculture", name: "Agriculture", hero: "Irrigation and Transfer Line PVF",
    intro: "Agricultural irrigation and water transfer flange supply. Carbon steel mainlines, AWWA on large diameter, ductile iron and stainless on specialty service.",
    body: ["Agricultural mainline irrigation runs carbon A105 flanges on welded steel pipe and AWWA C207 plate-cut flanges on larger diameter transmission. Class B and Class D cover most operating pressures. Where federal funding is involved (USDA programs), AIS-compliant supply with domestic melt is the standard requirement.",
      "Pump station service uses ASME B16.5 in Class 150 and 300 for the smaller bore connections and AWWA for the larger transmission flanges. Suction strainer and check valve flanges typically match the suction header standard.",
      "Stainless F304L appears on fertigation and chemigation injection points where the chemical contact would corrode carbon steel. The transition flange between carbon mainline and stainless injection skid is project-specific."],
    standards: ["AWWA C207", "ASME B16.5", "AIS on USDA-funded"],
    materials: ["A105", "A36", "F304L", "Ductile iron"] },
  { slug: "hvac", name: "HVAC & Mechanical", hero: "Commercial and Institutional HVAC PVF",
    intro: "HVAC and mechanical flange supply. Carbon steel chilled water and steam, ASME B16.5 Class 150 and 300, with AWWA on larger campus distribution.",
    body: ["Chilled water service in commercial and institutional buildings runs carbon A105 flanges per ASME B16.5 at Class 150 working pressure. Steam supply and condensate return on heating systems uses A105 at Class 150 or 300 depending on operating pressure.",
      "Larger campus distribution loops, particularly on universities and hospital complexes, move into AWWA C207 plate-cut territory at the 12 inch and above range. Pump house piping at the central plant follows similar logic.",
      "Federal building work (GSA direct procurement) typically falls under BAA. State university work that uses federal infrastructure money may be under BABA. The compliance scope is determined at the project level."],
    standards: ["ASME B16.5", "AWWA C207 on large diameter", "ASHRAE for system design"],
    materials: ["A105", "F304L on specialty"] },
  { slug: "marine", name: "Marine & Shipbuilding", hero: "Marine and Shipbuilding PVF",
    intro: "Marine piping flange supply. Monel 400 and copper-nickel for seawater, F316L for sanitary, ABS and DNV approvals on classed vessels.",
    body: ["Seawater service is the defining corrosion environment. Monel 400 covers the bulk of seawater piping on vessels. Copper-nickel (90/10 and 70/30) covers cooling water lines on commercial ships. Bronze flanges appear on smaller bore and on non-magnetic service near sensitive instrumentation.",
      "Sanitary and potable water systems use F316L stainless. Fuel oil and lube oil service uses A105 carbon. Steam service follows the same logic as power generation; F91 on superheated, F347 on auxiliary.",
      "Classification society approvals (ABS, DNV-GL, Lloyd's Register) require submission of MTR, manufacturer certificate, and dimensional inspection report for each flange. The submission package travels with the order."],
    standards: ["ASTM B62, B164, B584 for copper alloys", "ASME B16.5", "ABS, DNV, LR class rules"],
    materials: ["Monel 400", "70/30 CuNi", "90/10 CuNi", "Bronze", "F316L"] },
  { slug: "data-centers", name: "Data Centers", hero: "Data Center Mechanical PVF",
    intro: "Data center mechanical flange supply. Chilled water and condenser water loops in carbon steel, humidification in stainless. BABA compliance on federally funded builds.",
    body: ["Chilled water and condenser water service uses A105 carbon ASME B16.5 flanges at Class 150 working pressure. The piping is welded carbon steel with raised face flanges at equipment connections. Pump station and chiller plant flanges follow standard ASME practice.",
      "Humidification and reverse-osmosis water systems use F304L or F316L stainless to avoid mineral contamination. Smaller bore lines on humidification supply use F316L socket-weld fittings per ASME B16.11.",
      "Federal data center construction (GSA, DOD, DOE) carries BAA or BABA depending on the funding source. Hyperscaler facilities funded under CHIPS Act semiconductor adjacency may carry BABA infrastructure compliance. The mechanical contractor and project office determine scope."],
    standards: ["ASME B16.5", "ASME B16.11 on small-bore", "BAA / BABA when federally involved"],
    materials: ["A105", "F304L", "F316L"] }
];

export async function generateStaticParams() { return industries.map((i) => ({ slug: i.slug })); }

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const i = industries.find((x) => x.slug === params.slug);
  if (!i) return { title: "Industry Not Found" };
  return { title: `${i.name} Flange Supply`, description: i.intro };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) notFound();
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><Link href="/industries" className="text-gray-400 hover:text-[#DC2626] text-sm mb-6 inline-block">&larr; Industries</Link><p className="text-[#DC2626] uppercase tracking-widest text-sm mb-3">{industry.name}</p><h1 className="font-display text-5xl font-bold mb-6 text-white">{industry.hero}</h1><p className="text-xl text-gray-300 leading-relaxed max-w-3xl">{industry.intro}</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-4xl mx-auto space-y-6">{industry.body.map((p, i) => <p key={i} className="text-lg text-gray-700 leading-relaxed">{p}</p>)}<div className="grid md:grid-cols-2 gap-6 mt-10"><div className="bg-white border border-gray-200 rounded p-6"><h3 className="font-display text-lg font-bold text-[#1B1F23] mb-3">Common Standards</h3><ul className="space-y-1 text-gray-700">{industry.standards.map((s) => <li key={s} className="text-sm">{s}</li>)}</ul></div><div className="bg-white border border-gray-200 rounded p-6"><h3 className="font-display text-lg font-bold text-[#1B1F23] mb-3">Common Materials</h3><ul className="flex flex-wrap gap-2">{industry.materials.map((m) => <li key={m} className="text-xs bg-[#F8F6F0] text-[#1B1F23] px-3 py-1 rounded-full font-semibold">{m}</li>)}</ul></div></div></div></section>
    <section className="bg-[#DC2626] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Project in {industry.name}?</h2><Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link><p className="text-sm mt-6 opacity-90">PO Box 2889, Pearland TX 77588</p></div></section>
  </>);
}
