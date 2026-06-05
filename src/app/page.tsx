import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "USA PVF | American-Sourced Flanges, Valves, and Fittings with Compliance Documentation",
  description:
    "Domestically sourced pipe, valves, and flanges with full BAA, BABA, and AIS compliance documentation. Domestic melt traced through final production. API 6A pipeline pressure ratings, ASME B16.5 reference, and the paperwork federal projects require. Supplying domestic-content PVF since 1986."
};

const faqs = [
  {
    q: "What does BAA compliance actually require for flanges?",
    a: "The Buy American Act applies to direct federal procurement. For iron and steel products like flanges, the material must be manufactured in the United States. Compliance typically requires a manufacturer certification confirming domestic production. Under the 2024 FAR final rule, the Buy America Act domestic-content cost-share threshold is 55 percent for manufactured products, scheduled to step up further in subsequent years. BAA is the most common federal domestic content requirement and the documentation is straightforward when the supply chain is built for it."
  },
  {
    q: "What is the difference between BAA and BABA?",
    a: "BAA (Buy American Act) is triggered by direct federal procurement. BABA (Build America Buy America) is triggered by federal infrastructure funding regardless of who purchases the equipment. BABA is stricter on iron and steel because it requires all manufacturing processes, including the initial melt, to occur in the United States. For manufactured products under BABA, the 2024 update sets a 55 percent domestic content threshold. A flange forged domestically from foreign-melted steel meets BAA but not BABA."
  },
  {
    q: "What does AIS compliance require?",
    a: "American Iron and Steel applies to EPA State Revolving Fund water and wastewater projects and certain USDA Rural Development water projects. Every manufacturing step from melting through final production must occur in the United States. For practical purposes the AIS standard is identical to BABA for iron and steel products. The documentation package and the supply chain requirements are the same."
  },
  {
    q: "Do you supply API 6A flanges for pipeline service?",
    a: "Yes. Our API 6A supply chain covers 2000 pound, 3000 pound, and 5000 pound class flanges for production and wellhead service, with 6BX availability in 10000, 15000, and 20000 pound class for high pressure applications. For strict API procurement we can source PSL-3 and PSL-4 product specification levels with the additional documentation and inspection coverage those PSLs require. Ring type joint facings with the correct ring gaskets ship together. Call (281) 484-8325 with the wellhead spec and we will confirm grade and rating."
  },
  {
    q: "Can a domestic flange be made from imported steel under BABA?",
    a: "No. Under BABA and AIS the steel must be melted in the United States. A flange forged domestically from foreign-melted steel does not qualify. The mill test report must trace the heat to a domestic mill. Our compliance documentation package includes that traceability as a default for BABA and AIS orders."
  },
  {
    q: "What is your typical lead time for compliant orders?",
    a: "We pride ourselves on industry-leading turnaround. Standard stock flanges with BAA documentation move with industry-leading turnaround. BABA and AIS orders may take additional time to confirm domestic melt heat lots. Call (281) 484-8325 with the project domestic content requirement and we will quote turnaround against current inventory."
  },
  {
    q: "Why are domestic content requirements expanding?",
    a: "The Infrastructure Investment and Jobs Act, the CHIPS and Science Act, and the Inflation Reduction Act are directing federal funding into American infrastructure, semiconductor production, and clean energy projects. Nearly all of that spending carries domestic sourcing mandates. The result is more flanges, valves, and fittings than ever need full BAA, BABA, or AIS documentation."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#DC2626] uppercase tracking-widest text-sm font-semibold mb-4">
            Domestic Melt. Domestic Production. Documented.
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            American PVF With the Paperwork to Prove It
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-10">
            Pipe, valves, and flanges sourced from domestic mills with full BAA, BABA, and AIS compliance documentation. Mill test reports traceable to domestic melt heat numbers. Compliance letters drafted to your project standard. Same supply chain that handles ASME process service and API 6A pipeline pressure, including PSL-3 and PSL-4 procurement on strict API specs. Supplying domestic-content PVF since 1986.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-[#DC2626] text-white px-8 py-4 rounded font-semibold hover:bg-[#B91C1C] transition">
              Request a Compliant Quote
            </Link>
            <Link href="/compliance" className="border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-[#1B1F23] transition">
              Compliance Standards Explained
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#DC2626] text-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="font-display text-4xl font-bold">3</p>
            <p className="text-sm uppercase tracking-wide mt-1">Domestic Content Standards</p>
          </div>
          <div>
            <p className="font-display text-4xl font-bold">20K</p>
            <p className="text-sm uppercase tracking-wide mt-1">PSI API 6BX Class</p>
          </div>
          <div>
            <p className="font-display text-4xl font-bold">MTR</p>
            <p className="text-sm uppercase tracking-wide mt-1">On Every Order</p>
          </div>
          <div>
            <p className="font-display text-4xl font-bold">Same-Day</p>
            <p className="text-sm uppercase tracking-wide mt-1">Quote Turnaround</p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#DC2626] uppercase tracking-widest text-sm font-semibold mb-3">
            Why Domestic Sourcing Matters Now
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-6">
            Federal Funding. Federal Rules. Real Documentation.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-12">
            The Infrastructure Investment and Jobs Act, the CHIPS and Science Act, and the Inflation Reduction Act are channeling federal money into American infrastructure, production, and energy projects. Nearly all of it carries domestic content mandates. A flange order on a federally funded project is no longer just a part number and a pressure class. It is also a paperwork package.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/compliance/baa" className="block bg-white border-l-4 border-[#DC2626] p-6 rounded hover:shadow-md transition">
              <p className="text-[#DC2626] font-display text-3xl font-bold mb-2">BAA</p>
              <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-2">Buy American Act</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Direct federal procurement. Iron and steel products manufactured in the United States. Manufactured-products domestic-content threshold set at 55 percent under the 2024 FAR final rule.
              </p>
            </Link>
            <Link href="/compliance/baba" className="block bg-white border-l-4 border-[#DC2626] p-6 rounded hover:shadow-md transition">
              <p className="text-[#DC2626] font-display text-3xl font-bold mb-2">BABA</p>
              <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-2">Build America Buy America</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Federal infrastructure funding. All iron-and-steel manufacturing steps including the initial melt must occur in the United States. 55 percent domestic-content threshold for manufactured products per the 2024 update.
              </p>
            </Link>
            <Link href="/compliance/ais" className="block bg-white border-l-4 border-[#DC2626] p-6 rounded hover:shadow-md transition">
              <p className="text-[#DC2626] font-display text-3xl font-bold mb-2">AIS</p>
              <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-2">American Iron and Steel</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                EPA State Revolving Fund and USDA Rural Development water projects. Same melt-to-final-production standard as BABA for iron and steel. Project-specific compliance letters.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#DC2626] uppercase tracking-widest text-sm font-semibold mb-3">Product Lines</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-6">
            What We Supply
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-12 leading-relaxed">
            Four product categories. Thousands of configurations. Every piece traceable, tested, and documented to whichever federal standard the project demands.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/products/flanges", title: "Flanges", body: "Weld neck, blind, slip-on, threaded, socket weld, lap joint, reducing, orifice. Carbon, stainless, alloy. 1/2 inch through 60 inch and custom over 60. PSL-3 and PSL-4 available on API 6A procurement.", tags: ["ASME B16.5", "ASME B16.47", "API 6A PSL-3/4", "AWWA C207"] },
              { href: "/products/fittings", title: "Pipe Fittings", body: "Butt-weld, socket-weld, threaded. Elbows, tees, reducers, caps, couplings, unions, and specialty fittings for every service condition.", tags: ["ASME B16.9", "ASME B16.11", "SCH 10 to XXH"] },
              { href: "/products/valves", title: "Valves", body: "Gate, globe, check, ball, and butterfly valves for piping system service. API 6D pipeline ratings and ASME B16.34 process service.", tags: ["API 6D", "ASME B16.34", "NACE MR0175"] },
              { href: "/products/custom-machining", title: "Custom Machining", body: "Non-standard bores, overbore conditions, special facings, RTJ grooves, weld overlay, hard facing. If the catalog does not have it, we machine it.", tags: ["CNC turning", "RTJ grooves", "Weld overlay"] }
            ].map((p) => (
              <Link key={p.href} href={p.href} className="block bg-[#F8F6F0] border border-gray-200 rounded-lg p-6 hover:border-[#DC2626] hover:shadow-md transition">
                <h3 className="font-display text-2xl font-bold text-[#1B1F23] mb-3">{p.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm mb-4">{p.body}</p>
                <ul className="space-y-1 mb-4">
                  {p.tags.map((t) => (
                    <li key={t} className="text-xs text-[#DC2626] font-semibold uppercase tracking-wide">{t}</li>
                  ))}
                </ul>
                <p className="text-[#DC2626] font-semibold text-sm">View Details &rarr;</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#DC2626] uppercase tracking-widest text-sm font-semibold mb-3">
            Standards & Compliance
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Built to Code. Documented to Federal Standard.
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mb-12 leading-relaxed">
            Every order ships with the documentation the project actually requires. Mill test reports, manufacturer certifications, compliance letters, and dimensional verification. No paper shuffling at the project office.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { code: "ASME B16.5", sub: "Pipe Flanges 1/2 to 24 inch" },
              { code: "ASME B16.47", sub: "Large Diameter 26 to 60 inch" },
              { code: "API 6A / 6BX", sub: "Pipeline 2000 to 20000 PSI, PSL-3/4" },
              { code: "AWWA C207", sub: "Waterworks Class B/D/E/F, FF + Rubber" },
              { code: "ANSI B16.1", sub: "Cast Iron and Plate Retrofit" },
              { code: "DIN EN 1092-1", sub: "Metric PN 6 to PN 400" },
              { code: "NACE MR0175", sub: "Sour Service Hardness" },
              { code: "MSS SP-44", sub: "Pipeline Flange Service" }
            ].map((s) => (
              <div key={s.code} className="border border-[#DC2626]/30 p-5 rounded">
                <p className="font-display text-lg font-bold text-white">{s.code}</p>
                <p className="text-gray-400 text-xs mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#DC2626] uppercase tracking-widest text-sm font-semibold mb-3">The Difference</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-12">
            What Compliance-Grade Supply Looks Like
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Domestic Melt Traceability", body: "Mill test reports trace the heat number back to a domestic mill on every BABA and AIS order. Foreign-melted steel does not enter the compliance lot." },
              { title: "Project-Specific Letters", body: "Compliance letters tailored to your project standard, whether BAA direct procurement, BABA infrastructure funding, or AIS water program funding." },
              { title: "API 6A Pipeline Inventory", body: "Wellhead, BOP, and Christmas tree service flanges in API 6A 2000# through 6BX 20000# class with the right ring gaskets shipped together. PSL-3 and PSL-4 sourcing available for strict-spec API procurement." },
              { title: "ASME Process Coverage", body: "Full ASME B16.5 and B16.47 supply for refinery, petrochemical, and power generation process piping with carbon, stainless, and chrome-moly grades." },
              { title: "Dimensional Verification", body: "Bolt holes, raised faces, bore tolerances measured and documented before shipment. QC catches the dimensional issue at the dock, not at the field." },
              { title: "Same-Day Quote Turnaround", body: "Tell us the spec, the quantity, the project domestic content standard, and the delivery target. The quote with lead time and compliance scope comes back the same business day." }
            ].map((c) => (
              <div key={c.title} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-3">{c.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#DC2626] uppercase tracking-widest text-sm font-semibold mb-3">Industries We Supply</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-12">
            From Wellhead to Treatment Plant
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              ["oil-gas", "Oil & Gas"],
              ["petrochemical", "Petrochemical"],
              ["power-generation", "Power Generation"],
              ["waterworks", "Water & Wastewater"],
              ["chemical-processing", "Chemical Processing"],
              ["mining", "Mining & Minerals"],
              ["pulp-paper", "Pulp & Paper"],
              ["food-beverage", "Food & Beverage"],
              ["agriculture", "Agriculture"],
              ["hvac", "HVAC & Mechanical"],
              ["marine", "Marine & Shipbuilding"],
              ["data-centers", "Data Centers"]
            ].map(([slug, label]) => (
              <Link key={slug} href={`/industries/${slug}`} className="block bg-[#F8F6F0] border border-gray-200 px-4 py-4 rounded text-center hover:border-[#DC2626] hover:bg-white transition">
                <span className="text-[#1B1F23] font-semibold text-sm">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#DC2626] uppercase tracking-widest text-sm font-semibold mb-3">Technical Resources</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-12">
            Engineering Reference
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: "/resources/flange-dimensions", title: "Flange Dimension Reference", body: "ASME B16.5 and B16.47 dimensional tables. OD, bolt circle, bolt count, thickness by class and size." },
              { href: "/standards/api-flanges", title: "API 6A / 6BX Guide", body: "Pipeline and wellhead pressure classes. 2000 pound through 20000 pound. Ring gasket matching, RTJ groove geometry, PSL-3 and PSL-4 procurement notes." },
              { href: "/tools/bolt-torque-calculator", title: "Bolt Torque Calculator", body: "B7, B7M, B8, and B8M stud torque values by flange size, gasket type, and lubrication condition." },
              { href: "/resources/mtr-documentation", title: "MTR & Compliance Letters", body: "What goes on a mill test report. How domestic melt is documented. How BABA and AIS compliance letters are drafted." },
              { href: "/compliance/baba", title: "BABA Compliance Explained", body: "What Build America Buy America actually requires for iron and steel products. How the heat lot traceability works." },
              { href: "/tools/pressure-temperature-rating", title: "Pressure-Temperature Lookup", body: "ASME B16.5 pressure-temperature tables for common materials. Class 150 through 2500 across A105, F304, F316, F11, F22, F91." }
            ].map((r) => (
              <Link key={r.href} href={r.href} className="block bg-white border border-gray-200 rounded p-6 hover:border-[#DC2626] hover:shadow-md transition">
                <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-3">{r.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{r.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#DC2626] uppercase tracking-widest text-sm font-semibold mb-3">Common Questions</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-12">
            Frequently Asked
          </h2>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#DC2626] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Need PVF With Compliance Documentation?
          </h2>
          <p className="text-xl mb-10 leading-relaxed">
            Send the part description, the project, and the domestic content standard. We will confirm inventory, lead time, and the documentation scope on the same business day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:2814848325" className="bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">
              (281) 484-8325
            </a>
            <a href="mailto:sales@texasflange.com" className="border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-[#DC2626] transition">
              sales@texasflange.com
            </a>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-[#DC2626] transition">
              Request a Quote
            </Link>
          </div>
          <p className="text-white/80 text-sm mt-8">PO Box 2889, Pearland, TX 77588 | Supplying domestic-content PVF since 1986</p>
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="bg-[#F8F6F0] border border-gray-200 rounded-lg p-6 group">
      <summary className="cursor-pointer flex items-start justify-between gap-4">
        <h3 className="font-display text-lg font-bold text-[#1B1F23]">{q}</h3>
        <span className="text-[#DC2626] text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
      </summary>
      <p className="text-gray-700 leading-relaxed mt-4">{a}</p>
    </details>
  );
}
