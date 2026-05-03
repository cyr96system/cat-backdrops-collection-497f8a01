import b01 from "@/assets/stickers/boy/01-happy.png";
import b02 from "@/assets/stickers/boy/02-sad.png";
import b03 from "@/assets/stickers/boy/03-angry.png";
import b04 from "@/assets/stickers/boy/04-surprised.png";
import b05 from "@/assets/stickers/boy/05-love.png";
import b06 from "@/assets/stickers/boy/06-laughing.png";
import b07 from "@/assets/stickers/boy/07-crying.png";
import b08 from "@/assets/stickers/boy/08-scared.png";
import b09 from "@/assets/stickers/boy/09-sleeping.png";
import b10 from "@/assets/stickers/boy/10-thinking.png";
import b11 from "@/assets/stickers/boy/11-wink.png";
import b12 from "@/assets/stickers/boy/12-shy.png";
import b13 from "@/assets/stickers/boy/13-confused.png";
import b14 from "@/assets/stickers/boy/14-cool.png";
import b15 from "@/assets/stickers/boy/15-tongue.png";
import b16 from "@/assets/stickers/boy/16-embarrassed.png";
import b17 from "@/assets/stickers/boy/17-excited.png";
import b18 from "@/assets/stickers/boy/18-bored.png";
import b19 from "@/assets/stickers/boy/19-sick.png";
import b20 from "@/assets/stickers/boy/20-hungry.png";
import b21 from "@/assets/stickers/boy/21-clap.png";
import b22 from "@/assets/stickers/boy/22-heart-hands.png";
import b23 from "@/assets/stickers/boy/23-thumbs-up.png";
import b24 from "@/assets/stickers/boy/24-no.png";
import b25 from "@/assets/stickers/boy/25-wave.png";
import b26 from "@/assets/stickers/boy/26-party.png";
import b27 from "@/assets/stickers/boy/27-shocked.png";

import g01 from "@/assets/stickers/girl/01-happy.png";
import g02 from "@/assets/stickers/girl/02-sad.png";
import g03 from "@/assets/stickers/girl/03-angry.png";
import g04 from "@/assets/stickers/girl/04-surprised.png";
import g05 from "@/assets/stickers/girl/05-love.png";
import g06 from "@/assets/stickers/girl/06-laughing.png";
import g07 from "@/assets/stickers/girl/07-crying.png";
import g08 from "@/assets/stickers/girl/08-scared.png";
import g09 from "@/assets/stickers/girl/09-sleeping.png";
import g10 from "@/assets/stickers/girl/10-thinking.png";
import g11 from "@/assets/stickers/girl/11-wink.png";
import g12 from "@/assets/stickers/girl/12-shy.png";
import g13 from "@/assets/stickers/girl/13-confused.png";
import g14 from "@/assets/stickers/girl/14-cool.png";
import g15 from "@/assets/stickers/girl/15-tongue.png";
import g16 from "@/assets/stickers/girl/16-embarrassed.png";
import g17 from "@/assets/stickers/girl/17-excited.png";
import g18 from "@/assets/stickers/girl/18-bored.png";
import g19 from "@/assets/stickers/girl/19-sick.png";
import g20 from "@/assets/stickers/girl/20-hungry.png";
import g21 from "@/assets/stickers/girl/21-clap.png";
import g22 from "@/assets/stickers/girl/22-heart-hands.png";
import g23 from "@/assets/stickers/girl/23-thumbs-up.png";
import g24 from "@/assets/stickers/girl/24-no.png";
import g25 from "@/assets/stickers/girl/25-wave.png";
import g26 from "@/assets/stickers/girl/26-party.png";
import g27 from "@/assets/stickers/girl/27-shocked.png";

import t01 from "@/assets/stickers/teen-boy/01-happy.png";
import t02 from "@/assets/stickers/teen-boy/02-sad.png";
import t03 from "@/assets/stickers/teen-boy/03-angry.png";
import t04 from "@/assets/stickers/teen-boy/04-surprised.png";
import t05 from "@/assets/stickers/teen-boy/05-love.png";
import t06 from "@/assets/stickers/teen-boy/06-laughing.png";
import t07 from "@/assets/stickers/teen-boy/07-crying.png";
import t08 from "@/assets/stickers/teen-boy/08-scared.png";
import t09 from "@/assets/stickers/teen-boy/09-sleeping.png";
import t10 from "@/assets/stickers/teen-boy/10-thinking.png";
import t11 from "@/assets/stickers/teen-boy/11-wink.png";
import t12 from "@/assets/stickers/teen-boy/12-shy.png";
import t13 from "@/assets/stickers/teen-boy/13-confused.png";
import t14 from "@/assets/stickers/teen-boy/14-cool.png";
import t15 from "@/assets/stickers/teen-boy/15-tongue.png";
import t17 from "@/assets/stickers/teen-boy/17-excited.png";
import t18 from "@/assets/stickers/teen-boy/18-bored.png";
import t19 from "@/assets/stickers/teen-boy/19-sick.png";
import t20 from "@/assets/stickers/teen-boy/20-hungry.png";

export interface Sticker {
  id: number;
  emotion: string;
  image: string;
  character: "boy" | "girl" | "teen-boy" | "man" | "woman";
}

