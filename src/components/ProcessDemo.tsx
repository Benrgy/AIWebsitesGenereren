import { useState, useEffect } from "react";
import { FileText, Bot, Rocket, Globe, Check, ArrowRight } from "lucide-react";

const steps = [
  {
    id: 1,
    icon: FileText,
    title: "Formulier Invullen",
    description: "Voer je keyword, taal en contactgegevens in",
    mockContent: (
      <div className="space-y-3 p-4">
        <div className="space-y-1.5">
          <div className="h-3 w-16 bg-muted-foreground/30 rounded" />
          <div className="h-8 bg-primary/20 rounded border border-primary/30 flex items-center px-3">
            <span className="text-xs text-primary font-medium">AI Website Builder</span>
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="h-3 w-20 bg-muted-foreground/30 rounded" />
          <div className="h-8 bg-muted rounded border flex items-center px-3">
            <span className="text-xs text-muted-foreground">Nederlands</span>
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="h-3 w-24 bg-muted-foreground/30 rounded" />
          <div className="h-8 bg-muted rounded border flex items-center px-3">
            <span className="text-xs text-muted-foreground">10 variaties</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    icon: Bot,
    title: "AI Generatie",
    description: "AI maakt unieke content en design",
    mockContent: (
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
            <Bot className="h-3 w-3 text-primary" />
          </div>
          <span className="text-xs text-muted-foreground">Genereren...</span>
        </div>
        <div className="space-y-2">
          <div className="flex gap-2">
            <div className="h-2 bg-primary/40 rounded animate-pulse" style={{ width: "60%" }} />
            <div className="h-2 bg-primary/20 rounded animate-pulse" style={{ width: "30%" }} />
          </div>
          <div className="flex gap-2">
            <div className="h-2 bg-primary/30 rounded animate-pulse" style={{ width: "45%" }} />
            <div className="h-2 bg-primary/50 rounded animate-pulse" style={{ width: "40%" }} />
          </div>
          <div className="flex gap-2">
            <div className="h-2 bg-primary/20 rounded animate-pulse" style={{ width: "70%" }} />
            <div className="h-2 bg-primary/40 rounded animate-pulse" style={{ width: "20%" }} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="h-12 rounded bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20" />
          <div className="h-12 rounded bg-gradient-to-br from-secondary/20 to-secondary/10 border border-secondary/20" />
          <div className="h-12 rounded bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/20" />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    icon: Rocket,
    title: "Auto Deploy",
    description: "Automatisch gedeployed naar GitHub Pages",
    mockContent: (
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 text-xs">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-muted-foreground">Deploying...</span>
        </div>
        <div className="space-y-2 font-mono text-[10px] text-muted-foreground/70">
          <div className="flex items-center gap-1">
            <Check className="h-3 w-3 text-green-500" />
            <span>Building static HTML...</span>
          </div>
          <div className="flex items-center gap-1">
            <Check className="h-3 w-3 text-green-500" />
            <span>Optimizing assets...</span>
          </div>
          <div className="flex items-center gap-1">
            <Check className="h-3 w-3 text-green-500" />
            <span>Generating sitemap...</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            <span>Pushing to GitHub...</span>
          </div>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full animate-pulse" style={{ width: "75%" }} />
        </div>
      </div>
    ),
  },
  {
    id: 4,
    icon: Globe,
    title: "Live Website",
    description: "Direct beschikbaar met gratis URL",
    mockContent: (
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 px-2 py-1 bg-muted rounded text-[10px] font-mono">
          <Globe className="h-3 w-3 text-primary" />
          <span className="text-muted-foreground">https://jouw-site.github.io</span>
        </div>
        <div className="border rounded-lg overflow-hidden bg-background">
          <div className="h-3 bg-muted flex items-center gap-1 px-2">
            <div className="h-1.5 w-1.5 rounded-full bg-destructive/50" />
            <div className="h-1.5 w-1.5 rounded-full bg-yellow-500/50" />
            <div className="h-1.5 w-1.5 rounded-full bg-green-500/50" />
          </div>
          <div className="p-2 space-y-2">
            <div className="h-6 bg-gradient-to-r from-primary/20 to-primary/10 rounded" />
            <div className="h-2 bg-muted rounded w-3/4" />
            <div className="h-2 bg-muted rounded w-1/2" />
            <div className="flex gap-2 pt-1">
              <div className="h-4 w-12 bg-primary/30 rounded text-[8px] flex items-center justify-center text-primary">CTA</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 text-xs text-green-500">
          <Check className="h-3 w-3" />
          <span>Live & SEO-ready!</span>
        </div>
      </div>
    ),
  },
];

export const ProcessDemo = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="relative">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between gap-4 mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <button
                onClick={() => {
                  setActiveStep(index);
                  setIsPlaying(false);
                }}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 w-full ${
                  activeStep === index
                    ? "bg-primary/10 border-2 border-primary shadow-glow"
                    : "bg-card border border-border hover:border-primary/50"
                }`}
              >
                <div
                  className={`h-10 w-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    activeStep === index
                      ? "bg-gradient-primary text-primary-foreground"
                      : activeStep > index
                      ? "bg-green-500/20 text-green-500"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {activeStep > index ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </div>
                <div className="text-left">
                  <p className={`text-sm font-semibold ${activeStep === index ? "text-primary" : ""}`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              </button>
              {index < steps.length - 1 && (
                <ArrowRight
                  className={`h-5 w-5 mx-2 flex-shrink-0 transition-colors duration-300 ${
                    activeStep > index ? "text-green-500" : "text-muted-foreground/30"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Demo Content */}
        <div className="relative h-64 bg-card border rounded-xl overflow-hidden shadow-card">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`absolute inset-0 transition-all duration-500 ${
                activeStep === index
                  ? "opacity-100 translate-x-0"
                  : activeStep > index
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <div className="flex h-full">
                <div className="w-1/2 p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <step.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      Stap {step.id} van 4
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                <div className="w-1/2 p-6 flex items-center justify-center">
                  <div className="w-full max-w-xs bg-background rounded-lg border shadow-lg">
                    {step.mockContent}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="flex justify-center gap-2 mb-6">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveStep(index);
                setIsPlaying(false);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeStep === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        <div className="bg-card border rounded-xl p-6 shadow-card">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`transition-all duration-500 ${
                activeStep === index ? "block animate-fade-in" : "hidden"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Stap {step.id} van 4</p>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{step.description}</p>
              <div className="bg-background rounded-lg border">{step.mockContent}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Play/Pause Control */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
        >
          {isPlaying ? (
            <>
              <div className="flex gap-0.5">
                <div className="h-3 w-1 bg-current rounded" />
                <div className="h-3 w-1 bg-current rounded" />
              </div>
              <span>Pauzeren</span>
            </>
          ) : (
            <>
              <div className="w-0 h-0 border-l-[6px] border-l-current border-y-[4px] border-y-transparent" />
              <span>Afspelen</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};