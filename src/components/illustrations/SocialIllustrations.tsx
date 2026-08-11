import type { CSSProperties, ReactNode, SVGProps } from "react";

/**
 * 20 illustrations "Social fun" 100% vectorielles.
 * Toutes les couleurs passent par 4 variables CSS locales :
 *   --illu-1 (principale), --illu-2 (accent), --illu-3 (surface douce), --illu-4 (trait)
 * Par défaut elles pointent sur les tokens du design system (primary / accent / muted / foreground),
 * donc les illustrations suivent le thème clair/sombre et peuvent être recolorées à tout moment
 * en surchargeant ces variables (voir <IllustrationFrame palette={...} />).
 */

export interface IllustrationProps extends Omit<SVGProps<SVGSVGElement>, "children"> {
  className?: string;
}

const Svg = ({ children, className, ...rest }: IllustrationProps & { children: ReactNode }) => (
  <svg viewBox="0 0 240 200" fill="none" role="img" className={className} {...rest}>
    {children}
  </svg>
);


const C1 = "var(--illu-1)";
const C2 = "var(--illu-2)";
const C3 = "var(--illu-3)";
const C4 = "var(--illu-4)";

/* Décor commun : halo + confettis */
const Halo = () => (
  <>
    <circle cx="120" cy="100" r="76" fill={C3} />
    <circle cx="120" cy="100" r="76" fill={C1} opacity="0.08" />
  </>
);

const Confetti = () => (
  <g opacity="0.85">
    <circle cx="34" cy="42" r="4" fill={C2} />
    <circle cx="206" cy="58" r="5" fill={C1} />
    <rect x="196" y="140" width="9" height="9" rx="2" fill={C2} transform="rotate(20 200 144)" />
    <rect x="32" y="146" width="8" height="8" rx="2" fill={C1} transform="rotate(-15 36 150)" />
    <path d="M56 24l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill={C1} opacity="0.7" />
    <path d="M186 30l2.5 6 6 2.5-6 2.5-2.5 6-2.5-6-6-2.5 6-2.5z" fill={C2} opacity="0.7" />
  </g>
);

/* ---------- 01. Première publication ---------- */
export const FirstPostIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <Confetti />
    <rect x="66" y="52" width="108" height="112" rx="14" fill={C4} opacity="0.06" />
    <rect x="60" y="46" width="108" height="112" rx="14" fill="hsl(var(--card))" stroke={C1} strokeWidth="3" />
    <rect x="74" y="60" width="80" height="48" rx="8" fill={C1} opacity="0.18" />
    <path d="M78 100l18-18 14 14 12-10 26 22H78z" fill={C1} />
    <circle cx="140" cy="76" r="7" fill={C2} />
    <rect x="74" y="118" width="62" height="7" rx="3.5" fill={C4} opacity="0.35" />
    <rect x="74" y="132" width="42" height="7" rx="3.5" fill={C4} opacity="0.18" />
    <g>
      <circle cx="172" cy="150" r="22" fill={C2} />
      <path d="M172 140v20M162 150h20" stroke="hsl(var(--accent-foreground))" strokeWidth="4" strokeLinecap="round" />
    </g>
  </Svg>
);

/* ---------- 02. Première musique ---------- */
export const FirstMusicIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <Confetti />
    <circle cx="120" cy="104" r="46" fill={C1} />
    <circle cx="120" cy="104" r="30" fill={C4} opacity="0.15" />
    <circle cx="120" cy="104" r="10" fill="hsl(var(--card))" />
    <circle cx="120" cy="104" r="4" fill={C2} />
    <path d="M148 58h30v46a13 13 0 11-8-12V70h-22z" fill={C2} />
    <g stroke={C1} strokeWidth="4" strokeLinecap="round" opacity="0.8">
      <path d="M52 96v18M64 86v38M76 100v12" />
    </g>
    <g stroke={C2} strokeWidth="4" strokeLinecap="round" opacity="0.7">
      <path d="M196 100v14M186 92v30" />
    </g>
  </Svg>
);

/* ---------- 03. Première vidéo ---------- */
export const FirstVideoIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <Confetti />
    <rect x="46" y="62" width="126" height="80" rx="12" fill="hsl(var(--card))" stroke={C1} strokeWidth="3" />
    <path d="M172 88l26-16v60l-26-16z" fill={C1} />
    <circle cx="109" cy="102" r="24" fill={C1} opacity="0.15" />
    <path d="M101 90l24 12-24 12z" fill={C2} />
    <rect x="60" y="124" width="42" height="6" rx="3" fill={C4} opacity="0.2" />
  </Svg>
);

