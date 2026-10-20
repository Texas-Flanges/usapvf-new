import Link from "next/link";
export const metadata = { title: "AWWA C207 Flanges | Waterworks Class B, D, E, F", description: "AWWA C207 steel pipe flanges for water and wastewater service. Class B, D, E, and F. 4 inch through 144 inch. AIS-compliant domestic melt for EPA SRF and USDA Rural Development projects." };
export default function AwwaPage() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><Link href="/standards" className="text-gray-400 hover:text-[#DC2626] text-sm mb-6 inline-block">&larr; Standards</Link><h1 className="font-display text-5xl font-bold mb-6 text-white">AWWA C207</h1><p className="text-xl text-gray-300 max-w-3xl leading-relaxed">Steel pipe flanges for waterworks service. The default standard for transmission mains, treatment plant interconnects, and large-diameter water and wastewater piping. AIS-compliant supply available for EPA State Revolving Fund and USDA Rural Development projects.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-4xl mx-auto prose-content space-y-6">
      <h2 className="font-display text-3xl font-bold text-ink">Pressure Classes</h2>
      <p className="text-lg text-gray-700 leading-relaxed">AWWA C207 defines four working pressure classes for steel pipe flanges:</p>
      <ul className="list-disc pl-6 space-y-1 text-lg text-gray-700">
        <li><strong>Class B</strong>: 86 psi working pressure. Low pressure transmission and distribution.</li>
        <li><strong>Class D</strong>: 175 psi working pressure. The waterworks workhorse.</li>
        <li><strong>Class E</strong>: 275 psi working pressure. High service and pump station piping.</li>
        <li><strong>Class F</strong>: 300 psi working pressure. The highest standard waterworks class.</li>
      </ul>
      <p className="text-lg text-gray-700 leading-relaxed">Working pressure is the static rating. Surge pressure (water hammer from pump trip or valve closure) is allowed up to 150 percent of the working pressure for short duration. Project hydraulic analysis governs the class selection.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Construction</h2>
      <p className="text-lg text-gray-700 leading-relaxed">AWWA C207 flanges are plate-cut from rolled steel. Standard plate is ASTM A36 carbon steel for the structural classes and ASTM A516 Grade 70 where pressure-rated plate is specified. Plate thickness scales with flange diameter and class. Bolt circle dimensions and bolt count follow standard tables that match common waterworks connection patterns.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Sizes</h2>
      <p className="text-lg text-gray-700 leading-relaxed">The standard covers 4 inch through 144 inch nominal diameter. Custom diameters beyond 144 inch are routinely fabricated to project drawings using the same plate-cut process. Bolt patterns are matched to the mating component on transmission projects where alignment matters.</p>
      <h2 className="font-display text-3xl font-bold text-ink">AIS Compliance</h2>
      <p className="text-lg text-gray-700 leading-relaxed">Most EPA Clean Water and Drinking Water State Revolving Fund projects, plus USDA Rural Development water and wastewater projects, require American Iron and Steel compliance. AWWA C207 flanges fabricated from domestic-melt plate qualify when the manufacturing chain stays within the United States. See <Link href="/compliance/ais" className="text-[#DC2626] font-semibold">AIS compliance</Link> for documentation scope.</p>
    </div></section>
    <section className="bg-[#DC2626] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Waterworks Project?</h2><Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link></div></section>
  </>);
}
