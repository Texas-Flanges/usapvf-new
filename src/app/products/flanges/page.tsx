import Link from "next/link";

export const metadata = {
  title: "Steel Flanges | ASME, API, AWWA Domestic Supply",
  description: "American-made steel pipe flanges. ASME B16.5 and B16.47, API 6A and 6BX pipeline service, AWWA C207 waterworks, DIN EN 1092-1 metric. BAA, BABA, and AIS compliant supply with full documentation."
};

export default function FlangesPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/products" className="text-gray-400 hover:text-[#DC2626] text-sm mb-6 inline-block">&larr; Products</Link>
          <h1 className="font-display text-5xl font-bold mb-6 text-white">Steel Flanges</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            The full domestic flange line. ASME B16.5 catalog through 24 inch, B16.47 Series A and B large diameter, API 6A pipeline pressure, AWWA C207 waterworks, DIN EN 1092-1 metric, and custom plate-cut to 203 inch.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-6">Flange Types in Stock</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
            {["Weld Neck","Blind","Slip-On","Threaded","Socket Weld","Lap Joint","Reducing","Orifice","Spectacle Blind","Long Weld Neck","Plate","Anchor"].map((t) => (
              <div key={t} className="bg-white border border-gray-200 rounded p-4 text-center text-[#1B1F23] font-semibold">{t}</div>
            ))}
          </div>

          <h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-6">Standards We Stock</h2>
          <div className="space-y-4 mb-12">
            <div className="bg-white border-l-4 border-[#DC2626] p-6">
              <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-2">ASME B16.5</h3>
              <p className="text-gray-700 leading-relaxed">Pipe flanges and flanged fittings, 1/2 inch through 24 inch NPS. Class 150, 300, 400, 600, 900, 1500, and 2500. Raised face, flat face, ring-type joint, and tongue-and-groove facings.</p>
            </div>
            <div className="bg-white border-l-4 border-[#DC2626] p-6">
              <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-2">ASME B16.47</h3>
              <p className="text-gray-700 leading-relaxed">Large diameter flanges, 26 inch through 60 inch NPS. Series A (heavy MSS pattern) and Series B (lighter API pattern). Class 75 through 900.</p>
            </div>
            <div className="bg-white border-l-4 border-[#DC2626] p-6">
              <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-2">API 6A / 6BX</h3>
              <p className="text-gray-700 leading-relaxed">Wellhead and pressure control flanges. 2000, 3000, 5000, 10000, 15000, 20000, and 25000 PSI working pressure classes. Ring-type joint facings with matching ring gaskets.</p>
            </div>
            <div className="bg-white border-l-4 border-[#DC2626] p-6">
              <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-2">AWWA C207</h3>
              <p className="text-gray-700 leading-relaxed">Steel pipe flanges for waterworks service. Class B (86 psi), Class D (175 psi), Class E (275 psi), Class F (300 psi). 4 inch through 144 inch. Plate-cut construction from A36 or A516-70 with AIS-compliant domestic melt available.</p>
            </div>
            <div className="bg-white border-l-4 border-[#DC2626] p-6">
              <h3 className="font-display text-xl font-bold text-[#1B1F23] mb-2">DIN EN 1092-1</h3>
              <p className="text-gray-700 leading-relaxed">European metric flanges. PN 6, 10, 16, 25, 40, 63, 100, 160, 250, 320, and 400 pressure ratings. DN 10 through DN 4000. Type 01 (plate), Type 11 (weld neck), Type 02 (loose), and others.</p>
            </div>
          </div>

          <h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-6">Materials</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Domestic-melt heat lots available across the carbon, stainless, and alloy grade spectrum. See <Link href="/materials" className="text-[#DC2626] font-semibold">Materials</Link> for the full grade table.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-12">
            <li>Carbon: A105, A350 LF2, A350 LF3, A516-70, A36, A694 F42 through F70</li>
            <li>Stainless: F304, F304L, F316, F316L, F321, F347, dual-certified</li>
            <li>Chrome-moly: F11, F22, F91, F92</li>
            <li>Duplex and super duplex: 2205, 2507</li>
            <li>Nickel: Inconel 625, Hastelloy C-276, Monel 400</li>
          </ul>

          <h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-6">Documentation Package</h2>
          <p className="text-gray-700 leading-relaxed">Every order ships with the documentation the project requires. <Link href="/compliance" className="text-[#DC2626] font-semibold">BAA, BABA, or AIS compliance letters</Link>, MTRs per EN 10204 3.1 or 3.2, NACE hardness reports on sour service heats, and charpy impact reports on low temperature grades. Heat lots are segregated for domestic-melt orders so the paperwork chain is unbroken.</p>
        </div>
      </section>

      <section className="bg-[#DC2626] py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl mb-6">Flange Spec in Hand?</h2>
          <Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link>
        </div>
      </section>
    </>
  );
}
