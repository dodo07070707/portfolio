import { SITE, EDUCATION, ACTIVITIES } from "../data.js";
import { CareerItem } from "./Career.jsx";
import SecHead from "../components/SecHead.jsx";

export default function About() {
  return (
    <section className="block" id="about">
      <SecHead title="ABOUT." />
      <div className="about-grid">
        <div className="about-body">
          <p className="kr">
            서울시립대 공간정보공학과에 재학 중인 07년생 프론트엔드 개발자
            김도윤입니다.
          </p>
          <p className="kr">
            디자인 시안을 그대로 옮기는 일을 넘어서, 왜 이 자리에 이 컴포넌트가
            있어야 하는지 같이 고민하는 개발자가 되고 싶습니다.
          </p>
          <p className="kr">
            중학생 시절부터 C++로 알고리즘을 다루고, <br />
            고등학교 시절부터 개인 토이부터 교내 서비스까지 React · Flutter로
            8개 이상의 프로젝트를 처음부터 끝까지 만들어 왔습니다.
          </p>
          {[["EDUCATION", EDUCATION], ["ACTIVITIES", ACTIVITIES]].map(([k, items]) => (
            <div className="about-list" key={k}>
              <div className="k">{k}</div>
              {items.map((it, i) => <CareerItem key={i} it={it} />)}
            </div>
          ))}
        </div>
        <div className="portrait">
          {SITE.portrait ? (
            <img src={SITE.portrait} alt="김도윤 프로필 사진" />
          ) : (
            <div className="ph">PORTRAIT · 4:5</div>
          )}
        </div>
      </div>
    </section>
  );
}
