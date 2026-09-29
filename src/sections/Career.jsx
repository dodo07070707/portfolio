import { CAREER } from '../data.js';
import SecHead from '../components/SecHead.jsx';
import ExtLink from '../components/ExtLink.jsx';

// href가 있으면 줄 전체가 링크
export function CareerItem({ it }) {
  const Row = it.href ? ExtLink : 'div';
  return (
    <Row className="litem" href={it.href}>
      <div className="yr">{it.yr}</div>
      <div className="ttl">
        {it.logo && <img className="logo" src={it.logo} alt="" />}
        {it.t}
      </div>
      <div className="badge">{it.b}</div>
    </Row>
  );
}

export default function Career() {
  return (
    <section className="block" id="experience">
      <SecHead title="EXPERIENCE." />
      {CAREER.map(g => (
        <div className="listblock" key={g.title}>
          <div><h3>{g.title}</h3><div className="sub">{g.sub}</div></div>
          <div>{g.items.map((it, i) => <CareerItem key={i} it={it} />)}</div>
        </div>
      ))}
    </section>
  );
}
