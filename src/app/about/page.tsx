import Link from "next/link";

export const metadata = {
  title: "About USA PVF",
  description: "USA PVF supplies American-sourced pipe, valves, and flanges with BAA, BABA, and AIS compliance documentation. Domestic melt traced through final production for federally funded and federally procured projects. Supplying domestic-content PVF since 1986."
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-wider text-[#DC2626] text-sm mb-3">About USA PVF</p>
          <h1 className="text-5xl font-display font-bold mb-6 text-white">American PVF With the Paperwork to Prove It</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            USA PVF supplies domestic-content pipe, valves, and flanges to federal infrastructure projects, and has done so since 1986. We exist for the line items where the part number and the pressure class are not enough on their own. The order needs documentation. Mill test reports, manufacturer certifications, project-specific compliance letters. The work is just as much about the paperwork as it is about the steel.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 px-4">
        <div className="max-w-4xl mx-auto prose-content">
          <h2 className="text-3xl font-display font-bold mb-6 text-ink">Why We Exist</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Federal infrastructure funding has expanded dramatically. The Infrastructure Investment and Jobs Act, the CHIPS and Science Act, and the Inflation Reduction Act are channeling federal money into American transportation, water, broadband, semiconductor production, and clean energy projects. Almost all of that spending carries domestic content rules. A flange or a valve or a fitting on those jobs is no longer just a piece of steel. It is a piece of steel with a paperwork chain.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Most distributors are set up for the commodity side of the trade. They can quote a Class 150 A105 weld neck in 6 inch by the truckload. What they cannot do, or cannot do well, is hand the project office a mill test report tracing the heat back to a domestic mill, a manufacturer certification confirming that every step of production occurred in the United States, and a project-specific letter referencing the applicable federal standard. That is what USA PVF is built for.
          </p>

          <h2 className="text-3xl font-display font-bold mb-6 mt-12 text-ink">What We Cover</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Three federal domestic content standards govern most of the work:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Buy American Act</strong>: direct federal procurement. Iron and steel manufactured domestically. Manufacturer certification.</li>
            <li><strong>Build America Buy America</strong>: federal infrastructure funding. All manufacturing steps including melt occur in the United States. MTR traces to domestic mill.</li>
            <li><strong>American Iron and Steel</strong>: EPA State Revolving Fund and certain USDA water programs. Same melt-to-final-fab standard as BABA. Project-specific compliance letters.</li>
          </ul>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Inside those standards, the product line is pipe flanges per ASME B16.5 and B16.47, pipeline flanges per API 6A and 6BX and MSS SP-44, waterworks flanges per AWWA C207, pipe fittings per ASME B16.9 and B16.11, pipeline and process valves per API 6D and ASME B16.34, and custom machining for non-standard bores, special facings, and weld overlay. Materials run from A105 carbon through F91 chrome-moly and the major stainless and exotic alloy grades.
          </p>

          <h2 className="text-3xl font-display font-bold mb-6 mt-12 text-ink">Who We Work With</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Owners and contractors on federally funded projects. EPA SRF municipal water and wastewater work. USDA Rural Development water programs. DOT federal-aid highway and bridge work with steel components. Federal-agency direct procurement under BAA. Pipeline owners on API service. Refinery and petrochemical plants on ASME process service. The common thread is that the project office wants documentation alongside the product, not after.
          </p>

          <h2 className="text-3xl font-display font-bold mb-6 mt-12 text-ink">How We Work</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Send the spec, the quantity, the project, and the applicable domestic content standard. We confirm inventory against current domestic-melt heat lots, draft the documentation scope, and quote the order the same business day. Lead times track domestic mill production cycles rather than overseas shipping, which means the schedule is predictable and the project does not absorb customs or surge premium freight to recover slipped weeks.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Supplying domestic-content PVF since 1986. For technical questions, supply questions, or to walk through a project domestic content requirement, call <a href="tel:2814848325">(281) 484-8325</a> or email <a href="mailto:sales@texasflange.com">sales@texasflange.com</a>.
          </p>
        </div>
      </section>

      <section className="bg-[#DC2626] py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl mb-6">Ready to Send Us a Project?</h2>
          <Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request a Quote</Link>
        </div>
      </section>
    </>
  );
}
