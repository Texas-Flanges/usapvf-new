import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | USA PVF",
  description: "Expert insights on PVF industry trends, flange manufacturing, and industrial applications. Read our latest articles and technical guides.",
  keywords: ["PVF blog", "flange industry", "industrial flanges", "manufacturing insights", "technical guides"],
  openGraph: {
    title: "Blog | USA PVF",
    description: "Expert insights on PVF industry trends and flange manufacturing.",
    url: "https://usapvf.com/blog",
    siteName: "USA PVF",
    type: "website",
  },
  alternates: {
    canonical: "https://usapvf.com/blog",
  },
};

const posts = [
  { title: "The Future of PVF Manufacturing", date: "March 18, 2026", excerpt: "Industry trends and innovations shaping the future of pressure vessel fabrication." },
  { title: "Understanding Flange Standards and Compliance", date: "March 15, 2026", excerpt: "A comprehensive guide to ASME, ANSI, and other critical flange manufacturing standards." },
  { title: "Quality Control in Flange Production", date: "March 10, 2026", excerpt: "Best practices for ensuring superior quality in every flange we manufacture." },
];

export default function BlogPage() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body > header.border-gray-200 { display: none !important; }
            * { box-sizing: border-box; }
          `,
        }}
      />

      {/* Navigation */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 40px", backgroundColor: "#1a3a5c", color: "#fff", position: "sticky", top: 0, zIndex: 50 }}>
        <a href="/" style={{ fontSize: "20px", fontWeight: 700, color: "#fff", textDecoration: "none" }}>USA PVF</a>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a>
          <a href="/blog" style={{ color: "#fff", textDecoration: "none", fontWeight: 600 }}>Blog</a>
          <a href="https://texasflange.com/contact-us?ref=usapvf" style={{ backgroundColor: "#2563eb", color: "#fff", padding: "10px 24px", borderRadius: "6px", textDecoration: "none", fontWeight: 500 }}>Request a Quote</a>
        </div>
      </nav>

      {/* Header */}
      <section style={{ background: "linear-gradient(135deg, #1a3a5c 0%, #2563eb 100%)", padding: "60px 40px", color: "#fff" }}>
        <div style={{ maxWidth: "800px" }}>
          <h1 style={{ fontSize: "42px", fontWeight: 700, marginBottom: "12px" }}>Blog</h1>
          <p style={{ fontSize: "18px", opacity: 0.9 }}>Technical articles and industry insights about flanges and PVF</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div style={{ padding: "16px 40px", backgroundColor: "#f8f9fa", fontSize: "14px" }}>
        <a href="/" style={{ color: "#0066cc", textDecoration: "none" }}>Home</a> / <span style={{ color: "#666" }}>Blog</span>
      </div>

      {/* Posts Grid */}
      <section style={{ padding: "60px 40px", backgroundColor: "#f8f9fa" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {posts.map((post, i) => (
            <div key={i} style={{ display: "block", backgroundColor: "#fff", borderRadius: "12px", padding: "28px", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
              <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#1a3a5c", marginBottom: "8px", lineHeight: 1.4 }}>{post.title}</h2>
              <p style={{ fontSize: "14px", color: "#888", marginBottom: "12px" }}>{post.date}</p>
              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.6, margin: 0 }}>{post.excerpt}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "40px", backgroundColor: "#111", color: "#ccc", textAlign: "center" }}>
        <p style={{ marginBottom: "8px" }}>
          <a href="https://texasflange.com/?ref=usapvf" style={{ color: "#93c5fd", textDecoration: "none" }}>Texas Flange</a> {" | "}
          <a href="https://texasflange.com/contact-us?ref=usapvf" style={{ color: "#93c5fd", textDecoration: "none" }}>Request a Quote</a>
        </p>
        <p style={{ fontSize: "13px", color: "#888" }}>&copy; 2025 USA PVF. All rights reserved.</p>
      </footer>

      {/* Structured Data - BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://usapvf.com" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://usapvf.com/blog" },
            ],
          }),
        }}
      />
    </>
  );
}
