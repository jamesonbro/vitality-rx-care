import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, Clock } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Your health information is protected with the highest security standards."
    },
    {
      icon: Users,
      title: "Licensed Doctors",
      description: "Board-certified physicians provide personalized care and consultations."
    },
    {
      icon: Award,
      title: "FDA-Approved Medications",
      description: "All medications are sourced from licensed pharmacies with strict quality control."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our dedicated support team is available around the clock to help you."
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
            About VitalityRx
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Your Trusted Partner in Sexual Health
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            VitalityRx is committed to providing accessible, affordable sexual health solutions 
            with complete privacy and professional care. Our mission is to help you regain confidence 
            and improve your quality of life through safe, effective treatments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-background rounded-xl shadow-soft border border-border">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-background rounded-2xl p-8 border border-border shadow-soft">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Team</h3>
              <p className="text-muted-foreground mb-6">
                Our team consists of board-certified doctors, licensed pharmacists, and healthcare 
                professionals dedicated to providing the highest quality care. We understand the 
                sensitive nature of sexual health and maintain the utmost discretion and professionalism.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Board-certified physicians</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Licensed pharmacists</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Patient care specialists</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Our Promise</h3>
              <p className="text-muted-foreground mb-6">
                We promise to provide safe, effective, and affordable treatments while maintaining 
                your privacy every step of the way. Your health and satisfaction are our top priorities.
              </p>
              <Button className="bg-accent hover:bg-accent-dark">
                Learn More About Our Process
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;