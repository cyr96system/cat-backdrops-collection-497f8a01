import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { chatThemes, themeCategories, type ChatTheme } from "@/data/chatThemes";
import { Check } from "lucide-react";

interface ThemeGridProps {
  selected: ChatTheme;
  onSelect: (theme: ChatTheme) => void;
}

const ThemeGrid = ({ selected, onSelect }: ThemeGridProps) => {
  const [category, setCategory] = useState("Tous");

  const filtered = category === "Tous"
    ? chatThemes
    : chatThemes.filter((t) => t.category === category);

  return (
    <div className="space-y-5">
      {/* Category tabs */}
      <div className="flex gap-2 flex-wrap">
        {themeCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              category === cat
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((theme) => (
            <motion.button
              key={theme.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => onSelect(theme)}
              className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-colors duration-200 group ${
                selected.id === theme.id
                  ? "border-primary shadow-lg shadow-primary/25"
                  : "border-transparent hover:border-border"
              }`}
              style={{ background: theme.css }}
              title={theme.name}
            >
              {/* Selected indicator */}
              {selected.id === theme.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]"
                >
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-primary-foreground" />
                  </div>
                </motion.div>
              )}

              {/* Name tooltip on hover */}
              <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm px-1 py-0.5 text-[10px] text-white text-center opacity-0 group-hover:opacity-100 transition-opacity truncate">
                {theme.name}
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ThemeGrid;
