import { MapPin, Phone, Clock, Heart, Facebook, Zap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="max-w-content mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Chaii Dosa Cafe</h3>
            <p className="text-sm opacity-90 mb-4">
              Authentic vegetarian South Indian & Punjabi cuisine in the heart of Walsall. 
              Fresh ingredients, bold spices, traditional recipes.
            </p>
            <div className="flex items-center space-x-2 text-turmeric">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm">100% Vegetarian</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  91-92 Ablewell Street<br/>
                  Walsall WS1 2EU
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:07311522700" className="hover:text-turmeric transition-smooth">
                  07311 522700
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  Tue-Sun: 11:00 AM - 9:00 PM<br/>
                  <span className="text-destructive">Monday: Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-turmeric rounded-full"></span>
                <span>Dine-In Service</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-turmeric rounded-full"></span>
                <span>Takeaway Orders</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-turmeric rounded-full"></span>
                <span>Fresh Daily Preparation</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-turmeric rounded-full"></span>
                <span>Authentic Recipes</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-turmeric rounded-full"></span>
                <span>Family Friendly</span>
              </li>
            </ul>
            
            <div>
              <h5 className="font-semibold mb-3">Follow Us</h5>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61580341651258" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-turmeric hover:text-accent-foreground transition-smooth"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@chaiidosa?lang=en-GB" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:bg-turmeric hover:text-accent-foreground transition-smooth"
                >
                  <Zap className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 Chaii Dosa Cafe. All rights reserved. | 
            Authentic South Indian & Punjabi Vegetarian Cuisine in Walsall
          </p>
          <p className="text-xs opacity-60 mt-2">
            91-92 Ablewell Street, Walsall WS1 2EU | Mobile: 07311 522700
          </p>
        </div>
      </div>
    </footer>
  );
};