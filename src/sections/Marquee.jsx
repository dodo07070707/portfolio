import { MARQUEE } from '../data.js';

// 트랙을 -50%만큼 흘려 반복하므로, 절반(half)이 화면 폭보다 길어야 끝에 빈 곳이 안 생김.
// 반복 횟수를 바꾸면 index.css의 .strip-track 애니메이션 시간도 같은 배수로 조정.
const REPEAT = 3;

export default function Marquee() {
  const half = Array(REPEAT).fill(MARQUEE).flat();
  return (
    <div className="strip">
      <div className="strip-track">
        {[...half, ...half].flatMap((m, i) => [<span key={i}>{m}</span>, <span key={`${i}d`}>·</span>])}
      </div>
    </div>
  );
}
