// Men
import man1 from "@/assets/avatars/man-1.jpg";
import man2 from "@/assets/avatars/man-2.jpg";
import man3 from "@/assets/avatars/man-3.jpg";
import man4 from "@/assets/avatars/man-4.jpg";
import man5 from "@/assets/avatars/man-5.jpg";
import man6 from "@/assets/avatars/man-6.jpg";
import man7 from "@/assets/avatars/man-7.jpg";
import man8 from "@/assets/avatars/man-8.jpg";
import man9 from "@/assets/avatars/man-9.jpg";
import man10 from "@/assets/avatars/man-10.jpg";
import man11 from "@/assets/avatars/man-11.jpg";
import man12 from "@/assets/avatars/man-12.jpg";
import man13 from "@/assets/avatars/man-13.jpg";
import man14 from "@/assets/avatars/man-14.jpg";
import man15 from "@/assets/avatars/man-15.jpg";
import man16 from "@/assets/avatars/man-16.jpg";
import man17 from "@/assets/avatars/man-17.jpg";
import man18 from "@/assets/avatars/man-18.jpg";
import man19 from "@/assets/avatars/man-19.jpg";
import man20 from "@/assets/avatars/man-20.jpg";
// Women
import woman1 from "@/assets/avatars/woman-1.jpg";
import woman2 from "@/assets/avatars/woman-2.jpg";
import woman3 from "@/assets/avatars/woman-3.jpg";
import woman4 from "@/assets/avatars/woman-4.jpg";
import woman5 from "@/assets/avatars/woman-5.jpg";
import woman6 from "@/assets/avatars/woman-6.jpg";
import woman7 from "@/assets/avatars/woman-7.jpg";
import woman8 from "@/assets/avatars/woman-8.jpg";
import woman9 from "@/assets/avatars/woman-9.jpg";
import woman10 from "@/assets/avatars/woman-10.jpg";
import woman11 from "@/assets/avatars/woman-11.jpg";
import woman12 from "@/assets/avatars/woman-12.jpg";
import woman13 from "@/assets/avatars/woman-13.jpg";
import woman14 from "@/assets/avatars/woman-14.jpg";
import woman15 from "@/assets/avatars/woman-15.jpg";
import woman16 from "@/assets/avatars/woman-16.jpg";
import woman17 from "@/assets/avatars/woman-17.jpg";
import woman18 from "@/assets/avatars/woman-18.jpg";
import woman19 from "@/assets/avatars/woman-19.jpg";
import woman20 from "@/assets/avatars/woman-20.jpg";
// Children
import child1 from "@/assets/avatars/child-1.jpg";
import child2 from "@/assets/avatars/child-2.jpg";
import child3 from "@/assets/avatars/child-3.jpg";
import child4 from "@/assets/avatars/child-4.jpg";
import child5 from "@/assets/avatars/child-5.jpg";
import child6 from "@/assets/avatars/child-6.jpg";
import child7 from "@/assets/avatars/child-7.jpg";
import child8 from "@/assets/avatars/child-8.jpg";
import child9 from "@/assets/avatars/child-9.jpg";
import child10 from "@/assets/avatars/child-10.jpg";
import child11 from "@/assets/avatars/child-11.jpg";
import child12 from "@/assets/avatars/child-12.jpg";
import child13 from "@/assets/avatars/child-13.jpg";
import child14 from "@/assets/avatars/child-14.jpg";
import child15 from "@/assets/avatars/child-15.jpg";
import child16 from "@/assets/avatars/child-16.jpg";
import child17 from "@/assets/avatars/child-17.jpg";
import child18 from "@/assets/avatars/child-18.jpg";
import child19 from "@/assets/avatars/child-19.jpg";
import child20 from "@/assets/avatars/child-20.jpg";
// Extras
import extra1 from "@/assets/avatars/extra-1.jpg";
import extra2 from "@/assets/avatars/extra-2.jpg";
import extra3 from "@/assets/avatars/extra-3.jpg";
import extra4 from "@/assets/avatars/extra-4.jpg";
import extra5 from "@/assets/avatars/extra-5.jpg";
import extra6 from "@/assets/avatars/extra-6.jpg";
import extra7 from "@/assets/avatars/extra-7.jpg";
import extra8 from "@/assets/avatars/extra-8.jpg";
import extra9 from "@/assets/avatars/extra-9.jpg";
import extra10 from "@/assets/avatars/extra-10.jpg";
import extra11 from "@/assets/avatars/extra-11.jpg";
import extra12 from "@/assets/avatars/extra-12.jpg";
import extra13 from "@/assets/avatars/extra-13.jpg";
import extra14 from "@/assets/avatars/extra-14.jpg";
import extra15 from "@/assets/avatars/extra-15.jpg";
import extra16 from "@/assets/avatars/extra-16.jpg";
// Babies
import baby1 from "@/assets/avatars/baby-1.jpg";
import baby2 from "@/assets/avatars/baby-2.jpg";

export interface AvatarOption {
  id: number;
  name: string;
  image: string;
  category: "Homme" | "Femme" | "Enfant" | "Bébé" | "Pro";
}

