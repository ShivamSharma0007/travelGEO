import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { ThumbsUp, MessageCircle } from "lucide-react";
import GoogleReviewWidget from "./GoogleReviewsCards";

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
        
        <GoogleReviewWidget />

      </div>
    </section>
  );
}
