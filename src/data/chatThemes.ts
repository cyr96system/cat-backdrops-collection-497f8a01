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
import manga11 from "@/assets/themes/manga-11.jpg";
import manga12 from "@/assets/themes/manga-12.jpg";
import manga13 from "@/assets/themes/manga-13.jpg";
import manga14 from "@/assets/themes/manga-14.jpg";
import manga15 from "@/assets/themes/manga-15.jpg";
import manga16 from "@/assets/themes/manga-16.jpg";
import manga17 from "@/assets/themes/manga-17.jpg";
import manga18 from "@/assets/themes/manga-18.jpg";
import manga19 from "@/assets/themes/manga-19.jpg";
import manga20 from "@/assets/themes/manga-20.jpg";
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
import realistic11 from "@/assets/themes/realistic-11.jpg";
import realistic12 from "@/assets/themes/realistic-12.jpg";
import realistic13 from "@/assets/themes/realistic-13.jpg";
import realistic14 from "@/assets/themes/realistic-14.jpg";
import realistic15 from "@/assets/themes/realistic-15.jpg";
import realistic16 from "@/assets/themes/realistic-16.jpg";
import realistic17 from "@/assets/themes/realistic-17.jpg";
import realistic18 from "@/assets/themes/realistic-18.jpg";
import realistic19 from "@/assets/themes/realistic-19.jpg";
import realistic20 from "@/assets/themes/realistic-20.jpg";
// Romance
import romance1 from "@/assets/themes/romance-1.jpg";
import romance2 from "@/assets/themes/romance-2.jpg";
import romance3 from "@/assets/themes/romance-3.jpg";
import romance4 from "@/assets/themes/romance-4.jpg";
import romance5 from "@/assets/themes/romance-5.jpg";
import romance6 from "@/assets/themes/romance-6.jpg";
import romance7 from "@/assets/themes/romance-7.jpg";
import romance8 from "@/assets/themes/romance-8.jpg";
import romance9 from "@/assets/themes/romance-9.jpg";
import romance10 from "@/assets/themes/romance-10.jpg";
// Angélique
import angelic1 from "@/assets/themes/angelic-1.jpg";
import angelic2 from "@/assets/themes/angelic-2.jpg";
import angelic3 from "@/assets/themes/angelic-3.jpg";
import angelic4 from "@/assets/themes/angelic-4.jpg";
import angelic5 from "@/assets/themes/angelic-5.jpg";

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
  { id: 61, name: "Aura Guerrier", image: manga11, category: "Manga" },
  { id: 62, name: "Magical Girl", image: manga12, category: "Manga" },
  { id: 63, name: "Mecha Tokyo", image: manga13, category: "Manga" },
  { id: 64, name: "Collines Ghibli", image: manga14, category: "Manga" },
  { id: 65, name: "Village Ninja", image: manga15, category: "Manga" },
  { id: 66, name: "Cathédrale Sombre", image: manga16, category: "Manga" },
  { id: 67, name: "Sakura Lycée", image: manga17, category: "Manga" },
  { id: 68, name: "Royaume Marin", image: manga18, category: "Manga" },
  { id: 69, name: "Phénix Légendaire", image: manga19, category: "Manga" },
  { id: 70, name: "Festival Hiver", image: manga20, category: "Manga" },

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
  { id: 71, name: "Lac Brumeux", image: realistic11, category: "Réaliste" },
  { id: 72, name: "Bibliothèque", image: realistic12, category: "Réaliste" },
  { id: 73, name: "Chambre Océan", image: realistic13, category: "Réaliste" },
  { id: 74, name: "Route Côtière", image: realistic14, category: "Réaliste" },
  { id: 75, name: "Loup Neige", image: realistic15, category: "Réaliste" },
  { id: 76, name: "Café Paris", image: realistic16, category: "Réaliste" },
  { id: 77, name: "Playground", image: realistic17, category: "Réaliste" },
  { id: 78, name: "Montgolfière Aube", image: realistic18, category: "Réaliste" },
  { id: 79, name: "Violoniste Pont", image: realistic19, category: "Réaliste" },
  { id: 80, name: "Cascade Jungle", image: realistic20, category: "Réaliste" },

  // Romance
  { id: 81, name: "Dîner Parisien", image: romance1, category: "Romance" },
  { id: 82, name: "Baiser Sakura", image: romance2, category: "Romance" },
  { id: 83, name: "Plage Romantique", image: romance3, category: "Romance" },
  { id: 84, name: "Chambre Pétales", image: romance4, category: "Romance" },
  { id: 85, name: "Lettre d'Amour", image: romance5, category: "Romance" },
  { id: 86, name: "Danse sous la Pluie", image: romance6, category: "Romance" },
  { id: 87, name: "Promenade Automne", image: romance7, category: "Romance" },
  { id: 88, name: "Gondole Venise", image: romance8, category: "Romance" },
  { id: 89, name: "Ballons Cœur", image: romance9, category: "Romance" },
  { id: 90, name: "Nuit Étoilée", image: romance10, category: "Romance" },

  // Angélique
  { id: 91, name: "Ange Céleste", image: angelic1, category: "Angélique" },
  { id: 92, name: "Portes du Paradis", image: angelic2, category: "Angélique" },
  { id: 93, name: "Colombe Divine", image: angelic3, category: "Angélique" },
  { id: 94, name: "Ailes de Lumière", image: angelic4, category: "Angélique" },
  { id: 95, name: "Cathédrale Sacrée", image: angelic5, category: "Angélique" },


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

export const themeCategories = ["Tous", "Manga", "Nature", "IA", "Pays", "Réaliste", "Romance", "Angélique", "Favoris"];
