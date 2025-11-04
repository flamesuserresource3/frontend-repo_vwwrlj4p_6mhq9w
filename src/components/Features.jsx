import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Sparkles, Target } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Contenuti verificati',
    desc: 'Metodologie testate sul campo, spiegate con esempi concreti e casi reali.'
  },
  {
    icon: Clock,
    title: 'Risparmia tempo',
    desc: 'Struttura step-by-step per apprendere rapidamente senza perdere ore.'
  },
  {
    icon: Target,
    title: 'Focus sui risultati',
    desc: 'Tattiche pratiche orientate alla conversione e alla crescita del tuo brand.'
  },
  {
    icon: Sparkles,
    title: 'Design curato',
    desc: 'Impaginazione moderna e leggibile, disponibile in dark e light mode.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold text-white md:text-4xl"
        >
          Cosa troverai dentro l’eBook
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90 shadow-lg backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white/10 p-2 text-white">
                  <f.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