/* ---------- 04. Premier Réel ---------- */
export const FirstReelIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <Confetti />
    <rect x="88" y="42" width="76" height="120" rx="16" fill="hsl(var(--card))" stroke={C1} strokeWidth="3" />
    <rect x="96" y="52" width="60" height="88" rx="10" fill={C1} opacity="0.16" />
    <path d="M118 84l22 12-22 12z" fill={C1} />
    <circle cx="126" cy="150" r="5" fill={C4} opacity="0.25" />
    <path d="M60 70l14 8-14 8z" fill={C2} />
    <path d="M180 118l-14 8 14 8z" fill={C2} />
    <g stroke={C1} strokeWidth="3" strokeLinecap="round" opacity="0.5">
      <path d="M56 108h14M170 88h14" />
    </g>
  </Svg>
);

/* ---------- 05. Chiffrement de bout en bout ---------- */
export const EncryptionIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <path d="M120 40l52 20v40c0 34-22 54-52 64-30-10-52-30-52-64V60z" fill={C1} opacity="0.16" />
    <path d="M120 40l52 20v40c0 34-22 54-52 64-30-10-52-30-52-64V60z" stroke={C1} strokeWidth="3" />
    <rect x="98" y="98" width="44" height="34" rx="8" fill={C1} />
    <path d="M108 98v-9a12 12 0 1124 0v9" stroke={C1} strokeWidth="5" strokeLinecap="round" />
    <circle cx="120" cy="114" r="5" fill="hsl(var(--primary-foreground))" />
    <path d="M120 119v6" stroke="hsl(var(--primary-foreground))" strokeWidth="3" strokeLinecap="round" />
    <g fill={C2}>
      <circle cx="40" cy="98" r="9" />
      <circle cx="200" cy="98" r="9" />
    </g>
    <g stroke={C2} strokeWidth="3" strokeDasharray="6 7" strokeLinecap="round">
      <path d="M50 98h16M174 98h16" />
    </g>
  </Svg>
);

/* ---------- 06. Amis proches ---------- */
export const CloseFriendsIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <Confetti />
    <g>
      <circle cx="92" cy="94" r="26" fill={C1} />
      <circle cx="92" cy="86" r="11" fill="hsl(var(--card))" />
      <path d="M74 112a18 18 0 0136 0z" fill="hsl(var(--card))" />
    </g>
    <g>
      <circle cx="148" cy="94" r="26" fill={C2} />
      <circle cx="148" cy="86" r="11" fill="hsl(var(--card))" />
      <path d="M130 112a18 18 0 0136 0z" fill="hsl(var(--card))" />
    </g>
    <path
      d="M120 152c-14-9-24-16-24-26a11 11 0 0124-6 11 11 0 0124 6c0 10-10 17-24 26z"
      fill={C2}
    />
    <path d="M62 62l4 9 9 4-9 4-4 9-4-9-9-4 9-4z" fill={C1} opacity="0.6" />
  </Svg>
);

/* ---------- 07. Selfies ---------- */
export const SelfieIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <Confetti />
    <rect x="70" y="72" width="100" height="76" rx="14" fill="hsl(var(--card))" stroke={C1} strokeWidth="3" />
    <rect x="100" y="58" width="40" height="16" rx="6" fill={C1} />
    <circle cx="120" cy="110" r="24" fill={C1} opacity="0.16" />
    <circle cx="120" cy="110" r="14" fill={C1} />
    <circle cx="120" cy="110" r="5" fill="hsl(var(--card))" />
    <circle cx="156" cy="88" r="5" fill={C2} />
    <path d="M52 132l10-10 10 10-10 10z" fill={C2} opacity="0.8" />
    <path d="M188 62l7 7-7 7-7-7z" fill={C1} opacity="0.7" />
  </Svg>
);

