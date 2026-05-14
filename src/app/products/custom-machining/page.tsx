import Link from "next/link";

export const metadata = {
  title: "Custom Flange Machining | Bores, Facings, RTJ Grooves, Weld Overlay",
  description: "Custom flange machining: non-standard bores, overbore conditions, special facings, RTJ groove geometry, weld overlay, hard facing, and hubbed plate flanges. Domestic-melt material available."
};

export default function CustomMachiningPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/products" className="text-gray-400 hover:text-[#DC2626] text-sm mb-6 inline-block">&larr; Products</Link>
          <h1 className="font-display text-5xl font-bold mb-6 text-white">Custom Machining</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            When the catalog flange does not fit the job. Non-standard bores, overbore conditions, special facings, RTJ grooves, weld overlay, hard facing, hubbed plate flanges. CNC turning and milling on domestic-melt material.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {[
            { title: "Bore Modifications", body: "Custom inside diameter, overbore for unusual pipe schedules, undersized for swage transitions. Bore tolerance per ASME or per project drawing." },
            { title: "Special Facings", body: "Raised face, flat face, ring-type joint, large male and female, large tongue and groove, lap joint. Standard and non-standard groove dimensions to mate legacy or non-standard flanges." },
            { title: "RTJ Groove Geometry", body: "API ring groove dimensions and pitch diameter to API 6A. Octagonal and oval ring groove machining for retrofit on existing flanges where the original facing is damaged or needs upgrade." },
            { title: "Weld Overlay", body: "Stainless or nickel-alloy overlay on carbon flange faces and bores for corrosion service. Inconel 625, Inconel 825, and 309L overlay procedures qualified per ASME Section IX." },
            { title: "Hard Facing", body: "Stellite 6 and Stellite 21 deposit on seat and disc surfaces for valve trim work and on flange faces for wear and galling resistance." },
            { title: "Hubbed Plate Flanges", body: "Rolled hub welded to plate-cut flange face for large diameter pressure service. Full penetration weld with 100 percent NDE." },
            { title: "Bolt Pattern Customization", body: "Custom bolt circle diameter, bolt count, drift pin holes, and matched-set drilling for field-fit alignment on large diameter flanges." },
            { title: "Reverse Engineering", body: "Existing flange to drawing for replacement, or drawing to flange for new build. Dimensional inspection report to the project drawing." }
          ].map((c) => (
            <div key={c.title} className="bg-white border border-gray-200 rounded p-6">
              <h2 className="font-display text-xl font-bold text-[#1B1F23] mb-3">{c.title}</h2>
              <p className="text-gray-700 leading-relaxed text-sm">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-6">Documentation on Custom Work</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Custom flange documentation includes the dimensional inspection report against the project drawing, the MTR on the base plate or forging, the weld procedure specification and welder qualification record on any welded fabrication, and the NDE report on machined and welded surfaces.</p>
          <p className="text-gray-700 leading-relaxed">Domestic content compliance scales with the work. Custom orders for BABA or AIS projects start with domestic-melt plate or forging, and the chain of fabrication remains in the United States through final machining. The compliance letter references the project funding source and the custom drawing number.</p>
        </div>
      </section>

      <section className="bg-[#DC2626] py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl mb-6">Drawing Ready?</h2>
          <Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link>
        </div>
      </section>
    </>
  );
}
