import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const CONSENT_KEY = "cookie-consent";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Small delay to prevent flash on page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border border-border rounded-xl shadow-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Icon & Text */}
            <div className="flex items-start gap-3 flex-1">
              <div className="hidden sm:flex h-10 w-10 rounded-full bg-primary/10 items-center justify-center flex-shrink-0">
                <Cookie className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  🍪 Cookies & Privacy
                </h3>
                <p className="text-sm text-muted-foreground">
                  Wij gebruiken <strong>geen tracking cookies</strong> en verzamelen geen persoonlijke gegevens. 
                  Deze site gebruikt alleen functionele cookies voor de beste ervaring. 
                  Lees meer in ons{" "}
                  <Link 
                    to="/privacy" 
                    className="text-primary hover:underline"
                  >
                    privacybeleid
                  </Link>.
                </p>
              </div>
            </div>
            
            {/* Buttons */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleDecline}
                className="flex-1 sm:flex-none"
              >
                Weigeren
              </Button>
              <Button 
                size="sm"
                onClick={handleAccept}
                className="flex-1 sm:flex-none bg-primary hover:bg-primary/90"
              >
                Accepteren
              </Button>
            </div>
            
            {/* Close button (mobile) */}
            <button
              onClick={handleDecline}
              className="absolute top-2 right-2 sm:hidden p-1 text-muted-foreground hover:text-foreground"
              aria-label="Sluiten"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
