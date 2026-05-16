// Shared utilities, movie data, texture components
// Exposed on window so direction-a/b/c can use them.

const MOVIES = [
  {
    id: 'plan9',
    title: 'プラン9・フロム・アウタースペース',
    titleEn: 'PLAN 9 FROM OUTER SPACE',
    year: 1959,
    director: 'エド・ウッド',
    directorEn: 'Edward D. Wood, Jr.',
    country: '米国',
    runtime: 79,
    score: 4.0, // /100
    starScore: 1.4, // /5
    tagline: '史上最悪のSF映画 — もしくは、純粋無垢の到達点',
    taglineEn: 'THE WORST FILM EVER MADE / OR PUREST INNOCENCE',
    genres: ['SF', 'ホラー', 'カルト'],
    synopsis: '異星人が地球の死者を蘇らせ、人類滅亡を企てる。皿のようなUFO、紙コップの墓石、別人にすり替わる主役。あらゆる欠落が、しかし映画というものの定義を逆照射する。',
    crime: '主演ベラ・ルゴシは撮影前に死去。代役は身長20cm差で、終始マントで顔を隠して登場。',
    quote: '「未来のことに思いを巡らせよ。なぜならそこで、我々はこれから生涯を過ごすのだから」',
    color: '#d72a1e'
  },
  {
    id: 'theroom',
    title: 'ザ・ルーム',
    titleEn: 'THE ROOM',
    year: 2003,
    director: 'トミー・ウィソー',
    directorEn: 'Tommy Wiseau',
    country: '米国',
    runtime: 99,
    score: 3.7,
    starScore: 1.3,
    tagline: '愛も友情も金もあった。だが演技だけが、なかった。',
    taglineEn: 'HE HAD EVERYTHING — EXCEPT THE ABILITY TO ACT',
    genres: ['ドラマ', 'カルト', '事故'],
    synopsis: '銀行員ジョニーは、婚約者リサに裏切られる。何度も同じ屋上で「ハイ・マーク」が反復され、ストーリーの伏線は回収されず、登場人物は次々と消える。それでも観客は笑い、泣き、スプーンを投げる。',
    crime: '製作費600万ドル — 出所は今も不明。トミー本人が監督・脚本・主演・製作。',
    quote: '「お前は俺を引き裂いた、リサ！」',
    color: '#9b1a14'
  },
  {
    id: 'troll2',
    title: 'トロール2',
    titleEn: 'TROLL 2',
    year: 1990,
    director: 'クラウディオ・フラガッソ',
    directorEn: 'Claudio Fragasso',
    country: '伊国',
    runtime: 95,
    score: 6.0,
    starScore: 1.5,
    tagline: 'トロールは出ない。出るのはゴブリンだ。',
    taglineEn: 'NO TROLLS. ONLY GOBLINS.',
    genres: ['ホラー', 'ファミリー', 'カルト'],
    synopsis: '一家が田舎町ニルボーグ（Nilbog = Goblin の逆綴り）に滞在し、菜食主義のゴブリンに人間を植物化されて食べられそうになる。英語が話せない監督と英語が話せない俳優の奇跡的協働。',
    crime: '出演者の大半は地元の素人。歯医者や看護師。台本は変更不可能だった（監督が英語の意見を理解できなかったため）。',
    quote: '「お前らは食えない！　お前らは人間だ！」',
    color: '#2d6a30'
  },
  {
    id: 'birdemic',
    title: 'バーデミック ショック＆テラー',
    titleEn: 'BIRDEMIC: SHOCK AND TERROR',
    year: 2010,
    director: 'ジェームズ・ウン',
    directorEn: 'James Nguyen',
    country: '米国',
    runtime: 105,
    score: 17.0,
    starScore: 1.7,
    tagline: '鷲が爆発する。理由は地球温暖化。',
    taglineEn: 'EAGLES EXPLODE. CLIMATE CHANGE EXPLAINS EVERYTHING.',
    genres: ['ホラー', 'ロマンス', '環境'],
    synopsis: 'シリコンバレーで出会った二人。三十分の小説風ロマンス。突然、空からCGの鷲がガソリンスタンドに突撃して爆発する。後はひたすら逃げる。観客はなぜか笑う。',
    crime: 'ヒッチコックの「鳥」へのオマージュ — 監督本人がそう繰り返し主張している。',
    quote: '「鷲は環境破壊への反逆として進化したのです」',
    color: '#3a5fa8'
  },
  {
    id: 'manos',
    title: 'マノス：運命の手',
    titleEn: 'MANOS: THE HANDS OF FATE',
    year: 1966,
    director: 'ハロルド・P・ワレン',
    directorEn: 'Harold P. Warren',
    country: '米国',
    runtime: 70,
    score: 1.9,
    starScore: 1.2,
    tagline: '肥料セールスマンが、賭けで映画を撮った。',
    taglineEn: 'A FERTILIZER SALESMAN WON A BET. THIS IS THE RESULT.',
    genres: ['ホラー', 'カルト'],
    synopsis: '砂漠で道に迷った家族が、変な召使いトーゴと、何人もの妻を持つ「マスター」の館に迷い込む。32秒間の運転シーンが二回繰り返される。',
    crime: 'カメラの撮影可能時間が一度に32秒だったため、ほぼ全てのカットが32秒で終わる。',
    quote: '「奥様、夜が来る。マスターはお喜びになりません」',
    color: '#5a3a1e'
  },
  {
    id: 'battlefield',
    title: 'バトルフィールド・アース',
    titleEn: 'BATTLEFIELD EARTH',
    year: 2000,
    director: 'ロジャー・クリスチャン',
    directorEn: 'Roger Christian',
    country: '米国',
    runtime: 119,
    score: 9.0,
    starScore: 1.4,
    tagline: 'ジョン・トラボルタの宗教的衝動と、傾いたカメラの蜜月',
    taglineEn: 'JOHN TRAVOLTAS RELIGION × ENDLESS DUTCH ANGLES',
    genres: ['SF', 'アクション', '冒涜'],
    synopsis: '西暦3000年、地球はサイクロ星人に支配されている。傾いた画面、緑のフィルター、無意味なスローモーション。トラボルタの長年の悲願として制作され、彼のキャリアを終わらせた。',
    crime: '撮影監督が「一度傾けたカメラを戻すのは負け」と発言。',
    quote: '「人類はネズミの食事のようだ」',
    color: '#1e5a4a'
  },
  {
    id: 'catwoman',
    title: 'キャットウーマン',
    titleEn: 'CATWOMAN',
    year: 2004,
    director: 'ピトフ',
    directorEn: 'Pitof',
    country: '米国',
    runtime: 104,
    score: 8.0,
    starScore: 1.6,
    tagline: 'ハル・ベリー、オスカー獲得直後の決断',
    taglineEn: 'POST-OSCAR CAREER DECISION OF THE CENTURY',
    genres: ['アクション', 'ファンタジー', '失策'],
    synopsis: '化粧品会社の陰謀。猫に蘇生されるパティ。CGとレザーと爪。ハル・ベリーはラジー賞授賞式に本物のオスカーを持参し、ユーモアでこれを受け取った。',
    crime: '監督は名字のみ「Pitof」と名乗る。当時すでに不穏な兆候。',
    quote: '「自由とは、規則の外側にしかない」',
    color: '#7a1e5a'
  },
  {
    id: 'wickerman',
    title: 'ウィッカーマン',
    titleEn: 'THE WICKER MAN (2006)',
    year: 2006,
    director: 'ニール・ラビュート',
    directorEn: 'Neil LaBute',
    country: '米国',
    runtime: 102,
    score: 15.0,
    starScore: 1.7,
    tagline: '「ハチだ！　ハチだぁ！　ああ、神よ、目の中に！！」',
    taglineEn: 'NOT THE BEES! NOT THE BEES!',
    genres: ['ホラー', 'ミステリー', 'ニコラス'],
    synopsis: '失踪した少女を追って島に渡った警官。女性ばかりのカルト共同体。クマの着ぐるみで女性を殴り、最後はハチで顔面を攻撃される。ニコラス・ケイジ偉業の一つ。',
    crime: 'ラビュートは元々シリアスなリメイクを意図。ケイジの即興が想定を超えた。',
    quote: '「あの自転車を返せええ！」',
    color: '#c97a1e'
  },
  {
    id: 'showgirls',
    title: 'ショーガール',
    titleEn: 'SHOWGIRLS',
    year: 1995,
    director: 'ポール・バーホーベン',
    directorEn: 'Paul Verhoeven',
    country: '米国',
    runtime: 131,
    score: 22.0,
    starScore: 1.9,
    tagline: '初日に撃沈、20年後に再評価される — そういう種類の映画',
    taglineEn: 'BOMBED ON OPENING / RECLAIMED 20 YEARS LATER',
    genres: ['ドラマ', '風刺', '再評価'],
    synopsis: 'ラスベガスでトップダンサーを目指す女。バーホーベン的アメリカ批判 — として誰も読まなかった当時。今ではキャンプ映画の代表作として大学で講義される。',
    crime: '7部門でラジー受賞、後に映画批評誌が再評価特集を組んだ。',
    quote: '「ベルサーチじゃない。ベルサーチェよ」',
    color: '#a8458b'
  },
  {
    id: 'samuraicop',
    title: 'サムライ・コップ',
    titleEn: 'SAMURAI COP',
    year: 1991,
    director: 'アミール・シェルバン',
    directorEn: 'Amir Shervan',
    country: '米国 / 伊朗',
    runtime: 96,
    score: 11.0,
    starScore: 1.5,
    tagline: '日本刀のLAコップ。実は刀の使い方を一度も習っていない。',
    taglineEn: 'KATANA COP / NEVER ACTUALLY TRAINED',
    genres: ['アクション', '犯罪', '誤読'],
    synopsis: 'LAでヤクザを追うサムライ警官。主演マシュー・カラチが撮影中に髪を切ってしまい、後半は明らかに別人のカツラ。すべてのカットが地獄、すべての地獄が祝祭。',
    crime: '監督は英語が不自由で、ほぼ全シーン一発撮り。',
    quote: '「お前のヤクザはここで終わりだ」',
    color: '#1e3a5a'
  }
];

