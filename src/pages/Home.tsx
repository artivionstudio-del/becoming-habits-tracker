import Hero from '../components/Hero';
import Problem from '../components/Problem';
import ProductBenefits from '../components/ProductBenefits';
import Showcase from '../components/Showcase';
import Bonus from '../components/Bonus';
import Testimonials from '../components/Testimonials';
import Community from '../components/Community';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <ProductBenefits />
      <Showcase />
      <Bonus />
      <Testimonials />
      <Community />
      <FAQ />
      <CTA />
    </main>
  );
}
