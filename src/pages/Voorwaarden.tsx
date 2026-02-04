import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { generateWebPageSchema, generateBreadcrumbSchema, generateOrganizationSchema, getFullUrl } from "@/lib/seoConfig";

const Voorwaarden = () => {
  // Schema.org: WebPage
  const webPageSchema = generateWebPageSchema({
    title: "Algemene Voorwaarden",
    description: "Algemene voorwaarden van WebsitesGenereren.nl - Informatieve affiliate website over AI website generatie tools.",
    url: getFullUrl("/voorwaarden"),
    dateModified: "2025-01-30",
    breadcrumbs: [
      { name: "Home", url: getFullUrl("/") },
      { name: "Voorwaarden", url: getFullUrl("/voorwaarden") }
    ]
  });

  // Schema.org: Breadcrumb
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: getFullUrl("/") },
    { name: "Voorwaarden", url: getFullUrl("/voorwaarden") }
  ]);

  // Schema.org: Organization for E-E-A-T
  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      <SEOHead
        title="Algemene Voorwaarden | AI Websites Genereren"
        description="Algemene voorwaarden van AIWebsitesGenereren.nl - Informatieve affiliate website over AI website generatie tools. Transparant over onze werkwijze."
        keywords="algemene voorwaarden, voorwaarden, aiwebsitesgenereren, affiliate, ai website generator"
        canonical="/voorwaarden"
        aiSummary="AIWebsitesGenereren.nl is een affiliate website die AI website generatie tools aanbeveelt. Wij verkopen niets direct maar ontvangen commissie van de tool-ontwikkelaar. De koper betaalt dezelfde prijs."
        aiTopic="Algemene Voorwaarden, Affiliate Disclosure, Website Terms"
        schemas={[webPageSchema, breadcrumbSchema, organizationSchema]}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Main Content */}
        <main className="container py-12 max-w-4xl">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold mb-8">Algemene Voorwaarden</h1>
            
            <p className="text-muted-foreground mb-6">
              Laatst bijgewerkt: Januari 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Over Deze Website</h2>
              <p className="text-foreground/80 leading-relaxed">
                WebsitesGenereren.nl is een <strong>informatieve affiliate website</strong> die content 
                publiceert over AI-gestuurde website generatie tools. Wij verkopen geen producten of 
                diensten rechtstreeks via deze website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Onze Aanbeveling</h2>
              <p className="text-foreground/80 leading-relaxed">
                De tool die wij aanbevelen gebruiken wij <strong>zelf actief</strong>. Onze ervaring is 
                uitgebreid: wij hebben persoonlijk meer dan 50 websites, landingspagina's en andere 
                webprojecten gegenereerd met deze tool.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Onze positieve ervaringen zijn de reden dat wij deze tool promoten. Dit is geen 
                betaalde review - wij delen oprecht wat voor ons werkt.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Actieve Ontwikkeling</h2>
              <p className="text-foreground/80 leading-relaxed">
                De tool die wij aanbevelen is <strong>continu in ontwikkeling</strong>. Het team achter 
                de tool staat open voor suggesties van gebruikers en zet deze regelmatig om in nieuwe 
                functies en verbeteringen.
              </p>
              <div className="bg-muted/50 border border-border rounded-lg p-4 mt-4">
                <p className="text-foreground/80 text-sm">
                  <strong>Belangrijk:</strong> Wanneer een specifieke functie (nog) niet beschikbaar is, 
                  betekent dit niet dat de tool gebrekkig is of niet goed functioneert. De tool wordt 
                  actief doorontwikkeld en nieuwe features worden regelmatig toegevoegd op basis van 
                  gebruikersfeedback.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Affiliate Commissie</h2>
              <p className="text-foreground/80 leading-relaxed">
                Wij ontvangen een commissie van de ontwikkelaar wanneer bezoekers via onze links een 
                aankoop doen. Transparantie hierover:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-foreground/80">
                <li>
                  <strong>Kopers betalen niet meer:</strong> De commissie wordt volledig door de 
                  ontwikkelaar betaald, niet door de koper. De prijs is identiek of u nu via onze 
                  link koopt of rechtstreeks.
                </li>
                <li>
                  <strong>Website onderhoud:</strong> Met deze commissies bekostigen wij het onderhoud 
                  van WebsitesGenereren.nl, inclusief hosting en technische updates.
                </li>
                <li>
                  <strong>Content creatie:</strong> De inkomsten stellen ons in staat om regelmatig 
                  nieuwe, waardevolle content te publiceren over AI website generatie.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Aansprakelijkheid</h2>
              <p className="text-foreground/80 leading-relaxed">
                De informatie op deze website is bedoeld als algemene informatie. Hoewel wij streven 
                naar nauwkeurigheid, kunnen wij niet garanderen dat alle informatie op elk moment 
                volledig actueel is.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Voor de aanschaf van de aanbevolen tool verwijzen wij u naar de officiële website 
                van de ontwikkelaar, waar u de meest actuele voorwaarden, prijzen en functionaliteiten 
                kunt vinden.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Intellectueel Eigendom</h2>
              <p className="text-foreground/80 leading-relaxed">
                Alle content op deze website, inclusief teksten, afbeeldingen en vormgeving, is 
                eigendom van WebsitesGenereren.nl tenzij anders vermeld. Gebruik van deze content 
                zonder toestemming is niet toegestaan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Wijzigingen</h2>
              <p className="text-foreground/80 leading-relaxed">
                Wij behouden ons het recht voor om deze voorwaarden te wijzigen. Wijzigingen worden 
                op deze pagina gepubliceerd met een nieuwe datum van "laatst bijgewerkt".
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-foreground/80 leading-relaxed">
                Voor vragen over deze voorwaarden kunt u contact opnemen via onze community.
              </p>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Voorwaarden;
