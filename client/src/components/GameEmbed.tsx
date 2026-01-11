import { useState } from "react";
import { Maximize2, Minimize2, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GameEmbedProps {
  embedUrl: string;
  title: string;
}

export function GameEmbed({ embedUrl, title }: GameEmbedProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [key, setKey] = useState(0);

  const handleFullscreen = () => {
    const container = document.getElementById("game-container");
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleRestart = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        id="game-container"
        className="relative bg-black rounded-lg overflow-hidden"
        data-testid="container-game-embed"
      >
        <div className="aspect-video">
          <iframe
            key={key}
            src={embedUrl}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            data-testid="iframe-game"
          />
        </div>

        <div className="absolute top-2 right-2 flex items-center gap-1 opacity-0 hover:opacity-100 transition-opacity bg-black/60 rounded-md p-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMuted(!isMuted)}
            className="h-8 w-8 text-white hover:bg-white/20"
            data-testid="button-mute"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleRestart}
            className="h-8 w-8 text-white hover:bg-white/20"
            data-testid="button-restart"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleFullscreen}
            className="h-8 w-8 text-white hover:bg-white/20"
            data-testid="button-fullscreen"
          >
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      <p className="text-center text-sm text-muted-foreground mt-3">
        Hover over the game to show controls. Press F11 or click fullscreen for the best experience.
      </p>
    </div>
  );
}
