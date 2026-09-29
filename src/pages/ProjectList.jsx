import { useState } from 'react';
import { FILTER_TAGS } from '../data.js';
import { PROJECTS } from '../lib/projects.js';
import SecHead from '../components/SecHead.jsx';
import ProjectGrid from '../components/ProjectGrid.jsx';


export default function ProjectList() {
  const [tag, setTag] = useState(null);
  const items = tag ? PROJECTS.filter(p => p.tags.includes(tag)) : PROJECTS;
  return (
    <section className="block">
      <a className="back" href="#projects">← HOME</a>
      <SecHead num={`ALL WORK / ${PROJECTS.length}`} title="PROJECTS." />
      <div className="chips filter">
        {[null, ...FILTER_TAGS].map(t => (
          <button key={t ?? 'all'} className={`chip${tag === t ? '' : ' weak'}`} onClick={() => setTag(t)}>
            {t ?? 'All'}
          </button>
        ))}
      </div>
      <ProjectGrid items={items} />
    </section>
  );
}
