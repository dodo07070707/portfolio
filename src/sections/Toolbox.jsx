import { TOOLBOX } from '../data.js';
import SecHead from '../components/SecHead.jsx';

function Chips({ items, weak }) {
  const cls = weak ? 'chip weak' : 'chip';
  return (
    <div className="chips">
      {items.length
        ? items.map(u => <span className={cls} key={u}>{u}</span>)
        : <span className={`${cls} empty`}>—</span>}
    </div>
  );
}

export default function Toolbox() {
  return (
    <section className="block" id="toolbox">
      <SecHead title="TOOLBOX." />
      <div className="toolbox-table">
        <div className="toolbox-row">
          <div className="toolbox-col-head">CATEGORY</div>
          <div className="toolbox-col-head">USED A LOT</div>
          <div className="toolbox-col-head">TRIED A BIT</div>
        </div>
        {TOOLBOX.map(s => (
          <div className="toolbox-row" key={s.cat}>
            <div className="toolbox-cat">{s.cat}</div>
            <Chips items={s.used} />
            <Chips items={s.tried} weak />
          </div>
        ))}
      </div>
    </section>
  );
}
