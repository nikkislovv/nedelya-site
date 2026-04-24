import { useEffect } from 'react';
import { Header }      from '../components/Header';
import { Hero }        from '../components/Hero';
import { Services }    from '../components/Services';
import { Process }     from '../components/Process';
import { Portfolio }   from '../components/Portfolio';
import { ContactForm } from '../components/ContactForm';
import { FAQ }         from '../components/FAQ';
import { Footer }      from '../components/Footer';

/* ---------- Scroll-triggered animations ---------- */
function useScrollAnimations() {
  useEffect(() => {
    const els = document.querySelectorAll('.nd-anim');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('nd-anim--visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function LandingPage() {
  useScrollAnimations();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
