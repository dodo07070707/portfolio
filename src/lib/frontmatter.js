// .md 맨 위 --- 블록을 { data, body }로 분리. 지원 문법: `key: value`, `key: [a, b]`
export function parseFrontmatter(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { data: {}, body: src };
  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(':');
    const key = line.slice(0, i).trim();
    const v = line.slice(i + 1).trim();
    if (i < 0 || !key || key.startsWith('#') || !v) continue;
    data[key] = v.startsWith('[') && v.endsWith(']')
      ? v.slice(1, -1).split(',').map(s => s.trim()).filter(Boolean)
      : v;
  }
  return { data, body: src.slice(m[0].length) };
}
