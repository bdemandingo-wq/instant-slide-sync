import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Ashleigh Craig",
    rating: 5,
    text: "I used Clean Collective to do a deep clean of my home, and I couldn't be happier with the results! From the moment I booked, the communication was professional and prompt. The team arrived on time, fully equipped, and ready to work. They paid attention to every detail—baseboards, windows, inside appliances—nothing was missed. My home looked and smelled amazing afterward. Highly recommend!",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Sallie Sutherland",
    rating: 5,
    text: "I had an emergency due to ductwork installation that went wrong. Tidy Wise in less than 12 hours got two women to my home over a holiday weekend. They were the most efficient, fast, capable young women I've ever met. It really saved my day. Saved my home. PS: Joe sent Roxi & Yesenia!",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Charlie Dubb",
    rating: 5,
    text: "OMGoodness! The ladies cleaned my 30 year, unoccupied house FLAWLESSLY. Sadly, the Florida 'critters' had completely taken the place over, but you'd never know it now! THANK YOU! ❤️ 🌟 🌟 🌟 🌟 🌟",
    date: "3 weeks ago",
  },
];

const GoogleReviews = () => {
  return (
    <section className="py-16 bg-background" aria-label="Customer Reviews">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <a
            href="https://search.google.com/local/reviews?placeid=ChIJ49KSUfgd2YgRH2RMjA6X9jM"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 mb-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-2 py-1"
            aria-label="Read all CLEAN COLLECTIVE reviews on Google (opens in a new tab)"
          >
            <img 
              src="https://www.google.com/favicon.ico" 
              alt="Google" 
              className="w-6 h-6"
              loading="lazy"
              width={24}
              height={24}
            />
            <span className="text-lg font-semibold text-foreground">Google Reviews</span>
          </a>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-secondary text-secondary" aria-hidden="true" />
            ))}
          </div>
          <p className="text-muted-foreground">
            Rated <strong>4.9/5</strong> by over 100+ happy customers in South Florida
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <article 
              key={review.id}
              className="bg-card p-6 rounded-xl shadow-soft border border-border hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold"
                  aria-hidden="true"
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground" itemProp="author">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content={String(review.rating)} />
                <meta itemProp="bestRating" content="5" />
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" aria-hidden="true" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed" itemProp="reviewBody">
                {review.text}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GoogleReviews;
