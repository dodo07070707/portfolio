# Doyoon Kim Portfolio (React + Vite)

## 실행

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ 생성
npm test         # frontmatter 파서 검사
```

## 수정

- 텍스트·경력·연락처: `src/data.js` (경력 항목에 `href`, `logo` 선택 추가 가능)
- 프로젝트: `src/projects/<slug>.md` 하나 = 프로젝트 하나. `_template.md`를 복사해서 작성 → `#/projects/<slug>`에 상세 페이지 생성
  - 상단 `---` 블록: `title`, `tagline`, `period`, `role`, `tags: [a, b]`, `status`, `color`, `cover`, `github`, `demo`, `store`, `doc`
  - 커버: 같은 폴더에 `<slug>.png`(jpg/webp), 앱 아이콘: `<slug>-icon.png`를 두면 자동 연결
  - 링크(`github`/`demo`/`store`/`doc`)는 상세 페이지 하단 LINKS 목록으로 표시
  - 본문: `## 개요` / `## 시스템 구성` / `## 프로젝트 회고` (Markdown)
  - 메인에는 `data.js`의 `FEATURED`에 적은 slug 4개, 전체는 `#/projects` (태그 필터)
- 이미지: `public/images/`에 넣고 `cover: images/p1.jpg`, `portrait: 'images/portrait.jpg'`
- 테마/강조색: `data.js`의 `SITE` (`theme`, `variant`, `accent`, `marquee`)
- 스타일·폰트: `src/index.css` (폰트는 맨 위 `--font` 한 줄)

## 구조

```
src/
  data.js            텍스트 콘텐츠 (소개, 스킬, 경력, 연락처)
  projects/*.md      프로젝트 글
  main.jsx           진입점 + 테마 적용
  App.jsx            라우팅 셸 (Nav + 페이지 + Footer)
  pages/             Home, ProjectList, ProjectDetail
  sections/          홈 섹션 (Hero, Marquee, About, Toolbox, BigPan, FeaturedProjects, Career)
  components/        공용 UI (Nav, Footer, SecHead, ProjectGrid, ExtLink)
  lib/               로직 (useRoute, useScrollMotion, projects 로더, frontmatter 파서)
  index.css          스타일 (섹션 순서대로)
```

## 배포

- **Vercel / Netlify**: GitHub에 push → 저장소 import (빌드 `npm run build`, 출력 `dist`)
- **Netlify Drop**: `npm run build` 후 `dist` 폴더를 app.netlify.com/drop에 드래그
- **GitHub Pages**: `vite.config.js`의 `base`를 `'/저장소이름/'`로 바꾸고 `dist`를 gh-pages 브랜치에 배포
