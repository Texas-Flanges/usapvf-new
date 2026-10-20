import Link from "next/link";

export const metadata = {
  title: "Pipe Fittings | Butt-Weld, Socket-Weld, Threaded",
  description: "American-sourced pipe fittings. Butt-weld per ASME B16.9, socket-weld and threaded per ASME B16.11. Elbows, tees, reducers, caps, couplings. BAA, BABA, and AIS documentation."
};

export default function FittingsPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/products" className="text-gray-400 hover:text-[#DC2626] text-sm mb-6 inline-block">&larr; Products</Link>
          <h1 className="font-display text-5xl font-bold mb-6 text-white">Pipe Fittings</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Butt-weld, socket-weld, and threaded fittings to ASME dimensions. Domestic-melt sourcing for projects with federal content requirements. Carbon, stainless, and alloy grades to mate any pipe in the line.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-6">Butt-Weld Fittings (ASME B16.9)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Seamless and welded butt-weld fittings dimensioned to ASME B16.9. Long-radius 90 and 45 degree elbows, short-radius elbows for tight piping, straight tees, reducing tees, concentric and eccentric reducers, caps, and crosses. Sizes 1/2 inch through 48 inch nominal. Schedule 10 through XXH wall thickness. Material crosswalk to mating pipe per ASTM grade.</p>
          <p className="text-gray-700 leading-relaxed mb-12">Hot induction bends available for piping that requires a non-standard radius. Long-radius (3D, 5D, 7D, 10D) options for fluid-handling lines where pressure drop and erosion matter.</p>

          <h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-6">Socket-Weld and Threaded (ASME B16.11)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Forged carbon and stainless fittings per ASME B16.11. Class 3000, 6000, and 9000 socket-weld. Class 2000, 3000, and 6000 threaded. Sizes 1/8 inch through 4 inch nominal. Couplings (half and full), elbows, tees, crosses, plugs, bushings, swage nipples, and unions.</p>
          <p className="text-gray-700 leading-relaxed mb-12">Forged fittings carry the grain orientation that small-bore high-pressure service demands. Material matches the line standard, typically A105 for carbon and F304L or F316L for stainless. Threaded fittings to NPT taper per ASME B1.20.1.</p>

          <h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-6">Material Range</h2>
          <ul className="grid grid-cols-2 gap-2 text-gray-700 mb-12">
            <li>A234 WPB carbon</li>
            <li>A234 WP11 chrome-moly</li>
            <li>A234 WP22 chrome-moly</li>
            <li>A234 WP91 high-temp</li>
            <li>A403 WP304 / WP304L</li>
            <li>A403 WP316 / WP316L</li>
            <li>A420 WPL6 low-temp</li>
            <li>A815 duplex 2205</li>
            <li>B366 Inconel 625</li>
            <li>B366 Hastelloy C-276</li>
          </ul>

          <h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-6">Documentation</h2>
          <p className="text-gray-700 leading-relaxed">Heat number traceability through the fabrication chain. MTRs ship with every order. BABA and AIS heat lots are segregated to confirm domestic melt origin. NACE hardness reports available on sour service supply.</p>
        </div>
      </section>

      <section className="bg-[#DC2626] py-16 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl mb-6">Got a Fitting BOM?</h2>
          <Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link>
        </div>
      </section>
    </>
  );
}
