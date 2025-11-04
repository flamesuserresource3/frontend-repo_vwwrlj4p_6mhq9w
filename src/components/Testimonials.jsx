import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Giulia R.',
    role: 'Content Strategist',
    text: 'Finalmente una guida pratica. Ho messo in atto i suggerimenti nel giro di 48 ore e ho visto subito risultati.'
  },
  {
    name: 'Luca P.',
    role: 'Freelance Marketer',
    text: 'Pulita, diretta e concreta. Questo eBook vale molto più del prezzo richiesto.'
  },
  {
    name: 'Sara D.',
    role: 'Founder',
    text: 'Mi ha aiutato a strutturare il lancio del mio prodotto in modo professionale. Consigliatissimo.'
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          Testimonianze
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 shadow-lg backdrop-blur"
            >
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-6 text-white/80">“{t.text}”</p>
              <div className="mt-4 text-sm text-white">
                <span className="font-semibold">{t.name}</span>
                <span className="text-white/60"> • {t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
