import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, CheckCircle } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael R.",
      age: 45,
      location: "California",
      rating: 5,
      text: "VitalityRx completely changed my life. The consultation was professional and discreet, and the medication works perfectly. I wish I had found this service years ago.",
      treatment: "Sildenafil",
      months: 6
    },
    {
      id: 2,
      name: "David L.",
      age: 38,
      location: "Texas",
      rating: 5,
      text: "Fast, affordable, and completely confidential. The online process was so much easier than going to my regular doctor. Highly recommend to anyone struggling with ED.",
      treatment: "Tadalafil",
      months: 4
    },
    {
      id: 3,
      name: "James K.",
      age: 52,
      location: "Florida",
      rating: 5,
      text: "The customer service is outstanding and the medication quality is top-notch. Saved me hundreds compared to my local pharmacy. The delivery is always on time and discreet.",
      treatment: "Avanafil",
      months: 8
    }
  ];

  const stats = [
    { value: "50,000+", label: "Satisfied Patients" },
    { value: "98%", label: "Approval Rate" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "24hr", label: "Avg Response Time" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Patient Reviews
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Real Stories from Real Patients
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. See what thousands of men are saying 
            about their VitalityRx experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card border-border shadow-medium hover:shadow-strong transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Verified Patient
                  </Badge>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Patient Info */}
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        Age {testimonial.age} • {testimonial.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-accent">{testimonial.treatment}</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.months} months
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-medium">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mx-auto">
                <Shield className="h-6 w-6 text-success" />
              </div>
              <h4 className="font-semibold text-foreground">100% Confidential</h4>
              <p className="text-sm text-muted-foreground">
                Your privacy is protected with HIPAA-compliant security and discreet packaging.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground">Licensed Doctors</h4>
              <p className="text-sm text-muted-foreground">
                All consultations are with U.S.-licensed, board-certified physicians.
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                <Star className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground">FDA Approved</h4>
              <p className="text-sm text-muted-foreground">
                Only FDA-approved medications from licensed U.S. pharmacies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;