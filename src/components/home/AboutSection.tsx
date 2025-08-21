import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, Heart } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your health information is protected with HIPAA-compliant security and completely confidential consultations."
    },
    {
      icon: Award,
      title: "Licensed Excellence",
      description: "All consultations are conducted by U.S.-licensed, board-certified physicians with expertise in men's health."
    },
    {
      icon: Users,
      title: "Patient-Centered",
      description: "We focus on providing accessible, affordable healthcare solutions without the stigma or embarrassment."
    },
    {
      icon: Heart,
      title: "Quality Care",
      description: "Only FDA-approved medications from licensed U.S. pharmacies, ensuring the highest safety standards."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About VitalityRx
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Our Mission & Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            VitalityRx is dedicated to providing accessible, affordable, and discreet sexual health solutions. 
            We believe every man deserves to feel confident and maintain his vitality without barriers.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-16 shadow-medium">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Transforming Men's Healthcare Access
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We understand that sexual health issues affect millions of men, yet many avoid seeking help due to 
              embarrassment, cost, or accessibility barriers. VitalityRx eliminates these obstacles by offering 
              professional online consultations, competitive pricing, and discreet home delivery.
            </p>
            <p className="text-muted-foreground">
              Our platform connects you with licensed healthcare providers who specialize in men's health, 
              ensuring you receive personalized, professional care from the comfort and privacy of your home.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-card border-border shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
            <div className="text-muted-foreground">Men Helped</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-muted-foreground">Patient Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-success mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;