import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Zap, Award } from "lucide-react";
import { featuredProducts } from "@/data/products";
import medicationImage from "@/assets/medication-pills.jpg";

const FeaturedProducts = () => {
  const getIconForProduct = (name: string) => {
    if (name.includes("Sildenafil")) return Clock;
    if (name.includes("Tadalafil")) return Zap;
    if (name.includes("Avanafil")) return Award;
    return Clock;
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Featured Treatments
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            FDA-Approved ED Medications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose from proven treatments trusted by millions of men. All medications require 
            a valid prescription from our licensed healthcare providers.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => {
            const ProductIcon = getIconForProduct(product.name);
            
            return (
              <Card key={product.id} className="relative group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-border bg-card">
                {/* Savings Badge */}
                <div className="absolute -top-3 -right-3 z-10">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground shadow-medium">
                    {product.savings}
                  </Badge>
                </div>

                <CardHeader className="space-y-4">
                  {/* Product Icon & Image */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <ProductIcon className="h-6 w-6 text-primary" />
                    </div>
                    <img 
                      src={medicationImage} 
                      alt={product.name}
                      className="w-20 h-16 object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Name & Rating */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Onset:</span>
                      <div className="font-medium">{product.onsetTime}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <div className="font-medium">{product.duration}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description.split('.')[0]}.
                  </p>

                  {/* Dosage Options */}
                  <div>
                    <span className="text-sm text-muted-foreground">Available doses:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {product.dosageOptions.slice(0, 3).map((dose) => (
                        <Badge key={dose} variant="outline" className="text-xs">
                          {dose}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex-col space-y-4">
                  {/* Pricing */}
                  <div className="w-full">
                    <div className="flex items-baseline justify-between mb-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-primary">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-sm text-muted-foreground">per pill</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm line-through text-muted-foreground">
                          ${product.discountedPrice.toFixed(2)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-accent font-medium">
                      Subscription: ${product.subscriptionPrice}/month
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 w-full">
                    <Button variant="cta" size="sm" className="flex-1">
                      Get Prescription
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Learn More
                    </Button>
                  </div>

                  {/* Trust Signal */}
                  <div className="text-center w-full">
                    <p className="text-xs text-muted-foreground">
                      ✓ Requires valid prescription • ✓ Same-day approval available
                    </p>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Treatments
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;