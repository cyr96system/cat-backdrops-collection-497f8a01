import { useState } from "react";
import { chatThemes } from "@/data/chatThemes";
import ChatPreview from "@/components/ChatPreview";
import ThemeGrid from "@/components/ThemeGrid";
import ProfileSection from "@/components/ProfileSection";

const Index = () => {
  const [selected, setSelected] = useState(chatThemes[0]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl py-8 px-4 space-y-10">
        {/* Profile Section */}
        <ProfileSection />

        {/* Separator */}
        <div className="border-t border-border" />

        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Thèmes de Chat
          </h1>
          <p className="text-muted-foreground">
            Choisissez parmi 60 arrière-plans pour personnaliser votre chat
          </p>
        </div>

        {/* Preview */}
        <div className="flex justify-center">
          <ChatPreview backgroundImage={selected.image} />
        </div>

        {/* Selected info */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
            <img
              src={selected.image}
              alt=""
              className="w-4 h-4 rounded-full object-cover border border-border"
            />
            {selected.name}
          </span>
        </div>

        {/* Theme grid */}
        <ThemeGrid selected={selected} onSelect={setSelected} />
      </div>
    </div>
  );
};

export default Index;
