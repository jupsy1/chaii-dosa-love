import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Car, Utensils, Facebook, Zap } from "lucide-react";

const hours = [
  { day: "Monday", time: "Closed", closed: true },
  { day: "Tuesday", time: "11:00 AM - 9:00 PM" },
  { day: "Wednesday", time: "11:00 AM - 9:00 PM" },
  { day: "Thursday", time: "11:00 AM - 9:00 PM" },
  { day: "Friday", time: "11:00 AM - 9:00 PM" },
  { day: "Saturday", time: "11:00 AM - 9:00 PM" },
  { day: "Sunday", time: "11:00 AM - 9:00 PM" }
];

export const Contact = () => {
  return (
    <section id="contact" className="py-section bg-background">
      <div className="max-w-content mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Visit <span className="text-primary">Us Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Located in the heart of Walsall, we're ready to serve you 
            authentic Indian cuisine with warm hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span>Address</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-4">
                  91-92 Ablewell Street<br/>
                  Walsall WS1 2EU<br/>
                  United Kingdom
                </p>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.open('https://maps.google.com/?q=91-92+Ablewell+St,+Walsall+WS1+2EU', '_blank')}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-primary" />
                  <span>Contact</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Mobile</p>
                    <a href="tel:07311522700" className="text-lg text-primary hover:text-primary/80 transition-smooth">
                      07311 522700
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold">Landline</p>
                    <p className="text-muted-foreground">Available at restaurant</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Card className="flex-1 bg-turmeric/10 border-turmeric/20">
                <CardContent className="flex items-center space-x-3 p-6">
                  <Utensils className="w-8 h-8 text-turmeric" />
                  <div>
                    <p className="font-semibold">Dine-In</p>
                    <p className="text-sm text-muted-foreground">Comfortable seating available</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="flex-1 bg-mint/10 border-mint/20">
                <CardContent className="flex items-center space-x-3 p-6">
                  <Car className="w-8 h-8 text-mint" />
                  <div>
                    <p className="font-semibold">Takeaway</p>
                    <p className="text-sm text-muted-foreground">Quick & convenient pickup</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Hours */}
          <div>
            <Card className="bg-card border-0 shadow-card h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <span>Opening Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hours.map((hour, index) => (
                    <div key={index} className={`flex justify-between items-center py-3 border-b border-border/50 last:border-0 ${hour.closed ? 'text-muted-foreground' : ''}`}>
                      <span className="font-medium">{hour.day}</span>
                      <span className={hour.closed ? 'text-destructive font-medium' : 'text-primary font-semibold'}>
                        {hour.time}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Special Note</h4>
                  <p className="text-sm text-muted-foreground">
                    We're closed on Mondays to ensure our ingredients are fresh 
                    and our team is well-rested to serve you better!
                  </p>
                </div>
                
                <div className="mt-6 space-y-3">
                  <Button 
                    className="w-full bg-gradient-hero hover:shadow-glow transition-smooth"
                    onClick={() => window.open('tel:07311522700')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call to Order
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open('https://maps.google.com/?q=91-92+Ablewell+St,+Walsall+WS1+2EU', '_blank')}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Find Us on Maps
                  </Button>
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <h5 className="font-semibold text-primary mb-3">Follow Us Online</h5>
                  <div className="flex space-x-3">
                    <a 
                      href="https://www.facebook.com/profile.php?id=61580341651258" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center py-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-smooth text-sm font-medium"
                    >
                      <Facebook className="w-4 h-4 mr-2" />
                      Facebook
                    </a>
                    <a 
                      href="https://www.tiktok.com/@chaiidosa?lang=en-GB" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center py-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-smooth text-sm font-medium"
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      TikTok
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};