import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";
import heroImage from "@/assets/hero-dosa-chai.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent"></div>
      </div>
      
      <div className="relative max-w-content mx-auto px-4 py-section">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Authentic
            <span className="text-primary block animate-float">
              South Indian
            </span>
            <span className="text-curry-red">& Punjabi</span>
            <span className="block text-3xl md:text-4xl mt-2 text-muted-foreground">Cuisine</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Bold spices, fresh ingredients, and traditional recipes crafted with love. 
            Experience the authentic flavors of India at Chaii Dosa Cafe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:shadow-glow transition-smooth text-lg px-8 py-4"
              onClick={() => {
                const menuSection = document.getElementById('menu');
                menuSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Our Menu
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 border-2 border-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open('https://wa.me/447311522700?text=Hi! I would like to place a takeaway order from Chaii Dosa Cafe.', '_blank')}
            >
              Order Takeaway
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-card">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">Address</p>
                <p className="text-sm text-muted-foreground">91-92 Ablewell St, Walsall WS1 2EU</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-card">
              <Phone className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">Phone</p>
                <p className="text-sm text-muted-foreground">07311 522700</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-card">
              <Clock className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">Hours</p>
                <p className="text-sm text-muted-foreground">Tue-Sun: 11am-9pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};