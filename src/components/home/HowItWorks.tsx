import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserCheck, Stethoscope, Pill, Truck, ArrowRight } from "lucide-react";
import doctorImage from "@/assets/doctor-consultation.jpg";
import deliveryImage from "@/assets/discreet-delivery.jpg";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: UserCheck,
      title: "Complete Health Assessment",
      description: "Answer a few confidential questions about your medical history and symptoms. Takes only 2-3 minutes.",
      details: "Our HIPAA-compliant assessment covers your health background, current medications, and specific concerns to ensure safe treatment.",
      image: null
    },
    {
      id: 2,
      icon: Stethoscope,
      title: "Online Doctor Consultation",
      description: "Connect with a U.S.-licensed physician for a confidential consultation via secure video or phone.",
      details: "Board-certified doctors available 7 days a week. Most consultations completed within 24 hours.",
      image: doctorImage
    },
    {
      id: 3,
      icon: Pill,
      title: "Get Your Prescription",
      description: "If approved, your prescription is sent directly to our partner pharmacy for immediate processing.",
      details: "All medications are FDA-approved and sourced from licensed U.S. pharmacies. Digital prescriptions ensure fast processing.",
      image: null
    },
    {
      id: 4,
      icon: Truck,
      title: "Discreet Home Delivery",
      description: "Your medication arrives in unmarked, discreet packaging within 2-3 business days nationwide.",
      details: "Free shipping on all orders. Automatic refills available. Track your package every step of the way.",
      image: deliveryImage
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Simple & Secure Process
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            How VitalityRx Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get the treatment you need in four simple steps. Professional, confidential, 
            and delivered right to your door.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="space-y-12">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;
            
            return (
              <div key={step.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 ${isEven ? 'lg:col-start-2' : ''}`}>
                  {/* Step Number & Icon */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-medium">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <Badge 
                        variant="secondary" 
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full p-0 flex items-center justify-center bg-accent text-accent-foreground"
                      >
                        {step.id}
                      </Badge>
                    </div>
                    
                    {/* Arrow for desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block">
                        <ArrowRight className="h-6 w-6 text-muted-foreground" />
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  {/* Step-specific CTA */}
                  {step.id === 1 && (
                    <Button variant="cta" size="lg">
                      Start Assessment Now
                    </Button>
                  )}
                </div>

                {/* Visual */}
                <div className={`${isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  {step.image ? (
                    <Card className="overflow-hidden shadow-medium hover:shadow-strong transition-shadow duration-300">
                      <CardContent className="p-0">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-80 object-cover"
                        />
                      </CardContent>
                    </Card>
                  ) : (
                    <Card className="bg-gradient-to-br from-muted to-muted/50 shadow-medium">
                      <CardContent className="p-12 flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto">
                            <step.icon className="h-12 w-12 text-primary" />
                          </div>
                          <div className="text-muted-foreground">
                            {step.id === 1 && "Secure Health Assessment"}
                            {step.id === 3 && "FDA-Approved Medications"}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-primary">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground">
              Join thousands of men who have regained their confidence. 
              Your first consultation is free for new patients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Begin Free Consultation
              </Button>
              <Button variant="outline" size="xl">
                Speak with Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;