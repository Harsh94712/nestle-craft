import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PieChart, Megaphone, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Promote Section */}
          <div className="space-y-6">
            <div className="bg-footer-card rounded-2xl p-8 space-y-6">
              {/* Header with logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10">
                  <div className="w-10 h-10 rounded-full bg-footer-accent flex items-center justify-center">
                    <PieChart className="w-6 h-6 text-footer-card" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-footer-foreground">Promote</h3>
              </div>

              {/* Illustration */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                    <Megaphone className="w-10 h-10 text-white transform rotate-12" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-footer-accent rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-footer-card rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Subscribe Section */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-footer-foreground">Subscribe now</h4>
                <p className="text-footer-muted text-sm leading-relaxed">
                  Industry's standard from dummy<br />
                  and make a type book.
                </p>
                
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter Your Email..."
                    className="bg-footer-input border-footer-border text-footer-input-foreground placeholder:text-footer-muted focus:border-footer-accent"
                  />
                  <Button className="w-full bg-footer-accent text-footer-card hover:bg-footer-accent/90 font-medium">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-5 h-5 text-emerald-400" />
                <h4 className="text-lg font-medium text-footer-foreground">Get in touch with</h4>
              </div>
              <div className="space-y-3">
                <p className="text-footer-accent text-xl font-medium">+1 917 000 1212</p>
                <p className="text-footer-muted">nextlevel@marketing.com</p>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <h4 className="text-lg font-medium text-footer-foreground">Location</h4>
              </div>
              <div className="space-y-3">
                <p className="text-footer-muted leading-relaxed">
                  10 Suna House 65 Rivington Street<br />
                  London, EC2A 3QQ
                </p>
                <a href="#" className="text-footer-accent hover:underline text-sm">
                  location
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Pages */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <h5 className="text-footer-foreground font-medium">Pages</h5>
            </div>
            <ul className="space-y-2">
              {["Home", "About", "Blog", "Pricing Single", "Contact", "Services"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-footer-muted hover:text-footer-foreground transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility Pages */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <h5 className="text-footer-foreground font-medium">Utility Pages</h5>
            </div>
            <ul className="space-y-2">
              {["Styleguide", "404 Not Found", "Password Protected", "Licenses", "Changelog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-footer-muted hover:text-footer-foreground transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follows */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-4 bg-emerald-500 rounded"></div>
              <h5 className="text-footer-foreground font-medium">Follows</h5>
            </div>
            <ul className="space-y-2">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-footer-muted hover:text-footer-foreground transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-footer-border pt-6">
          <p className="text-footer-muted text-sm text-center">
            Copyright © Nextlevel | Designed by VictorFlow - Powered by Webflow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;