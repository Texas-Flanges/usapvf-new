import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "USA PVF - American-Made Flanges | BAA, BABA & AIS Compliant",
  description: "USA PVF supplies domestically manufactured flanges that meet Buy American Act (BAA), Build America Buy America (BABA), and American Iron and Steel (AIS) requirements. Domestic melt, domestic manufacturing, full documentation.",
  keywords: ["USA PVF", "domestic flanges", "Buy American Act", "BAA compliant flanges", "BABA flanges", "American Iron and Steel", "AIS flanges", "domestic melt flanges", "made in USA flanges", "American-made PVF"],
  openGraph: {
    title: "USA PVF - American-Made Flanges | BAA, BABA & AIS Compliant",
    description: "Domestically manufactured flanges with full BAA, BABA, and AIS compliance documentation. Domestic melt, domestic fabrication.",
    url: "https://usapvf.com",
    siteName: "USA PVF",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "USA PVF - American-Made Flanges",
    description: "Domestically manufactured flanges with full BAA, BABA, and AIS compliance documentation.",
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
        <a href="/" style={{ fontSize: "22px", fontWeight: 700, color: "#1a1a2e", textDecoration: "none" }}>USA PVF</a>
        <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          <a href="/" style={{ color: "#1a1a2e", textDecoration: "none", fontWeight: 500 }}>Home</a>
          <a href="/products" style={{ color: "#555", textDecoration: "none" }}>Products</a>
          <a href="/about" style={{ color: "#555", textDecoration: "none" }}>About</a>
          <a href="/blog" style={{ color: "#555", textDecoration: "none" }}>Blog</a>
          <a href="https://texasflange.com/contact-us/?ref=usapvf" style={{ backgroundColor: "#2D2B7F", color: "#fff", padding: "10px 24px", borderRadius: "6px", textDecoration: "none", fontWeight: 500 }}>Get Quote</a>
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
          American-Made Flanges<br />Built to Comply
        </h1>
        <p style={{ fontSize: "clamp(16px, 2vw, 20px)", maxWidth: "680px", marginBottom: "40px", opacity: 0.9 }}>
          Domestically manufactured PVF products with full BAA, BABA, and AIS compliance - from melt to final fabrication, made in the USA.
        </p>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="https://texasflange.com/contact-us/?ref=usapvf" style={{ backgroundColor: "#fff", color: "#2D2B7F", padding: "14px 36px", borderRadius: "30px", textDecoration: "none", fontWeight: 600, fontSize: "16px" }}>Get a Compliant Quote</a>
          <a href="#compliance" style={{ color: "#fff", padding: "14px 36px", textDecoration: "none", fontWeight: 500, fontSize: "16px", border: "2px solid rgba(255,255,255,0.5)", borderRadius: "30px" }}>Learn About Compliance</a>
        </div>
      </section>

      {/* Why American-Made Matters */}
      <section className="rv" style={{ padding: "80px 40px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "60px", alignItems: "center" }}>
          <div style={{ flex: "1 1 400px" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#1a1a2e", marginBottom: "20px" }}>Why Domestic Sourcing Matters Now More Than Ever</h2>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#444", marginBottom: "20px" }}>
              Federal domestic content requirements for pipe, valves, and fittings are expanding rapidly. The Infrastructure Investment and Jobs Act, the CHIPS Act, and the Inflation Reduction Act are directing billions of dollars into American infrastructure projects - and nearly all of that spending carries domestic sourcing mandates.
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#444", marginBottom: "30px" }}>
              If your project receives federal funding or falls under federal procurement rules, your flanges and fittings likely need to be manufactured in the United States - from the initial melt all the way through final fabrication. Understanding which rules apply to your project is the first step toward staying compliant and avoiding costly delays.
            </p>
            <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", marginBottom: "30px" }}>
              <div>
                <div style={{ fontSize: "32px", fontWeight: 700, color: "#2D2B7F" }}>BAA</div>
                <div style={{ color: "#666", fontSize: "14px" }}>Buy American Act</div>
              </div>
              <div>
                <div style={{ fontSize: "32px", fontWeight: 700, color: "#2D2B7F" }}>BABA</div>
                <div style={{ color: "#666", fontSize: "14px" }}>Build America Buy America</div>
              </div>
              <div>
                <div style={{ fontSize: "32px", fontWeight: 700, color: "#2D2B7F" }}>AIS</div>
                <div style={{ color: "#666", fontSize: "14px" }}>American Iron & Steel</div>
              </div>
            </div>
            <a href="https://texasflange.com/contact-us/?ref=usapvf" style={{ backgroundColor: "#2D2B7F", color: "#fff", padding: "12px 32px", borderRadius: "6px", textDecoration: "none", fontWeight: 500, display: "inline-block" }}>Request Compliance Documentation</a>
          </div>
          <div style={{ flex: "1 1 300px" }}>
            <img src="/hero-flange.jpg" alt="American-made industrial flanges" style={{ width: "100%", borderRadius: "12px", objectFit: "cover", maxHeight: "400px" }} />
          </div>
        </div>
      </section>

      {/* Three Compliance Standards */}
      <section id="compliance" className="rv" style={{ padding: "80px 40px", backgroundColor: "#f8f9fa" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#1a1a2e", marginBottom: "12px" }}>Understanding the Three Major Domestic Content Standards</h2>
          <p style={{ fontSize: "17px", color: "#666", marginBottom: "50px" }}>Each standard has different triggers, different scopes, and different documentation requirements.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", textAlign: "left" }}>
            <div style={{ backgroundColor: "#fff", padding: "40px 30px", borderRadius: "12px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: "28px", fontWeight: 700, color: "#2D2B7F", marginBottom: "12px" }}>BAA</div>
              <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px", color: "#1a1a2e" }}>Buy American Act</h3>
              <p style={{ color: "#666", lineHeight: 1.7 }}>
                The BAA applies to direct federal procurement - when a government agency is purchasing goods for its own use. For iron and steel products like flanges, the material must be manufactured domestically. BAA jobs are the most common type of domestic content requirement, and compliance typically requires a manufacturer certification confirming domestic production.
              </p>
            </div>
            <div style={{ backgroundColor: "#fff", padding: "40px 30px", borderRadius: "12px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: "28px", fontWeight: 700, color: "#2D2B7F", marginBottom: "12px" }}>BABA</div>
              <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px", color: "#1a1a2e" }}>Build America, Buy America Act</h3>
              <p style={{ color: "#666", lineHeight: 1.7 }}>
                BABA is triggered by federal infrastructure funding rather than direct procurement. The standard is stricter - for iron and steel products, all manufacturing processes must take place in the United States, including smelting and melting. A flange forged domestically from foreign-melted steel would not qualify under BABA. Documentation typically requires mill test reports (MTRs) tracing the heat back to a domestic mill.
              </p>
            </div>
            <div style={{ backgroundColor: "#fff", padding: "40px 30px", borderRadius: "12px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize: "28px", fontWeight: 700, color: "#2D2B7F", marginBottom: "12px" }}>AIS</div>
              <h3 style={{ fontSize: "20px", fontWeight: 600, marginBottom: "12px", color: "#1a1a2e" }}>American Iron and Steel</h3>
              <p style={{ color: "#666", lineHeight: 1.7 }}>
                The AIS provision applies to projects funded through the EPA State Revolving Fund (SRF) programs and certain USDA Rural Development water and wastewater programs. The compliance standard is functionally the same as BABA for iron and steel - all manufacturing processes from melting through final fabrication must occur in the United States. AIS projects require the same level of traceability and documentation as BABA work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="rv" style={{ padding: "80px 40px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#1a1a2e", marginBottom: "20px", textAlign: "center" }}>Compliance Documentation We Provide</h2>
          <p style={{ fontSize: "17px", color: "#666", marginBottom: "40px", textAlign: "center" }}>
            Proper documentation is what separates a compliant flange from a non-compliant one. We supply everything you need to satisfy auditors and project owners.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
            <div style={{ backgroundColor: "#f8f9fa", padding: "30px", borderRadius: "10px", borderLeft: "4px solid #2D2B7F" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#1a1a2e", marginBottom: "10px" }}>Mill Test Reports (MTRs)</h3>
              <p style={{ color: "#666", lineHeight: 1.6, margin: 0 }}>Full material traceability with heat numbers traced back to the domestic mill where melting occurred.</p>
            </div>
            <div style={{ backgroundColor: "#f8f9fa", padding: "30px", borderRadius: "10px", borderLeft: "4px solid #2D2B7F" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#1a1a2e", marginBottom: "10px" }}>Manufacturer Certifications</h3>
              <p style={{ color: "#666", lineHeight: 1.6, margin: 0 }}>Written certification from the manufacturer confirming that all production processes occurred within the United States.</p>
            </div>
            <div style={{ backgroundColor: "#f8f9fa", padding: "30px", borderRadius: "10px", borderLeft: "4px solid #2D2B7F" }}>
              <h3 style={{ fontSize: "18px", fontWeight: 600, color: "#1a1a2e", marginBottom: "10px" }}>Compliance Letters</h3>
              <p style={{ color: "#666", lineHeight: 1.6, margin: 0 }}>Project-specific compliance letters tailored to the applicable standard - whether BAA, BABA, or AIS - ready for submittal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rv" style={{ padding: "80px 40px", backgroundColor: "#2D2B7F", textAlign: "center", color: "#fff" }}>
        <h2 style={{ fontSize: "36px", fontWeight: 700, marginBottom: "16px" }}>Need Domestic Flanges for a Compliant Project?</h2>
        <p style={{ fontSize: "18px", marginBottom: "30px", opacity: 0.9, maxWidth: "600px", margin: "0 auto 30px" }}>We supply American-made flanges with full documentation for BAA, BABA, and AIS requirements. Tell us about your project and we will get you a quote with the right paperwork.</p>
        <a href="https://texasflange.com/contact-us/?ref=usapvf" style={{ backgroundColor: "#fff", color: "#2D2B7F", padding: "14px 40px", borderRadius: "30px", textDecoration: "none", fontWeight: 600, fontSize: "16px", display: "inline-block" }}>Contact Us for a Quote</a>
      </section>

      {/* FAQ Section */}
      <section className="rv" style={{ padding: "80px 40px", backgroundColor: "#f8f9fa" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px", fontWeight: 700, color: "#1a1a2e", marginBottom: "40px", textAlign: "center" }}>Frequently Asked Questions</h2>
          {[
            { q: "What is the difference between BAA and BABA?", a: "The Buy American Act (BAA) applies to direct federal government procurement, while Build America Buy America (BABA) applies to projects that receive federal infrastructure funding. BABA has a stricter standard - it requires all manufacturing processes, including melting, to occur in the United States." },
            { q: "What does AIS compliance require for flanges?", a: "American Iron and Steel (AIS) requirements apply to EPA State Revolving Fund and certain USDA water projects. For flanges, every step from melting through final fabrication must take place domestically. The standard is functionally identical to BABA for iron and steel products." },
            { q: "How do I know which standard applies to my project?", a: "It depends on the funding source. Direct federal purchases fall under BAA. Federally funded infrastructure projects fall under BABA. EPA SRF and certain USDA water program projects fall under AIS. Your project owner or contracting officer can confirm which standard applies." },
            { q: "What documentation do you provide for compliant orders?", a: "We provide mill test reports (MTRs) with domestic melt verification, manufacturer certifications of domestic production, and project-specific compliance letters tailored to the applicable standard." },
            { q: "Can a flange made from imported steel qualify under BABA or AIS?", a: "No. Under both BABA and AIS, the steel must be melted in the United States. A flange forged domestically from foreign-melted steel does not meet the requirement. The entire chain - melting, forging, machining - must occur in the U.S." },
            { q: "Why are domestic content requirements expanding?", a: "The Infrastructure Investment and Jobs Act, the CHIPS Act, and the Inflation Reduction Act are directing billions into domestic infrastructure projects. Nearly all of this spending carries domestic sourcing mandates, which means more projects than ever require compliant American-made products." },
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
          <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#fff", marginBottom: "16px" }}>USA PVF</h3>
          <p style={{ marginBottom: "8px" }}>American-made flanges with full domestic compliance documentation</p>
          <p style={{ marginBottom: "8px" }}>
            Phone: <a href="tel:281-484-8325" style={{ color: "#8B9FD4", textDecoration: "none" }}>281-484-8325</a> | Fax: 281-484-8730
          </p>
          <p style={{ marginBottom: "16px" }}>
            Email: <a href="mailto:sales@texasflange.com" style={{ color: "#8B9FD4", textDecoration: "none" }}>sales@texasflange.com</a>
          </p>
          <p style={{ marginBottom: "8px" }}>
            <a href="https://texasflange.com/?ref=usapvf" style={{ color: "#8B9FD4", textDecoration: "none" }}>Texas Flange</a> {" | "}
            <a href="https://texasflange.com/contact-us/?ref=usapvf" style={{ color: "#8B9FD4", textDecoration: "none" }}>Contact Us</a>
          </p>
          <p style={{ fontSize: "13px", color: "#888", marginTop: "20px" }}>&copy; 2026 USA PVF. All rights reserved.</p>
        </div>
      </footer>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "USA PVF",
            url: "https://usapvf.com",
            telephone: "+1-281-484-8325",
            email: "sales@texasflange.com",
            description: "Supplier of American-made flanges with full BAA, BABA, and AIS compliance documentation for federally funded projects.",
            parentOrganization: {
              "@type": "Organization",
              name: "Texas Flange",
              url: "https://texasflange.com/?ref=usapvf",
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
              { "@type": "Question", name: "What is the difference between BAA and BABA?", acceptedAnswer: { "@type": "Answer", text: "The Buy American Act (BAA) applies to direct federal government procurement, while Build America Buy America (BABA) applies to projects that receive federal infrastructure funding. BABA has a stricter standard requiring all manufacturing processes, including melting, to occur in the United States." }},
              { "@type": "Question", name: "What does AIS compliance require for flanges?", acceptedAnswer: { "@type": "Answer", text: "American Iron and Steel (AIS) requirements apply to EPA State Revolving Fund and certain USDA water projects. For flanges, every step from melting through final fabrication must take place domestically." }},
              { "@type": "Question", name: "How do I know which standard applies to my project?", acceptedAnswer: { "@type": "Answer", text: "It depends on the funding source. Direct federal purchases fall under BAA. Federally funded infrastructure projects fall under BABA. EPA SRF and certain USDA water program projects fall under AIS." }},
              { "@type": "Question", name: "What documentation do you provide for compliant orders?", acceptedAnswer: { "@type": "Answer", text: "We provide mill test reports (MTRs) with domestic melt verification, manufacturer certifications of domestic production, and project-specific compliance letters tailored to the applicable standard." }},
              { "@type": "Question", name: "Can a flange made from imported steel qualify under BABA or AIS?", acceptedAnswer: { "@type": "Answer", text: "No. Under both BABA and AIS, the steel must be melted in the United States. A flange forged domestically from foreign-melted steel does not meet the requirement." }},
              { "@type": "Question", name: "Why are domestic content requirements expanding?", acceptedAnswer: { "@type": "Answer", text: "The Infrastructure Investment and Jobs Act, the CHIPS Act, and the Inflation Reduction Act are directing billions into domestic infrastructure projects, nearly all carrying domestic sourcing mandates." }},
            ],
          }),
        }}
      />
    </>
  );
}