// Sort buckets
const MOVIES_BY_DECADE = MOVIES.reduce((a, m) => {
  const d = Math.floor(m.year/10)*10;
  (a[d] = a[d] || []).push(m); return a;
}, {});

const COLUMNS = [
  { id:'why-bad', title:'なぜ「悪さ」は美しいのか', subtitle:'欠落と過剰、二つの美学について', author:'編集部', date:'2026.04.12', readtime:'8分' },
  { id:'wiseau', title:'トミー・ウィソーは何者なのか', subtitle:'出自不明、資金不明、それでも撮った男', author:'宮野 透', date:'2026.03.30', readtime:'12分' },
  { id:'goblins', title:'ゴブリンと菜食主義 — トロール2再読', subtitle:'30年後の「ニルボーグ」について', author:'武田 慶', date:'2026.03.18', readtime:'6分' },
  { id:'cult', title:'カルトと駄作の境界線', subtitle:'再評価のメカニズム、そのいやらしさ', author:'編集部', date:'2026.02.22', readtime:'10分' },
];

const TAGS = ['SF', 'ホラー', 'カルト', 'ドラマ', 'アクション', 'ファンタジー', '事故', '冒涜', '誤読', '崇拝', 'ニコラス・ケイジ', '低予算', '実話'];

// ============== TEXTURES & EFFECTS ==============

