import { useLayoutEffect, useRef } from 'react';
import { marked } from 'marked';
import { PROJECTS, LINK_LABELS } from '../lib/projects.js';
import SecHead from '../components/SecHead.jsx';
import ExtLink from '../components/ExtLink.jsx';
import Icon from '../components/Icon.jsx';

const Back = () => <a className="back" href="#/projects"><Icon name="arrowLeft" /> PROJECTS</a>;

// 링크 종류별 아이콘 (없으면 link)
const LINK_ICON = { github: 'github', doc: 'file' };

// 제목이 한 줄에 안 들어가면 들어갈 만큼 글자 크기를 줄임 (화면 크기·폰트 로딩 후에도 다시 맞춤)
function FitTitle({ children }) {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const el = ref.current;
    const fit = () => {
      el.style.fontSize = '';
      const ratio = el.clientWidth / el.scrollWidth;
      if (ratio < 1) el.style.fontSize = `${parseFloat(getComputedStyle(el).fontSize) * ratio}px`;
    };
    fit();
    document.fonts.ready.then(fit);
    const ro = new ResizeObserver(fit);
    ro.observe(el.parentElement);
    return () => ro.disconnect();
  }, [children]);
  return <h1 className="pd-title" ref={ref}>{children}</h1>;
}

const shortUrl = url => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

function Spec({ p }) {
  const rows = [
    ['Role', p.role],
    ['Period', p.period],
    ['Status', p.status],
    ['Stack', p.tags.join(' · ')],
  ].filter(([, v]) => v);
  return (
    <dl className="pd-spec">
      {rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
    </dl>
  );
}

// frontmatter 링크(web/github/demo/store/doc)를 한 줄씩
function Links({ p }) {
  const keys = Object.keys(LINK_LABELS).filter(k => p[k]);
  if (!keys.length) return null;
  return (
    <section className="pd-links">
      <div className="pd-label">Links</div>
      {keys.map(k => (
        <ExtLink className="pd-link" key={k} href={p[k]}>
          <Icon name={LINK_ICON[k] ?? 'link'} size={16} />
          <span className="pd-link-name">{LINK_LABELS[k]}</span>
          <span className="pd-link-url">{shortUrl(p[k])}</span>
          <Icon name="arrowUpRight" />
        </ExtLink>
      ))}
    </section>
  );
}

export default function ProjectDetail({ slug }) {
  const p = PROJECTS.find(x => x.slug === slug);
  if (!p) {
    return (
      <section className="block">
        <Back />
        <SecHead num="404" title="NOT FOUND." />
      </section>
    );
  }
  return (
    <section className="block">
      <div className="pdetail">
        <Back />
        <div className="pd-head">
          <FitTitle>{p.title}</FitTitle>
          {p.icon && <img className="pd-icon" src={p.icon} alt="" />}
        </div>
        <p className="pd-tagline">{p.tagline}</p>
        {p.cover && <img className="pd-cover" src={p.cover} alt={p.title} />}
        <Spec p={p} />
        {/* 본인이 작성한 .md만 렌더하므로 HTML 이스케이프는 생략 */}
        <article className="md" dangerouslySetInnerHTML={{ __html: marked.parse(p.body) }} />
        <Links p={p} />
      </div>
    </section>
  );
}
