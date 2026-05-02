import { useState } from "react";
import { motion } from "framer-motion";
import { boyStickers, type Sticker } from "@/data/stickerData";

interface StickerPickerProps {
  onSelect?: (sticker: Sticker) => void;
}

const StickerPicker = ({ onSelect }: StickerPickerProps) => {
  const [selected, setSelected] = useState<Sticker | null>(null);

  const handleSelect = (sticker: Sticker) => {
    setSelected(sticker);
    onSelect?.(sticker);
  };

  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Stickers Manga
        </h2>
        <p className="text-muted-foreground">
          27 émotions d'un même personnage — utilisables dans vos discussions
        </p>
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-32 h-32 rounded-2xl bg-muted/40 flex items-center justify-center p-2">
            <img
              src={selected.image}
              alt={selected.emotion}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-sm font-medium text-foreground">
            {selected.emotion}
          </span>
        </motion.div>
      )}

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
        {boyStickers.map((sticker) => {
          const isActive = selected?.id === sticker.id;
          return (
            <motion.button
              key={sticker.id}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => handleSelect(sticker)}
              className={`group aspect-square rounded-xl p-1.5 transition-all border-2 ${
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
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </motion.button>
          );
        })}
      </div>
    </section>
  );
};

export default StickerPicker;
