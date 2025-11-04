import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Mail, Shield } from 'lucide-react';

const CHECKOUT_URL = 'https://buy.stripe.com/test_4gw7uWf5y5fQfH6eUU';

export default function Pricing() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePurchase = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Inserisci una email valida per procedere.');
      return;
    }
    setLoading(true);
    const url = `${CHECKOUT_URL}?prefilled_email=${encodeURIComponent(email)}`;
    window.location.href = url;
  };

  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 text-white shadow-2xl backdrop-blur md:p-10"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-bold">eBook completo</h3>
              <p className="mt-1 text-white/70">Tutto ciò che ti serve per lanciare e vendere in modo professionale.</p>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400" /> 180+ pagine curate</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400" /> Template pronti all’uso</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400" /> Aggiornamenti gratuiti</li>
                <li className="flex items-center gap-2"><Check size={16} className="text-emerald-400" /> Accesso a risorse extra</li>
              </ul>
            </div>
            <div className="text-left md:text-right">
              <div className="text-4xl font-extrabold">€29</div>
              <div className="text-sm text-white/70">Pagamento sicuro</div>
            </div>
          </div>

          <form onSubmit={handlePurchase} className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="sm:col-span-2">
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-400/40">
                <Mail size={18} className="text-white/70" />
                <input
                  id="email"
                  type="email"
                  placeholder="La tua email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-sm text-white placeholder-white/50 outline-none"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-white px-5 py-3 font-semibold text-gray-900 transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Reindirizzamento…' : 'Acquista ora'}
            </button>
          </form>

          <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
            <Shield size={14} />
            Garanzia soddisfatti o rimborsati 14 giorni.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
