import { SITE } from '../data.js';
import Hero from '../sections/Hero.jsx';
import Marquee from '../sections/Marquee.jsx';
import About from '../sections/About.jsx';
import Toolbox from '../sections/Toolbox.jsx';
import BigPan from '../sections/BigPan.jsx';
import FeaturedProjects from '../sections/FeaturedProjects.jsx';
import Career from '../sections/Career.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      {SITE.marquee && <Marquee />}
      <About />
      <Toolbox />
      <BigPan />
      <FeaturedProjects />
      <Career />
    </>
  );
}