export const avatarOptions: AvatarOption[] = [
  // Hommes
  { id: 1, name: "Takeshi", image: man1, category: "Homme" },
  { id: 2, name: "Professeur", image: man2, category: "Homme" },
  { id: 3, name: "Sunny Boy", image: man3, category: "Homme" },
  { id: 4, name: "Silver Fox", image: man4, category: "Homme" },
  { id: 5, name: "Ninja Rouge", image: man5, category: "Homme" },
  { id: 6, name: "Business Man", image: man6, category: "Homme" },
  { id: 7, name: "Punk Vert", image: man7, category: "Homme" },
  { id: 8, name: "Sage", image: man8, category: "Homme" },
  { id: 9, name: "Street Style", image: man9, category: "Homme" },
  { id: 10, name: "Cool Guy", image: man10, category: "Homme" },
  { id: 11, name: "Samouraï", image: man11, category: "Homme" },
  { id: 12, name: "Cyberpunk", image: man12, category: "Homme" },
  { id: 13, name: "Étudiant", image: man13, category: "Homme" },
  { id: 14, name: "Combattant", image: man14, category: "Homme" },
  { id: 15, name: "Chef Cuisinier", image: man15, category: "Homme" },
  { id: 16, name: "Détective", image: man16, category: "Homme" },
  { id: 17, name: "Rockeur", image: man17, category: "Homme" },
  { id: 18, name: "Magicien", image: man18, category: "Homme" },
  { id: 19, name: "Astronaute", image: man19, category: "Homme" },
  { id: 20, name: "Sportif", image: man20, category: "Homme" },
  // Femmes
  { id: 21, name: "Sakura", image: woman1, category: "Femme" },
  { id: 22, name: "Intellectuelle", image: woman2, category: "Femme" },
  { id: 23, name: "Automne", image: woman3, category: "Femme" },
  { id: 24, name: "Photographe", image: woman4, category: "Femme" },
  { id: 25, name: "Hiver", image: woman5, category: "Femme" },
  { id: 26, name: "Business Woman", image: woman6, category: "Femme" },
  { id: 27, name: "Kawaii", image: woman7, category: "Femme" },
  { id: 28, name: "Sportive", image: woman8, category: "Femme" },
  { id: 29, name: "DJ Girl", image: woman9, category: "Femme" },
  { id: 30, name: "Princesse", image: woman10, category: "Femme" },
  { id: 31, name: "Afro Queen", image: woman11, category: "Femme" },
  { id: 32, name: "Kimono", image: woman12, category: "Femme" },
  { id: 33, name: "Inventrice", image: woman13, category: "Femme" },
  { id: 34, name: "Neko Girl", image: woman14, category: "Femme" },
  { id: 35, name: "Étoilée", image: woman15, category: "Femme" },
  { id: 36, name: "Grand-Mère", image: woman16, category: "Femme" },
  { id: 37, name: "Cyber Girl", image: woman17, category: "Femme" },
  { id: 38, name: "Bohème", image: woman18, category: "Femme" },
  { id: 39, name: "Capitaine", image: woman19, category: "Femme" },
  { id: 40, name: "Astronaute", image: woman20, category: "Femme" },
  // Enfants
  { id: 41, name: "Petit Héros", image: child1, category: "Enfant" },
  { id: 42, name: "Petite Fille", image: child2, category: "Enfant" },
  { id: 43, name: "Écolier", image: child3, category: "Enfant" },
  { id: 44, name: "Chat Mignon", image: child4, category: "Enfant" },
  { id: 45, name: "Super Héros", image: child5, category: "Enfant" },
  { id: 46, name: "Fleuriste", image: child6, category: "Enfant" },
  { id: 47, name: "Footballeur", image: child7, category: "Enfant" },
  { id: 48, name: "Fée", image: child8, category: "Enfant" },
  { id: 49, name: "Artiste", image: child9, category: "Enfant" },
  { id: 50, name: "Sorcière", image: child10, category: "Enfant" },
  { id: 51, name: "Pirate", image: child11, category: "Enfant" },
  { id: 52, name: "Lapin", image: child12, category: "Enfant" },
  { id: 53, name: "Cosmonaute", image: child13, category: "Enfant" },
  { id: 54, name: "Chanteuse", image: child14, category: "Enfant" },
  { id: 55, name: "Ninja", image: child15, category: "Enfant" },
  { id: 56, name: "Papillon", image: child16, category: "Enfant" },
  { id: 57, name: "Petit Chef", image: child17, category: "Enfant" },
  { id: 58, name: "Plage", image: child18, category: "Enfant" },
  { id: 59, name: "Dragon", image: child19, category: "Enfant" },
  { id: 60, name: "Panda", image: child20, category: "Enfant" },
  // Extras Manga
  { id: 61, name: "Mystérieux", image: extra1, category: "Homme" },
  { id: 62, name: "Sakura Bleue", image: extra2, category: "Femme" },
  { id: 63, name: "Épéiste", image: extra3, category: "Homme" },
  { id: 64, name: "Magical Girl", image: extra4, category: "Femme" },
  { id: 65, name: "Aventurier", image: extra5, category: "Enfant" },
  { id: 66, name: "Écolière", image: extra6, category: "Enfant" },
  { id: 67, name: "Chasseur", image: extra7, category: "Homme" },
  { id: 68, name: "Archère Elfe", image: extra8, category: "Femme" },
  { id: 69, name: "Bébé Sourire", image: baby1, category: "Bébé" },
  { id: 70, name: "Bébé Ribbon", image: baby2, category: "Bébé" },
  { id: 71, name: "Guerrier Argent", image: extra9, category: "Homme" },
  { id: 72, name: "Idole Pop", image: extra10, category: "Femme" },
  { id: 73, name: "Samouraï", image: extra11, category: "Femme" },
  { id: 74, name: "Lycéen", image: extra12, category: "Homme" },
  { id: 75, name: "Petit Mage", image: extra13, category: "Enfant" },
  { id: 76, name: "Docteure", image: extra14, category: "Pro" },
  { id: 77, name: "Motard", image: extra15, category: "Homme" },
  { id: 78, name: "Danseuse", image: extra16, category: "Femme" },
];

export const avatarCategories = ["Tous", "Homme", "Femme", "Enfant", "Bébé", "Pro"] as const;
