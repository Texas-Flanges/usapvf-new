import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work - Louisiana Flange Products | USA PVF",
  description: "Flanges crafted with precision and care. Supplying durable flanges to Louisiana's oil and gas industries. See our projects and customer stories.",
  keywords: ["Louisiana flange products", "industrial flanges", "oil and gas flanges", "custom flanges Louisiana", "flange testimonials"],
  openGraph: {
    title: "Our Work - Louisiana Flange Products",
    description: "Flanges crafted with precision and care for Louisiana industries.",
    url: "https://usapvf.com/products",
    siteName: "Louisiana Flange",
    type: "website",
  },
  alternates: {
    canonical: "https://usapvf.com/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body > header.border-gray-200 { display: none !important; }
            .rv { opacity: 1; transform: none; }
            * { box-sizing: border-box; }
            html { scroll-behavior: smooth; }
          `,
        }}
      />

      {/* Navigation */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 40px", backgroundColor: "#fff", borderBottom: "1px solid #e5e7eb", position: "sticky", top: 0, zIndex: 50 }}>
        <a href="/" style={{ fontSize: "22px", fontWeight: 700, color: "#1a1a2e", textDecoration: "none" }}>Louisiana Flange</a>
        <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          <a href="/" style={{ color: "#555", textDecoration: "none" }}>Home</a>
          <a href="/products" style={{ color: "#1a1a2e", textDecoration: "none", fontWeight: 500 }}>Products</a>
          <a href="/about" style={{ color: "#555", textDecoration: "none" }}>About</a>
          <a href="https://texasflange.com?ref=usapvf/contact-us" style={{ backgroundColor: "#2D2B7F", color: "#fff", padding: "10px 24px", borderRadius: "6px", textDecoration: "none", fontWeight: 500 }}>Get Quote</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="rv"
        style={{
          backgroundImage: "linear-gradient(rgba(45,43,127,0.75), rgba(45,43,127,0.75)), url(/hero-flange.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "100px 40px",
          textAlign: "center",
          color: "#fff",
          minHeight: "450px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, marginBottom: "20px", lineHeight: 1.1 }}>
          Our Work
        </h1>
        <p style={{ fontSize: "clamp(16px, 2vw, 20px)", maxWidth: "600px", opacity: 0.9 }}>
          Flanges crafted with precision and care.
        </p>
      </section>

      {/* Louisiana Projects Section */}
      <section className="rv" style={{ padding: "80px 40px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#1a1a2e", marginBottom: "20px" }}>Louisiana Projects</h2>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#444", marginBottom: "30px" }}>
              Supplying durable flanges to Louisiana&apos;s oil and gas industries, supporting LSU football season with pride.
            </p>
            <a href="https://texasflange.com?ref=usapvf/contact-us/" style={{ backgroundColor: "#2D2B7F", color: "#fff", padding: "12px 32px", borderRadius: "6px", textDecoration: "none", fontWeight: 500, display: "inline-block" }}>Get Quote</a>
          </div>
          <div style={{ flex: "1 1 300px" }}>
            <img src="/hero-flange.jpg" alt="Industrial flange for Louisiana oil and gas projects" style={{ width: "100%", borderRadius: "12px", objectFit: "cover", maxHeight: "400px" }} />
          </div>
        </div>
      </section>

      {/* Customer Stories Section */}
      <section className="rv" style={{ padding: "80px 40px", backgroundColor: "#f8f9fa" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#1a1a2e", marginBottom: "12px" }}>Customer Stories</h2>
          <p style={{ fontSize: "17px", color: "#666", marginBottom: "50px" }}>
            Local businesses in Louisiana rely on our flanges for quality and timely delivery every season.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", textAlign: "left" }}>
            <div style={{ backgroundColor: "#fff", padding: "40px 30px", borderRadius: "12px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <p style={{ fontSize: "17px", color: "#444", lineHeight: 1.7, fontStyle: "italic", marginBottom: "20px" }}>
                &ldquo;We got the flange delivered and it was exactly what we needed -- strong, reliable, and on time every time.&rdquo;
              </p>
              <p style={{ fontWeight: 600, color: "#1a1a2e" }}>Mark T.</p>
            </div>
            <div style={{ backgroundColor: "#fff", padding: "40px 30px", borderRadius: "12px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <p style={{ fontSize: "17px", color: "#444", lineHeight: 1.7, fontStyle: "italic", marginBottom: "20px" }}>
                &ldquo;Their flanges held up perfectly through our toughest projects in Louisiana&apos;s heat and humidity.&rdquo;
              </p>
              <p style={{ fontWeight: 600, color: "#1a1a2e" }}>Jill R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rv" style={{ padding: "80px 40px", backgroundColor: "#2D2B7F", textAlign: "center", color: "#fff" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "16px" }}>Get Connected</h2>
        <p style={{ fontSize: "18px", marginBottom: "30px", opacity: 0.9 }}>Get quotes or questions answered</p>
        <a href="https://texasflange.com?ref=usapvf/contact-us/" style={{ backgroundColor: "#fff", color: "#2D2B7F", padding: "14px 40px", borderRadius: "30px", textDecoration: "none", fontWeight: 600, fontSize: "16px", display: "inline-block" }}>Contact Us</a>
      </section>

      {/* FAQ Section */}
      <section className="rv" style={{ padding: "80px 40px", backgroundColor: "#f8f9fa" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#1a1a2e", marginBottom: "40px", textAlign: "center" }}>Frequently Asked Questions</h2>
          {[
            { q: "What flanges do you offer?", a: "We supply weld neck, slip-on, blind, lap joint, socket weld, threaded, and many other industrial flanges and flange types." },
            { q: "Do you serve Louisiana only?", a: "No, but we proudly supply flanges throughout Louisiana." },
            { q: "Can you customize flange sizes?", a: "Absolutely, we tailor flange dimensions to meet your exact project specifications." },
            { q: "How do you ensure quality?", a: "We support LSU football and love our local community." },
            { q: "What materials are used?", a: "Our flanges are made from premium carbon and stainless steel." },
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: "#fff", padding: "24px 30px", borderRadius: "8px", marginBottom: "12px", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontSize: "17px", fontWeight: 600, color: "#1a1a2e", marginBottom: "8px" }}>{item.q}</h3>
              <p style={{ color: "#555", lineHeight: 1.6, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "40px", backgroundColor: "#1a1a2e", color: "#ccc", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#fff", marginBottom: "16px" }}>Louisiana Flange</h3>
          <p style={{ marginBottom: "8px" }}>Serving Louisiana with quality flanges</p>
          <p style={{ marginBottom: "8px" }}>
            Phone: <a href="tel:281-484-8325" style={{ color: "#8B9FD4", textDecoration: "none" }}>281-484-8325</a> | Fax: 281-484-8730
          </p>
          <p style={{ marginBottom: "16px" }}>
            Email: <a href="mailto:sales@texasflange.com" style={{ color: "#8B9FD4", textDecoration: "none" }}>sales@texasflange.com</a>
          </p>
          <p style={{ marginBottom: "8px" }}>
            <a href="https://texasflange.com?ref=usapvf" style={{ color: "#8B9FD4", textDecoration: "none" }}>Texas Flange</a> {" | "}
            <a href="https://texasflange.com?ref=usapvf/contact-us" style={{ color: "#8B9FD4", textDecoration: "none" }}>Contact Us</a>
          </p>
          <p style={{ fontSize: "13px", color: "#888", marginTop: "20px" }}>&copy; 2025 Louisiana Flange. All rights reserved.</p>
        </div>
      </footer>

      {/* Structured Data - Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://usapvf.com" },
              { "@type": "ListItem", position: 2, name: "Products", item: "https://usapvf.com/products" },
            ],
          }),
        }}
      />
      {/* Structured Data - FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "What flanges do you offer?", acceptedAnswer: { "@type": "Answer", text: "We supply weld neck, slip-on, blind, lap joint, socket weld, threaded, and many other industrial flanges and flange types." }},
              { "@type": "Question", name: "Do you serve Louisiana only?", acceptedAnswer: { "@type": "Answer", text: "No, but we proudly supply flanges throughout Louisiana." }},
              { "@type": "Question", name: "Can you customize flange sizes?", acceptedAnswer: { "@type": "Answer", text: "Absolutely, we tailor flange dimensions to meet your exact project specifications." }},
              { "@type": "Question", name: "What materials are used?", acceptedAnswer: { "@type": "Answer", text: "Our flanges are made from premium carbon and stainless steel." }},
            ],
          }),
        }}
      />
    </>
  );
}

