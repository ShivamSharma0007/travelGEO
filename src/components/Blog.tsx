// src/components/Blog.tsx
import React, { useEffect, useState } from "react";

type Article = {
  id: number;
  title: string;
  date: string;
  hero: string;
  excerpt: string;
  content: string;
};

export function Blog() {
  const articles: Article[] = [
    {
      id: 1,
      title: "Top 10 Places to Visit in Shimla",
      date: "January 2025",
      hero:
        "",
      excerpt:
        "From Mall Road to Kufri — the classic must-visits for first-time travelers to Shimla.",
      content: `Shimla, the Queen of Hills, blends colonial charm with Himalayan beauty. Here are the top places you should visit:

1) Mall Road — the bustling heart with shops, cafés and evening walks.
2) The Ridge — panoramic hill views and cultural events.
3) Jakhoo Temple — perched above town with a large Hanuman statue.
4) Kufri — a short drive for snow activities and scenic viewpoints.
5) Mashobra — peaceful pine forests and nature walks.
6) Naldehra — scenic golf course and quiet landscapes.
7) Chadwick Falls — pretty waterfall (best in monsoon).
8) Scandal Point — historic meeting place between Mall Road and Ridge.
9) Viceregal Lodge — colonial-era architecture and gardens.
10) Lakkar Bazaar — wooden crafts and local souvenirs.

Tips:
- Early mornings are best for photos and less crowd.
- Winter (Dec–Feb) for snow; Mar–Jun for pleasant weather.
- Try local Himachali cuisine at small eateries around Mall Road.`
    },
    {
      id: 2,
      title: "Best Time to Visit Shimla — Seasonal Guide",
      date: "December 2024",
      hero:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
      excerpt:
        "Which season fits your trip goals? Snow, photography, or lush green monsoon — here’s how to plan.",
      content: `Shimla changes dramatically across seasons:

• Summer (Mar–Jun): Comfortable days and cool nights — great for families and sightseeing.
• Monsoon (Jul–Sep): Lush green hills and waterfalls — trails can be slippery; check local travel advisories.
• Autumn (Oct–Nov): Clear skies and crisp air — ideal for photography.
• Winter (Dec–Feb): Snowfall at higher points like Kufri — perfect for snow activities and cozy stays.

Packing tip:
- Layered clothing, sunscreen for daytime, warm jacket for evenings in March–June, heavy woolens for December–February.`
    },
    {
      id: 3,
      title: "Shimla for Families — Why It's Perfect",
      date: "November 2024",
      hero:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=80",
      excerpt:
        "Kid-friendly spots, safe walks, and easy itineraries — Shimla is a top family choice.",
      content: `Shimla is family-friendly with activities and logistics that suit all ages:

Highlights:
- Easy walks on Mall Road; accessible for elders.
- Short drives to Kufri for kids to enjoy snow (in winter) and small amusement areas.
- Jakhoo ropeway and small parks for children.
- Many hotels and homestays offer family rooms and local food options.

Suggested 3-day family itinerary:
Day 1: Arrive — Mall Road + Ridge + Christ Church.
Day 2: Kufri day trip — rides & snow (seasonal).
Day 3: Mashobra/Naldehra — quiet nature, light walks, return.

Medical & Safety tips:
- Pharmacies and clinics are available in town.
- Prefer daytime drives in hilly roads; hire experienced local drivers.`
    }
  ];

  const [openArticle, setOpenArticle] = useState<Article | null>(null);

  // Lock background scroll when modal opens
  useEffect(() => {
    if (openArticle) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return;
  }, [openArticle]);

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Shimla Travel Blog
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Practical guides, seasonal tips and family-friendly advice for visiting Shimla.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((a) => (
            <article
              key={a.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
              onClick={() => setOpenArticle(a)}
            >
              <div className="w-full h-52 md:h-56 overflow-hidden bg-gray-100">
                <img
                  src={a.hero}
                  alt={a.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                  onError={(e) => {
                    // graceful fallback SVG if image fails
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml;utf8," +
                      encodeURIComponent(
                        `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><rect width='100%' height='100%' fill='%23E5E7EB'/><text x='50%' y='50%' font-size='24' text-anchor='middle' fill='%239CA3AF' dy='.3em'>Image unavailable</text></svg>`
                      );
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{a.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{a.date}</span>
                  <span className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded">Shimla</span>
                </div>
                <p className="text-gray-600 mb-5">{a.excerpt}</p>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setOpenArticle(a)}
                    className="text-[#6B8E23] font-semibold hover:text-[#556B2F]"
                  >
                    Read More →
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // share via WhatsApp (optional)
                      const url = window.location.href;
                      const text = `${a.title} — Read more: ${url}#blog`;
                      window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
                    }}
                    className="text-sm text-gray-500 hover:text-gray-700"
                    aria-label="Share"
                  >
                    Share
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal (inline, fits screen) */}
      {openArticle && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={openArticle.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpenArticle(null)}
          />

          {/* Modal card */}
          <div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between p-5 border-b">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{openArticle.title}</h3>
                <p className="text-sm text-gray-500">{openArticle.date} • Shimla</p>
              </div>
              <button
                onClick={() => setOpenArticle(null)}
                className="text-gray-600 hover:text-black ml-4"
                aria-label="Close article"
              >
                ✕
              </button>
            </div>

            {/* Carousel (fade) */}
            <div className="w-full h-64 md:h-80 bg-gray-100 relative overflow-hidden">
              {openArticle.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${openArticle.title} ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    // simple fade: show first image (no auto-slide here to save perf)
                    i === 0 ? "opacity-100" : "opacity-0"
                  }`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml;utf8," +
                      encodeURIComponent(
                        `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='600'><rect width='100%' height='100%' fill='%23E5E7EB'/><text x='50%' y='50%' font-size='20' text-anchor='middle' fill='%239CA3AF' dy='.3em'>Image unavailable</text></svg>`
                      );
                  }}
                />
              ))}
            </div>

            {/* Body */}
            <div className="p-6 prose prose-lg max-w-none text-gray-800 whitespace-pre-line">
              {openArticle.content}
            </div>

            {/* Footer CTA */}
            <div className="p-6 border-t bg-gray-50 rounded-b-2xl flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-gray-900">Enjoying this guide?</h4>
                <p className="text-sm text-gray-600">Contact us for custom Shimla itineraries & group discounts.</p>
              </div>

              <div className="flex gap-3 w-full md:w-auto">
                <a
                  href="#contact"
                  onClick={() => setOpenArticle(null)}
                  className="px-5 py-3 bg-[#6B8E23] text-white rounded-lg text-center w-full md:w-auto"
                >
                  Book Now
                </a>
                <button
                  onClick={() => setOpenArticle(null)}
                  className="px-5 py-3 border rounded-lg w-full md:w-auto"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
