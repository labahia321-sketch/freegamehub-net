import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCategories } from "@/lib/useStaticData";

export default function AboutAds() {
  const { data: categories = [] } = useCategories();

  return (
    <div className="min-h-screen flex flex-col theme-transition">
      <Header categories={categories} />
      
      <main className="flex-1 pt-20 pb-8">
        <div className="max-w-3xl mx-auto px-4">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold mb-2" data-testid="text-ads-title">About Our Ads</h1>
            <p className="text-muted-foreground mb-8" data-testid="text-ads-date">Last Updated: January 11, 2026</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Why We Show Ads</h2>
              <p className="text-muted-foreground">
                FreeGameHub is completely free to use. We are able to offer free access to hundreds of games thanks to advertising revenue. Ads help us cover the costs of operating the Service, including server hosting, development, and content curation. Without ads, we would not be able to provide this Service at no cost to you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Our Advertising Partners</h2>
              <p className="text-muted-foreground mb-4">We work with trusted advertising partners:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Google AdMob:</strong> Displays ads in our mobile application</li>
                <li><strong>Google AdSense:</strong> Displays ads on our website (home page)</li>
                <li><strong>Ezoic:</strong> Provides ad optimization on category and game pages</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                These partners are industry leaders and comply with advertising regulations and privacy laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Personalized Advertising</h2>
              <p className="text-muted-foreground mb-4">
                By default, our advertising partners may show you personalized ads based on:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Your browsing history and online activity</li>
                <li>Your interests and preferences</li>
                <li>Your geographic location</li>
                <li>Demographic information (age range, gender)</li>
                <li>Device type and operating system</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                This information is collected through cookies and advertising identifiers. Personalized ads are designed to be more relevant to you, which benefits both users and advertisers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Children's Advertising</h2>
              <p className="text-muted-foreground">
                We comply with COPPA (Children's Online Privacy Protection Act) and similar regulations. Users identified as being under 13 years of age are NOT shown personalized advertising. Instead, they receive contextual ads that are not based on personal data or browsing behavior.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">How to Opt-Out of Personalized Ads</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to opt out of personalized advertising. Here's how:
              </p>
              
              <h3 className="text-lg font-medium mt-4 mb-2">On Android Devices:</h3>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-1">
                <li>Open <strong>Settings</strong></li>
                <li>Navigate to <strong>Google</strong> → <strong>Ads</strong></li>
                <li>Enable <strong>Opt out of Ads Personalization</strong></li>
              </ol>

              <h3 className="text-lg font-medium mt-4 mb-2">On iOS Devices:</h3>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-1">
                <li>Open <strong>Settings</strong></li>
                <li>Navigate to <strong>Privacy</strong> → <strong>Apple Advertising</strong></li>
                <li>Turn off <strong>Personalized Ads</strong></li>
              </ol>

              <h3 className="text-lg font-medium mt-4 mb-2">On Web Browsers:</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Visit the <a href="https://www.aboutads.info/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance (DAA)</a> opt-out page</li>
                <li>Visit <a href="https://www.youronlinechoices.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Your Online Choices</a> (for EU users)</li>
                <li>Visit <a href="https://adssettings.google.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a> to manage Google ad preferences</li>
                <li>Use your browser's privacy settings to block third-party cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">What Happens After Opt-Out</h2>
              <p className="text-muted-foreground">
                If you opt out of personalized advertising, you will still see ads on FreeGameHub. However, these ads will be generic and not tailored to your interests. The number of ads you see will remain the same, as ads are necessary for us to continue providing free service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Ad Content</h2>
              <p className="text-muted-foreground">
                We strive to ensure that ads shown on FreeGameHub are appropriate for all ages. However, ad content is served by our third-party partners, and we cannot guarantee the content of every ad. If you encounter an ad that you believe is inappropriate or offensive, please contact us at <a href="mailto:labahia321@gmail.com" className="text-primary hover:underline">labahia321@gmail.com</a> with details.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">More Information</h2>
              <p className="text-muted-foreground">
                For more details about how your data is used, please review our{" "}
                <a href="/privacy" className="text-primary hover:underline">Privacy & Cookies Policy</a> and{" "}
                <a href="/your-privacy-choices" className="text-primary hover:underline">Your Privacy Choices</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about advertising on FreeGameHub, please contact us at:
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
