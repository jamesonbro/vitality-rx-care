import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Truck, Clock } from "lucide-react";
import heroImage from "@/assets/hero-confidence.jpg";

const HeroSection = () => {
  const trustPoints = [
    { icon: CheckCircle, text: "FDA-Approved Medications" },
    { icon: Shield, text: "100% Confidential & Secure" },
    { icon: Truck, text: "Discreet Home Delivery" },
    { icon: Clock, text: "24/7 Online Consultations" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-background to-muted py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm">
              <Shield className="h-4 w-4" />
              Licensed in all 50 states
            </Badge>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
                Regain Confidence with 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Affordable ED Treatments</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Start your journey back to confidence with FDA-approved medications starting at just 
                <span className="font-semibold text-accent"> $2/month</span>. 
                Discreet, professional, and delivered to your door.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="flex-1 sm:flex-initial">
                Get Started Now
              </Button>
              <Button variant="outline" size="xl" className="flex-1 sm:flex-initial">
                How It Works
              </Button>
            </div>

            {/* Promotional Offer */}
            <div className="bg-accent-light/20 border border-accent/30 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  New Patient Special
                </Badge>
              </div>
              <p className="text-sm font-medium">
                <span className="text-accent font-bold">Free consultation</span> for first-time patients. 
                No insurance needed. Start today and save up to 80% on your medications.
              </p>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                    <point.icon className="h-4 w-4 text-success" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{point.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <img 
                src={heroImage} 
                alt="Confident professional man representing restored confidence and vitality"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Overlay with stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-strong">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">30M+</div>
                      <div className="text-xs text-muted-foreground">Men Affected by ED</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">80%</div>
                      <div className="text-xs text-muted-foreground">Average Savings</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-success">24/7</div>
                      <div className="text-xs text-muted-foreground">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating trust badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-strong border border-border">
              <div className="text-center">
                <Shield className="h-8 w-8 text-success mx-auto mb-2" />
                <div className="text-sm font-semibold">HIPAA</div>
                <div className="text-xs text-muted-foreground">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;