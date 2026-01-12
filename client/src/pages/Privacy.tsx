import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCategories } from "@/lib/useStaticData";

export default function Privacy() {
  const { data: categories = [] } = useCategories();

  return (
    <div className="min-h-screen flex flex-col theme-transition">
      <Header categories={categories} />
      
      <main className="flex-1 pt-20 pb-8">
        <div className="max-w-3xl mx-auto px-4">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold mb-2" data-testid="text-privacy-title">Privacy & Cookies Policy</h1>
            <p className="text-muted-foreground mb-8" data-testid="text-privacy-date">Last Updated: January 11, 2026</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Welcome to FreeGameHub ("we," "our," or "us"). This Privacy & Cookies Policy explains how we collect, use, disclose, and safeguard your information when you visit our website freegamehub.net and use our mobile application (collectively, the "Service"). By using the Service, you consent to the practices described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect only anonymous, non-personally identifiable information to provide and improve our Service:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li><strong>Device Information:</strong> Device type, operating system, browser type, screen resolution, and language preferences.</li>
                <li><strong>Usage Data:</strong> Pages visited, games played, time spent on the Service, and interaction patterns.</li>
                <li><strong>IP Address:</strong> Collected for analytics and fraud prevention (anonymized where possible).</li>
                <li><strong>Cookies and Similar Technologies:</strong> Used to remember preferences and deliver relevant advertising.</li>
              </ul>
              <p className="text-muted-foreground">
                We do NOT collect personal information such as your name, email address, phone number, or physical address unless you voluntarily provide it when contacting us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Operate and maintain the Service</li>
                <li>Display personalized advertisements through Google AdMob (mobile) and Ezoic (web)</li>
                <li>Analyze usage patterns to improve user experience</li>
                <li>Prevent fraud and ensure security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to enhance your experience. Types of cookies we use:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li><strong>Essential Cookies:</strong> Required for the Service to function properly (e.g., theme preferences).</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with the Service.</li>
                <li><strong>Advertising Cookies:</strong> Used by third-party ad networks (Google, Ezoic) to deliver personalized ads based on your interests.</li>
              </ul>
              <p className="text-muted-foreground">
                You can control cookies through your browser settings. Disabling cookies may affect the functionality of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">5. Third-Party Advertising Partners</h2>
              <p className="text-muted-foreground mb-4">We partner with the following advertising networks:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li><strong>Google AdMob/AdSense:</strong> Displays ads and uses cookies to personalize advertising. <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
                <li><strong>Ezoic:</strong> Provides ad optimization and analytics. <a href="https://www.ezoic.com/privacy-policy/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ezoic Privacy Policy</a></li>
              </ul>
              <p className="text-muted-foreground">
                These partners may collect data about your online activity across different websites and apps to provide relevant advertising.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">6. Your Rights (GDPR & CCPA)</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have the following rights regarding your data:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li><strong>Right to Access:</strong> Request information about the data we collect about you.</li>
                <li><strong>Right to Deletion:</strong> Request deletion of your data.</li>
                <li><strong>Right to Opt-Out:</strong> Opt out of personalized advertising.</li>
                <li><strong>Right to Non-Discrimination:</strong> You will not be penalized for exercising your privacy rights.</li>
              </ul>
              <p className="text-muted-foreground">
                To exercise these rights, contact us at <a href="mailto:labahia321@gmail.com" className="text-primary hover:underline">labahia321@gmail.com</a>. We will respond within 45 days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">7. How to Opt-Out of Personalized Ads</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>On Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
                <li><strong>On iOS:</strong> Settings → Privacy → Apple Advertising → Turn off Personalized Ads</li>
                <li><strong>On Web:</strong> Visit <a href="https://www.aboutads.info/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance</a> or <a href="https://www.youronlinechoices.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Your Online Choices (EU)</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our Service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected such information, we will delete it promptly. Users under 13 are served non-personalized ads in compliance with COPPA.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">9. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy & Cookies Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of the Service after changes constitutes acceptance of the revised policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy & Cookies Policy, please contact us at:
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
