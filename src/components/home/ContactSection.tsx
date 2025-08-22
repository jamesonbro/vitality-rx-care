import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
            Contact Us
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our services? Our support team is here to help you 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-border shadow-soft">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg">Phone Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">Speak with our support team</p>
              <p className="font-semibold text-foreground">1-800-VITALITY</p>
              <p className="text-sm text-muted-foreground">(1-800-848-2548)</p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-soft">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg">Email Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">Send us your questions</p>
              <p className="font-semibold text-foreground">support@vitalityrx.com</p>
              <p className="text-sm text-muted-foreground">Response within 2 hours</p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-soft">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg">Live Chat</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">Instant assistance available</p>
              <Button variant="outline" className="w-full">
                Start Chat
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input 
                    placeholder="First Name" 
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Last Name" 
                    className="bg-muted border-border"
                  />
                </div>
              </div>
              <Input 
                placeholder="Email Address" 
                type="email"
                className="bg-muted border-border"
              />
              <Input 
                placeholder="Phone Number (Optional)" 
                type="tel"
                className="bg-muted border-border"
              />
              <Textarea 
                placeholder="How can we help you?" 
                rows={5}
                className="bg-muted border-border"
              />
              <Button className="w-full bg-accent hover:bg-accent-dark">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Frequently Asked Questions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Do I need insurance?</h4>
                <p className="text-muted-foreground text-sm">
                  No insurance is required. We offer affordable pricing and discount programs 
                  to make treatment accessible to everyone.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">How discreet is the delivery?</h4>
                <p className="text-muted-foreground text-sm">
                  All orders are shipped in plain, unmarked packaging with no indication 
                  of the contents or our company name.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Is a prescription required?</h4>
                <p className="text-muted-foreground text-sm">
                  Yes, all medications require a valid prescription. Our licensed physicians 
                  can provide online consultations starting at $0 for new patients.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">What are your support hours?</h4>
                <p className="text-muted-foreground text-sm flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  24/7 support available via phone, email, and live chat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;