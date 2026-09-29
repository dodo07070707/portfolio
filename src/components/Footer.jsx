import { CONTACT } from '../data.js';
import ExtLink from './ExtLink.jsx';

function Contact({ label, children }) {
  return (
    <>
      <div className="lab">{label}</div>
      {children}
    </>
  );
}

// cta=false면 큰 LET'S BUILD 문구 없이 연락처만
export default function Footer({ cta = true }) {
  const { mail, tel, instagram, github, solved } = CONTACT;
  return (
    <footer className={cta ? 'footer' : 'footer compact'} id="contact">
      {cta && <div className="footer-big">LET’S<br />BUILD <span className="hl">SOMETHIN'</span></div>}
      <div className="footer-cols">
        <div>
          <Contact label="Mail">{mail.map(m => <a key={m} href={`mailto:${m}`}>{m}</a>)}</Contact>
        </div>
        <div>
          <Contact label="Tel"><a href={`tel:${tel.replace(/[^+\d]/g, '')}`}>{tel}</a></Contact>
          <Contact label="Instagram"><ExtLink href={instagram.href}>{instagram.label}</ExtLink></Contact>
        </div>
        <div />
        <div className="foot-right">
          <Contact label="Github"><ExtLink href={github.href}>{github.label}</ExtLink></Contact>
          <Contact label="Solved.ac"><ExtLink href={solved.href}>{solved.label}</ExtLink></Contact>
        </div>
      </div>
      <div className="copy"><span>© 2026 DOYOON KIM</span></div>
    </footer>
  );
}
