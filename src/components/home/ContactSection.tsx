import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Clock, MessageCircle, Shield } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      details: "1-800-VITALITY (1-800-848-2548)",
      availability: "Available 24/7",
      description: "Speak directly with our healthcare support team"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: "support@vitalityrx.com",
      availability: "Response within 4 hours",
      description: "Send us detailed questions or concerns"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      details: "Available on this page",
      availability: "24/7 instant support",
      description: "Get immediate answers to your questions"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Contact & Support
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our dedicated support team is here to help you with any questions about 
            your treatment, orders, or general inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                How to Reach Us
              </h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="bg-card border-border shadow-medium">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <method.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">
                            {method.title}
                          </h4>
                          <p className="text-lg font-medium text-accent mb-1">
                            {method.details}
                          </p>
                          <p className="text-sm text-success mb-2">
                            {method.availability}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Privacy Notice */}
            <Card className="bg-accent-light/20 border border-accent/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Your Privacy is Protected
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      All communications are HIPAA-compliant and confidential. 
                      We never share your personal health information with third parties.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border shadow-strong">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Send Us a Message
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 4 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name *
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name *
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email Address *
                </label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone Number (Optional)
                </label>
                <Input type="tel" placeholder="(555) 123-4567" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Subject *
                </label>
                <Input placeholder="How can we help you?" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message *
                </label>
                <Textarea 
                  placeholder="Please describe your question or concern..."
                  className="min-h-[120px] resize-none"
                />
              </div>
              
              <Button className="w-full" size="lg">
                Send Message
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-muted-foreground mb-8">
              Quick answers to common questions about our services and treatments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline">Do I need insurance?</Button>
              <Button variant="outline">How does delivery work?</Button>
              <Button variant="outline">Is it really confidential?</Button>
              <Button variant="outline">What are the side effects?</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;