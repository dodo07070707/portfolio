import { parseFrontmatter } from './frontmatter.js';

// src/projects/<slug>.md 하나 = 프로젝트 하나 (_로 시작하는 파일은 제외). <slug>.png는 커버, <slug>-icon.png는 앱 아이콘으로 자동 연결.
const files = import.meta.glob(['../projects/*.md', '!../projects/_*.md'], { query: '?raw', import: 'default', eager: true });
const images = import.meta.glob('../projects/*.{png,jpg,jpeg,webp,gif}', { import: 'default', eager: true });

const slugOf = path => path.match(/([^/]+)\.\w+$/)[1];
const covers = Object.fromEntries(Object.entries(images).map(([path, url]) => [slugOf(path), url]));

export const PROJECTS = Object.entries(files)
  .map(([path, src]) => {
    const { data, body } = parseFrontmatter(src);
    const slug = slugOf(path);
    return { slug, title: slug, tagline: '', period: '', tags: [], color: '#222', cover: covers[slug], icon: covers[`${slug}-icon`], ...data, body };
  })
  // period 시작일 기준 최신순 ('2026.01 — ...' 형태라 문자열 비교로 충분)
  .sort((a, b) => b.period.localeCompare(a.period));

export const LINK_LABELS = { web: 'Website', github: 'GitHub', demo: 'Demo', store: 'Store', doc: 'Docs' };