export const boyStickers: Sticker[] = [
  { id: 1, emotion: "Heureux", image: b01, character: "boy" },
  { id: 2, emotion: "Triste", image: b02, character: "boy" },
  { id: 3, emotion: "En colère", image: b03, character: "boy" },
  { id: 4, emotion: "Surpris", image: b04, character: "boy" },
  { id: 5, emotion: "Amoureux", image: b05, character: "boy" },
  { id: 6, emotion: "Mort de rire", image: b06, character: "boy" },
  { id: 7, emotion: "Pleure", image: b07, character: "boy" },
  { id: 8, emotion: "Apeuré", image: b08, character: "boy" },
  { id: 9, emotion: "Endormi", image: b09, character: "boy" },
  { id: 10, emotion: "Réfléchit", image: b10, character: "boy" },
  { id: 11, emotion: "Clin d'œil", image: b11, character: "boy" },
  { id: 12, emotion: "Timide", image: b12, character: "boy" },
  { id: 13, emotion: "Confus", image: b13, character: "boy" },
  { id: 14, emotion: "Cool", image: b14, character: "boy" },
  { id: 15, emotion: "Taquin", image: b15, character: "boy" },
  { id: 16, emotion: "Gêné", image: b16, character: "boy" },
  { id: 17, emotion: "Excité", image: b17, character: "boy" },
  { id: 18, emotion: "Ennuyé", image: b18, character: "boy" },
  { id: 19, emotion: "Malade", image: b19, character: "boy" },
  { id: 20, emotion: "Affamé", image: b20, character: "boy" },
  { id: 21, emotion: "Applaudit", image: b21, character: "boy" },
  { id: 22, emotion: "Cœur", image: b22, character: "boy" },
  { id: 23, emotion: "Pouce levé", image: b23, character: "boy" },
  { id: 24, emotion: "Non", image: b24, character: "boy" },
  { id: 25, emotion: "Salut", image: b25, character: "boy" },
  { id: 26, emotion: "Fête", image: b26, character: "boy" },
  { id: 27, emotion: "Choqué", image: b27, character: "boy" },
];

export const girlStickers: Sticker[] = [
  { id: 101, emotion: "Heureux", image: g01, character: "girl" },
  { id: 102, emotion: "Triste", image: g02, character: "girl" },
  { id: 103, emotion: "En colère", image: g03, character: "girl" },
  { id: 104, emotion: "Surpris", image: g04, character: "girl" },
  { id: 105, emotion: "Amoureux", image: g05, character: "girl" },
  { id: 106, emotion: "Mort de rire", image: g06, character: "girl" },
  { id: 107, emotion: "Pleure", image: g07, character: "girl" },
  { id: 108, emotion: "Apeuré", image: g08, character: "girl" },
  { id: 109, emotion: "Endormi", image: g09, character: "girl" },
  { id: 110, emotion: "Réfléchit", image: g10, character: "girl" },
  { id: 111, emotion: "Clin d'œil", image: g11, character: "girl" },
  { id: 112, emotion: "Timide", image: g12, character: "girl" },
  { id: 113, emotion: "Confus", image: g13, character: "girl" },
  { id: 114, emotion: "Cool", image: g14, character: "girl" },
  { id: 115, emotion: "Taquin", image: g15, character: "girl" },
  { id: 116, emotion: "Gêné", image: g16, character: "girl" },
  { id: 117, emotion: "Excité", image: g17, character: "girl" },
  { id: 118, emotion: "Ennuyé", image: g18, character: "girl" },
  { id: 119, emotion: "Malade", image: g19, character: "girl" },
  { id: 120, emotion: "Affamé", image: g20, character: "girl" },
  { id: 121, emotion: "Applaudit", image: g21, character: "girl" },
  { id: 122, emotion: "Cœur", image: g22, character: "girl" },
  { id: 123, emotion: "Pouce levé", image: g23, character: "girl" },
  { id: 124, emotion: "Non", image: g24, character: "girl" },
  { id: 125, emotion: "Salut", image: g25, character: "girl" },
  { id: 126, emotion: "Fête", image: g26, character: "girl" },
  { id: 127, emotion: "Choqué", image: g27, character: "girl" },
];

export const teenBoyStickers: Sticker[] = [
  { id: 201, emotion: "Heureux", image: t01, character: "teen-boy" },
  { id: 202, emotion: "Triste", image: t02, character: "teen-boy" },
  { id: 203, emotion: "En colère", image: t03, character: "teen-boy" },
  { id: 204, emotion: "Surpris", image: t04, character: "teen-boy" },
  { id: 205, emotion: "Amoureux", image: t05, character: "teen-boy" },
  { id: 206, emotion: "Mort de rire", image: t06, character: "teen-boy" },
  { id: 207, emotion: "Pleure", image: t07, character: "teen-boy" },
  { id: 208, emotion: "Apeuré", image: t08, character: "teen-boy" },
  { id: 209, emotion: "Endormi", image: t09, character: "teen-boy" },
  { id: 210, emotion: "Réfléchit", image: t10, character: "teen-boy" },
  { id: 211, emotion: "Clin d'œil", image: t11, character: "teen-boy" },
  { id: 212, emotion: "Timide", image: t12, character: "teen-boy" },
  { id: 213, emotion: "Confus", image: t13, character: "teen-boy" },
  { id: 214, emotion: "Cool", image: t14, character: "teen-boy" },
  { id: 215, emotion: "Taquin", image: t15, character: "teen-boy" },
  { id: 217, emotion: "Excité", image: t17, character: "teen-boy" },
  { id: 218, emotion: "Ennuyé", image: t18, character: "teen-boy" },
  { id: 219, emotion: "Malade", image: t19, character: "teen-boy" },
  { id: 220, emotion: "Affamé", image: t20, character: "teen-boy" },
];
