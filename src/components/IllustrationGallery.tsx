import { useState } from "react";
import { motion } from "framer-motion";
import {
  socialIllustrations,
  illustrationPalettes,
  IllustrationFrame,
} from "@/components/illustrations/SocialIllustrations";
import manga1 from "@/assets/illustrations/manga-1.jpg";
import manga2 from "@/assets/illustrations/manga-2.jpg";
import manga3 from "@/assets/illustrations/manga-3.jpg";

const mangaIllustrations = [
  { src: manga1, title: "Selfie au coucher du soleil", desc: "Entre amis sur les toits" },
  { src: manga2, title: "Discussion cosy", desc: "Messages et cœurs qui flottent" },
  { src: manga3, title: "Explosion de joie", desc: "Likes et confettis" },
];


const IllustrationGallery = () => {
  const [paletteIndex, setPaletteIndex] = useState(0);
  const palette = illustrationPalettes[paletteIndex];

  return (
    <section className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Illustrations Social fun</h2>
        <p className="text-muted-foreground">
          20 illustrations vectorielles pour tes pages vides — couleurs modifiables à tout moment
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {illustrationPalettes.map((p, i) => (
          <button
            key={p.name}
            onClick={() => setPaletteIndex(i)}
            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium transition-all ${
              i === paletteIndex
                ? "border-primary bg-primary/10 text-foreground shadow-sm"
                : "border-border bg-secondary text-secondary-foreground hover:bg-secondary/70"
            }`}
            aria-pressed={i === paletteIndex}
          >
            <span className="flex">
              <span className="h-4 w-4 rounded-full ring-2 ring-card" style={{ background: p.c1 }} />
              <span className="-ml-1.5 h-4 w-4 rounded-full ring-2 ring-card" style={{ background: p.c2 }} />
            </span>
            {p.name}
          </button>
        ))}
      </div>

      <IllustrationFrame
        palette={palette}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {socialIllustrations.map(({ id, name, description, Component }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 shadow-sm"
          >
            <Component className="h-32 w-full" aria-label={name} />
            <p className="text-sm font-semibold text-card-foreground">{name}</p>
            <p className="text-center text-xs text-muted-foreground">{description}</p>
          </motion.div>
        ))}
      </IllustrationFrame>

      <div className="space-y-4">
        <h3 className="text-center text-2xl font-bold tracking-tight text-foreground">Illustrations Manga</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {mangaIllustrations.map((m) => (
            <motion.figure
              key={m.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <img
                src={m.src}
                alt={m.title}
                loading="lazy"
                width={1024}
                height={640}
                className="aspect-[16/10] w-full object-cover"
              />
              <figcaption className="space-y-1 p-4">
                <p className="text-sm font-semibold text-card-foreground">{m.title}</p>
                <p className="text-xs text-muted-foreground">{m.desc}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};


export default IllustrationGallery;
