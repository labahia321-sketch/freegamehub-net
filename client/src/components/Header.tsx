import { Link, useLocation } from "wouter";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Button } from "@/components/ui/button";
import { Gamepad2, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import type { Category } from "@shared/schema";

interface HeaderProps {
  categories: Category[];
}

export function Header({ categories }: HeaderProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-card/95 backdrop-blur-md border-b border-card-border theme-transition">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0" data-testid="link-logo">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center" data-testid="icon-logo">
            <Gamepad2 className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl hidden sm:block" data-testid="text-logo">
            GameZone
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          <Link href="/">
            <Button
              variant={isActive("/") ? "secondary" : "ghost"}
              size="sm"
              data-testid="link-home"
              className="font-medium"
            >
              Home
            </Button>
          </Link>
          {categories.map((cat) => (
            <Link key={cat.id} href={`/category/${cat.slug}`}>
              <Button
                variant={isActive(`/category/${cat.slug}`) ? "secondary" : "ghost"}
                size="sm"
                data-testid={`link-category-${cat.slug}`}
                className="font-medium"
              >
                {cat.name}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {searchOpen ? (
            <div className="flex items-center gap-2">
              <input
                type="search"
                placeholder="Search games..."
                className="w-48 h-9 px-3 rounded-md bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                data-testid="input-search"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(false)}
                data-testid="button-close-search"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(true)}
              data-testid="button-open-search"
            >
              <Search className="h-4 w-4" />
            </Button>
          )}

          <ThemeSwitcher />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-card border-b border-card-border p-4 space-y-2">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <Button
              variant={isActive("/") ? "secondary" : "ghost"}
              className="w-full justify-start"
              data-testid="link-mobile-home"
            >
              Home
            </Button>
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button
                variant={isActive(`/category/${cat.slug}`) ? "secondary" : "ghost"}
                className="w-full justify-start"
                data-testid={`link-mobile-category-${cat.slug}`}
              >
                {cat.name}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
