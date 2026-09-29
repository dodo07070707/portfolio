import { FEATURED } from "../data.js";
import { PROJECTS } from "../lib/projects.js";
import SecHead from "../components/SecHead.jsx";
import ProjectGrid from "../components/ProjectGrid.jsx";

// data.js FEATURED 순서대로 (없는 slug는 건너뜀)
const items = FEATURED.map((slug) =>
  PROJECTS.find((p) => p.slug === slug)
).filter(Boolean);

export default function FeaturedProjects() {
  return (
    <section className="block" id="projects">
      <SecHead title="PROJECTS." />
      <ProjectGrid items={items} spans={[3]} />
      <a className="gonext more" href="#/projects">
        <span>And More...</span>
        <span className="arrow" />
      </a>
    </section>
  );
}
