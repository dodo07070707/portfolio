// 모든 콘텐츠는 이 파일에서 수정하세요.
// 이미지는 public/images/ 에 넣고 경로를 적으면 됩니다 (예: 'images/p1.jpg'). null이면 placeholder 표시.

export const SITE = {
  // 'cream' | 'paper' | 'dark'
  theme: "cream",
  // 'default' | 'serif' | 'stencil'
  variant: "serif",
  accent: "#d7a35f",
  marquee: false,
  portrait: "images/portrait.jpg",
};

export const MARQUEE = [
  "FRONT-END",
  "REACT",
  "FLUTTER",
  "HTML+CSS",
  "C++",
  "R",
  "FIGMA",
];

// 홈 PROJECTS 섹션에 보여줄 프로젝트 4개 (src/projects/<slug>.md 의 slug)
export const FEATURED = ["uoslife", "deplois", "afo", "recon"];

// 전체 프로젝트 페이지의 태그 필터 버튼 (이 순서대로, All은 자동으로 맨 앞)
export const FILTER_TAGS = ["React", "Flutter", "R", "Figma", "Chrome Extension"];

export const TOOLBOX = [
  {
    cat: "FRONT-END",
    used: ["React", "Flutter", "Dart"],
    tried: ["JavaScript", "Tailwind CSS", "Kotlin"],
  },
  {
    cat: "ENGINEERING",
    used: ["C/C++", "R"],
    tried: ["Python", "OpenCV", "Node.js", "Arduino", "Raspberry Pi"],
  },
  {
    cat: "WORKFLOW",
    used: [
      "GitHub",
      "Figma",
      "Notion",
      "Slack",
      "Firebase",
      "Google Play Console",
    ],
    tried: ["Docker", "Claude"],
  },
];

// 프로젝트는 src/projects/*.md 에서 관리합니다.

export const ACTIVITIES = [
  {
    yr: "’26 —",
    t: "UOSLIFE — University of Seoul Central IT Club",
    b: "Front-End",
    href: "https://uoslife.team/",
  },
  { yr: "’23 — ’25", t: "JUST — High School Start-up Club", b: "Leader" },
];

export const EDUCATION = [
  {
    yr: "’26 —",
    t: "University of Seoul — Dept. of Geoinformatics",
    b: "Undergraduate",
    href: "https://www.uos.ac.kr",
  },
  {
    yr: "’23",
    t: "Korea Digital Media High School",
    b: "GRADUATED",
    href: "https://dimigo-h.goeas.kr",
  },
];

// 항목 필드: yr, t, b + 선택 logo('images/uos.png'), href(기관 링크)
export const CAREER = [
  {
    title: "AWARDS",
    sub: "수상 내역",
    items: [
      {
        yr: "39th",
        t: "KOI — Korea Information Olympiad · Bronze (National)",
        b: "🥉 National",
        href: "https://koi.or.kr/",
      },
      {
        yr: "39th",
        t: "KOI — Korea Information Olympiad · Bronze (Region)",
        b: "🥉 Region",
        href: "https://koi.or.kr/",
      },
      {
        yr: "38th",
        t: "KOI — Korea Information Olympiad · Encouragement",
        b: "🎖 Region",
        href: "https://koi.or.kr/",
      },
      {
        yr: "2023",
        t: "KDMHS Console Game Programming Competition · Final",
        b: "Final",
        href: "https://dimigo-h.goeas.kr",
      },
      {
        yr: "6th",
        t: "Sunrin S/W Creative Output Presentation Contest · 1st",
        b: "🥇 1st",
        href: "https://sunrint.sen.hs.kr/",
      },
      { yr: "17th", t: "Songpanews Math Ability Assessment · Bronze", b: "🥉" },
      {
        yr: "—",
        t: "National Creative Convergence Math Cert · Encouragement",
        b: "🏆",
      },
      { yr: "2023", t: "KDMHS Creative IT Presentation · Bronze", b: "🥉", href: "https://dimigo-h.goeas.kr" },
      {
        yr: "2023",
        t: "Software & Future Dream Challenge · Final",
        b: "Final",
      },
      { yr: "—", t: "Sunrin Gifted (S/W) — Outstanding Student", b: "Award", href: "https://sunrint.sen.hs.kr/" },
    ],
  },
  {
    title: "CERTS'",
    sub: "자격증",
    items: [
      { yr: "L2", t: "COS — Coding Specialist", b: "Cert" },
      { yr: "B", t: "ITQ Excel", b: "Cert" },
      { yr: "L4", t: "국가공인 문서실무사", b: "Cert" },
      { yr: "A", t: "ITQ Internet", b: "Cert" },
    ],
  },
];

export const CONTACT = {
  mail: ["devdoyun@gmail.com", "dodo070707@naver.com"],
  tel: "+82 10-5632-8583",
  instagram: { label: "@nooyoolmik", href: "https://instagram.com/d0_.yxn_" },
  github: { label: "@dodo07070707", href: "https://github.com/dodo07070707" },
  solved: { label: "dodo070707", href: "https://solved.ac/profile/dodo070707" },
};
