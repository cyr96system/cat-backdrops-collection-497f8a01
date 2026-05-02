import s01 from "@/assets/stickers/boy/01-happy.png";
import s02 from "@/assets/stickers/boy/02-sad.png";
import s03 from "@/assets/stickers/boy/03-angry.png";
import s04 from "@/assets/stickers/boy/04-surprised.png";
import s05 from "@/assets/stickers/boy/05-love.png";
import s06 from "@/assets/stickers/boy/06-laughing.png";
import s07 from "@/assets/stickers/boy/07-crying.png";
import s08 from "@/assets/stickers/boy/08-scared.png";
import s09 from "@/assets/stickers/boy/09-sleeping.png";
import s10 from "@/assets/stickers/boy/10-thinking.png";
import s11 from "@/assets/stickers/boy/11-wink.png";
import s12 from "@/assets/stickers/boy/12-shy.png";
import s13 from "@/assets/stickers/boy/13-confused.png";
import s14 from "@/assets/stickers/boy/14-cool.png";
import s15 from "@/assets/stickers/boy/15-tongue.png";
import s16 from "@/assets/stickers/boy/16-embarrassed.png";
import s17 from "@/assets/stickers/boy/17-excited.png";
import s18 from "@/assets/stickers/boy/18-bored.png";
import s19 from "@/assets/stickers/boy/19-sick.png";
import s20 from "@/assets/stickers/boy/20-hungry.png";
import s21 from "@/assets/stickers/boy/21-clap.png";
import s22 from "@/assets/stickers/boy/22-heart-hands.png";
import s23 from "@/assets/stickers/boy/23-thumbs-up.png";
import s24 from "@/assets/stickers/boy/24-no.png";
import s25 from "@/assets/stickers/boy/25-wave.png";
import s26 from "@/assets/stickers/boy/26-party.png";
import s27 from "@/assets/stickers/boy/27-shocked.png";

export interface Sticker {
  id: number;
  emotion: string;
  image: string;
  character: "boy" | "girl" | "man" | "woman";
}

export const boyStickers: Sticker[] = [
  { id: 1, emotion: "Heureux", image: s01, character: "boy" },
  { id: 2, emotion: "Triste", image: s02, character: "boy" },
  { id: 3, emotion: "En colère", image: s03, character: "boy" },
  { id: 4, emotion: "Surpris", image: s04, character: "boy" },
  { id: 5, emotion: "Amoureux", image: s05, character: "boy" },
  { id: 6, emotion: "Mort de rire", image: s06, character: "boy" },
  { id: 7, emotion: "Pleure", image: s07, character: "boy" },
  { id: 8, emotion: "Apeuré", image: s08, character: "boy" },
  { id: 9, emotion: "Endormi", image: s09, character: "boy" },
  { id: 10, emotion: "Réfléchit", image: s10, character: "boy" },
  { id: 11, emotion: "Clin d'œil", image: s11, character: "boy" },
  { id: 12, emotion: "Timide", image: s12, character: "boy" },
  { id: 13, emotion: "Confus", image: s13, character: "boy" },
  { id: 14, emotion: "Cool", image: s14, character: "boy" },
  { id: 15, emotion: "Taquin", image: s15, character: "boy" },
  { id: 16, emotion: "Gêné", image: s16, character: "boy" },
  { id: 17, emotion: "Excité", image: s17, character: "boy" },
  { id: 18, emotion: "Ennuyé", image: s18, character: "boy" },
  { id: 19, emotion: "Malade", image: s19, character: "boy" },
  { id: 20, emotion: "Affamé", image: s20, character: "boy" },
  { id: 21, emotion: "Applaudit", image: s21, character: "boy" },
  { id: 22, emotion: "Cœur", image: s22, character: "boy" },
  { id: 23, emotion: "Pouce levé", image: s23, character: "boy" },
  { id: 24, emotion: "Non", image: s24, character: "boy" },
  { id: 25, emotion: "Salut", image: s25, character: "boy" },
  { id: 26, emotion: "Fête", image: s26, character: "boy" },
  { id: 27, emotion: "Choqué", image: s27, character: "boy" },
];