/* ---------- 08. Chat / discussion ---------- */
export const ChatIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <Confetti />
    <path d="M44 60h108a12 12 0 0112 12v40a12 12 0 01-12 12H82l-24 18v-18H44a12 12 0 01-12-12V72a12 12 0 0112-12z" fill={C1} />
    <g fill="hsl(var(--primary-foreground))" opacity="0.9">
      <circle cx="76" cy="92" r="6" />
      <circle cx="98" cy="92" r="6" />
      <circle cx="120" cy="92" r="6" />
    </g>
    <path d="M196 96h-64a12 12 0 00-12 12v30a12 12 0 0012 12h44l22 16v-16h-2a12 12 0 0012-12v-30a12 12 0 00-12-12z" fill="hsl(var(--card))" stroke={C2} strokeWidth="3" />
    <g fill={C2}>
      <circle cx="142" cy="124" r="5" />
      <circle cx="160" cy="124" r="5" />
      <circle cx="178" cy="124" r="5" />
    </g>
  </Svg>
);

/* ---------- 09. Scène joyeuse (fête) ---------- */
export const PartyIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <Confetti />
    <path d="M74 156l38-70 34 22z" fill={C1} />
    <path d="M74 156l38-70 34 22z" fill={C4} opacity="0.08" />
    <path d="M108 82l40 26 12-12-34-24z" fill={C2} />
    <g stroke={C2} strokeWidth="4" strokeLinecap="round">
      <path d="M156 60c8-8 18-6 22 2" />
      <path d="M176 92c10-2 16 4 16 12" />
    </g>
    <circle cx="196" cy="66" r="6" fill={C1} />
    <circle cx="152" cy="42" r="5" fill={C2} />
    <circle cx="60" cy="104" r="5" fill={C1} opacity="0.6" />
  </Svg>
);

/* ---------- 10. Aucun ami pour l'instant ---------- */
export const NoFriendsIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <circle cx="120" cy="86" r="28" fill={C1} />
    <circle cx="120" cy="78" r="12" fill="hsl(var(--card))" />
    <path d="M100 106a20 20 0 0140 0z" fill="hsl(var(--card))" />
    <circle cx="120" cy="86" r="40" stroke={C1} strokeWidth="3" strokeDasharray="8 9" opacity="0.5" />
    <circle cx="170" cy="132" r="22" fill={C2} />
    <path d="M170 122v20M160 132h20" stroke="hsl(var(--accent-foreground))" strokeWidth="4" strokeLinecap="round" />
    <rect x="62" y="146" width="70" height="8" rx="4" fill={C4} opacity="0.15" />
  </Svg>
);

/* ---------- 11. Aucune notification ---------- */
export const NoNotificationsIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <path d="M120 46a34 34 0 0134 34v26l12 16H74l12-16V80a34 34 0 0134-34z" fill={C1} />
    <path d="M104 126a16 16 0 0032 0z" fill={C2} />
    <g stroke={C1} strokeWidth="3" strokeLinecap="round" opacity="0.45">
      <path d="M62 74c-6 8-8 18-6 28M178 74c6 8 8 18 6 28" />
    </g>
    <circle cx="120" cy="160" r="5" fill={C4} opacity="0.2" />
  </Svg>
);

/* ---------- 12. Aucun résultat de recherche ---------- */
export const NoResultsIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <circle cx="110" cy="92" r="38" fill="hsl(var(--card))" stroke={C1} strokeWidth="4" />
    <circle cx="110" cy="92" r="38" fill={C1} opacity="0.1" />
    <path d="M138 120l30 30" stroke={C1} strokeWidth="10" strokeLinecap="round" />
    <path d="M98 84l14 14M112 84l-14 14" stroke={C2} strokeWidth="5" strokeLinecap="round" />
    <circle cx="66" cy="146" r="5" fill={C2} opacity="0.7" />
  </Svg>
);

/* ---------- 13. Galerie vide ---------- */
export const EmptyGalleryIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <rect x="52" y="66" width="90" height="72" rx="12" fill="hsl(var(--card))" stroke={C1} strokeWidth="3" />
    <rect x="66" y="80" width="90" height="72" rx="12" fill="hsl(var(--card))" stroke={C2} strokeWidth="3" />
    <path d="M74 138l22-24 16 16 12-10 24 18z" fill={C2} opacity="0.85" />
    <circle cx="138" cy="98" r="8" fill={C1} />
    <rect x="164" y="92" width="30" height="46" rx="8" fill={C1} opacity="0.2" />
  </Svg>
);

/* ---------- 14. Story vide ---------- */
export const EmptyStoryIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <circle cx="120" cy="98" r="42" stroke={C1} strokeWidth="6" strokeDasharray="14 10" />
    <circle cx="120" cy="98" r="30" fill={C1} opacity="0.15" />
    <path d="M120 84v28M106 98h28" stroke={C1} strokeWidth="6" strokeLinecap="round" />
    <rect x="82" y="150" width="76" height="8" rx="4" fill={C4} opacity="0.15" />
    <circle cx="176" cy="58" r="6" fill={C2} />
  </Svg>
);

