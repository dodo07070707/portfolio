// 12칸 그리드 카드 너비 패턴 (한 줄 = 12)
const SPANS = [8, 4, 6, 6, 4, 4, 4, 8, 4];

function Cover({ p }) {
  if (p.cover) return <img src={p.cover} alt={p.title} loading="lazy" />;
  return (
    <div className="pcover-ph">
      <div className="pcover-period">{p.period}</div>
      <div className="pcover-title display">{p.title}</div>
    </div>
  );
}

export default function ProjectGrid({ items, spans = SPANS }) {
  return (
    <div className="projects">
      {items.map((p, i) => (
        <a className={`pcard span${spans[i % spans.length]}`} key={p.slug} href={`#/projects/${p.slug}`}>
          <div className="pcover ph" style={{ background: p.color }}><Cover p={p} /></div>
          <div className="pmeta"><span>{p.role}</span><span>{p.period}</span></div>
          <div className="ptitle">{p.title}</div>
          <div className="pdesc">{p.tagline}</div>
          <div className="ptags">
            {p.status && <span className="ptag status">{p.status}</span>}
            {p.tags.map(t => <span className="ptag" key={t}>{t}</span>)}
          </div>
        </a>
      ))}
    </div>
  );
}
