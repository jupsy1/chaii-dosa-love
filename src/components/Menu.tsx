import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const menuData = {
  dosas: [
    { name: "Plain Dosa", price: "£6.50", description: "Crispy golden crepe served with chutneys and sambar" },
    { name: "Masala Dosa", price: "£7.50", description: "Dosa filled with spiced potato masala", popular: true },
    { name: "Mysore Masala Dosa", price: "£8.00", description: "Spicy chutney dosa with potato filling" },
    { name: "Cheese Dosa", price: "£8.50", description: "Crispy dosa filled with melted cheese" },
    { name: "Paneer Dosa", price: "£9.00", description: "Dosa stuffed with spiced cottage cheese" },
    { name: "Ghee Roast Dosa", price: "£7.00", description: "Crispy dosa roasted in pure ghee" }
  ],
  southIndian: [
    { name: "Idli (4 pieces)", price: "£5.50", description: "Steamed rice cakes served with chutneys and sambar" },
    { name: "Medu Vada (3 pieces)", price: "£6.00", description: "Crispy lentil donuts with chutneys" },
    { name: "Uttapam", price: "£7.50", description: "Thick pancake with onions and tomatoes" },
    { name: "Rava Dosa", price: "£8.00", description: "Crispy semolina crepe with vegetables", popular: true },
    { name: "Sambhar Vada", price: "£7.00", description: "Vada soaked in flavorful sambhar" },
    { name: "Rasam", price: "£4.50", description: "Tangy South Indian soup with spices" }
  ],
  punjabi: [
    { name: "Chole Bhature", price: "£9.50", description: "Spicy chickpeas with fluffy fried bread", popular: true },
    { name: "Rajma Chawal", price: "£8.50", description: "Kidney bean curry with basmati rice" },
    { name: "Dal Makhani", price: "£8.00", description: "Creamy black lentils in rich gravy" },
    { name: "Paneer Butter Masala", price: "£9.00", description: "Cottage cheese in creamy tomato gravy" },
    { name: "Aloo Gobi", price: "£7.50", description: "Spiced potatoes and cauliflower curry" },
    { name: "Sarson Ka Saag", price: "£8.50", description: "Traditional mustard greens with makki roti" }
  ],
  beverages: [
    { name: "Masala Chai", price: "£2.50", description: "Traditional spiced tea", popular: true },
    { name: "Filter Coffee", price: "£3.00", description: "South Indian style coffee" },
    { name: "Sweet Lassi", price: "£3.50", description: "Refreshing yogurt drink" },
    { name: "Mango Lassi", price: "£4.00", description: "Creamy mango yogurt drink" },
    { name: "Buttermilk", price: "£3.00", description: "Spiced yogurt drink" },
    { name: "Fresh Lime Water", price: "£2.50", description: "Refreshing lime drink" }
  ]
};

export const Menu = () => {
  return (
    <section id="menu" className="py-section bg-background">
      <div className="max-w-content mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Menu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover authentic flavors from South India and Punjab, 
            made fresh daily with traditional recipes and premium ingredients.
          </p>
        </div>

        <Tabs defaultValue="dosas" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
            <TabsTrigger value="dosas" className="text-lg">Dosas</TabsTrigger>
            <TabsTrigger value="southIndian" className="text-lg">South Indian</TabsTrigger>
            <TabsTrigger value="punjabi" className="text-lg">Punjabi</TabsTrigger>
            <TabsTrigger value="beverages" className="text-lg">Beverages</TabsTrigger>
          </TabsList>

          <TabsContent value="dosas" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData.dosas.map((item, index) => (
                <Card key={index} className="hover:shadow-warm transition-smooth bg-card border-0 shadow-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      {item.popular && (
                        <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                      )}
                    </div>
                    <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">{item.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="southIndian" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData.southIndian.map((item, index) => (
                <Card key={index} className="hover:shadow-warm transition-smooth bg-card border-0 shadow-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      {item.popular && (
                        <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                      )}
                    </div>
                    <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">{item.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="punjabi" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData.punjabi.map((item, index) => (
                <Card key={index} className="hover:shadow-warm transition-smooth bg-card border-0 shadow-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      {item.popular && (
                        <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                      )}
                    </div>
                    <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">{item.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="beverages" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuData.beverages.map((item, index) => (
                <Card key={index} className="hover:shadow-warm transition-smooth bg-card border-0 shadow-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      {item.popular && (
                        <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                      )}
                    </div>
                    <CardDescription className="text-muted-foreground">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary">{item.price}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};