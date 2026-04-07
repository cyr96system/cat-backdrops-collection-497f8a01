// Manga
import manga1 from "@/assets/themes/manga-1.jpg";
import manga2 from "@/assets/themes/manga-2.jpg";
import manga3 from "@/assets/themes/manga-3.jpg";
import manga4 from "@/assets/themes/manga-4.jpg";
import manga5 from "@/assets/themes/manga-5.jpg";
import manga6 from "@/assets/themes/manga-6.jpg";
import manga7 from "@/assets/themes/manga-7.jpg";
import manga8 from "@/assets/themes/manga-8.jpg";
import manga9 from "@/assets/themes/manga-9.jpg";
import manga10 from "@/assets/themes/manga-10.jpg";
// Nature
import nature1 from "@/assets/themes/nature-1.jpg";
import nature2 from "@/assets/themes/nature-2.jpg";
import nature3 from "@/assets/themes/nature-3.jpg";
import nature4 from "@/assets/themes/nature-4.jpg";
import nature5 from "@/assets/themes/nature-5.jpg";
import nature6 from "@/assets/themes/nature-6.jpg";
import nature7 from "@/assets/themes/nature-7.jpg";
import nature8 from "@/assets/themes/nature-8.jpg";
import nature9 from "@/assets/themes/nature-9.jpg";
import nature10 from "@/assets/themes/nature-10.jpg";
// AI
import ai1 from "@/assets/themes/ai-1.jpg";
import ai2 from "@/assets/themes/ai-2.jpg";
import ai3 from "@/assets/themes/ai-3.jpg";
import ai4 from "@/assets/themes/ai-4.jpg";
import ai5 from "@/assets/themes/ai-5.jpg";
import ai6 from "@/assets/themes/ai-6.jpg";
import ai7 from "@/assets/themes/ai-7.jpg";
import ai8 from "@/assets/themes/ai-8.jpg";
import ai9 from "@/assets/themes/ai-9.jpg";
import ai10 from "@/assets/themes/ai-10.jpg";
// Countries
import country1 from "@/assets/themes/country-1.jpg";
import country2 from "@/assets/themes/country-2.jpg";
import country3 from "@/assets/themes/country-3.jpg";
import country4 from "@/assets/themes/country-4.jpg";
import country5 from "@/assets/themes/country-5.jpg";
import country6 from "@/assets/themes/country-6.jpg";
import country7 from "@/assets/themes/country-7.jpg";
import country8 from "@/assets/themes/country-8.jpg";
import country9 from "@/assets/themes/country-9.jpg";
import country10 from "@/assets/themes/country-10.jpg";
// Realistic
import realistic1 from "@/assets/themes/realistic-1.jpg";
import realistic2 from "@/assets/themes/realistic-2.jpg";
import realistic3 from "@/assets/themes/realistic-3.jpg";
import realistic4 from "@/assets/themes/realistic-4.jpg";
import realistic5 from "@/assets/themes/realistic-5.jpg";
import realistic6 from "@/assets/themes/realistic-6.jpg";
import realistic7 from "@/assets/themes/realistic-7.jpg";
import realistic8 from "@/assets/themes/realistic-8.jpg";
import realistic9 from "@/assets/themes/realistic-9.jpg";
import realistic10 from "@/assets/themes/realistic-10.jpg";

export interface ChatTheme {
  id: number;
  name: string;
  image: string;
  category: string;
}