function GrainOverlay({ opacity = 0.18, mix = 'multiply' }) {
  // Procedural film grain via inline SVG (avoids external assets)
  const svg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .9 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='1'/></svg>`
  );
  return (
    <div aria-hidden style={{
      position:'absolute', inset:0, pointerEvents:'none',
      backgroundImage:`url("data:image/svg+xml;utf8,${svg}")`,
      backgroundSize:'220px 220px',
      opacity, mixBlendMode: mix, zIndex: 50
    }}/>
  );
}

function HalftoneCircle({ size = 160, color = '#111', bg = 'transparent' }) {
  // Halftone dot pattern - css radial-gradient
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      backgroundImage: `radial-gradient(${color} 35%, transparent 36%)`,
      backgroundSize: '8px 8px', background: bg,
      backgroundColor: bg,
    }}/>
  );
}

function HalftoneSquare({ width='100%', height='100%', color='#111', density=8, dot=3, style={} }) {
  return (
    <div style={{
      width, height,
      backgroundImage: `radial-gradient(${color} ${dot}px, transparent ${dot+0.5}px)`,
      backgroundSize: `${density}px ${density}px`,
      ...style
    }}/>
  );
}

function SprocketStrip({ height = 28, count = 30, color = '#111', bg = '#f5f1e8', vertical = false, style = {} }) {
  const holes = Array.from({ length: count });
  if (vertical) {
    return (
      <div style={{ width: height, background: bg, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around', padding:'8px 0', ...style }}>
        {holes.map((_, i) => (
          <div key={i} style={{ width: height*0.55, height: height*0.35, background: color, borderRadius: 2 }}/>
        ))}
      </div>
    );
  }
  return (
    <div style={{ height, background: bg, display:'flex', alignItems:'center', justifyContent:'space-around', padding:'0 8px', ...style }}>
      {holes.map((_, i) => (
        <div key={i} style={{ width: height*0.35, height: height*0.55, background: color, borderRadius: 2 }}/>
      ))}
    </div>
  );
}

function VHSScanlines({ opacity=0.25, color='#000' }){
  return (
    <div aria-hidden style={{
      position:'absolute', inset:0, pointerEvents:'none',
      background:`repeating-linear-gradient(to bottom, ${color}00 0, ${color}00 2px, ${color} 3px, ${color}00 4px)`,
      opacity, mixBlendMode:'multiply', zIndex:60
    }}/>
  );
}

// Cinema-poster placeholder — drawn with CSS only.
function PosterPlaceholder({ movie, w=320, h=460, mode='cream' }){
  // mode: 'cream' (default), 'dark', 'red'
  const bg = mode==='dark' ? '#0d0d0d' : mode==='red' ? '#d72a1e' : '#f5f1e8';
  const ink = mode==='dark' ? '#f5f1e8' : '#111';
  const accent = mode==='red' ? '#111' : '#d72a1e';
  return (
    <div style={{
      width:w, height:h, background:bg, color:ink, position:'relative',
      overflow:'hidden', fontFamily:"'Shippori Mincho B1', serif",
      border: `2px solid ${ink}`,
      boxShadow: mode==='dark' ? '0 0 0 0 transparent' : '8px 8px 0 0 #111'
    }}>
      {/* Faux poster scene */}
      <div style={{
        position:'absolute', inset:0,
        background: `conic-gradient(from 220deg at 60% 35%, ${movie.color} 0deg, ${movie.color}cc 80deg, ${ink} 200deg, ${movie.color} 360deg)`,
        opacity: mode==='dark' ? .9 : .85,
        mixBlendMode: mode==='dark' ? 'screen' : 'multiply'
      }}/>
      {/* Halftone overlay */}
      <div style={{
        position:'absolute', inset:0,
        backgroundImage:`radial-gradient(${ink} 1.4px, transparent 1.6px)`,
        backgroundSize: '6px 6px',
        opacity:.35, mixBlendMode:'multiply'
      }}/>
      {/* Big number */}
      <div style={{
        position:'absolute', top:8, left:10,
        fontFamily:"'Major Mono Display', monospace",
        fontSize:11, letterSpacing:'.15em', color:ink, opacity:.9
      }}>#{movie.id.toUpperCase()}</div>
      <div style={{
        position:'absolute', top:8, right:10,
        fontFamily:"'JetBrains Mono', monospace", fontSize:10, letterSpacing:'.1em', color:accent
      }}>{movie.year}</div>
      {/* Title block */}
      <div style={{
        position:'absolute', left:14, right:14, bottom:14,
        background: ink, color: bg, padding:'12px 12px 14px',
        fontFamily:"'Dela Gothic One', sans-serif",
        fontSize: Math.min(w/9.5, 34), lineHeight:.95
      }}>
        {movie.titleEn}
      </div>
      {/* Star badge */}
      <div style={{
        position:'absolute', top:'40%', right:14, transform:'translateY(-50%) rotate(-8deg)',
        background:accent, color: mode==='red' ? bg : '#fff', padding:'8px 10px',
        fontFamily:"'Dela Gothic One', sans-serif", fontSize:14, lineHeight:1,
        border:`2px solid ${ink}`
      }}>
        ★{movie.starScore.toFixed(1)}<br/>
        <span style={{fontSize:8, letterSpacing:'.15em'}}>OUT OF 5</span>
      </div>
    </div>
  );
}

// Score block - big, ugly, proud
function BigScore({ score, max=100, color='#d72a1e', ink='#111', label='AUDIENCE SCORE', style={} }){
  return (
    <div style={{
      fontFamily:"'Dela Gothic One', sans-serif",
      color, lineHeight:.85, position:'relative', ...style
    }}>
      <div style={{fontFamily:"'JetBrains Mono', monospace", fontSize:11, letterSpacing:'.2em', color:ink, marginBottom:6}}>
        {label}
      </div>
      <div style={{fontSize: 220, lineHeight:.8}}>
        {score.toString().padStart(2,'0')}<span style={{fontSize:48, color:ink}}>/{max}</span>
      </div>
    </div>
  );
}

// Marquee / ticker
function Marquee({ children, speed=40, bg='#111', color='#f5f1e8', height=44, style={}}){
  return (
    <div style={{
      width:'100%', height, background:bg, color, overflow:'hidden', position:'relative',
      display:'flex', alignItems:'center', ...style
    }}>
      <div style={{
        whiteSpace:'nowrap', display:'inline-block',
        animation:`marquee ${speed}s linear infinite`,
        fontFamily:"'Dela Gothic One', sans-serif", fontSize: height*0.45
      }}>
        {children} {children} {children} {children}
      </div>
      <style>{`@keyframes marquee { from {transform: translateX(0)} to {transform: translateX(-50%)} }`}</style>
    </div>
  );
}

// Composite signal-noise overlay: scanlines + grain + occasional tear bars.
function SignalNoise({ tearColor='#1c47ff', tearColor2='#ffe000', opacity=1 }){
  const bars = [
    {top:'12%', h:3, c:tearColor, x:8},
    {top:'27%', h:1, c:tearColor2, x:-12},
    {top:'48%', h:2, c:'#ff2a18', x:6},
    {top:'63%', h:1, c:tearColor, x:-10},
    {top:'81%', h:2, c:tearColor2, x:14},
    {top:'92%', h:1, c:'#ff2a18', x:-8},
  ];
  return (
    <div aria-hidden style={{position:'absolute', inset:0, pointerEvents:'none', opacity, zIndex:55}}>
      {/* scanlines */}
      <div style={{
        position:'absolute', inset:0,
        background:`repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 2px, rgba(0,0,0,.18) 3px, rgba(0,0,0,0) 4px)`,
        mixBlendMode:'multiply'
      }}/>
      {/* tear bars */}
      {bars.map((b,i)=>(
        <div key={i} style={{
          position:'absolute', top:b.top, left:0, right:0, height:b.h,
          background:b.c, transform:`translateX(${b.x}px)`, opacity:.85,
          mixBlendMode:'screen'
        }}/>
      ))}
    </div>
  );
}

// Vertical barcode-style strip (decorative)
function BarcodeStrip({ height=28, color='#111', bg='transparent', count=80, style={} }){
  // random-ish bars (deterministic from index)
  const bars = Array.from({length: count}, (_, i) => ((i*37+13)%9)+1);
  return (
    <div style={{
      height, background:bg, display:'flex', alignItems:'stretch', gap:1,
      padding:'2px 4px', ...style
    }}>
      {bars.map((w, i) => (
        <div key={i} style={{ width: w, background: i%5===2 ? 'transparent' : color }}/>
      ))}
    </div>
  );
}

// Chromatic-aberration text (RGB shifted shadows)
function ChromaText({ children, color='#fff', shift=2, font, size, style={} }){
  return (
    <span style={{
      position:'relative', display:'inline-block', color, fontFamily:font, fontSize:size, ...style,
      textShadow: `${shift}px 0 #ff2a18, -${shift}px 0 #1c47ff, 0 ${shift}px #ffe000`
    }}>{children}</span>
  );
}

