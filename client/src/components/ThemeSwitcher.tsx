import { useTheme } from "@/lib/theme";
import { Sun, Moon, SunMoon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />;
      case "attenuated":
        return <SunMoon className="h-4 w-4" />;
      case "dark":
        return <Moon className="h-4 w-4" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          data-testid="button-theme-toggle"
          className="relative"
        >
          {getIcon()}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          data-testid="button-theme-light"
          className="gap-2 cursor-pointer"
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
          {theme === "light" && (
            <span className="ml-auto text-primary">•</span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("attenuated")}
          data-testid="button-theme-attenuated"
          className="gap-2 cursor-pointer"
        >
          <SunMoon className="h-4 w-4" />
          <span>Attenuated</span>
          {theme === "attenuated" && (
            <span className="ml-auto text-primary">•</span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          data-testid="button-theme-dark"
          className="gap-2 cursor-pointer"
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
          {theme === "dark" && (
            <span className="ml-auto text-primary">•</span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
