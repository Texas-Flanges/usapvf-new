import Link from "next/link";
export const metadata = { title: "Flange CAD Drawings | DWG, DXF, STEP, IGES", description: "Flange CAD drawings in standard formats. Direct download from the parent dimensional library covers ASME B16.5, B16.47, and AWWA C207 flange types." };
export default function CadDrawingsPage() {
  return (<>
    <section className="bg-[#1B1F23] text-white py-20 px-4"><div className="max-w-4xl mx-auto"><Link href="/resources" className="text-gray-400 hover:text-[#DC2626] text-sm mb-6 inline-block">&larr; Resources</Link><h1 className="font-display text-5xl font-bold mb-6 text-white">Flange CAD Drawings</h1><p className="text-xl text-gray-300 leading-relaxed max-w-3xl">Pre-built CAD drawings for the standard flange dimensional family. DWG, DXF, STEP, and IGES formats available for direct use in engineering layout work.</p></div></section>
    <section className="bg-cream py-16 px-4"><div className="max-w-4xl mx-auto prose-content space-y-6">
      <h2 className="font-display text-3xl font-bold text-ink">What Is Available</h2>
      <p className="text-lg text-gray-700 leading-relaxed">The parent dimensional library at texasflange.com has CAD drawings for the major ASME B16.5 flange types across every size and pressure class, plus selected ASME B16.47 large diameter, AWWA C207 waterworks, and API 6A wellhead service. Drawings download as DWG, DXF, STEP, and IGES depending on file.</p>
      <h2 className="font-display text-3xl font-bold text-ink">Direct Links</h2>
      <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
        <li><a href="https://www.texasflange.com/cad-3d-flange-drawings/?ref=usapvf" target="_blank" rel="noopener" className="text-[#DC2626] font-semibold">CAD library main page</a></li>
        <li><a href="https://www.texasflange.com/flange-drawings-models2/weld-neck/?ref=usapvf" target="_blank" rel="noopener" className="text-[#DC2626] font-semibold">Weld neck flange drawings</a></li>
        <li><a href="https://www.texasflange.com/flange-drawings-models2/blind/?ref=usapvf" target="_blank" rel="noopener" className="text-[#DC2626] font-semibold">Blind flange drawings</a></li>
        <li><a href="https://www.texasflange.com/flange-drawings-models2/slip-on/?ref=usapvf" target="_blank" rel="noopener" className="text-[#DC2626] font-semibold">Slip-on flange drawings</a></li>
        <li><a href="https://www.texasflange.com/flange-drawings-models2/threaded/?ref=usapvf" target="_blank" rel="noopener" className="text-[#DC2626] font-semibold">Threaded flange drawings</a></li>
        <li><a href="https://www.texasflange.com/flange-drawings-models2/socket-weld/?ref=usapvf" target="_blank" rel="noopener" className="text-[#DC2626] font-semibold">Socket weld flange drawings</a></li>
        <li><a href="https://www.texasflange.com/flange-drawings-models2/lap-joint/?ref=usapvf" target="_blank" rel="noopener" className="text-[#DC2626] font-semibold">Lap joint flange drawings</a></li>
      </ul>
      <h2 className="font-display text-3xl font-bold text-ink">Custom Drawing Requests</h2>
      <p className="text-lg text-gray-700 leading-relaxed">For custom flange dimensions, hubbed plate flanges, weld overlay configurations, or non-standard bolt patterns, send dimensions to <a href="mailto:sales@texasflange.com">sales@texasflange.com</a> or call <a href="tel:2814848325">(281) 484-8325</a>. We work the drawing during the quoting process.</p>
    </div></section>
    <section className="bg-[#DC2626] py-16 px-4 text-white text-center"><div className="max-w-3xl mx-auto"><h2 className="font-display text-4xl mb-6">Custom Drawing Project?</h2><Link href="/contact" className="inline-block bg-white text-[#DC2626] px-8 py-4 rounded font-semibold hover:bg-[#F8F6F0] transition">Send Dimensions</Link></div></section>
  </>);
}
