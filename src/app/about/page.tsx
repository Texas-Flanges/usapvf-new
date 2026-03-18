import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Louisiana Flange | USA PVF",
  description: "At Louisiana Flange, we craft durable flanges with care, supporting local industry and cheering on LSU football every step of the way.",
  keywords: ["about Louisiana Flange", "flange manufacturer Louisiana", "USA PVF about", "industrial flanges"],
  openGraph: {
    title: "About Louisiana Flange",
    description: "Proudly serving Louisiana with durable flanges and local support.",
    url: "https://usapvf.com/about",
    siteName: "Louisiana Flange",
    type: "website",
  },
  alternates: {
    canonical: "https://usapvf.com/about",
  },
};

export default function AboutPage() {
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
          <a href="/products" style={{ color: "#555", textDecoration: "none" }}>Products</a>
          <a href="/about" style={{ color: "#1a1a2e", textDecoration: "none", fontWeight: 500 }}>About</a>
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
          Proudly Serving Louisiana
        </h1>
        <p style={{ fontSize: "clamp(16px, 2vw, 20px)", maxWidth: "700px", opacity: 0.9 }}>
          At Louisiana Flange, we craft durable flanges with care, supporting local industry and cheering on LSU football every step of the way.
        </p>
      </section>

      {/* About / Stats Section */}
      <section className="rv" style={{ padding: "80px 40px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#1a1a2e", marginBottom: "20px" }}>Who We Are</h2>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#444", marginBottom: "30px" }}>
              At Louisiana Flange, we craft durable flanges with care, serving our local industries and cheering on LSU football every season. Our commitment to quality and community runs deep.
            </p>
            <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", marginBottom: "30px" }}>
              <div>
                <div style={{ fontSize: "32px", fontWeight: 700, color: "#2D2B7F" }}>150+</div>
                <div style={{ color: "#666", fontSize: "14px" }}>Projects Completed</div>
              </div>
              <div>
                <div style={{ fontSize: "32px", fontWeight: 700, color: "#2D2B7F" }}>15</div>
                <div style={{ color: "#666", fontSize: "14px" }}>Years Experience</div>
              </div>
              <div>
                <div style={{ fontSize: "32px", fontWeight: 700, color: "#2D2B7F" }}>Trusted Quality</div>
                <div style={{ color: "#666", fontSize: "14px" }}>Industry Standard</div>
              </div>
              <div>
                <div style={{ fontSize: "32px", fontWeight: 700, color: "#2D2B7F" }}>Local Pride</div>
                <div style={{ color: "#666", fontSize: "14px" }}>Louisiana Strong</div>
              </div>
            </div>
            <a href="https://texasflange.com?ref=usapvf/contact-us/" style={{ backgroundColor: "#2D2B7F", color: "#fff", padding: "12px 32px", borderRadius: "6px", textDecoration: "none", fontWeight: 500, display: "inline-block" }}>Get Quote</a>
          </div>
          <div style={{ flex: "1 1 300px" }}>
            <img src="https://www.texasflange.com/wp-content/uploads/2025/11/blind.jpg" alt="Steel flanges manufactured with precision" style={{ width: "100%", borderRadius: "12px", objectFit: "cover", maxHeight: "400px" }} />
          </div>
        </div>
      </section>

      {/* Blog Posts / News Section */}
      <section className="rv" style={{ padding: "80px 40px", backgroundColor: "#f8f9fa" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#1a1a2e", marginBottom: "50px" }}>From Our Blog</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", textAlign: "left" }}>
            <div style={{ backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <img src="/hero-flange.jpg" alt="Louisiana Flange manufacturing" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#1a1a2e", marginBottom: "8px" }}>Louisiana Flange: Proudly Serving Our State</h3>
                <p style={{ color: "#666", lineHeight: 1.6 }}>Built tough.</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <img src="https://www.texasflange.com/wp-content/uploads/2025/11/blind.jpg" alt="Strong flanges made in the South" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#1a1a2e", marginBottom: "8px" }}>Strong Flanges, Proudly Made in The South</h3>
                <p style={{ color: "#666", lineHeight: 1.6 }}>By Flange Guy</p>
              </div>
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
              { "@type": "ListItem", position: 2, name: "About", item: "https://usapvf.com/about" },
            ],
          }),
        }}
      />
      {/* Structured Data - Organization */}
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
            description: "Proudly serving Louisiana with durable flanges and local support.",
            parentOrganization: {
              "@type": "Organization",
              name: "Texas Flange",
              url: "https://texasflange.com?ref=usapvf",
            },
          }),
        }}
      />
    </>
  );
}
