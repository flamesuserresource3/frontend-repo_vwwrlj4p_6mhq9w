import { motion } from 'framer-motion';
import { Rocket, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-cyan-500/20 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16 md:pt-28 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Rocket size={14} />
            Nuovo eBook professionale
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Vendi il tuo eBook con stile
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
            Una landing page dinamica, curata nei dettagli e ottimizzata per la conversione. Animazioni fluide, testimonianze reali e un flusso d’acquisto semplice.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-gray-900 transition hover:brightness-95"
            >
              <Rocket className="transition group-hover:rotate-12" size={18} />
              Acquista ora
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              <BookOpen size={18} />
              Leggi un estratto
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
