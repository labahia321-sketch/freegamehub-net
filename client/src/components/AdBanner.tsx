interface AdBannerProps {
  type: "leaderboard" | "sidebar" | "medium-rectangle" | "anchor" | "mobile-banner";
  provider?: "adsense" | "ezoic" | "medianet";
  className?: string;
  sticky?: boolean;
}

export function AdBanner({ type, provider = "adsense", className = "", sticky = false }: AdBannerProps) {
  const dimensions = {
    leaderboard: { width: "728px", height: "90px", label: "728x90 Leaderboard" },
    sidebar: { width: "160px", height: "600px", label: "160x600 Skyscraper" },
    "medium-rectangle": { width: "300px", height: "250px", label: "300x250 Medium Rectangle" },
    anchor: { width: "100%", height: "90px", label: "Anchor Ad" },
    "mobile-banner": { width: "320px", height: "100px", label: "320x100 Mobile Banner" },
  };

  const dim = dimensions[type];
  const stickyClass = sticky ? "sticky-sidebar-ad" : "";

  const getProviderLabel = () => {
    switch (provider) {
      case "adsense": return "AdSense";
      case "ezoic": return "Ezoic";
      case "medianet": return "Media.net";
      default: return "Ad";
    }
  };

  return (
    <div
      className={`flex items-center justify-center ${stickyClass} ${className}`}
      data-testid={`ad-banner-${type}-${provider}`}
    >
      <div className="flex flex-col items-center">
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
          Advertisement
        </span>
        <div
          className="bg-muted/50 border border-dashed border-muted-foreground/20 rounded-md flex items-center justify-center text-muted-foreground text-xs"
          style={{
            width: dim.width,
            height: dim.height,
            maxWidth: "100%",
          }}
        >
          <div className="text-center p-4">
            <p className="font-medium">
              {getProviderLabel()} Ad Space
            </p>
            <p className="text-[10px] mt-1">{dim.label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StickyAdSidebar({ provider = "adsense", position }: { provider?: "adsense" | "ezoic" | "medianet"; position: "left" | "right" }) {
  return (
    <div 
      className={`hidden xl:block fixed top-20 ${position === "left" ? "left-4" : "right-4"} z-40`}
      data-testid={`sticky-sidebar-${position}`}
    >
      <AdBanner type="sidebar" provider={provider} sticky />
    </div>
  );
}
