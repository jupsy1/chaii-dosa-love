import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "Absolutely amazing! The masala dosa was perfectly crispy and the chutneys were so flavorful. Best South Indian food in Walsall!",
    date: "2 weeks ago"
  },
  {
    name: "Rajesh Patel", 
    rating: 5,
    text: "Authentic taste that reminds me of home. The chai is exceptional and the staff is so friendly. Highly recommend!",
    date: "1 month ago"
  },
  {
    name: "Emily Williams",
    rating: 5,
    text: "Great vegetarian options! The chole bhature was incredible. Clean restaurant, reasonable prices, will definitely be back.",
    date: "3 weeks ago"
  },
  {
    name: "Mohammed Ali",
    rating: 5,
    text: "Fresh, hot, and delicious food every time. The paneer butter masala is my favorite. Excellent service too!",
    date: "1 week ago"
  },
  {
    name: "Lisa Thompson",
    rating: 5,
    text: "Hidden gem in Walsall! The dosas are huge and so tasty. Love the variety of chutneys. Perfect for takeaway too.",
    date: "2 months ago"
  },
  {
    name: "Priya Singh",
    rating: 5,
    text: "Finally, authentic Indian vegetarian food in Walsall! The filter coffee takes me back to Chennai. Fantastic!",
    date: "3 weeks ago"
  }
];

export const Reviews = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-turmeric fill-turmeric' : 'text-muted'}`} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-section bg-gradient-card">
      <div className="max-w-content mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our happy customers 
            who love our authentic flavors and warm hospitality.
          </p>
          
          <div className="flex items-center justify-center space-x-4 mt-8">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {renderStars(5)}
              </div>
              <span className="text-2xl font-bold text-primary">5.0</span>
            </div>
            <div className="text-muted-foreground">
              <span className="font-semibold">4.9/5</span> on Google Reviews
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-card border-0 shadow-card hover:shadow-warm transition-smooth relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-muted-foreground leading-relaxed pl-6 italic">
                    "{review.text}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Experience the authentic flavors yourself!
          </p>
          <div className="bg-primary/10 rounded-xl p-6 inline-block">
            <p className="text-sm text-muted-foreground">
              <strong>Visit us at:</strong> 91-92 Ablewell Street, Walsall WS1 2EU<br/>
              <strong>Call us:</strong> 07311 522700 | <strong>Open:</strong> Tuesday-Sunday 11am-9pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};