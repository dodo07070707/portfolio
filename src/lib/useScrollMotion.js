import { useEffect } from 'react';

// 히어로 패럴랙스 + 대형 헤드라인 가로 이동 + 섹션 타이틀 진입
export default function useScrollMotion(key) {
  useEffect(() => {
    const hero = document.getElementById('heroTitle');
    const big = document.getElementById('bigPan');
    const pans = [...document.querySelectorAll('.scroll-pan')].filter(el => el !== hero && el !== big);
    let raf = 0;
    const run = () => {
      raf = 0;
      const y = window.scrollY, vh = window.innerHeight;
      if (hero) {
        const k = Math.max(0, Math.min(1, y / vh));
        hero.style.transform = `translate3d(0, ${-k * 30}px, 0)`;
        hero.style.opacity = 1 - k * 0.4;
      }
      if (big) {
        const r = big.getBoundingClientRect();
        const k = Math.max(-1, Math.min(1, 1 - (r.top + r.height / 2) / vh));
        big.style.transform = `translate3d(${k * -300}px, 0, 0)`;
      }
      pans.forEach(el => {
        const r = el.getBoundingClientRect();
        const k = Math.max(0, Math.min(1, 1 - (r.top - vh * 0.4) / (vh * 0.5)));
        el.style.transform = `translate3d(${(1 - k) * -80}px, 0, 0)`;
        el.style.opacity = 0.2 + k * 0.8;
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(run); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    run();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [key]);
}
