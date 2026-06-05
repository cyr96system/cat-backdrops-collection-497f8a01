import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { boyStickers, girlStickers, teenBoyStickers, teenGirlStickers, manStickers, womanStickers, type Sticker } from "@/data/stickerData";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface StickerPickerProps {
  onSelect?: (sticker: Sticker) => void;
}

type StickerCharacter = "boy" | "girl" | "teen-boy" | "teen-girl" | "man" | "woman";

const CHARACTER_LABELS: Record<StickerCharacter, string> = {
  boy: "Garçon",
  girl: "Fille",
  "teen-boy": "Ado masculin",
  "teen-girl": "Ado féminin",
  man: "Homme adulte",
  woman: "Femme adulte",
};

const StickerPicker = ({ onSelect }: StickerPickerProps) => {
  const [character, setCharacter] = useState<StickerCharacter>("boy");
  const stickers = useMemo(() => {
    if (character === "boy") return boyStickers;
    if (character === "girl") return girlStickers;
    if (character === "teen-boy") return teenBoyStickers;
    if (character === "teen-girl") return teenGirlStickers;
    if (character === "man") return manStickers;
    return womanStickers;
  }, [character]);
  const [selected, setSelected] = useState<Sticker | null>(stickers[0] ?? null);

  useEffect(() => {
    setSelected(stickers[0] ?? null);
  }, [stickers]);

  const handleSelect = (sticker: Sticker) => {
    setSelected(sticker);
    onSelect?.(sticker);
  };

  return (
    <section className="space-y-6">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Stickers Manga</h2>
        <p className="text-muted-foreground">
          27 émotions cohérentes par personnage — utilisables dans vos discussions
        </p>
        <div className="flex justify-center">
          <ToggleGroup
            type="single"
            value={character}
            onValueChange={(value) => {
              if (value === "boy" || value === "girl" || value === "teen-boy" || value === "teen-girl" || value === "man" || value === "woman") {
                setCharacter(value);
              }
            }}
            variant="outline"
            className="flex flex-wrap rounded-xl border border-border bg-muted/40 p-1"
            aria-label="Choix du personnage"
          >
            <ToggleGroupItem
              value="boy"
              className="min-w-24 rounded-lg px-4 data-[state=on]:bg-background data-[state=on]:text-foreground"
              aria-label="Afficher les stickers garçon"
            >
              Garçon
            </ToggleGroupItem>
            <ToggleGroupItem
              value="girl"
              className="min-w-24 rounded-lg px-4 data-[state=on]:bg-background data-[state=on]:text-foreground"
              aria-label="Afficher les stickers fille"
            >
              Fille
            </ToggleGroupItem>
            <ToggleGroupItem
              value="teen-boy"
              className="min-w-24 rounded-lg px-4 data-[state=on]:bg-background data-[state=on]:text-foreground"
              aria-label="Afficher les stickers ado masculin"
            >
              Ado masculin
            </ToggleGroupItem>
            <ToggleGroupItem
              value="teen-girl"
              className="min-w-24 rounded-lg px-4 data-[state=on]:bg-background data-[state=on]:text-foreground"
              aria-label="Afficher les stickers ado féminin"
            >
              Ado féminin
            </ToggleGroupItem>
            <ToggleGroupItem
              value="man"
              className="min-w-24 rounded-lg px-4 data-[state=on]:bg-background data-[state=on]:text-foreground"
              aria-label="Afficher les stickers homme adulte"
            >
              Homme
            </ToggleGroupItem>
            <ToggleGroupItem
              value="woman"
              className="min-w-24 rounded-lg px-4 data-[state=on]:bg-background data-[state=on]:text-foreground"
              aria-label="Afficher les stickers femme adulte"
            >
              Femme
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {selected && (
        <motion.div
          key={selected.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-muted/40 p-2">
            <img src={selected.image} alt={selected.emotion} className="h-full w-full object-contain" />
          </div>
          <span className="text-sm font-medium text-foreground">
            {selected.emotion} · {CHARACTER_LABELS[character]}
          </span>
        </motion.div>
      )}

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9">
        {stickers.map((sticker) => {
          const isActive = selected?.id === sticker.id;
          return (
            <motion.button
              key={sticker.id}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => handleSelect(sticker)}
              className={`group aspect-square rounded-xl border-2 p-1.5 transition-all ${
                isActive
                  ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                  : "border-transparent bg-muted/30 hover:bg-muted/60"
              }`}
              title={sticker.emotion}
              aria-label={sticker.emotion}
            >
              <img
                src={sticker.image}
                alt={sticker.emotion}
                loading="lazy"
                width={512}
                height={512}
                className="h-full w-full object-contain drop-shadow-sm"
              />
            </motion.button>
          );
        })}
      </div>
    </section>
  );
};

export default StickerPicker;
