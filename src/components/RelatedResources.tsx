import relatedResources from "@/data/related-resources.json";

export default function RelatedResources() {
  const { heading, links } = relatedResources;

  if (links.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="related-resources" className="bg-cream py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2
          id="related-resources"
          className="font-display text-4xl md:text-5xl font-bold text-[#1B1F23] mb-12"
        >
          {heading}
        </h2>
        <ul className="space-y-6">
          {links.map((link) => (
            <li key={link.url} className="text-gray-700 leading-relaxed">
              <a href={link.url} className="text-[#DC2626] font-semibold hover:underline">
                {link.label}
              </a>
              {` — ${link.note}`}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
