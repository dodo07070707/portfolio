import { useEffect } from 'react';
import useRoute from './lib/useRoute.js';
import useScrollMotion from './lib/useScrollMotion.js';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ProjectList from './pages/ProjectList.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';

function Page({ route }) {
  if (route.page === 'project') return <ProjectDetail slug={route.slug} />;
  if (route.page === 'projects') return <ProjectList />;
  return <Home />;
}

export default function App() {
  const route = useRoute();

  // 페이지 전환 시 맨 위로(즉시), 홈 섹션 앵커(#about 등)면 해당 섹션으로(부드럽게)
  useEffect(() => {
    const target = route.anchor && document.getElementById(route.anchor);
    if (target) target.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [route.hash]);

  useScrollMotion(route.hash);

  return (
    <>
      <Nav autoHide={route.page === 'home'} />
      <Page route={route} />
      <Footer cta={route.page !== 'project'} />
    </>
  );
}
