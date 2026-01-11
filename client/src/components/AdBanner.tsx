interface AdBannerProps {
  type: "leaderboard" | "sidebar" | "medium-rectangle" | "anchor";
  provider?: "adsense" | "ezoic";
  className?: string;
}

export function AdBanner({ type, provider = "adsense", className = "" }: AdBannerProps) {
  const dimensions = {
    leaderboard: { width: "728px", height: "90px", mobileWidth: "100%", mobileHeight: "100px" },
    sidebar: { width: "300px", height: "600px", mobileWidth: "300px", mobileHeight: "250px" },
    "medium-rectangle": { width: "300px", height: "250px", mobileWidth: "300px", mobileHeight: "250px" },
    anchor: { width: "100%", height: "90px", mobileWidth: "100%", mobileHeight: "60px" },
  };

  const dim = dimensions[type];

  return (
    <div
      className={`flex items-center justify-center ${className}`}
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
              {provider === "adsense" ? "AdSense" : "Ezoic"} Ad Space
            </p>
            <p className="text-[10px] mt-1">
              {type === "leaderboard" && "728x90 Leaderboard"}
              {type === "sidebar" && "300x600 Half Page"}
              {type === "medium-rectangle" && "300x250 Medium Rectangle"}
              {type === "anchor" && "Anchor Ad"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
