import Link from "next/link";
export const metadata = { title: "DIN EN 1092-1 Flanges | Metric PN 6 through PN 400", description: "DIN EN 1092-1 metric steel flanges. PN 6 through PN 400 pressure ratings, DN 10 through DN 4000 nominal sizes. Type 01, 02, 11, and 13 configurations." };
export default function DinPage() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><Link href="/standards" className="text-gray-400 hover:text-[#DC2626] text-sm mb-6 inline-block">&larr; Standards</Link><h1 className="font-display text-5xl font-bold mb-6 text-white">DIN EN 1092-1</h1><p className="text-xl text-gray-300 max-w-3xl leading-relaxed">The European metric flange standard. Used worldwide on metric piping systems and on US projects with imported process equipment. PN 6 through PN 400 covers most pressure ratings encountered.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-4xl mx-auto prose-content space-y-6">
      <h2 className="font-display text-3xl font-bold text-ink">PN Ratings</h2>
      <p className="text-lg text-gray-700 leading-relaxed">PN stands for Pressure Nominal, expressed in bar (1 bar approximately equals 14.5 psi). Standard PN ratings are 6, 10, 16, 25, 40, 63, 100, 160, 250, 320, and 400. The PN rating is a designator, not a working pressure. Actual working pressure at temperature follows P-T tables in the standard, similar to ASME Class designators.</p>
      <h2 className="font-display text-3xl font-bold text-ink">DN Sizes</h2>
      <p className="text-lg text-gray-700 leading-relaxed">DN stands for Diameter Nominal, expressed in millimeters. Common sizes run from DN 10 (3/8 inch nominal) through DN 4000 (158 inch nominal). DN does not equal outside diameter or inside diameter; it is a nominal designator that ties to specific dimensional tables.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Flange Types</h2>
      <ul className="list-disc pl-6 space-y-1 text-lg text-gray-700">
        <li><strong>Type 01</strong>: plate flange (similar to slip-on without hub)</li>
        <li><strong>Type 02</strong>: loose flange with weld neck collar (Type 32, 33, 34, 35, 36, 37)</li>
        <li><strong>Type 05</strong>: blind flange</li>
        <li><strong>Type 11</strong>: weld neck flange</li>
        <li><strong>Type 12</strong>: hubbed slip-on</li>
        <li><strong>Type 13</strong>: hubbed threaded</li>
        <li><strong>Type 21</strong>: integral flange (forged with vessel or fitting)</li>
      </ul>
      <h2 className="font-display text-3xl font-bold text-ink">Facing Designators</h2>
      <p className="text-lg text-gray-700 leading-relaxed">Type A (flat face), Type B1 (small raised face), Type B2 (raised face with serrations), Type C (tongue and groove), Type D (recess), Type E (spigot), Type F (small male and female), Type G (large male and female), Type H (tongue), Type I (groove). Standard pressure flanges use Type B1 raised face unless the project drawing specifies otherwise.</p>
      <h2 className="font-display text-3xl font-bold text-ink">ASME vs DIN Compatibility</h2>
      <p className="text-lg text-gray-700 leading-relaxed">ASME and DIN flanges are not directly interchangeable. The outside diameter, bolt circle, bolt count, and bolt size all differ between standards. Adapter spools or transition flanges bridge the two systems where ASME process equipment connects to DIN piping. Quote the project standard explicitly and check the mating component drawing before ordering.</p>
    </div></section>
    <section className="bg-[#DC2626] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Metric Flange Project?</h2><Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Request Quote</Link></div></section>
  </>);
}