export const chatThemes: ChatTheme[] = [
  // Manga / Anime
  { id: 1, name: "Sakura Samurai", image: manga1, category: "Manga" },
  { id: 2, name: "Cyberpunk Neon", image: manga2, category: "Manga" },
  { id: 3, name: "Sunset Ghibli", image: manga3, category: "Manga" },
  { id: 4, name: "Dragon Castle", image: manga4, category: "Manga" },
  { id: 5, name: "Forêt Enchantée", image: manga5, category: "Manga" },
  { id: 6, name: "Cosmos Anime", image: manga6, category: "Manga" },
  { id: 7, name: "Tokyo Rain", image: manga7, category: "Manga" },
  { id: 8, name: "Temple Enneigé", image: manga8, category: "Manga" },
  { id: 9, name: "Océan Corail", image: manga9, category: "Manga" },
  { id: 10, name: "Îles Flottantes", image: manga10, category: "Manga" },

  // Nature
  { id: 11, name: "Aurore Boréale", image: nature1, category: "Nature" },
  { id: 12, name: "Plage Tropicale", image: nature2, category: "Nature" },
  { id: 13, name: "Bambou Zen", image: nature3, category: "Nature" },
  { id: 14, name: "Lavande Provence", image: nature4, category: "Nature" },
  { id: 15, name: "Cascade Tropicale", image: nature5, category: "Nature" },
  { id: 16, name: "Orage Océan", image: nature6, category: "Nature" },
  { id: 17, name: "Forêt Automne", image: nature7, category: "Nature" },
  { id: 18, name: "Forêt Neige", image: nature8, category: "Nature" },
  { id: 19, name: "Dunes Sahara", image: nature9, category: "Nature" },
  { id: 20, name: "Voie Lactée", image: nature10, category: "Nature" },

  // IA / Futuriste
  { id: 21, name: "Cyberpunk City", image: ai1, category: "IA" },
  { id: 22, name: "Réseau Neural", image: ai2, category: "IA" },
  { id: 23, name: "Surréalisme", image: ai3, category: "IA" },
  { id: 24, name: "Robot IA", image: ai4, category: "IA" },
  { id: 25, name: "Fractal Art", image: ai5, category: "IA" },
  { id: 26, name: "Station Spatiale", image: ai6, category: "IA" },
  { id: 27, name: "Synthwave 80s", image: ai7, category: "IA" },
  { id: 28, name: "Code Matrix", image: ai8, category: "IA" },
  { id: 29, name: "Chrome Liquide", image: ai9, category: "IA" },
  { id: 30, name: "Méduses Abysses", image: ai10, category: "IA" },

  // Pays / Monuments
  { id: 31, name: "Paris Tour Eiffel", image: country1, category: "Pays" },
  { id: 32, name: "Mont Fuji Japon", image: country2, category: "Pays" },
  { id: 33, name: "New York City", image: country3, category: "Pays" },
  { id: 34, name: "Santorin Grèce", image: country4, category: "Pays" },
  { id: 35, name: "Dubai Skyline", image: country5, category: "Pays" },
  { id: 36, name: "Machu Picchu", image: country6, category: "Pays" },
  { id: 37, name: "Venise Italie", image: country7, category: "Pays" },
  { id: 38, name: "Muraille Chine", image: country8, category: "Pays" },
  { id: 39, name: "Safari Afrique", image: country9, category: "Pays" },
  { id: 40, name: "Maldives Paradis", image: country10, category: "Pays" },

  // Réaliste
  { id: 41, name: "Golden Hour", image: realistic1, category: "Réaliste" },
  { id: 42, name: "Urban Night", image: realistic2, category: "Réaliste" },
  { id: 43, name: "Rooftop Party", image: realistic3, category: "Réaliste" },
  { id: 44, name: "Ballerine", image: realistic4, category: "Réaliste" },
  { id: 45, name: "Musicien Rue", image: realistic5, category: "Réaliste" },
  { id: 46, name: "Chaton Mignon", image: realistic6, category: "Réaliste" },
  { id: 47, name: "Lion Majestueux", image: realistic7, category: "Réaliste" },
  { id: 48, name: "Cheval Océan", image: realistic8, category: "Réaliste" },
  { id: 49, name: "Café Vintage", image: realistic9, category: "Réaliste" },
  { id: 50, name: "Cappadoce", image: realistic10, category: "Réaliste" },

  // Bonus - Using nature/country duplicates with different names for 51-60
  { id: 51, name: "Sakura & Lune", image: manga1, category: "Favoris" },
  { id: 52, name: "Nuit Néon", image: manga2, category: "Favoris" },
  { id: 53, name: "Plage Dorée", image: nature2, category: "Favoris" },
  { id: 54, name: "Automne Magique", image: nature7, category: "Favoris" },
  { id: 55, name: "Paris by Night", image: country1, category: "Favoris" },
  { id: 56, name: "Synthwave Retro", image: ai7, category: "Favoris" },
  { id: 57, name: "Étoiles Filantes", image: nature10, category: "Favoris" },
  { id: 58, name: "Safari Sunset", image: country9, category: "Favoris" },
  { id: 59, name: "Jellyfish Glow", image: ai10, category: "Favoris" },
  { id: 60, name: "Montgolfières", image: realistic10, category: "Favoris" },
];

export const themeCategories = ["Tous", "Manga", "Nature", "IA", "Pays", "Réaliste", "Favoris"];