/* ---------- 15. Sondage ---------- */
export const PollIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <rect x="58" y="58" width="124" height="84" rx="12" fill="hsl(var(--card))" stroke={C1} strokeWidth="3" />
    <rect x="72" y="74" width="80" height="12" rx="6" fill={C1} />
    <rect x="72" y="94" width="54" height="12" rx="6" fill={C1} opacity="0.4" />
    <rect x="72" y="114" width="96" height="12" rx="6" fill={C2} />
    <circle cx="176" cy="132" r="18" fill={C2} />
    <path d="M168 132l6 6 12-12" stroke="hsl(var(--accent-foreground))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

/* ---------- 16. Live ---------- */
export const LiveIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <rect x="60" y="66" width="120" height="78" rx="12" fill="hsl(var(--card))" stroke={C1} strokeWidth="3" />
    <circle cx="120" cy="104" r="18" fill={C1} opacity="0.2" />
    <circle cx="120" cy="104" r="9" fill={C2} />
    <rect x="72" y="76" width="34" height="14" rx="7" fill={C2} />
    <circle cx="80" cy="83" r="3" fill="hsl(var(--accent-foreground))" />
    <g stroke={C1} strokeWidth="3" strokeLinecap="round" opacity="0.5">
      <path d="M44 90c-4 9-4 19 0 28M196 90c4 9 4 19 0 28" />
      <path d="M32 80c-7 15-7 33 0 48M208 80c7 15 7 33 0 48" />
    </g>
  </Svg>
);

/* ---------- 17. Badge / trophée ---------- */
export const AchievementIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <Confetti />
    <path d="M88 52h64v34a32 32 0 11-64 0z" fill={C1} />
    <path d="M88 62H72v10a20 20 0 0016 19M152 62h16v10a20 20 0 01-16 19" stroke={C1} strokeWidth="4" />
    <path d="M110 118h20v18h-20z" fill={C1} opacity="0.6" />
    <rect x="94" y="136" width="52" height="12" rx="6" fill={C2} />
    <path d="M120 66l5 11 12 2-9 8 2 12-10-6-10 6 2-12-9-8 12-2z" fill="hsl(var(--primary-foreground))" opacity="0.9" />
  </Svg>
);

/* ---------- 18. Communauté / groupe ---------- */
export const CommunityIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <g fill={C1}>
      <circle cx="120" cy="70" r="16" />
      <path d="M100 114a20 20 0 0140 0z" />
    </g>
    <g fill={C2}>
      <circle cx="72" cy="104" r="14" />
      <path d="M54 142a18 18 0 0136 0z" />
    </g>
    <g fill={C2}>
      <circle cx="168" cy="104" r="14" />
      <path d="M150 142a18 18 0 0136 0z" />
    </g>
    <g stroke={C1} strokeWidth="3" strokeDasharray="6 7" opacity="0.5">
      <path d="M104 88L86 98M136 88l18 10" />
    </g>
  </Svg>
);

/* ---------- 19. Sauvegardes vides ---------- */
export const EmptySavedIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <path d="M86 48h68v112l-34-26-34 26z" fill={C1} />
    <path d="M86 48h68v112l-34-26-34 26z" fill={C4} opacity="0.06" />
    <path d="M120 74l6 13 14 2-10 10 2 14-12-7-12 7 2-14-10-10 14-2z" fill="hsl(var(--primary-foreground))" opacity="0.85" />
    <circle cx="176" cy="72" r="7" fill={C2} />
    <circle cx="62" cy="128" r="5" fill={C2} opacity="0.7" />
  </Svg>
);

/* ---------- 20. Hors ligne / reconnexion ---------- */
export const OfflineIllustration = (p: IllustrationProps) => (
  <Svg {...p}>
    <Halo />
    <path d="M120 148a10 10 0 100-20 10 10 0 000 20z" fill={C1} />
    <g stroke={C1} strokeWidth="8" strokeLinecap="round" fill="none">
      <path d="M96 116a34 34 0 0148 0" opacity="0.75" />
      <path d="M76 94a62 62 0 0188 0" opacity="0.45" />
    </g>
    <g stroke={C2} strokeWidth="7" strokeLinecap="round">
      <path d="M170 58l30 30M200 58l-30 30" />
    </g>
    <rect x="70" y="164" width="100" height="8" rx="4" fill={C4} opacity="0.12" />
  </Svg>
);

