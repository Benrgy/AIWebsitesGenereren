import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { generateWebPageSchema, generateBreadcrumbSchema, generateOrganizationSchema, getFullUrl } from "@/lib/seoConfig";

const Privacy = () => {
  // Schema.org: WebPage
  const webPageSchema = generateWebPageSchema({
    title: "Privacybeleid",
    description: "Privacybeleid van WebsitesGenereren.nl - Wij verzamelen geen persoonlijke gegevens van bezoekers.",
    url: getFullUrl("/privacy"),
    dateModified: "2025-01-30",
    breadcrumbs: [
      { name: "Home", url: getFullUrl("/") },
      { name: "Privacy", url: getFullUrl("/privacy") }
    ]
  });

  // Schema.org: Breadcrumb
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: getFullUrl("/") },
    { name: "Privacy", url: getFullUrl("/privacy") }
  ]);

  // Schema.org: Organization for E-E-A-T
  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      <SEOHead
        title="Privacybeleid | WebsitesGenereren.nl"
        description="Privacybeleid van WebsitesGenereren.nl - Wij verzamelen geen persoonlijke gegevens van bezoekers. Transparant over affiliate relaties."
        keywords="privacybeleid, privacy, websitesgenereren, geen cookies, geen tracking"
        canonical="/privacy"
        aiSummary="WebsitesGenereren.nl verzamelt geen persoonlijke gegevens. Geen cookies, geen tracking, geen IP-logging. De site is een affiliate voor een AI website generator tool."
        aiTopic="Privacy, Gegevensbescherming, Affiliate Disclosure"
        schemas={[webPageSchema, breadcrumbSchema, organizationSchema]}
      />

      <div className="min-h-screen bg-background">
        <Header />

        {/* Main Content */}
        <main className="container py-12 max-w-4xl">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold mb-8">Privacybeleid</h1>
            
            <p className="text-muted-foreground mb-6">
              Laatst bijgewerkt: Januari 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Geen Gegevensverzameling</h2>
              <p className="text-foreground/80 leading-relaxed">
                WebsitesGenereren.nl verzamelt <strong>geen persoonlijke gegevens</strong> van bezoekers. 
                Wij gebruiken geen cookies voor tracking, slaan geen IP-adressen op en vragen niet om 
                persoonlijke informatie. Uw privacy is volledig gewaarborgd wanneer u onze website bezoekt.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Wat Wij Doen</h2>
              <p className="text-foreground/80 leading-relaxed">
                Deze website is een informatieve bron over AI-gestuurde website generatie tools. 
                Wij <strong>verkopen niets</strong> op deze site. Onze missie is om onze positieve 
                ervaringen te delen met een tool die wij zelf dagelijks gebruiken.
              </p>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Wij hebben persoonlijk <strong>meer dan 50 websites en landingspagina's</strong> gegenereerd 
                met de tool die wij aanbevelen. Onze aanbevelingen zijn gebaseerd op echte, praktische 
                ervaring en niet op theoretische beoordelingen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Affiliate Relatie</h2>
              <p className="text-foreground/80 leading-relaxed">
                Wij zijn affiliate partner van de tool die wij aanbevelen. Dit betekent dat wij een 
                <strong> commissie ontvangen</strong> wanneer bezoekers via onze links een aankoop doen. 
                Belangrijk om te weten:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-foreground/80">
                <li>Deze commissie wordt <strong>niet door de koper betaald</strong> - de prijs blijft gelijk</li>
                <li>De commissie wordt betaald door de ontwikkelaar van de tool</li>
                <li>Met deze commissies onderhouden wij deze website</li>
                <li>De inkomsten stellen ons in staat om regelmatig nieuwe content te creëren</li>
                <li>Wij kunnen hierdoor de site up-to-date houden met de nieuwste informatie</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Externe Links</h2>
              <p className="text-foreground/80 leading-relaxed">
                Onze website bevat links naar externe websites. Wij zijn niet verantwoordelijk voor 
                het privacybeleid of de inhoud van deze externe sites. Wij raden u aan om het 
                privacybeleid van elke website die u bezoekt te lezen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-foreground/80 leading-relaxed">
                Heeft u vragen over dit privacybeleid? Neem dan contact met ons op via de 
                contactmogelijkheden in onze community.
              </p>
            </section>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Privacy;
