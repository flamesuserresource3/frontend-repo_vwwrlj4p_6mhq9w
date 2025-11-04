import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-gray-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-extrabold tracking-tight">eBook Pro</div>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#features" className="hover:text-white">Contenuti</a>
            <a href="#pricing" className="hover:text-white">Prezzo</a>
            <a href="#testimonials" className="hover:text-white">Review</a>
          </nav>
          <a href="#pricing" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:brightness-95">Acquista</a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <div id="testimonials">
          <Testimonials />
        </div>
        <Pricing />
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} eBook Pro — Tutti i diritti riservati
      </footer>
    </div>
  );
}

export default App;
