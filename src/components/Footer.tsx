import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1B1F23] text-gray-300 py-12 px-4 border-t border-[#DC2626]/30">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="col-span-2">
          <p className="text-white font-display text-2xl mb-3">
            USA<span className="text-[#DC2626]">PVF</span>
          </p>
          <p className="text-gray-300 leading-relaxed max-w-md">
            American-sourced pipe, valves, and flanges with full BAA, BABA, and AIS compliance documentation. Domestic melt traced through final production. Supplying domestic-content PVF since 1986.
          </p>
          <p className="text-gray-400 text-xs mt-4">PO Box 2889, Pearland, TX 77588</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-3 uppercase tracking-wide text-xs">Catalog</p>
          <ul className="space-y-2">
            <li><Link href="/products/flanges" className="text-gray-300 hover:text-[#DC2626]">Flanges</Link></li>
            <li><Link href="/products/fittings" className="text-gray-300 hover:text-[#DC2626]">Pipe Fittings</Link></li>
            <li><Link href="/products/valves" className="text-gray-300 hover:text-[#DC2626]">Valves</Link></li>
            <li><Link href="/products/custom-machining" className="text-gray-300 hover:text-[#DC2626]">Custom Machining</Link></li>
            <li><Link href="/compliance" className="text-gray-300 hover:text-[#DC2626]">Compliance Documentation</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mb-3 uppercase tracking-wide text-xs">Contact</p>
          <ul className="space-y-2">
            <li><a href="tel:2814848325" className="text-gray-300 hover:text-[#DC2626]">(281) 484-8325</a></li>
            <li><a href="mailto:sales@texasflange.com" className="text-gray-300 hover:text-[#DC2626]">sales@texasflange.com</a></li>
            <li className="text-gray-400">Mon-Fri, 8 AM-5 PM CST</li>
            <li><Link href="/contact" className="text-gray-300 hover:text-[#DC2626]">Request Quote</Link></li>
            <li><Link href="/privacy-policy" className="text-gray-300 hover:text-[#DC2626]">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-700 text-xs text-gray-400">
        &copy; {new Date().getFullYear()} USA PVF. All rights reserved. A resource by{" "}
        <a href="https://texasflange.com/domestic-vs-import/?ref=usapvf" className="text-gray-300 hover:underline">
          Texas Flange
        </a>
      </div>
    </footer>
  );
}
