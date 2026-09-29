import { useEffect, useState } from "react";

const LINKS = ["About", "Toolbox", "Projects", "Experience", "Contact"];

// autoHide: 홈 첫 화면(히어로)에서는 숨기고, 히어로를 지나면 표시
export default function Nav({ autoHide }) {
  const [show, setShow] = useState(!autoHide);
  useEffect(() => {
    if (!autoHide) return setShow(true);
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [autoHide]);

  return (
    <nav className={`nav${show ? "" : " nav-hidden"}`}>
      <a className="nav-mark" href="#top">
        @DEVDOYOON
      </a>
      <div className="nav-links">
        {LINKS.map((n) => (
          <a key={n} href={`#${n.toLowerCase()}`}>
            {n}
          </a>
        ))}
      </div>
    </nav>
  );
}
