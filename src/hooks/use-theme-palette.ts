import { useEffect, useState } from "react";

export interface BubblePalette {
  /** Bubble for messages I sent */
  sentBg: string;
  sentText: string;
  /** Bubble for messages received */
  recvBg: string;
  recvText: string;
  /** Border used on both bubbles */
  border: string;
  /** Overlay tint over the background image for readability */
  overlay: string;
  /** Accent for header/input icons */
  accent: string;
  isDarkImage: boolean;
}

const fallback: BubblePalette = {
  sentBg: "hsl(var(--primary))",
  sentText: "hsl(var(--primary-foreground))",
  recvBg: "hsl(var(--card) / 0.9)",
  recvText: "hsl(var(--card-foreground))",
  border: "hsl(var(--border) / 0.4)",
  overlay: "rgba(0,0,0,0.1)",
  accent: "hsl(var(--primary))",
  isDarkImage: false,
};

const cache = new Map<string, BubblePalette>();

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
}

function buildPalette(image: HTMLImageElement): BubblePalette {
  const size = 24;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return fallback;
  ctx.drawImage(image, 0, 0, size, size);
  const { data } = ctx.getImageData(0, 0, size, size);

  let r = 0;
  let g = 0;
  let b = 0;
  let count = 0;
  let best = { s: -1, h: 0 };

  for (let i = 0; i < data.length; i += 4) {
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
    count++;
    const hsl = rgbToHsl(data[i], data[i + 1], data[i + 2]);
    // most vivid, reasonably lit pixel drives the hue
    if (hsl.l > 20 && hsl.l < 85 && hsl.s > best.s) best = { s: hsl.s, h: hsl.h };
  }

  const avg = { r: r / count, g: g / count, b: b / count };
  const avgHsl = rgbToHsl(avg.r, avg.g, avg.b);
  const hue = best.s > 12 ? Math.round(best.h) : Math.round(avgHsl.h);
  const sat = Math.min(78, Math.max(38, Math.round(best.s > 12 ? best.s : avgHsl.s + 25)));
  const isDarkImage = avgHsl.l < 52;

  return {
    sentBg: `hsl(${hue} ${sat}% ${isDarkImage ? 58 : 42}%)`,
    sentText: isDarkImage ? "hsl(0 0% 100%)" : "hsl(0 0% 100%)",
    recvBg: isDarkImage
      ? `hsla(${hue} ${Math.round(sat * 0.35)}% 16% / 0.82)`
      : `hsla(${hue} ${Math.round(sat * 0.25)}% 99% / 0.88)`,
    recvText: isDarkImage ? `hsl(${hue} 18% 96%)` : `hsl(${hue} 30% 14%)`,
    border: isDarkImage ? "hsla(0 0% 100% / 0.16)" : "hsla(0 0% 0% / 0.08)",
    overlay: isDarkImage ? "rgba(0,0,0,0.22)" : "rgba(0,0,0,0.06)",
    accent: `hsl(${hue} ${sat}% ${isDarkImage ? 62 : 44}%)`,
    isDarkImage,
  };
}

/** Derives a bubble palette from the dominant colors of a chat background image. */
export function useThemePalette(imageSrc?: string): BubblePalette {
  const [palette, setPalette] = useState<BubblePalette>(
    () => (imageSrc && cache.get(imageSrc)) || fallback
  );

  useEffect(() => {
    if (!imageSrc) {
      setPalette(fallback);
      return;
    }
    const cached = cache.get(imageSrc);
    if (cached) {
      setPalette(cached);
      return;
    }
    let active = true;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;
    const handle = () => {
      if (!active) return;
      try {
        const next = buildPalette(img);
        cache.set(imageSrc, next);
        setPalette(next);
      } catch {
        setPalette(fallback);
      }
    };
    if (img.complete) handle();
    else img.onload = handle;
    return () => {
      active = false;
    };
  }, [imageSrc]);

  return palette;
}
