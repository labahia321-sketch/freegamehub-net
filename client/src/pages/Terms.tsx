import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCategories } from "@/lib/useStaticData";

export default function Terms() {
  const { data: categories = [] } = useCategories();

  return (
    <div className="min-h-screen flex flex-col theme-transition">
      <Header categories={categories} />
      
      <main className="flex-1 pt-20 pb-8">
        <div className="max-w-3xl mx-auto px-4">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <h1 className="text-3xl font-bold mb-2" data-testid="text-terms-title">Terms of Use</h1>
            <p className="text-muted-foreground mb-8" data-testid="text-terms-date">Last Updated: January 11, 2026</p>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing or using FreeGameHub (the "Service"), including our website at freegamehub.net and our mobile application, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground">
                FreeGameHub is a free online gaming platform that provides access to third-party browser games through embedded content. Games are provided by third-party developers and publishers, including but not limited to SoftGames and Playgama. The Service is supported by advertising.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">3. Permitted Use</h2>
              <p className="text-muted-foreground mb-4">You agree to use the Service only for lawful purposes. You may NOT:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Copy, reproduce, distribute, or create derivative works from any content on the Service without authorization</li>
                <li>Attempt to hack, disrupt, or interfere with the Service's operation or security</li>
                <li>Use automated systems, bots, or scripts to access the Service</li>
                <li>Circumvent, disable, or interfere with any security features or ad-blocking mechanisms</li>
                <li>Post or transmit spam, chain letters, or unsolicited communications</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Use the Service to violate any applicable laws or regulations</li>
                <li>Attempt to access areas of the Service that are not intended for public access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                The FreeGameHub name, logo, and website design are the property of FreeGameHub and are protected by copyright and trademark laws.
              </p>
              <p className="text-muted-foreground">
                Games available on the Service are the property of their respective developers and publishers (including SoftGames, Playgama, and others). FreeGameHub does not claim ownership of any game content. All game trademarks, characters, and intellectual property belong to their respective owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">5. Third-Party Content</h2>
              <p className="text-muted-foreground mb-4">
                The Service embeds games and content from third-party sources. We do not control, endorse, or assume responsibility for any third-party content, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Game content, functionality, or availability</li>
                <li>Advertisements displayed by third-party ad networks</li>
                <li>External links that may appear within games or ads</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Your interactions with third-party content are governed by the respective third party's terms and privacy policies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">6. Disclaimer of Warranties</h2>
              <p className="text-muted-foreground">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, FREEGAMEHUB SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">8. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to indemnify and hold harmless FreeGameHub and its affiliates from any claims, losses, damages, liabilities, and expenses (including legal fees) arising from your use of the Service or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">9. Termination</h2>
              <p className="text-muted-foreground">
                We reserve the right to terminate or suspend your access to the Service at any time, without prior notice, for any reason, including but not limited to violation of these Terms. Upon termination, your right to use the Service will immediately cease.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">10. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We may modify these Terms at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of the Service after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved exclusively in the state or federal courts located in California.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">12. Severability</h2>
              <p className="text-muted-foreground">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">13. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about these Terms of Use, please contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Email:</strong> <a href="mailto:labahia321@gmail.com" className="text-primary hover:underline">labahia321@gmail.com</a>
              </p>
            </section>

            <section className="mb-8">
              <p className="text-muted-foreground text-center">
                © 2026 FreeGameHub. All rights reserved.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer categories={categories} />
    </div>
  );
}
