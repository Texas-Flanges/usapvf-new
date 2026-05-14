import Link from "next/link";

export const metadata = {
  title: "Build America Buy America (BABA) Compliance for Flanges and Fittings",
  description: "BABA compliance for pipe, valves, and flanges on federally funded infrastructure projects. Domestic melt requirement, mill test reports with heat traceability, IIJA project documentation."
};

export default function BabaPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/compliance" className="text-gray-400 hover:text-[#DC2626] text-sm mb-6 inline-block">&larr; Compliance Overview</Link>
          <p className="text-[#DC2626] font-display text-5xl font-bold mb-3">BABA</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Build America Buy America</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Federal infrastructure funding. Iron and steel manufactured in the United States from melt through final fabrication. The stricter cousin of BAA and the standard that governs most Infrastructure Investment and Jobs Act spending.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 px-4">
        <div className="max-w-4xl mx-auto prose-content">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">When BABA Applies</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The Build America Buy America Act was enacted as part of the Infrastructure Investment and Jobs Act of 2021. It applies to federal financial assistance for infrastructure projects. The triggering condition is federal funding, not federal purchasing. A state, local, or tribal entity using federal infrastructure dollars to procure iron and steel products is subject to BABA whether or not a federal agency is the direct buyer.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Infrastructure under BABA is defined broadly. Roads, bridges, transit, rail, ports, airports, water, wastewater, broadband, electrical transmission, and structures supporting those systems all fall under the definition. The Office of Management and Budget guidance and individual federal agency implementation pages give the project-specific scope.
          </p>

          <h2 className="font-display text-3xl font-bold text-ink mb-4 mt-12">What BABA Requires for Iron and Steel</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            For iron and steel products including flanges, fittings, and valves, BABA requires that all manufacturing processes occur in the United States. That includes the initial melting and pouring of the steel, the forging or rolling, the heat treatment, and the final machining. A forged flange made domestically from steel that was melted overseas does not qualify under BABA. The melt origin matters.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The traceability requirement runs back to the mill. The mill test report must show that the heat from which the product was made was melted at a domestic mill. We confirm that traceability before the heat lot ships and we document it in the certification package that accompanies the order.
          </p>

          <h2 className="font-display text-3xl font-bold text-ink mb-4 mt-12">Documentation We Provide</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6 text-lg leading-relaxed">
            <li><strong>Mill Test Reports</strong> with heat number, mill name, and mill location confirming domestic melt.</li>
            <li><strong>Manufacturer Certification</strong> stating that all manufacturing processes occurred in the United States.</li>
            <li><strong>BABA Compliance Letter</strong> referencing the project funding source and the applicable agency implementation.</li>
            <li><strong>Heat Lot Segregation</strong>: BABA orders are pulled from confirmed domestic-melt heat lots and tracked separately through shipping.</li>
          </ul>

          <h2 className="font-display text-3xl font-bold text-ink mb-4 mt-12">Common Project Types</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            BABA shows up most often on IIJA-funded transportation projects, water and wastewater infrastructure, federal-aid highway work involving structural steel, transmission and distribution work funded through federal energy programs, and broadband infrastructure with steel structural components. Each agency implementation may layer additional requirements on top of the base BABA standard. Read the project spec for the specific clause language.
          </p>

          <h2 className="font-display text-3xl font-bold text-ink mb-4 mt-12">Waivers and Exceptions</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            BABA includes waivers for unavailability, unreasonable cost, and public interest, mirroring the BAA waiver framework. Waiver requests are submitted to the awarding federal agency. The waiver bar is generally high. For iron and steel products in the standard size range, domestic product is broadly available and waivers are uncommon.
          </p>
        </div>
      </section>

      <section className="bg-[#DC2626] py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl mb-6">BABA-Funded Project?</h2>
          <Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link>
        </div>
      </section>
    </>
  );
}
