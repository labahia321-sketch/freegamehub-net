import { Link } from "wouter";
import { Gamepad2 } from "lucide-react";
import type { Category } from "@shared/schema";

interface FooterProps {
  categories: Category[];
}

export function Footer({ categories }: FooterProps) {
  return (
    <footer className="bg-card border-t border-card-border mt-16 theme-transition">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" data-testid="link-footer-logo">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Gamepad2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl" data-testid="text-footer-logo">FreeGameHub</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your ultimate destination for free online games. Play instantly without downloads across all your devices.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-categories">Categories</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-category-${cat.slug}`}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-legal">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-privacy"
                >
                  Privacy & Cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-terms"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/about-ads"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-ads"
                >
                  About our Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/consumer-health-privacy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-health"
                >
                  Consumer Health Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/your-privacy-choices"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-footer-choices"
                >
                  Your Privacy Choices
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p data-testid="text-footer-copyright">
            © 2026 FreeGameHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
