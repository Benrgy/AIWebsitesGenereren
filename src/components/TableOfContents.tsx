import { useState, useEffect } from "react";
import { List } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Section {
  heading: string;
}

interface TableOfContentsProps {
  sections: Section[];
  className?: string;
}

const TableOfContents = ({ sections, className }: TableOfContentsProps) => {
  const [activeSection, setActiveSection] = useState<string>("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = [
      ...sections.map((_, idx) => `sectie-${idx + 1}`),
      'praktische-tips',
      'veelgestelde-vragen'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // Offset for header

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const allItems = [
    ...sections.map((section, idx) => ({
      id: `sectie-${idx + 1}`,
      label: section.heading,
      number: idx + 1
    })),
    {
      id: 'praktische-tips',
      label: 'Praktische Tips',
      number: sections.length + 1
    },
    {
      id: 'veelgestelde-vragen',
      label: 'Veelgestelde Vragen',
      number: sections.length + 2
    }
  ];

  return (
    <Card className={cn("border-border/50", className)}>
      <CardContent className="p-4">
        <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-xs uppercase tracking-wide">
          <List className="h-4 w-4 text-primary" />
          Inhoudsopgave
        </h2>
        <nav>
          <ol className="space-y-1.5">
            {allItems.map((item) => (
              <li key={item.id}>
                <button 
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "flex items-center gap-2 text-left w-full py-1 px-2 rounded-md transition-all duration-200",
                    activeSection === item.id
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <span className={cn(
                    "text-xs font-medium w-4 shrink-0",
                    activeSection === item.id ? "text-primary" : "text-primary/60"
                  )}>
                    {item.number}.
                  </span>
                  <span className="text-sm leading-tight">{item.label}</span>
                </button>
              </li>
            ))}
          </ol>
        </nav>
      </CardContent>
    </Card>
  );
};

export default TableOfContents;
