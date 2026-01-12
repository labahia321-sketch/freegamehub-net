import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCategories } from "@/lib/useStaticData";

export default function YourPrivacyChoices() {
  const { data: categories = [] } = useCategories();

  return (
    <div className="min-h-screen flex flex-col theme-transition">
      <Header categories={categories} />
      
      <main className="flex-1 pt-20 pb-8">
        <div className="max-w-3xl mx-auto px-4">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold mb-2" data-testid="text-choices-title">Your Privacy Choices</h1>
            <p className="text-muted-foreground mb-8" data-testid="text-choices-date">Last Updated: January 11, 2026</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Your Rights Under CCPA and GDPR</h2>
              <p className="text-muted-foreground">
                FreeGameHub respects your privacy and is committed to providing you with transparency and control over your personal information. Depending on where you live, you may have specific rights under privacy laws such as the California Consumer Privacy Act (CCPA), the California Privacy Rights Act (CPRA), and the General Data Protection Regulation (GDPR).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Your Privacy Rights</h2>
              
              <h3 className="text-lg font-medium mt-4 mb-2">Right to Know</h3>
              <p className="text-muted-foreground mb-4">
                You have the right to request information about the personal data we collect about you, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>The categories of personal information collected</li>
                <li>The sources from which the information was collected</li>
                <li>The business purpose for collecting the information</li>
                <li>The categories of third parties with whom we share the information</li>
              </ul>

              <h3 className="text-lg font-medium mt-4 mb-2">Right to Delete</h3>
              <p className="text-muted-foreground mb-4">
                You have the right to request deletion of your personal information, subject to certain legal exceptions. Upon receiving a verified request, we will delete your data and instruct our service providers to do the same.
              </p>

              <h3 className="text-lg font-medium mt-4 mb-2">Right to Opt-Out of Sale</h3>
              <p className="text-muted-foreground mb-4">
                <strong>FreeGameHub does NOT sell your personal information.</strong> We do not exchange personal data for monetary consideration. While we share data with advertising partners to display ads, this sharing does not constitute a "sale" under privacy law definitions.
              </p>

              <h3 className="text-lg font-medium mt-4 mb-2">Right to Opt-Out of Sharing for Cross-Context Behavioral Advertising</h3>
              <p className="text-muted-foreground mb-4">
                You can opt out of having your information shared for personalized advertising purposes. See the "How to Exercise Your Rights" section below.
              </p>

              <h3 className="text-lg font-medium mt-4 mb-2">Right to Non-Discrimination</h3>
              <p className="text-muted-foreground">
                You will not be discriminated against for exercising any of your privacy rights. We will not deny you services, charge different prices, or provide a different quality of service based on your privacy choices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">What Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                FreeGameHub collects the following categories of information:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-muted-foreground border border-border rounded-lg">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-2 text-left font-medium">Category</th>
                      <th className="px-4 py-2 text-left font-medium">Examples</th>
                      <th className="px-4 py-2 text-left font-medium">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2">Identifiers</td>
                      <td className="px-4 py-2">IP address, device ID, advertising ID</td>
                      <td className="px-4 py-2">Analytics, fraud prevention, advertising</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2">Internet Activity</td>
                      <td className="px-4 py-2">Pages visited, games played, clicks</td>
                      <td className="px-4 py-2">Service improvement, analytics</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2">Geolocation</td>
                      <td className="px-4 py-2">Approximate location (country/region)</td>
                      <td className="px-4 py-2">Content localization, advertising</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-2">Device Information</td>
                      <td className="px-4 py-2">Browser type, OS, screen size</td>
                      <td className="px-4 py-2">Service optimization</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground mt-4">
                We do NOT collect sensitive personal information such as Social Security numbers, financial account information, precise geolocation, health data, or biometric information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">How to Exercise Your Rights</h2>
              
              <h3 className="text-lg font-medium mt-4 mb-2">Submit a Request</h3>
              <p className="text-muted-foreground mb-4">
                To exercise your privacy rights (access, deletion, or opt-out), you can:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>Email us:</strong>{" "}
                  <a href="mailto:labahia321@gmail.com" className="text-primary hover:underline">labahia321@gmail.com</a>
                </li>
                <li>Include "Privacy Request" in the subject line</li>
                <li>Specify which right you are exercising</li>
                <li>Provide enough information for us to verify your identity</li>
              </ul>

              <h3 className="text-lg font-medium mt-4 mb-2">Verification</h3>
              <p className="text-muted-foreground mb-4">
                To protect your privacy, we must verify your identity before fulfilling your request. Since we collect minimal personal information, verification may involve confirming details about your device or usage patterns.
              </p>

              <h3 className="text-lg font-medium mt-4 mb-2">Response Time</h3>
              <p className="text-muted-foreground">
                We will respond to your request within <strong>45 days</strong> of receipt. If we need additional time (up to 45 more days), we will inform you of the reason and extension period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Opt-Out of Personalized Advertising</h2>
              <p className="text-muted-foreground mb-4">
                To opt out of personalized ads:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Mobile devices:</strong> Adjust your device's advertising settings (see <a href="/about-ads" className="text-primary hover:underline">About our Ads</a> for instructions)</li>
                <li><strong>Web browsers:</strong> Clear cookies and adjust browser privacy settings</li>
                <li><strong>Google Ads:</strong> Visit <a href="https://adssettings.google.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Ad Settings</a></li>
                <li><strong>DAA Opt-Out:</strong> Visit <a href="https://www.aboutads.info/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">aboutads.info/choices</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Do Not Sell or Share My Personal Information</h2>
              <p className="text-muted-foreground">
                As stated above, FreeGameHub does not sell personal information. We share information with advertising partners to display ads, but you can opt out of personalized advertising using the methods described above. If you would like to formally request that your information not be shared for advertising purposes, email us at <a href="mailto:labahia321@gmail.com" className="text-primary hover:underline">labahia321@gmail.com</a> with the subject line "Do Not Share My Information."
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Authorized Agents</h2>
              <p className="text-muted-foreground">
                You may designate an authorized agent to submit privacy requests on your behalf. The agent must provide proof of authorization (such as a power of attorney or written permission signed by you). We may still require you to verify your identity directly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Changes to This Page</h2>
              <p className="text-muted-foreground">
                We may update this page to reflect changes in privacy laws or our practices. The "Last Updated" date at the top indicates when this page was last revised.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                For privacy-related inquiries, please contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Email:</strong> <a href="mailto:labahia321@gmail.com" className="text-primary hover:underline">labahia321@gmail.com</a>
              </p>
              <p className="text-muted-foreground mt-4">
                For more information about our privacy practices, see our <a href="/privacy" className="text-primary hover:underline">Privacy & Cookies Policy</a>.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer categories={categories} />
    </div>
  );
}
