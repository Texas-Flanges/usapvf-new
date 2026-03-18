import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Louisiana Flange - Trusted Flange Manufacturer | USA PVF",
  description: "Louisiana Flange proudly supplies quality flanges across Louisiana. Custom flanges, quick turnaround, and local support since 1986. Get a quote today.",
  keywords: ["Louisiana flange", "flange manufacturer", "custom flanges", "industrial flanges", "USA PVF", "pipe flanges", "weld neck flanges", "slip-on flanges"],
  openGraph: {
    title: "Louisiana Flange - Trusted Flange Manufacturer",
    description: "Supplying quality flanges across Louisiana with passion and precision since 1986.",
    url: "https://usapvf.com",
    siteName: "Louisiana Flange",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Louisiana Flange - Trusted Flange Manufacturer",
    description: "Supplying quality flanges across Louisiana with passion and precision since 1986.",
  },
  alternates: {
    canonical: "https://usapvf.com",
  },
};

export default function Home() {
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
          <a href="/" style={{ color: "#1a1a2e", textDecoration: "none", fontWeight: 500 }}>Home</a>
          <a href="/products" style={{ color: "#555", textDecoration: "none" }}>Products</a>
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
          padding: "120px 40px",
          textAlign: "center",
          color: "#fff",
          minHeight: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, marginBottom: "20px", lineHeight: 1.1 }}>
          Louisiana Flange<br />Proudly Built
        </h1>
        <p style={{ fontSize: "clamp(16px, 2vw, 20px)", maxWidth: "600px", marginBottom: "40px", opacity: 0.9 }}>
          Supplying quality flanges across Louisiana with passion and precision
        </p>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="https://texasflange.com?ref=usapvf/contact-us" style={{ backgroundColor: "#fff", color: "#2D2B7F", padding: "14px 36px", borderRadius: "30px", textDecoration: "none", fontWeight: 600, fontSize: "16px" }}>Get Quote</a>
          <a href="https://texasflange.com?ref=usapvf/about/" style={{ color: "#fff", padding: "14px 36px", textDecoration: "none", fontWeight: 500, fontSize: "16px", border: "2px solid rgba(255,255,255,0.5)", borderRadius: "30px" }}>Learn More</a>
        </div>
      </section>

      {/* About / Stats Section */}
      <section className="rv" style={{ padding: "80px 40px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#1a1a2e", marginBottom: "20px" }}>Proudly Made in the South</h2>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#444", marginBottom: "30px" }}>
              At Louisiana Flange, we craft durable flanges with care, serving our local industries and cheering on LSU football every season.
            </p>
            <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", marginBottom: "30px" }}>
              <div>
                <div style={{ fontSize: "32px", fontWeight: 700, color: "#2D2B7F" }}>15,000+</div>
                <div style={{ color: "#666", fontSize: "14px" }}>Flanges Delivered</div>
              </div>
              <div>
                <div style={{ fontSize: "32px", fontWeight: 700, color: "#2D2B7F" }}>743</div>
                <div style={{ color: "#666", fontSize: "14px" }}>Trusted Locally</div>
              </div>
              <div>
                <div style={{ fontSize: "32px", fontWeight: 700, color: "#2D2B7F" }}>Since 1986</div>
                <div style={{ color: "#666", fontSize: "14px" }}>Years of Service</div>
              </div>
            </div>
            <a href="https://texasflange.com?ref=usapvf/contact-us/" style={{ backgroundColor: "#2D2B7F", color: "#fff", padding: "12px 32px", borderRadius: "6px", textDecoration: "none", fontWeight: 500, display: "inline-block" }}>Get Quote</a>
          </div>
          <div style={{ flex: "1 1 300px" }}>
            <img src="/hero-flange.jpg" alt="Close-up of industrial valve flanges" style={{ width: "100%", borderRadius: "12px", objectFit: "cover", maxHeight: "400px" }} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="rv" style={{ padding: "80px 40px", backgroundColor: "#f8f9fa" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#1a1a2e", marginBottom: "12px" }}>Our Services</h2>
          <p style={{ fontSize: "17px", color: "#666", marginBottom: "50px" }}>Precision flange manufacturing tailored for Louisiana industries.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
            <div style={{ backgroundColor: "#fff", padding: "40px 30px", borderRadius: "12px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>&#9881;</div>
              <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px", color: "#1a1a2e" }}>Custom Flanges</h3>
              <p style={{ color: "#666", lineHeight: 1.6 }}>Made to your exact specs with care and precision.</p>
            </div>
            <div style={{ backgroundColor: "#fff", padding: "40px 30px", borderRadius: "12px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>&#9201;</div>
              <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px", color: "#1a1a2e" }}>Quick Turnaround</h3>
              <p style={{ color: "#666", lineHeight: 1.6 }}>Fast delivery to keep your projects on schedule.</p>
            </div>
            <div style={{ backgroundColor: "#fff", padding: "40px 30px", borderRadius: "12px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>&#129309;</div>
              <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px", color: "#1a1a2e" }}>Local Support</h3>
              <p style={{ color: "#666", lineHeight: 1.6 }}>Serving Louisiana with hometown dedication and expertise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="rv" style={{ padding: "80px 40px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#1a1a2e", marginBottom: "12px" }}>Gallery</h2>
          <p style={{ fontSize: "17px", color: "#666", marginBottom: "40px" }}>Flanges and machined parts crafted with precision for Louisiana industries</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "16px" }}>
            <img src="/hero-flange.jpg" alt="Industrial valve flanges" style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} />
            <img src="https://www.texasflange.com/wp-content/uploads/2025/11/blind.jpg" alt="Freshly manufactured steel flange with smooth edges and precise bolt holes" style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} />
            <img src="/hero-flange.jpg" alt="Various flange types on workshop table" style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} />
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
            { q: "Do you serve Louisiana only?", a: "No, but we proudly supply flanges throughout Louisiana and across the United States." },
            { q: "Can you customize flange sizes?", a: "Absolutely, we tailor flange dimensions to meet your exact project specifications." },
            { q: "How do you ensure quality?", a: "Every flange undergoes rigorous inspection and testing to meet ASME and ANSI standards before leaving our facility." },
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

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Louisiana Flange",
            url: "https://usapvf.com",
            telephone: "+1-281-484-8325",
            email: "sales@texasflange.com",
            description: "Trusted flange manufacturer proudly serving Louisiana industries since 1986.",
            parentOrganization: {
              "@type": "Organization",
              name: "Texas Flange",
              url: "https://texasflange.com?ref=usapvf",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "What flanges do you offer?", acceptedAnswer: { "@type": "Answer", text: "We supply weld neck, slip-on, blind, lap joint, socket weld, threaded, and many other industrial flanges and flange types." }},
              { "@type": "Question", name: "Do you serve Louisiana only?", acceptedAnswer: { "@type": "Answer", text: "No, but we proudly supply flanges throughout Louisiana and across the United States." }},
              { "@type": "Question", name: "Can you customize flange sizes?", acceptedAnswer: { "@type": "Answer", text: "Absolutely, we tailor flange dimensions to meet your exact project specifications." }},
              { "@type": "Question", name: "What materials are used?", acceptedAnswer: { "@type": "Answer", text: "Our flanges are made from premium carbon and stainless steel." }},
            ],
          }),
        }}
      />
    </>
  );
}

