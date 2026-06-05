import Link from "next/link";

export const metadata = {
  title: "Domestic Content Compliance | BAA, BABA, AIS",
  description: "Federal domestic content compliance for pipe, valves, and flanges. Buy American Act, Build America Buy America, and American Iron and Steel program requirements and documentation."
};

export default function ComplianceHub() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-widest text-[#DC2626] text-sm mb-3">Domestic Content Compliance</p>
          <h1 className="text-5xl font-display font-bold text-white mb-6">BAA, BABA, and AIS Explained</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Three federal domestic content standards govern most of the flange, valve, and fitting work that lands on federally funded or federally procured projects. Each has different triggers, different scopes, and different documentation. This is the reference for getting them right.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <Link href="/compliance/baa" className="block bg-white border-l-4 border-[#DC2626] p-8 rounded hover:shadow-lg transition">
            <p className="text-[#DC2626] font-display text-4xl font-bold mb-2">BAA</p>
            <h2 className="font-display text-2xl font-bold text-[#1B1F23] mb-3">Buy American Act</h2>
            <p className="text-gray-700 leading-relaxed text-sm">Direct federal procurement. Iron and steel manufactured in the United States. 55 percent manufactured-products threshold per the 2024 FAR final rule. DFARS specialty-metals overlay on DoD orders.</p>
          </Link>
          <Link href="/compliance/baba" className="block bg-white border-l-4 border-[#DC2626] p-8 rounded hover:shadow-lg transition">
            <p className="text-[#DC2626] font-display text-4xl font-bold mb-2">BABA</p>
            <h2 className="font-display text-2xl font-bold text-[#1B1F23] mb-3">Build America Buy America</h2>
            <p className="text-gray-700 leading-relaxed text-sm">Federal infrastructure funding. Iron and steel: melt-to-final-production all in the United States. 55 percent threshold for manufactured products per the 2024 update. MTR traces heat to domestic mill.</p>
          </Link>
          <Link href="/compliance/ais" className="block bg-white border-l-4 border-[#DC2626] p-8 rounded hover:shadow-lg transition">
            <p className="text-[#DC2626] font-display text-4xl font-bold mb-2">AIS</p>
            <h2 className="font-display text-2xl font-bold text-[#1B1F23] mb-3">American Iron and Steel</h2>
            <p className="text-gray-700 leading-relaxed text-sm">EPA SRF and USDA Rural Development water programs. Same standard as BABA. Project-specific letters.</p>
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-6">Quick Decision Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1B1F23] text-white">
                  <th className="text-left p-3">If the project is</th>
                  <th className="text-left p-3">The standard is</th>
                  <th className="text-left p-3">Melt requirement</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200"><td className="p-3">Direct federal agency purchase</td><td className="p-3 font-semibold">BAA</td><td className="p-3">Domestic manufacture; melt not required</td></tr>
                <tr className="border-b border-gray-200 bg-[#F8F6F0]"><td className="p-3">Federally funded infrastructure (IIJA, etc.)</td><td className="p-3 font-semibold">BABA</td><td className="p-3">Domestic melt required</td></tr>
                <tr className="border-b border-gray-200"><td className="p-3">EPA State Revolving Fund water/wastewater</td><td className="p-3 font-semibold">AIS</td><td className="p-3">Domestic melt required</td></tr>
                <tr className="border-b border-gray-200 bg-[#F8F6F0]"><td className="p-3">USDA Rural Development water</td><td className="p-3 font-semibold">AIS</td><td className="p-3">Domestic melt required</td></tr>
                <tr><td className="p-3">ARRA legacy (rare on new work)</td><td className="p-3 font-semibold">ARRA</td><td className="p-3">Domestic manufacture per program</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm mt-6">When in doubt, the project contracting officer or owner can confirm the applicable standard. Funding source drives the standard.</p>
        </div>
      </section>

      <section className="bg-[#DC2626] py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl mb-4">Need Help Reading a Compliance Spec?</h2>
          <p className="text-xl mb-8">Send the project spec language and the funding source. We will confirm which standard applies and what documentation the order needs.</p>
          <Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Send a Spec</Link>
        </div>
      </section>
    </>
  );
}
