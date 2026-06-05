import Link from "next/link";

export const metadata = {
  title: "American Iron and Steel (AIS) Compliance for Flanges and Fittings",
  description: "AIS compliance for pipe, valves, and flanges on EPA State Revolving Fund and USDA Rural Development water projects. Domestic melt-to-final-production. Project-specific compliance letters."
};

export default function AisPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/compliance" className="text-gray-400 hover:text-[#DC2626] text-sm mb-6 inline-block">&larr; Compliance Overview</Link>
          <p className="text-[#DC2626] font-display text-5xl font-bold mb-3">AIS</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">American Iron and Steel</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            EPA State Revolving Fund water and wastewater projects, plus USDA Rural Development water programs. Functionally identical to BABA for iron and steel: domestic melt, domestic manufacture, full documentation.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 px-4">
        <div className="max-w-4xl mx-auto prose-content">
          <h2 className="font-display text-3xl font-bold text-ink mb-4">Where AIS Lives</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The American Iron and Steel provision was first enacted in the Clean Water Act State Revolving Fund through the FY2014 appropriation and has been re-authorized continually since. It applies to projects funded through the EPA Clean Water State Revolving Fund (CWSRF) and the Drinking Water State Revolving Fund (DWSRF). USDA Rural Development water and wastewater programs carry parallel AIS language and apply the same standard.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            For water and wastewater utilities operating projects funded through these programs, AIS is the controlling federal domestic content standard. State Revolving Fund administrators issue program-specific guidance that implements AIS at the state level and references EPA technical guidance for product scope and documentation.
          </p>

          <h2 className="font-display text-3xl font-bold text-ink mb-4 mt-12">What AIS Covers</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            AIS applies to iron and steel products that are permanently incorporated into the project. For water and wastewater projects, that scope includes pipe, fittings, flanges, valves, hydrants, manhole covers, and structural steel. Components and subcomponents made of iron or steel that are permanently incorporated must meet the AIS standard. Components made of other materials, or temporary construction equipment, fall outside AIS scope.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The standard requires that all manufacturing processes from the initial melt through coating and finishing occur in the United States. A ductile iron pipe fitting cast domestically from imported pig iron does not qualify because the melt step occurred outside the United States. A steel flange forged domestically from imported billet does not qualify for the same reason.
          </p>

          <h2 className="font-display text-3xl font-bold text-ink mb-4 mt-12">Documentation</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6 text-lg leading-relaxed">
            <li><strong>AIS Step Certification</strong>: the EPA-standard format certifying that all manufacturing processes for the iron and steel products occurred in the United States.</li>
            <li><strong>Mill Test Reports</strong> with heat number and domestic mill location.</li>
            <li><strong>Project-Specific Compliance Letter</strong> referencing the SRF program and project number.</li>
            <li><strong>Submittal Package</strong>: when a project submittal is required for AIS scope review, we provide the documentation in the project office format.</li>
          </ul>

          <h2 className="font-display text-3xl font-bold text-ink mb-4 mt-12">Waivers</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            EPA may grant AIS waivers for unavailability, unreasonable cost, or public interest. Waivers are issued at the project level and are time-bounded. We do not assume waivers will be granted. For standard water and wastewater iron and steel products including ductile iron pipe, steel flanges, gate valves, and butterfly valves, domestic product is available and AIS-compliant supply chains are established.
          </p>

          <h2 className="font-display text-3xl font-bold text-ink mb-4 mt-12">Why AIS Is Stricter Than It Looks</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            AIS includes coatings and linings within the manufacturing process scope when those coatings or linings are applied at the manufacturing plant. A ductile iron pipe coated with cement mortar at the casting mill must have the mortar applied domestically. A field-applied coating is generally treated as a separate process and not subject to AIS. The line between in-plant and field-applied coating is sometimes ambiguous on submittal review. The project office decides.
          </p>
        </div>
      </section>

      <section className="bg-[#DC2626] py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl mb-6">AIS-Funded Water Project?</h2>
          <Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link>
        </div>
      </section>
    </>
  );
}
