import Link from "next/link";
export const metadata = { title: "Flange Dimensions Reference | ASME B16.5 and B16.47", description: "Reference dimensions for ASME B16.5 and B16.47 pipe flanges. OD, bolt circle, bolt count, thickness, and pressure rating by class and size." };
export default function FlangeDimensionsPage() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><Link href="/resources" className="text-gray-400 hover:text-[#DC2626] text-sm mb-6 inline-block">&larr; Resources</Link><h1 className="font-display text-5xl font-bold mb-6 text-white">Flange Dimensions Reference</h1><p className="text-xl text-gray-300 leading-relaxed max-w-3xl">Dimensional families covered, where to find detailed tables, and the dimensions that matter most on a quote.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-4xl mx-auto prose-content space-y-6">
      <h2 className="font-display text-3xl font-bold text-ink">What ASME B16.5 Covers</h2>
      <p className="text-lg text-gray-700 leading-relaxed">ASME B16.5 covers pipe flanges and flanged fittings, nominal pipe sizes 1/2 inch through 24 inch, in pressure classes 150, 300, 400, 600, 900, 1500, and 2500. Standard facings include raised face (RF), flat face (FF), ring-type joint (RTJ), tongue and groove (T&G), and large male and female (LMF). Each flange type, size, and class combination has dimensional values for outside diameter, hub diameter, bolt circle, bolt hole diameter, bolt hole count, flange thickness, raised face dimensions, and hub length.</p>
      <h2 className="font-display text-3xl font-bold text-ink">What ASME B16.47 Covers</h2>
      <p className="text-lg text-gray-700 leading-relaxed">B16.47 covers large diameter flanges, 26 inch through 60 inch nominal, in two series. Series A (formerly MSS SP-44) is the heavier pattern. Series B (formerly API 605) is the lighter pattern with larger bolt circle. Series A and B are not interchangeable. The project drawing or specification names which series the flange must match.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Dimensions That Drive Quoting</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li><strong>Outside diameter (OD)</strong>: the outside dimension across the flange face. Drives bolt circle and physical clearance.</li>
        <li><strong>Bolt circle (BC)</strong>: the diameter of the circle through the bolt hole centers.</li>
        <li><strong>Bolt hole count and diameter</strong>: how many bolts and what size.</li>
        <li><strong>Flange thickness</strong>: the dimension from the back face through to the raised face transition.</li>
        <li><strong>Bore</strong>: the inside diameter of the flange. Slip-on and weld neck flanges have standard bore tied to schedule of mating pipe.</li>
        <li><strong>Hub length and diameter</strong>: applies to weld neck and other hubbed types.</li>
      </ul>
      <h2 className="font-display text-3xl font-bold text-ink">Detailed Tables</h2>
      <p className="text-lg text-gray-700 leading-relaxed">For the full ASME B16.5 and B16.47 dimensional tables across every size and class combination, see the texasflange.com dimensional library at <a href="https://www.texasflange.com/products/flange-dims-weights/?ref=usapvf-new" target="_blank" rel="noopener" className="text-[#DC2626] font-semibold">texasflange.com/products/flange-dims-weights</a>. The library has type-by-class tables for weld neck, slip-on, blind, threaded, socket weld, and lap joint flanges.</p>
      <p className="text-lg text-gray-700 leading-relaxed">For a specific dimension or to validate a tolerance, call <a href="tel:2814848325">(281) 484-8325</a> with the line spec.</p>
    </div></section>
    <section className="bg-[#DC2626] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Dimensional Question?</h2><Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Send the Spec</Link></div></section>
  </>);
}
