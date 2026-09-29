import { useEffect, useState } from 'react';

// 해시 라우팅: '#/projects' → 목록, '#/projects/<slug>' → 상세, 그 외(#about 등) → 홈
export function parseRoute(hash) {
  const [, page, slug] = hash.match(/^#\/(projects)(?:\/(.+))?/) || [];
  if (!page) return { page: 'home', anchor: hash.slice(1) };
  return slug ? { page: 'project', slug: decodeURIComponent(slug) } : { page: 'projects' };
}

export default function useRoute() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return { hash, ...parseRoute(hash) };
}