export interface SocialIllustrationItem {
  id: string;
  name: string;
  description: string;
  Component: (props: IllustrationProps) => JSX.Element;
}

export const socialIllustrations: SocialIllustrationItem[] = [
  { id: "first-post", name: "Première publication", description: "Publie ton premier post", Component: FirstPostIllustration },
  { id: "first-music", name: "Première musique", description: "Crée ta première piste", Component: FirstMusicIllustration },
  { id: "first-video", name: "Première vidéo", description: "Partage ta première vidéo", Component: FirstVideoIllustration },
  { id: "first-reel", name: "Premier Réel", description: "Lance ton premier Réel", Component: FirstReelIllustration },
  { id: "encryption", name: "Chiffrement bout en bout", description: "Tes messages sont protégés", Component: EncryptionIllustration },
  { id: "close-friends", name: "Amis proches", description: "Ajoute tes amis proches", Component: CloseFriendsIllustration },
  { id: "selfie", name: "Selfies", description: "Prends ton premier selfie", Component: SelfieIllustration },
  { id: "chat", name: "Discussion", description: "Démarre une conversation", Component: ChatIllustration },
  { id: "party", name: "Scène joyeuse", description: "C'est la fête !", Component: PartyIllustration },
  { id: "no-friends", name: "Aucun ami", description: "Trouve des personnes à suivre", Component: NoFriendsIllustration },
  { id: "no-notifications", name: "Aucune notification", description: "Tout est calme ici", Component: NoNotificationsIllustration },
  { id: "no-results", name: "Aucun résultat", description: "Essaie une autre recherche", Component: NoResultsIllustration },
  { id: "empty-gallery", name: "Galerie vide", description: "Ajoute tes premières photos", Component: EmptyGalleryIllustration },
  { id: "empty-story", name: "Story vide", description: "Crée ta première story", Component: EmptyStoryIllustration },
  { id: "poll", name: "Sondage", description: "Lance un sondage", Component: PollIllustration },
  { id: "live", name: "Live", description: "Passe en direct", Component: LiveIllustration },
  { id: "achievement", name: "Badge débloqué", description: "Un nouveau succès !", Component: AchievementIllustration },
  { id: "community", name: "Communauté", description: "Rejoins un groupe", Component: CommunityIllustration },
  { id: "empty-saved", name: "Aucune sauvegarde", description: "Enregistre tes favoris", Component: EmptySavedIllustration },
  { id: "offline", name: "Hors ligne", description: "Reconnexion en cours…", Component: OfflineIllustration },
];

export interface IllustrationPalette {
  name: string;
  c1: string;
  c2: string;
  c3: string;
}

/** Palettes prêtes à l'emploi — recolorent instantanément les 20 illustrations. */
export const illustrationPalettes: IllustrationPalette[] = [
  { name: "Thème", c1: "hsl(var(--primary))", c2: "hsl(var(--accent))", c3: "hsl(var(--muted))" },
  { name: "Violet", c1: "hsl(258 82% 60%)", c2: "hsl(320 82% 62%)", c3: "hsl(258 60% 94%)" },
  { name: "Océan", c1: "hsl(200 85% 48%)", c2: "hsl(172 70% 45%)", c3: "hsl(200 60% 94%)" },
  { name: "Sunset", c1: "hsl(18 88% 58%)", c2: "hsl(345 82% 58%)", c3: "hsl(24 80% 94%)" },
  { name: "Forêt", c1: "hsl(150 55% 40%)", c2: "hsl(88 60% 48%)", c3: "hsl(150 40% 93%)" },
  { name: "Mono", c1: "hsl(220 12% 35%)", c2: "hsl(220 10% 62%)", c3: "hsl(220 14% 93%)" },
];

/** Enveloppe qui applique une palette (surcharge des variables CSS). */
export const IllustrationFrame = ({
  palette,
  className,
  children,
}: {
  palette?: IllustrationPalette;
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={className}
    style={
      palette
        ? ({
            ["--illu-1" as string]: palette.c1,
            ["--illu-2" as string]: palette.c2,
            ["--illu-3" as string]: palette.c3,
          } as CSSProperties)
        : undefined
    }
  >
    {children}
  </div>
);
