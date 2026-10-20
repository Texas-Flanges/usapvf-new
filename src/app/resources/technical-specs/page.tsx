import Link from "next/link";
export const metadata = { title: "Technical Specifications | Material Grade Quick Reference", description: "Quick reference for steel pipe flange technical specifications. Material grade summary, pressure rating reference, NACE hardness limits, charpy impact requirements." };
export default function TechnicalSpecsPage() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><Link href="/resources" className="text-gray-400 hover:text-[#DC2626] text-sm mb-6 inline-block">&larr; Resources</Link><h1 className="font-display text-5xl font-bold mb-6 text-white">Technical Specifications</h1><p className="text-xl text-gray-300 leading-relaxed max-w-3xl">Quick reference for the technical decisions that drive flange selection. Material grade summary, pressure-temperature highlights, NACE hardness, and impact testing.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-5xl mx-auto">
      <h2 className="font-display text-3xl font-bold text-ink mb-6">Material Grade Quick Reference</h2>
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-sm border-collapse">
          <thead><tr className="bg-[#1B1F23] text-white"><th className="text-left p-3">Grade</th><th className="text-left p-3">Type</th><th className="text-left p-3">Min Yield</th><th className="text-left p-3">Min Tensile</th><th className="text-left p-3">Typical Use</th></tr></thead>
          <tbody className="text-gray-700">
            <tr className="border-b bg-white"><td className="p-3 font-mono">A105</td><td className="p-3">Forged carbon</td><td className="p-3">36 ksi</td><td className="p-3">70 ksi</td><td className="p-3">General pressure service</td></tr>
            <tr className="border-b"><td className="p-3 font-mono">A350 LF2</td><td className="p-3">Carbon impact tested</td><td className="p-3">36 ksi</td><td className="p-3">70 ksi</td><td className="p-3">Low temp to -50 F</td></tr>
            <tr className="border-b bg-white"><td className="p-3 font-mono">A350 LF3</td><td className="p-3">3.5 Ni carbon</td><td className="p-3">37 ksi</td><td className="p-3">70 ksi</td><td className="p-3">Cryo to -150 F</td></tr>
            <tr className="border-b"><td className="p-3 font-mono">A694 F60</td><td className="p-3">High-yield carbon</td><td className="p-3">60 ksi</td><td className="p-3">75 ksi</td><td className="p-3">Pipeline X60 mate</td></tr>
            <tr className="border-b bg-white"><td className="p-3 font-mono">F304L</td><td className="p-3">Austenitic stainless</td><td className="p-3">25 ksi</td><td className="p-3">70 ksi</td><td className="p-3">General corrosion</td></tr>
            <tr className="border-b"><td className="p-3 font-mono">F316L</td><td className="p-3">Mo-bearing stainless</td><td className="p-3">25 ksi</td><td className="p-3">70 ksi</td><td className="p-3">Chloride resistance</td></tr>
            <tr className="border-b bg-white"><td className="p-3 font-mono">F11</td><td className="p-3">1.25 Cr 0.5 Mo</td><td className="p-3">30 ksi</td><td className="p-3">60 ksi</td><td className="p-3">Moderate elevated temp</td></tr>
            <tr className="border-b"><td className="p-3 font-mono">F22</td><td className="p-3">2.25 Cr 1 Mo</td><td className="p-3">30 ksi</td><td className="p-3">75 ksi</td><td className="p-3">Hot service to 1100 F</td></tr>
            <tr className="border-b bg-white"><td className="p-3 font-mono">F91</td><td className="p-3">9 Cr 1 Mo V Nb</td><td className="p-3">60 ksi</td><td className="p-3">85 ksi</td><td className="p-3">Power main steam</td></tr>
            <tr className="border-b"><td className="p-3 font-mono">A516-70</td><td className="p-3">Carbon pressure plate</td><td className="p-3">38 ksi</td><td className="p-3">70 ksi</td><td className="p-3">Blind and ring flanges</td></tr>
            <tr className="bg-white"><td className="p-3 font-mono">A36</td><td className="p-3">Structural plate</td><td className="p-3">36 ksi</td><td className="p-3">58 ksi</td><td className="p-3">AWWA plate-cut, structural</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="font-display text-3xl font-bold text-ink mb-6">NACE MR0175 Hardness Limits</h2>
      <p className="text-gray-700 leading-relaxed mb-4">For materials exposed to wet H2S service per NACE MR0175 / ISO 15156, hardness is controlled to prevent sulfide stress cracking. Common limits:</p>
      <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-12">
        <li>Carbon and low alloy steels: 22 HRC (about 248 HV) maximum</li>
        <li>F22 and F91 alloy: per supplementary annex, typically 22 HRC max post-PWHT</li>
        <li>F304L and F316L stainless: 22 HRC maximum, plus ferrite content limits</li>
        <li>Duplex 2205 and 2507: 28 HRC maximum, separate annex</li>
      </ul>

      <h2 className="font-display text-3xl font-bold text-ink mb-6">Charpy Impact</h2>
      <p className="text-gray-700 leading-relaxed">Charpy V-notch impact testing is required on low-temperature pressure service. Common test temperatures and minimum absorbed energy: A350 LF2 at -50 F, 13 ft-lb min average. A350 LF3 at -150 F, 15 ft-lb min. A694 F60 at -20 F, 20 ft-lb min. Test temperature and acceptance criteria are project-specific and called out on the purchase order.</p>
    </div></section>
    <section className="bg-[#DC2626] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Spec Detail Question?</h2><Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link></div></section>
  </>);
}
