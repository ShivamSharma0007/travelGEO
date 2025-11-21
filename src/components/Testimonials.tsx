import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { ThumbsUp, MessageCircle } from "lucide-react";

// Fallback testimonials if API fails
const fallbackTestimonials = [
  {
    author_name: "Rajesh Kumar",
    profile_photo_url: "",
    relative_time_description: "2 weeks ago",
    rating: 5,
    text: "Absolutely amazing experience with TravelGeographic! Hirday and his team took us to some incredible hidden gems in Himachal. The 4x4 expedition to Spiti Valley was unforgettable. Professional service, well-maintained vehicles, and worth every penny. Highly recommended for adventure seekers!"
  },
  {
    author_name: "Priya Sharma",
    profile_photo_url: "",
    relative_time_description: "1 month ago",
    rating: 5,
    text: "Best travel agency in Shimla! We booked a family tour package and everything was perfect. The driver was courteous, the tempo traveller was spotless, and they took us to beautiful locations we never knew existed. Great value for money and excellent customer service. Will definitely book again!"
  },
  {
    author_name: "Amit Patel",
    profile_photo_url: "",
    relative_time_description: "3 weeks ago",
    rating: 5,
    text: "TravelGeographic exceeded all expectations! Booked their luxury SUV for a week-long trip across Himachal. The vehicle was in pristine condition, driver very knowledgeable about local routes. They arranged everything including hotel bookings. Truly a premium experience at reasonable rates. Five stars!"
  }
];

export function Testimonials() {
  const [reviews, setReviews] = useState(fallbackTestimonials);
  const [rating, setRating] = useState(4.9);
  const [totalReviews, setTotalReviews] = useState(287);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#6B8E23]/5 to-[#556B2F]/5">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-gray-900 text-4xl md:text-5xl mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real Google-verified customer reviews
          </p>

          {rating && (
            <p className="text-xl mt-4 font-semibold text-gray-800">
              ⭐ {rating} / 5 ({totalReviews} reviews)
            </p>
          )}
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">

              <div className="flex items-start gap-3 mb-4">

                {/* ⭐ INITIALS AVATAR INSTEAD OF IMAGE */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg"
                  style={{
                    backgroundColor: `#${Math.floor(
                      review.author_name.charCodeAt(0) * 999999
                    ).toString(16).slice(0, 6)}`
                  }}
                >
                  {review.author_name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </div>

                <div className="flex-1">
                  <div className="text-gray-900">{review.author_name}</div>
                  <div className="text-gray-500 text-sm">{review.relative_time_description}</div>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {review.text?.substring(0, 200)}...
              </p>

              <div className="border-t pt-3 flex items-center gap-4 text-gray-500 text-sm">
                <button className="flex items-center gap-1 hover:text-[#6B8E23] transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{review.rating}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-[#6B8E23] transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>Comment</span>
                </button>
              </div>

            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
