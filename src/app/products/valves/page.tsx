import Link from "next/link";

export const metadata = {
  title: "Industrial Valves | API 6D Pipeline, ASME B16.34 Process",
  description: "American-sourced gate, globe, check, ball, and butterfly valves. API 6D pipeline ratings, ASME B16.34 process ratings, AWWA waterworks. BAA, BABA, and AIS documented supply for federal projects."
};

export default function ValvesPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/products" className="text-gray-400 hover:text-[#DC2626] text-sm mb-6 inline-block">&larr; Products</Link>
          <h1 className="font-display text-5xl font-bold mb-6 text-white">Industrial Valves</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Pipeline and process valves for federally funded and federally procured projects. API 6D pipeline pressure ratings, ASME B16.34 process service, AWWA waterworks. Documentation matches the flange and fitting paperwork on the same order.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="bg-white border-l-4 border-[#DC2626] p-6">
            <h2 className="font-display text-2xl font-bold text-[#1B1F23] mb-3">Gate Valves</h2>
            <p className="text-gray-700 leading-relaxed">Bolted bonnet, flanged or butt-weld end, full bore. API 600 cast steel for refinery and petrochemical service. API 602 forged for small-bore high-pressure. AWWA C515 resilient seated for waterworks. Carbon steel A216 WCB or stainless A351 CF8M body, depending on service.</p>
          </div>
          <div className="bg-white border-l-4 border-[#DC2626] p-6">
            <h2 className="font-display text-2xl font-bold text-[#1B1F23] mb-3">Globe Valves</h2>
            <p className="text-gray-700 leading-relaxed">Throttling and isolation duty per BS 1873 and API 623. Full-port and reduced-port trim. Bolted bonnet with backseat, pressure seal bonnet for higher pressure class. Class 150 through 2500 in standard ASME ratings.</p>
          </div>
          <div className="bg-white border-l-4 border-[#DC2626] p-6">
            <h2 className="font-display text-2xl font-bold text-[#1B1F23] mb-3">Check Valves</h2>
            <p className="text-gray-700 leading-relaxed">Swing check per API 594 for low pressure drop, piston check for tight shutoff, dual-plate (wafer or lugged) for compact installation. Tilting-disc options for water hammer mitigation on long discharge lines.</p>
          </div>
          <div className="bg-white border-l-4 border-[#DC2626] p-6">
            <h2 className="font-display text-2xl font-bold text-[#1B1F23] mb-3">Ball Valves</h2>
            <p className="text-gray-700 leading-relaxed">Floating ball and trunnion-mounted ball per API 6D for pipeline service and API 608 for process service. Full bore and reduced bore. Two-piece and three-piece body construction. Soft seat (PTFE, RPTFE) and metal seat options for high-temp and fire-safe service.</p>
          </div>
          <div className="bg-white border-l-4 border-[#DC2626] p-6">
            <h2 className="font-display text-2xl font-bold text-[#1B1F23] mb-3">Butterfly Valves</h2>
            <p className="text-gray-700 leading-relaxed">High-performance and standard offset designs. API 609 Category A (concentric) and Category B (offset). AWWA C504 rubber-seated for waterworks. Class 150 through 900 in metal-seated. Bare stem, manual gear, electric, or pneumatic actuation.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-6">Documentation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Body and trim material certifications, hydrostatic shell and seat test reports, and where required, fire-safe certification per API 607, fugitive emissions per ISO 15848, and supplementary NDE on body castings. NACE MR0175 trim available on sour service orders.</p>
          <p className="text-gray-700 leading-relaxed">Domestic content compliance follows the same framework as the flange and fitting product lines. BABA and AIS valves are pulled from confirmed domestic-melt body and trim heat lots. <Link href="/compliance" className="text-[#DC2626] font-semibold">See compliance overview</Link> for the documentation scope.</p>
        </div>
      </section>

      <section className="bg-[#DC2626] py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl mb-6">Valve Schedule for a Project?</h2>
          <Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link>
        </div>
      </section>
    </>
  );
}
