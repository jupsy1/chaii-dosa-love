import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-gradient-hero text-primary-foreground shadow-warm sticky top-0 z-50">
      <div className="max-w-content mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Chaii Dosa Cafe</h1>
              <p className="text-sm opacity-90">Authentic Vegetarian Cuisine</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-turmeric transition-smooth">About</a>
            <a href="#menu" className="hover:text-turmeric transition-smooth">Menu</a>
            <a href="#reviews" className="hover:text-turmeric transition-smooth">Reviews</a>
            <a href="#contact" className="hover:text-turmeric transition-smooth">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4" />
              <span>07311 522700</span>
            </div>
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-turmeric text-foreground hover:bg-accent/90"
              onClick={() => window.open('tel:07311522700')}
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};