// "Lost signal" colored noise bands (TV color bars)
function ColorBars({ height=20, style={} }){
  const cs = ['#f5f1e8', '#ffe000', '#2cffc0', '#c8ff2c', '#ff66a0', '#1c47ff', '#d72a1e', '#111'];
  return (
    <div style={{ display:'flex', height, ...style }}>
      {cs.map((c, i) => <div key={i} style={{flex:1, background:c}}/>)}
    </div>
  );
}

// Random dropped-pixel overlay — sparse colored squares like dead pixels
function DeadPixels({ count=24, palette=['#ffe000','#1c47ff','#ff2a18','#c8ff2c','#ff66a0'], opacity=.65 }){
  const px = Array.from({length:count}, (_,i)=>({
    t: ((i*73+11)%100), l: ((i*53+27)%100),
    c: palette[i%palette.length], s: 2 + (i%3)
  }));
  return (
    <div aria-hidden style={{position:'absolute', inset:0, pointerEvents:'none', opacity, zIndex:54, mixBlendMode:'screen'}}>
      {px.map((p,i)=>(
        <span key={i} style={{
          position:'absolute', top:`${p.t}%`, left:`${p.l}%`,
          width:p.s, height:p.s, background:p.c
        }}/>
      ))}
    </div>
  );
}

Object.assign(window, {
  MOVIES, MOVIES_BY_DECADE, COLUMNS, TAGS,
  GrainOverlay, HalftoneCircle, HalftoneSquare,
  SprocketStrip, VHSScanlines,
  PosterPlaceholder, BigScore, Marquee,
  SignalNoise, BarcodeStrip, ChromaText, ColorBars, DeadPixels
});
