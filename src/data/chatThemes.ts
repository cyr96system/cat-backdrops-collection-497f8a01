export interface ChatTheme {
  id: number;
  name: string;
  css: string; // CSS background value
  category: string;
}

export const chatThemes: ChatTheme[] = [
  // Gradients - Warm (1-10)
  { id: 1, name: "Coucher de soleil", css: "linear-gradient(135deg, #f97316, #ec4899)", category: "Dégradés" },
  { id: 2, name: "Flamme douce", css: "linear-gradient(135deg, #f59e0b, #ef4444)", category: "Dégradés" },
  { id: 3, name: "Pêche dorée", css: "linear-gradient(135deg, #fbbf24, #f472b6)", category: "Dégradés" },
  { id: 4, name: "Rose tendre", css: "linear-gradient(135deg, #fb7185, #c084fc)", category: "Dégradés" },
  { id: 5, name: "Corail vif", css: "linear-gradient(135deg, #f43f5e, #fb923c)", category: "Dégradés" },
  { id: 6, name: "Mangue tropicale", css: "linear-gradient(135deg, #fde68a, #f97316)", category: "Dégradés" },
  { id: 7, name: "Aurore boréale", css: "linear-gradient(135deg, #a78bfa, #f472b6, #fbbf24)", category: "Dégradés" },
  { id: 8, name: "Crépuscule", css: "linear-gradient(135deg, #7c3aed, #db2777)", category: "Dégradés" },
  { id: 9, name: "Cerise sauvage", css: "linear-gradient(135deg, #e11d48, #be185d)", category: "Dégradés" },
  { id: 10, name: "Ambre chaud", css: "linear-gradient(180deg, #fef3c7, #f59e0b)", category: "Dégradés" },

  // Gradients - Cool (11-20)
  { id: 11, name: "Océan profond", css: "linear-gradient(135deg, #0ea5e9, #6366f1)", category: "Dégradés" },
  { id: 12, name: "Nuit étoilée", css: "linear-gradient(135deg, #1e1b4b, #312e81, #4338ca)", category: "Dégradés" },
  { id: 13, name: "Glacier", css: "linear-gradient(135deg, #67e8f9, #a5b4fc)", category: "Dégradés" },
  { id: 14, name: "Menthe fraîche", css: "linear-gradient(135deg, #34d399, #06b6d4)", category: "Dégradés" },
  { id: 15, name: "Lagon bleu", css: "linear-gradient(135deg, #22d3ee, #3b82f6)", category: "Dégradés" },
  { id: 16, name: "Forêt enchantée", css: "linear-gradient(135deg, #059669, #0d9488)", category: "Dégradés" },
  { id: 17, name: "Ciel nordique", css: "linear-gradient(180deg, #bfdbfe, #1d4ed8)", category: "Dégradés" },
  { id: 18, name: "Lavande", css: "linear-gradient(135deg, #c4b5fd, #818cf8)", category: "Dégradés" },
  { id: 19, name: "Émeraude", css: "linear-gradient(135deg, #6ee7b7, #3b82f6)", category: "Dégradés" },
  { id: 20, name: "Brume matinale", css: "linear-gradient(180deg, #e0e7ff, #c7d2fe, #a5b4fc)", category: "Dégradés" },

  // Solids (21-30)
  { id: 21, name: "Noir absolu", css: "#0a0a0a", category: "Unis" },
  { id: 22, name: "Gris charbon", css: "#1c1c1e", category: "Unis" },
  { id: 23, name: "Bleu nuit", css: "#0f172a", category: "Unis" },
  { id: 24, name: "Vert sapin", css: "#064e3b", category: "Unis" },
  { id: 25, name: "Bordeaux", css: "#4c0519", category: "Unis" },
  { id: 26, name: "Bleu roi", css: "#1e3a5f", category: "Unis" },
  { id: 27, name: "Violet impérial", css: "#2e1065", category: "Unis" },
  { id: 28, name: "Crème", css: "#fefce8", category: "Unis" },
  { id: 29, name: "Rose poudré", css: "#fce7f3", category: "Unis" },
  { id: 30, name: "Bleu ciel", css: "#e0f2fe", category: "Unis" },

  // Patterns (31-40)
  { id: 31, name: "Bulles", css: "radial-gradient(circle at 20% 50%, #c084fc33 0%, transparent 50%), radial-gradient(circle at 80% 20%, #60a5fa33 0%, transparent 50%), radial-gradient(circle at 50% 80%, #f472b633 0%, transparent 50%), #0f172a", category: "Motifs" },
  { id: 32, name: "Néon rose", css: "linear-gradient(180deg, #0f0f23 0%, #1a0a2e 50%, #2d1b69 100%)", category: "Motifs" },
  { id: 33, name: "Mesh violet", css: "radial-gradient(at 40% 20%, #7c3aed 0%, transparent 50%), radial-gradient(at 80% 0%, #1d4ed8 0%, transparent 50%), radial-gradient(at 0% 50%, #db2777 0%, transparent 50%), #0c0a1a", category: "Motifs" },
  { id: 34, name: "Cosmos", css: "radial-gradient(ellipse at top, #1e1b4b, #0f172a), radial-gradient(circle at 70% 60%, #312e8144 0%, transparent 50%)", category: "Motifs" },
  { id: 35, name: "Aurore verte", css: "linear-gradient(180deg, #0f172a 0%, #064e3b 60%, #0f172a 100%)", category: "Motifs" },
  { id: 36, name: "Plasma", css: "radial-gradient(at 0% 0%, #7c3aed 0%, transparent 50%), radial-gradient(at 100% 100%, #06b6d4 0%, transparent 50%), #0f0f23", category: "Motifs" },
  { id: 37, name: "Vague douce", css: "linear-gradient(135deg, #667eea11 0%, #764ba222 100%), linear-gradient(225deg, #f093fb11 0%, #f5576c22 100%), #fafafa", category: "Motifs" },
  { id: 38, name: "Prisme", css: "conic-gradient(from 180deg at 50% 50%, #7c3aed22, #06b6d422, #f97316aa, #7c3aed22), #0f172a", category: "Motifs" },
  { id: 39, name: "Sable chaud", css: "linear-gradient(180deg, #fef3c7 0%, #fde68a 50%, #fbbf24 100%)", category: "Motifs" },
  { id: 40, name: "Holographique", css: "linear-gradient(135deg, #f0abfc, #818cf8, #34d399, #fbbf24)", category: "Motifs" },

  // Dark moods (41-50)
  { id: 41, name: "Minuit bleu", css: "linear-gradient(180deg, #020617 0%, #0f172a 100%)", category: "Sombres" },
  { id: 42, name: "Charbon profond", css: "linear-gradient(180deg, #171717 0%, #262626 100%)", category: "Sombres" },
  { id: 43, name: "Encre noire", css: "linear-gradient(135deg, #0c0a09, #1c1917)", category: "Sombres" },
  { id: 44, name: "Nuit pourpre", css: "linear-gradient(180deg, #0a0015 0%, #1e0a3c 100%)", category: "Sombres" },
  { id: 45, name: "Forêt sombre", css: "linear-gradient(180deg, #021a0f 0%, #052e16 100%)", category: "Sombres" },
  { id: 46, name: "Espace lointain", css: "radial-gradient(ellipse at center, #1e1b4b, #020617)", category: "Sombres" },
  { id: 47, name: "Volcan", css: "linear-gradient(180deg, #1c0a00 0%, #2d0f00 50%, #451a03 100%)", category: "Sombres" },
  { id: 48, name: "Abîme", css: "radial-gradient(ellipse at bottom, #0c4a6e, #020617)", category: "Sombres" },
  { id: 49, name: "Obsidienne", css: "linear-gradient(135deg, #18181b, #27272a, #18181b)", category: "Sombres" },
  { id: 50, name: "Ténèbres", css: "linear-gradient(180deg, #000000, #0a0a0a, #171717)", category: "Sombres" },

  // Pastels (51-60)
  { id: 51, name: "Pastel lilas", css: "linear-gradient(135deg, #ede9fe, #e0e7ff)", category: "Pastels" },
  { id: 52, name: "Pastel menthe", css: "linear-gradient(135deg, #d1fae5, #ccfbf1)", category: "Pastels" },
  { id: 53, name: "Pastel pêche", css: "linear-gradient(135deg, #fce7f3, #fff1f2)", category: "Pastels" },
  { id: 54, name: "Pastel citron", css: "linear-gradient(135deg, #fef9c3, #fef3c7)", category: "Pastels" },
  { id: 55, name: "Pastel bleu", css: "linear-gradient(135deg, #dbeafe, #e0f2fe)", category: "Pastels" },
  { id: 56, name: "Pastel corail", css: "linear-gradient(135deg, #ffe4e6, #fce7f3)", category: "Pastels" },
  { id: 57, name: "Pastel sauge", css: "linear-gradient(135deg, #dcfce7, #d1fae5)", category: "Pastels" },
  { id: 58, name: "Pastel perle", css: "linear-gradient(135deg, #f1f5f9, #e2e8f0)", category: "Pastels" },
  { id: 59, name: "Pastel orchidée", css: "linear-gradient(135deg, #f3e8ff, #fae8ff)", category: "Pastels" },
  { id: 60, name: "Pastel aqua", css: "linear-gradient(135deg, #cffafe, #e0f2fe)", category: "Pastels" },
];

export const themeCategories = ["Tous", "Dégradés", "Unis", "Motifs", "Sombres", "Pastels"];
