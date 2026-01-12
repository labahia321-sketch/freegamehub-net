import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCategories } from "@/lib/useStaticData";

export default function ConsumerHealthPrivacy() {
  const { data: categories = [] } = useCategories();

  return (
    <div className="min-h-screen flex flex-col theme-transition">
      <Header categories={categories} />
      
      <main className="flex-1 pt-20 pb-8">
        <div className="max-w-3xl mx-auto px-4">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold mb-2" data-testid="text-health-title">Consumer Health Privacy</h1>
            <p className="text-muted-foreground mb-8" data-testid="text-health-date">Last Updated: January 11, 2026</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Our Commitment to Health Data Privacy</h2>
              <p className="text-muted-foreground">
                FreeGameHub is committed to protecting your privacy, including any information that could be considered health-related. This Consumer Health Privacy statement provides transparency about our practices regarding health data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">We Do NOT Collect Health Data</h2>
              <p className="text-muted-foreground mb-4">
                <strong>FreeGameHub does not collect, store, process, or use any consumer health data.</strong> This includes but is not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Medical records or health history</li>
                <li>Fitness or exercise data</li>
                <li>Mental health information</li>
                <li>Genetic or biometric information</li>
                <li>Health insurance information</li>
                <li>Prescription or medication information</li>
                <li>Information about physical or mental health conditions</li>
                <li>Data from health-related apps or devices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">No Health Data for Advertising</h2>
              <p className="text-muted-foreground">
                We do NOT use any health-related data to personalize advertising or content. Our advertising partners are not provided with any health information because we simply do not collect it. Ad personalization is based solely on general browsing behavior, device information, and interests unrelated to health.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Nature of Our Service</h2>
              <p className="text-muted-foreground">
                FreeGameHub is an entertainment platform that provides access to online games. Our Service has no health, fitness, medical, or wellness features. We do not offer health tracking, medical advice, fitness monitoring, or any health-related services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Regulatory Compliance</h2>
              <p className="text-muted-foreground mb-4">
                Because we do not collect health data, specific health privacy regulations such as HIPAA (Health Insurance Portability and Accountability Act) do not directly apply to our operations. However, we remain committed to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Complying with all applicable privacy laws, including GDPR and CCPA</li>
                <li>Maintaining transparency about our data practices</li>
                <li>Respecting user privacy rights</li>
                <li>Following state-specific consumer health privacy laws where applicable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Washington My Health My Data Act Compliance</h2>
              <p className="text-muted-foreground">
                Under the Washington My Health My Data Act and similar state laws, we confirm that FreeGameHub does not collect, share, or sell consumer health data. If you are a Washington state resident or reside in a state with similar health privacy protections, please be assured that your health information is not at risk through your use of our Service, as we do not collect such information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Even though we do not collect health data, you maintain full rights regarding any personal information we may collect (such as device identifiers or usage data). These rights include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Right to know what data is collected</li>
                <li>Right to request deletion of your data</li>
                <li>Right to opt out of data sale (we do not sell personal data)</li>
                <li>Right to access your personal information</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                For more information about your general privacy rights, please see our{" "}
                <a href="/your-privacy-choices" className="text-primary hover:underline">Your Privacy Choices</a> page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                If our practices regarding health data change in the future (which we do not anticipate), we will update this Consumer Health Privacy statement and notify users as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about our health data practices, please contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Email:</strong> <a href="mailto:labahia321@gmail.com" className="text-primary hover:underline">labahia321@gmail.com</a>
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer categories={categories} />
    </div>
  );
}
