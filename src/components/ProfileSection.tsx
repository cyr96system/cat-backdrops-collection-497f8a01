import { useState } from "react";
import { Camera, Edit2, MapPin, Calendar, Link as LinkIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import AvatarPicker from "@/components/AvatarPicker";
import type { AvatarOption } from "@/data/avatarData";

const ProfileSection = () => {
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarOption | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [username] = useState("Utilisateur");
  const [bio] = useState("Bienvenue sur mon profil ! 🎨");

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Cover / Banner */}
      <div className="relative h-36 rounded-t-2xl bg-gradient-to-r from-primary/60 via-accent/40 to-primary/30 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj48cGF0aCBkPSJNMCAyMGgyME0yMCAwdjIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2EpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50" />
      </div>

      {/* Profile info */}
      <div className="relative bg-card rounded-b-2xl border border-t-0 border-border px-6 pb-6">
        {/* Avatar */}
        <div className="flex justify-between items-start">
          <div className="-mt-12 relative group">
            <Avatar className="w-24 h-24 border-4 border-card shadow-lg">
              {selectedAvatar ? (
                <AvatarImage src={selectedAvatar.image} alt={selectedAvatar.name} />
              ) : (
                <AvatarFallback className="text-2xl font-bold bg-muted text-muted-foreground">
                  {username.charAt(0).toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>
            <button
              onClick={() => setPickerOpen(true)}
              className="absolute inset-0 flex items-center justify-center rounded-full bg-black/0 group-hover:bg-black/40 transition-colors cursor-pointer"
            >
              <Camera className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
          <div className="mt-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPickerOpen(true)}
              className="gap-1.5"
            >
              <Edit2 className="w-3.5 h-3.5" />
              Modifier l'avatar
            </Button>
          </div>
        </div>

        {/* Name & Bio */}
        <div className="mt-3 space-y-1">
          <h2 className="text-xl font-bold text-foreground">{username}</h2>
          <p className="text-sm text-muted-foreground">@{username.toLowerCase()}</p>
          <p className="text-sm text-foreground mt-2">{bio}</p>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 mt-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" /> Paris, France
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> Rejoint en Avril 2026
          </span>
          <span className="flex items-center gap-1">
            <LinkIcon className="w-3.5 h-3.5" /> monsite.fr
          </span>
        </div>

        {/* Stats */}
        <div className="flex gap-6 mt-4 pt-4 border-t border-border">
          <div className="text-center">
            <div className="text-lg font-bold text-foreground">128</div>
            <div className="text-xs text-muted-foreground">Abonnements</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-foreground">1.2k</div>
            <div className="text-xs text-muted-foreground">Abonnés</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-foreground">342</div>
            <div className="text-xs text-muted-foreground">Publications</div>
          </div>
        </div>

        {/* Selected avatar info */}
        {selectedAvatar && (
          <div className="mt-4 pt-3 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Avatar : <span className="font-medium text-foreground">{selectedAvatar.name}</span>
              <span className="ml-1 text-muted-foreground">({selectedAvatar.category})</span>
            </p>
          </div>
        )}
      </div>

      <AvatarPicker
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        onSelect={setSelectedAvatar}
        selected={selectedAvatar}
      />
    </div>
  );
};

export default ProfileSection;
