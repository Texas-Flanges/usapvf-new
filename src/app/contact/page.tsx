import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact USA PVF",
  description: "Contact USA PVF for American-sourced flanges, valves, and fittings with BAA, BABA, and AIS compliance documentation. (281) 484-8325 / sales@texasflange.com / PO Box 2889, Pearland, TX 77588. Supplying domestic-content PVF since 1986."
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#1B1F23] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-widest text-[#DC2626] text-sm mb-3">Contact</p>
          <h1 className="font-display text-5xl font-bold mb-6 text-white">Get a Compliant Quote</h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Tell us the spec, the quantity, the project, and the applicable federal domestic content standard. We confirm inventory and quote with documentation scope the same business day.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl font-bold text-[#1B1F23] mb-6">Direct Contact</h2>
            <div className="space-y-6">
              <div>
                <p className="uppercase text-xs tracking-wider text-gray-500 mb-1">Phone</p>
                <a href="tel:2814848325" className="text-2xl text-ink font-semibold hover:text-[#DC2626]">(281) 484-8325</a>
              </div>
              <div>
                <p className="uppercase text-xs tracking-wider text-gray-500 mb-1">Email</p>
                <a href="mailto:sales@texasflange.com" className="text-xl text-ink font-semibold hover:text-[#DC2626]">sales@texasflange.com</a>
              </div>
              <div>
                <p className="uppercase text-xs tracking-wider text-gray-500 mb-1">Hours</p>
                <p className="text-lg text-ink">Monday through Friday<br />8 AM to 5 PM Central</p>
              </div>
              <div>
                <p className="uppercase text-xs tracking-wider text-gray-500 mb-1">Mailing Address</p>
                <p className="text-lg text-ink">PO Box 2889<br />Pearland, TX 77588</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded p-8">
            <h2 className="font-display text-2xl font-bold text-[#1B1F23] mb-4">What to Send in Your First Email</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3"><span className="text-[#DC2626] font-bold">1.</span><span>Part description: standard, size, pressure class, material grade, facing.</span></li>
              <li className="flex gap-3"><span className="text-[#DC2626] font-bold">2.</span><span>Quantity and any phasing.</span></li>
              <li className="flex gap-3"><span className="text-[#DC2626] font-bold">3.</span><span>Project name and funding source (BAA, BABA, AIS, ARRA, or commercial).</span></li>
              <li className="flex gap-3"><span className="text-[#DC2626] font-bold">4.</span><span>Required documentation: MTR EN 10204 3.1 or 3.2, compliance letter scope, NACE if applicable.</span></li>
              <li className="flex gap-3"><span className="text-[#DC2626] font-bold">5.</span><span>Delivery target date and ship-to.</span></li>
            </ul>
            <p className="text-sm text-gray-600 mt-6 leading-relaxed">
              Drawings or a BOM attached help. So does a copy of the project specification language if domestic content scope is on the table.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
