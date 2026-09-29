export default function SecHead({ num, title }) {
  return (
    <div className="sec-head">
      {num && <div className="sec-num">{num}</div>}
      <h2 className="sec-title scroll-pan">{title}</h2>
    </div>
  );
}
