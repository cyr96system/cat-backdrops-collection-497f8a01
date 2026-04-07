import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { avatarOptions, avatarCategories, type AvatarOption } from "@/data/avatarData";
import { Check, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface AvatarPickerProps {
  open: boolean;
  onClose: () => void;
  onSelect: (avatar: AvatarOption) => void;
  selected?: AvatarOption | null;
}

const AvatarPicker = ({ open, onClose, onSelect, selected }: AvatarPickerProps) => {
  const [category, setCategory] = useState<string>("Tous");

  const filtered = category === "Tous"
    ? avatarOptions
    : avatarOptions.filter((a) => a.category === category);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-xl">Choisir un avatar</DialogTitle>
        </DialogHeader>

        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap pb-2">
          {avatarCategories.map((cat) => (
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
        <div className="overflow-y-auto flex-1 pr-1">
          <motion.div layout className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((avatar) => (
                <motion.button
                  key={avatar.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  onClick={() => {
                    onSelect(avatar);
                    onClose();
                  }}
                  className={`relative aspect-square rounded-full overflow-hidden cursor-pointer border-3 transition-colors group ${
                    selected?.id === avatar.id
                      ? "border-primary ring-2 ring-primary/30"
                      : "border-transparent hover:border-border"
                  }`}
                  title={avatar.name}
                >
                  <img
                    src={avatar.image}
                    alt={avatar.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  {selected?.id === avatar.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/30"
                    >
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                    </motion.div>
                  )}
                  <div className="absolute bottom-0 inset-x-0 bg-black/60 px-1 py-0.5 text-[8px] text-white text-center opacity-0 group-hover:opacity-100 transition-opacity truncate">
                    {avatar.name}
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AvatarPicker;
