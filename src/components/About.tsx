import { Leaf, Award, Users, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-section bg-gradient-card">
      <div className="max-w-content mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-primary">Chaii Dosa Cafe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We bring you the authentic flavors of South India and Punjab, 
            carefully crafted with traditional recipes passed down through generations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="prose prose-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Located in the heart of Walsall, Chaii Dosa Cafe is your destination for 
                authentic vegetarian South Indian and Punjabi cuisine. We pride ourselves 
                on using fresh ingredients and traditional cooking methods to deliver 
                the bold, vibrant flavors that make Indian cuisine so beloved worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From crispy golden dosas to aromatic chai, every dish is prepared with 
                passion and attention to detail. Whether you're dining in or ordering 
                takeaway, we ensure each meal is a delightful culinary journey.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-card rounded-xl shadow-card hover:shadow-warm transition-smooth">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-semibold mb-2">100% Vegetarian</h4>
              <p className="text-sm text-muted-foreground">Pure vegetarian cuisine crafted with love</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl shadow-card hover:shadow-warm transition-smooth">
              <div className="w-16 h-16 bg-curry-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Authentic Recipes</h4>
              <p className="text-sm text-muted-foreground">Traditional methods & original flavors</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl shadow-card hover:shadow-warm transition-smooth">
              <div className="w-16 h-16 bg-turmeric rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Family Friendly</h4>
              <p className="text-sm text-muted-foreground">Welcoming atmosphere for all ages</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-xl shadow-card hover:shadow-warm transition-smooth">
              <div className="w-16 h-16 bg-mint rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Fresh Ingredients</h4>
              <p className="text-sm text-muted-foreground">Quality ingredients sourced daily</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};