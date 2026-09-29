import { PROJECTS } from '../lib/projects.js';

const WORDS = ['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'TEN',
  'ELEVEN', 'TWELVE', 'THIRTEEN', 'FOURTEEN', 'FIFTEEN', 'SIXTEEN', 'SEVENTEEN', 'EIGHTEEN', 'NINETEEN', 'TWENTY'];
const countWord = n => WORDS[n] ?? n;

// 스크롤에 따라 가로로 흐르는 대형 문구 (움직임은 lib/useScrollMotion.js)
export default function BigPan() {
  return (
    <section className="block bigpan">
      <div className="bigpan-frame">
        <div className="bigpan-text display scroll-pan" id="bigPan">
          {`${countWord(PROJECTS.length)} PROJECTS — ONE DEVELOPER ⏤ `.repeat(2)}
        </div>
      </div>
    </section>
  );
}
