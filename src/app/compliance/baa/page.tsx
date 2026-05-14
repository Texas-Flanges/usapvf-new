import Link from "next/link";

export const metadata = {
  title: "Buy American Act (BAA) Compliance for Flanges and Fittings",
  description: "Buy American Act compliance for pipe, valves, and flanges on direct federal procurement contracts. Iron and steel manufactured in the United States, manufacturer certification, FAR Part 25 reference."
};

export default function BaaPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/compliance" className="text-gray-400 hover:text-[#DC2626] text-sm mb-6 inline-block">&larr; Compliance Overview</Link>
          <p className="text-[#DC2626] font-display text-5xl font-bold mb-3">BAA</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Buy American Act</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Direct federal procurement. Iron and steel products manufactured in the United States. The oldest of the three federal domestic content standards and the most common requirement on direct agency purchases.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 px-4">
        <div className="max-w-4xl mx-auto prose-content">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">When BAA Applies</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The Buy American Act of 1933 applies to direct federal government procurement. If a federal agency is purchasing goods for its own use under contract, BAA is the governing standard. The Federal Acquisition Regulation (FAR) Part 25 implements BAA in federal contracts. Common examples include direct procurement by the General Services Administration, the Department of Defense, the Department of Energy, the Department of the Interior, and most other federal agencies for facility maintenance, capital projects, and operations.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            BAA does not apply to federally funded projects where a non-federal entity is the purchaser. A state DOT spending federal-aid highway dollars on a bridge is not buying under BAA directly. The non-federal entity may be subject to BABA or AIS depending on the funding source, but it is not subject to BAA.
          </p>

          <h2 className="font-display text-3xl font-bold text-ink mb-4 mt-12">What BAA Requires for Iron and Steel</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            For iron and steel products including flanges, fittings, and valves, BAA requires that the product be manufactured in the United States. The standard is interpreted as the final manufacturing step occurring on US soil. For a forged steel flange, that means the forging and machining must occur domestically. The melt origin (where the steel was poured) is not always required by BAA itself, although project-specific overlays may add that requirement.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The cost share component of BAA evaluates the domestic content threshold. Recent amendments increased the domestic content threshold percentage for iron and steel products. The trend is upward and project specifications should be read for the threshold applicable to the contract year.
          </p>

          <h2 className="font-display text-3xl font-bold text-ink mb-4 mt-12">Documentation We Provide</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6 text-lg leading-relaxed">
            <li><strong>Manufacturer Certification</strong>: written statement from the manufacturer confirming that the iron and steel product was manufactured in the United States.</li>
            <li><strong>Mill Test Reports</strong>: full material traceability with heat numbers. EN 10204 3.1 or 3.2 certificates available on request.</li>
            <li><strong>BAA Compliance Letter</strong>: project-specific letter referencing the FAR Part 25 clause in the contract and confirming applicability of the supplied product.</li>
            <li><strong>Component Origin Statements</strong>: when project specifications require subcomponent origin documentation, we work through the chain to provide it.</li>
          </ul>

          <h2 className="font-display text-3xl font-bold text-ink mb-4 mt-12">Waivers</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            BAA includes waiver provisions for unavailability and cost. The unavailability waiver applies when domestic product is not produced in sufficient quantity or of satisfactory quality. The cost waiver applies when domestic product would unreasonably increase project cost. Waivers are project-specific and require formal documentation. We do not assume waivers will be granted. Quote with domestic product first and pursue waivers only if the project owner directs.
          </p>
        </div>
      </section>

      <section className="bg-[#DC2626] py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl mb-6">BAA Project? Send the Spec.</h2>
          <Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link>
        </div>
      </section>
    </>
  );
}
