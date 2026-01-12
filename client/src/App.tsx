import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme";
import Home from "@/pages/Home";
import Category from "@/pages/Category";
import GameDetail from "@/pages/GameDetail";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import AboutAds from "@/pages/AboutAds";
import ConsumerHealthPrivacy from "@/pages/ConsumerHealthPrivacy";
import YourPrivacyChoices from "@/pages/YourPrivacyChoices";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/category/:slug" component={Category} />
      <Route path="/game/:slug" component={GameDetail} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/about-ads" component={AboutAds} />
      <Route path="/consumer-health-privacy" component={ConsumerHealthPrivacy} />
      <Route path="/your-privacy-choices" component={YourPrivacyChoices} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
