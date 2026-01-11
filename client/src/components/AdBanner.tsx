interface AdBannerProps {
  type: "leaderboard" | "sidebar" | "medium-rectangle" | "anchor" | "mobile-banner" | "responsive";
  provider?: "adsense" | "ezoic" | "medianet" | "admob";
  className?: string;
  sticky?: boolean;
}

export function AdBanner({ type, provider = "adsense", className = "", sticky = false }: AdBannerProps) {
  const dimensions: Record<string, { width: string; height: string; label: string; responsive?: boolean }> = {
    leaderboard: { width: "728px", height: "90px", label: "728x90 Leaderboard" },
    sidebar: { width: "160px", height: "600px", label: "160x600 Skyscraper" },
    "medium-rectangle": { width: "300px", height: "250px", label: "300x250 Medium Rectangle" },
    anchor: { width: "100%", height: "90px", label: "Anchor Ad" },
    "mobile-banner": { width: "320px", height: "100px", label: "320x100 Mobile Banner" },
    responsive: { width: "100%", height: "auto", label: "Responsive Ad", responsive: true },
  };

  const dim = dimensions[type];
  const stickyClass = sticky ? "sticky-sidebar-ad" : "";

  const getProviderLabel = () => {
    switch (provider) {
      case "adsense": return "AdSense";
      case "ezoic": return "Ezoic";
      case "medianet": return "Media.net";
      case "admob": return "AdMob";
      default: return "Ad";
    }
  };

  const getProviderColor = () => {
    switch (provider) {
      case "adsense": return "border-blue-500/30";
      case "ezoic": return "border-green-500/30";
      case "medianet": return "border-purple-500/30";
      case "admob": return "border-yellow-500/30";
      default: return "border-muted-foreground/20";
    }
  };

  if (dim.responsive) {
    return (
      <div
        className={`flex items-center justify-center ${stickyClass} ${className}`}
        data-testid={`ad-banner-${type}-${provider}`}
        data-ad-provider={provider}
        data-ad-type={type}
      >
        <div className="flex flex-col items-center w-full">
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
            Advertisement
          </span>
          <div
            className={`w-full min-h-[100px] bg-muted/50 border border-dashed ${getProviderColor()} rounded-md flex items-center justify-center text-muted-foreground text-xs`}
          >
            <div className="text-center p-4">
              <p className="font-medium">{getProviderLabel()} Placeholder</p>
              <p className="text-[10px] mt-1">Responsive - Auto Size</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center ${stickyClass} ${className}`}
      data-testid={`ad-banner-${type}-${provider}`}
      data-ad-provider={provider}
      data-ad-type={type}
    >
      <div className="flex flex-col items-center">
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
          Advertisement
        </span>
        <div
          className={`bg-muted/50 border border-dashed ${getProviderColor()} rounded-md flex items-center justify-center text-muted-foreground text-xs`}
          style={{
            width: dim.width,
            height: dim.height,
            maxWidth: "100%",
          }}
        >
          <div className="text-center p-4">
            <p className="font-medium">{getProviderLabel()} Placeholder</p>
            <p className="text-[10px] mt-1">{dim.label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StickyAdSidebar({ provider = "adsense", position }: { provider?: "adsense" | "ezoic" | "medianet"; position: "left" | "right" }) {
  const isEzoic = provider === "ezoic";
  
  return (
    <div 
      className={`hidden xl:block fixed top-20 ${position === "left" ? "left-4" : "right-4"} z-40`}
      data-testid={`sticky-sidebar-${position}`}
    >
      {isEzoic ? (
        <EzoicResponsiveAd position="sidebar" />
      ) : (
        <AdBanner type="sidebar" provider={provider} sticky />
      )}
    </div>
  );
}

export function EzoicResponsiveAd({ className = "", position = "inline" }: { className?: string; position?: "inline" | "sidebar" | "footer" | "leaderboard" }) {
  const getMinHeight = () => {
    switch (position) {
      case "sidebar": return "400px";
      case "leaderboard": return "90px";
      case "footer": return "90px";
      default: return "100px";
    }
  };

  const getWidth = () => {
    switch (position) {
      case "sidebar": return "160px";
      case "leaderboard": return "100%";
      default: return "100%";
    }
  };
  
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      data-testid={`ezoic-responsive-${position}`}
      data-ad-provider="ezoic"
      data-ad-position={position}
    >
      <div className="flex flex-col items-center" style={{ width: getWidth(), maxWidth: "100%" }}>
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
          Advertisement
        </span>
        <div
          className="w-full bg-muted/50 border border-dashed border-green-500/30 rounded-md flex items-center justify-center text-muted-foreground text-xs"
          style={{ minHeight: getMinHeight() }}
        >
          <div className="text-center p-4">
            <p className="font-medium">Ezoic Placeholder</p>
            <p className="text-[10px] mt-1">Responsive - Variable Size</p>
          </div>
        </div>
      </div>
    </div>
  );
}
