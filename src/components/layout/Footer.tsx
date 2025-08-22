import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  Lock,
  CheckCircle
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Treatments",
      links: [
        { name: "Erectile Dysfunction", href: "#treatments" },
        { name: "Sildenafil (Viagra)", href: "#treatments" },
        { name: "Tadalafil (Cialis)", href: "#treatments" },
        { name: "Compare Medications", href: "#treatments" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Our Doctors", href: "#about" },
        { name: "Careers", href: "#contact" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#contact" },
        { name: "Contact Us", href: "#contact" },
        { name: "FAQ", href: "#contact" },
        { name: "Order Status", href: "#contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#contact" },
        { name: "Terms of Service", href: "#contact" },
        { name: "Prescription Policy", href: "#contact" },
        { name: "Refund Policy", href: "#contact" }
      ]
    }
  ];

  const trustBadges = [
    { icon: Shield, text: "HIPAA Compliant" },
    { icon: Lock, text: "SSL Encrypted" },
    { icon: CheckCircle, text: "Licensed Pharmacy" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Signup */}
      <div className="border-b border-primary-light/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2">Stay Informed About Your Health</h3>
              <p className="text-primary-foreground/80">
                Get expert tips, exclusive discounts, and the latest in sexual health.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white text-primary min-w-[250px]"
                type="email"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold">VitalityRx</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Providing accessible, affordable sexual health solutions with privacy and care. 
              Regain confidence with our FDA-approved treatments.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1-800-VITALITY (848-2548)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@vitalityrx.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Licensed in all 50 states<br />Nationwide delivery</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm cursor-pointer"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges & Social */}
      <div className="border-t border-primary-light/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <badge.icon className="h-4 w-4" />
                  <span className="text-primary-foreground/90">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-primary-foreground/80">Follow Us:</span>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-primary hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:text-primary hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-light/20" />

      {/* Copyright & Disclaimers */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-sm">
          <div className="text-primary-foreground/80">
            © {currentYear} VitalityRx. All rights reserved.
          </div>
          <div className="text-primary-foreground/70 text-xs max-w-2xl leading-relaxed">
            <strong>Medical Disclaimer:</strong> This website is for informational purposes only and is not a substitute for professional medical advice. 
            Consult your healthcare provider before starting any treatment. All medications require a valid prescription.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;