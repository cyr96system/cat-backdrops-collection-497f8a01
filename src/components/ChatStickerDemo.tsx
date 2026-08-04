import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smile, Send } from "lucide-react";
import { boyStickers, girlStickers, teenBoyStickers, teenGirlStickers, manStickers, womanStickers, mysteryManStickers, type Sticker } from "@/data/stickerData";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useThemePalette } from "@/hooks/use-theme-palette";

type StickerCharacter = "boy" | "girl" | "teen-boy" | "teen-girl" | "man" | "woman" | "mystery-man";

interface ChatMessage {
  id: number;
  sent: boolean;
  type: "text" | "sticker";
  text?: string;
  sticker?: Sticker;
}

const initial: ChatMessage[] = [
  { id: 1, sent: false, type: "text", text: "Salut ! Teste tes stickers ici 👇" },
  { id: 2, sent: true, type: "text", text: "OK j'envoie !" },
];

interface ChatStickerDemoProps {
  backgroundImage?: string;
}

const ChatStickerDemo = ({ backgroundImage }: ChatStickerDemoProps) => {
  const palette = useThemePalette(backgroundImage);
  const [messages, setMessages] = useState<ChatMessage[]>(initial);
  const [input, setInput] = useState("");
  const [character, setCharacter] = useState<StickerCharacter>("boy");
  const [open, setOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const stickers = useMemo(() => {
    if (character === "boy") return boyStickers;
    if (character === "girl") return girlStickers;
    if (character === "teen-boy") return teenBoyStickers;
    if (character === "teen-girl") return teenGirlStickers;
    if (character === "man") return manStickers;
    if (character === "woman") return womanStickers;
    return mysteryManStickers;
  }, [character]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendText = () => {
    const value = input.trim();
    if (!value) return;
    setMessages((m) => [...m, { id: Date.now(), sent: true, type: "text", text: value }]);
    setInput("");
  };

  const sendSticker = (sticker: Sticker) => {
    setMessages((m) => [...m, { id: Date.now(), sent: true, type: "sticker", sticker }]);
    setOpen(false);
  };

  return (
    <section className="space-y-4">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Tester les stickers</h2>
        <p className="text-muted-foreground">Envoie un sticker dans une vraie conversation</p>
      </div>

      <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        <div className="flex items-center gap-3 border-b border-border bg-card px-4 py-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
            A
          </div>
          <div>
            <p className="text-sm font-semibold text-card-foreground">Alice</p>
            <p className="text-xs text-muted-foreground">En ligne</p>
          </div>
        </div>

        <div ref={scrollRef} className="relative h-96 overflow-y-auto bg-muted/30 px-3 py-4">
          {backgroundImage && (
            <>
              <img
                src={backgroundImage}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0 transition-colors duration-500"
                style={{ backgroundColor: palette.overlay }}
              />
            </>
          )}
          <div className="relative z-10 flex flex-col gap-2">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
                >
                  {msg.type === "text" ? (
                    <div
                      className={`max-w-[75%] rounded-2xl border px-3 py-2 text-sm shadow-md backdrop-blur-sm transition-colors duration-500 ${
                        msg.sent ? "rounded-br-md" : "rounded-bl-md"
                      }`}
                      style={{
                        backgroundColor: msg.sent ? palette.sentBg : palette.recvBg,
                        color: msg.sent ? palette.sentText : palette.recvText,
                        borderColor: palette.border,
                      }}
                    >
                      {msg.text}
                    </div>
                  ) : (
                    <div className="max-w-[55%]">
                      <img
                        src={msg.sticker!.image}
                        alt={msg.sticker!.emotion}
                        className="h-32 w-32 object-contain drop-shadow-md"
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-border bg-card px-3 py-2">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0" aria-label="Ouvrir les stickers">
                <Smile className="h-5 w-5 text-muted-foreground" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" side="top" className="w-80 p-3">
              <div className="space-y-3">
                <ToggleGroup
                  type="single"
                  value={character}
                  onValueChange={(v) => {
                    if (v === "boy" || v === "girl" || v === "teen-boy" || v === "teen-girl" || v === "man" || v === "woman" || v === "mystery-man") setCharacter(v);
                  }}
                  variant="outline"
                  className="flex w-full flex-wrap rounded-lg border border-border bg-muted/40 p-1"
                >
                  <ToggleGroupItem value="boy" className="flex-1 rounded-md text-xs data-[state=on]:bg-background">
                    Garçon
                  </ToggleGroupItem>
                  <ToggleGroupItem value="girl" className="flex-1 rounded-md text-xs data-[state=on]:bg-background">
                    Fille
                  </ToggleGroupItem>
                  <ToggleGroupItem value="teen-boy" className="flex-1 rounded-md text-xs data-[state=on]:bg-background">
                    Ado M
                  </ToggleGroupItem>
                  <ToggleGroupItem value="teen-girl" className="flex-1 rounded-md text-xs data-[state=on]:bg-background">
                    Ado F
                  </ToggleGroupItem>
                  <ToggleGroupItem value="man" className="flex-1 rounded-md text-xs data-[state=on]:bg-background">
                    Homme
                  </ToggleGroupItem>
                  <ToggleGroupItem value="woman" className="flex-1 rounded-md text-xs data-[state=on]:bg-background">
                    Femme
                  </ToggleGroupItem>
                  <ToggleGroupItem value="mystery-man" className="flex-1 rounded-md text-xs data-[state=on]:bg-background">
                    Mystère
                  </ToggleGroupItem>
                </ToggleGroup>

                {stickers.length === 0 ? (
                  <p className="py-8 text-center text-xs text-muted-foreground">
                    Aucun sticker disponible pour ce personnage.
                  </p>
                ) : (
                  <div className="grid max-h-64 grid-cols-4 gap-2 overflow-y-auto">
                    {stickers.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => sendSticker(s)}
                        className="aspect-square rounded-lg bg-muted/40 p-1 transition hover:bg-muted hover:scale-105"
                        title={s.emotion}
                        aria-label={`Envoyer ${s.emotion}`}
                      >
                        <img src={s.image} alt={s.emotion} className="h-full w-full object-contain" loading="lazy" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </PopoverContent>
          </Popover>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendText()}
            placeholder="Message..."
            className="flex-1 rounded-full bg-muted px-4 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/30"
          />
          <Button onClick={sendText} size="icon" className="h-9 w-9 shrink-0 rounded-full" aria-label="Envoyer">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChatStickerDemo;
