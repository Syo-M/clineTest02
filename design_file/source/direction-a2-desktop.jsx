// DIRECTION A · v2 — RED EDITORIAL · CRASH EDITION
// Editorial brutalism, but RED dominant + complementary accents
// (cobalt blue, electric yellow, lime, hot pink), cluttered scrapbook
// energy: tilted stickers, scribbled arrows, riso misregistration.

const A2 = {
  red: '#d72a1e',
  redDeep: '#9b1a14',
  cream: '#f5f1e8',
  paper: '#ede7d8',
  ink: '#0f0c08',
  blue: '#1c47ff',
  yellow: '#ffe000',
  lime: '#c8ff2c',
  pink: '#ff66a0',
  muted: 'rgba(255,255,255,0.65)',
};

const a2Fonts = {
  display: "'Dela Gothic One', sans-serif",
  serif: "'Shippori Mincho B1', serif",
  serifAlt: "'Zen Old Mincho', serif",
  sans: "'Zen Kaku Gothic New', sans-serif",
  mono: "'JetBrains Mono', monospace",
  monoDisplay: "'Major Mono Display', monospace",
  reggae: "'Reggae One', cursive",
  dot: "'DotGothic16', sans-serif",
};

// ============ CLUTTER COMPONENTS ============

// Headline w/ riso-misregistration: cyan + yellow ghosts offset behind
function RisoHeadline({ children, size=120, color=A2.ink, ghost1=A2.blue, ghost2=A2.yellow, style={}, font=a2Fonts.display }){
  return (
    <span style={{ position:'relative', display:'inline-block', fontFamily:font, fontSize:size, lineHeight:.92, letterSpacing:'-.03em', color, ...style }}>
      <span style={{ position:'absolute', inset:0, color:ghost1, transform:'translate(4px, 3px)', mixBlendMode:'screen', opacity:.85 }} aria-hidden>{children}</span>
      <span style={{ position:'absolute', inset:0, color:ghost2, transform:'translate(-3px, 2px)', mixBlendMode:'multiply', opacity:.75 }} aria-hidden>{children}</span>
      <span style={{ position:'relative' }}>{children}</span>
    </span>
  );
}

// Rotated sticker badge
function Sticker({ children, bg=A2.yellow, color=A2.ink, rotate=-4, size=14, style={}, border=true }){
  return (
    <div style={{
      display:'inline-block', background:bg, color, padding:'6px 12px',
      fontFamily:a2Fonts.mono, fontSize:size, fontWeight:700, letterSpacing:'.15em',
      transform:`rotate(${rotate}deg)`, border: border ? `2px solid ${A2.ink}` : 'none',
      boxShadow: `4px 4px 0 0 ${A2.ink}`, whiteSpace:'nowrap',
      ...style
    }}>
      {children}
    </div>
  );
}

// Scribble underline (svg, hand-drawn squiggle)
function ScribbleUnderline({ color=A2.blue, width=200, style={} }){
  return (
    <svg viewBox="0 0 200 16" width={width} height={width*0.08} preserveAspectRatio="none" style={{display:'block', ...style}}>
      <path d="M2 10 C 30 2, 60 14, 88 8 S 140 2, 168 10 S 198 6, 198 8" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

// Scribble circle (hand-drawn around things)
function ScribbleCircle({ color=A2.blue, w=200, h=80, style={}, sw=3 }){
  return (
    <svg viewBox="0 0 200 80" width={w} height={h} preserveAspectRatio="none" style={{position:'absolute', pointerEvents:'none', ...style}}>
      <ellipse cx="100" cy="40" rx="92" ry="32" stroke={color} strokeWidth={sw} fill="none" strokeDasharray="0 1 0" transform="rotate(-3 100 40)"/>
      <ellipse cx="100" cy="40" rx="89" ry="29" stroke={color} strokeWidth={sw-1} fill="none" opacity=".7" transform="rotate(2 100 40)"/>
    </svg>
  );
}

// Hand-drawn arrow
function ScribbleArrow({ color=A2.blue, w=120, h=60, style={}, sw=3 }){
  return (
    <svg viewBox="0 0 120 60" width={w} height={h} style={{ pointerEvents:'none', ...style }}>
      <path d="M6 30 C 30 8, 60 52, 96 28" stroke={color} strokeWidth={sw} fill="none" strokeLinecap="round"/>
      <path d="M90 18 L100 28 L88 36" stroke={color} strokeWidth={sw} fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Wash tape strip
function Tape({ color=A2.blue, w=110, rotate=4, style={}, opacity=.85 }){
  return (
    <div style={{
      width:w, height:24, background:color, opacity,
      transform:`rotate(${rotate}deg)`, position:'absolute',
      backgroundImage:`repeating-linear-gradient(90deg, transparent 0 4px, rgba(0,0,0,.08) 4px 5px)`,
      ...style
    }}/>
  );
}

// Stamp — rotated, faded rubber stamp
function Stamp({ children, color=A2.blue, rotate=-12, size=18, style={} }){
  return (
    <div style={{
      display:'inline-block', color, border:`3px solid ${color}`, padding:'6px 14px',
      fontFamily:a2Fonts.mono, fontSize:size, fontWeight:800, letterSpacing:'.18em',
      transform:`rotate(${rotate}deg)`, opacity:.85, textTransform:'uppercase',
      ...style
    }}>{children}</div>
  );
}

// Post-it
function PostIt({ children, bg=A2.yellow, rotate=-3, w=200, style={} }){
  return (
    <div style={{
      width:w, background:bg, padding:'14px 14px 18px',
      fontFamily:a2Fonts.reggae, fontSize:15, lineHeight:1.5, color:A2.ink,
      transform:`rotate(${rotate}deg)`, boxShadow:`4px 4px 0 rgba(0,0,0,.18), 0 8px 18px rgba(0,0,0,.18)`,
      ...style
    }}>{children}</div>
  );
}

// Poster with riso color overlay (red+blue halftone wash)
function A2Poster({ movie, w=320, h=460, accent=A2.blue }){
  return (
    <div style={{ width:w, height:h, position:'relative', border:`3px solid ${A2.ink}`, overflow:'hidden', boxShadow:`8px 8px 0 0 ${A2.ink}` }}>
      <PosterPlaceholder movie={movie} w={w-6} h={h-6} mode="cream"/>
      {/* color wash */}
      <div style={{
        position:'absolute', inset:3,
        background:`linear-gradient(135deg, ${accent}66, transparent 60%, ${A2.red}44)`,
        mixBlendMode:'screen', pointerEvents:'none'
      }}/>
      {/* halftone */}
      <div style={{
        position:'absolute', inset:3,
        backgroundImage:`radial-gradient(${A2.ink} 1.4px, transparent 1.6px)`,
        backgroundSize:'5px 5px', opacity:.18, mixBlendMode:'multiply', pointerEvents:'none'
      }}/>
    </div>
  );
}

function A2Label({ children, color=A2.cream, style={} }){
  return (
    <div style={{
      fontFamily:a2Fonts.monoDisplay, fontSize:10, letterSpacing:'.3em',
      color, textTransform:'uppercase', ...style
    }}>{children}</div>
  );
}

// ============ CHROME ============

function A2Nav(){
  return (
    <header style={{ position:'relative', background:A2.red, color:A2.cream }}>
      {/* upper ribbon */}
      <div style={{
        background:A2.ink, color:A2.cream, padding:'6px 24px',
        display:'flex', justifyContent:'space-between', alignItems:'center',
        fontFamily:a2Fonts.mono, fontSize:10, letterSpacing:'.25em'
      }}>
        <span>VOL.07 — VERY BAD TASTE / CRASH ISSUE</span>
        <span style={{color:A2.yellow}}>● LIVE 2026.05.16 (火)</span>
        <span style={{color:A2.lime}}>SUBSCRIBE ▸</span>
      </div>
      <div style={{
        display:'grid', gridTemplateColumns:'auto 1fr auto', alignItems:'center',
        padding:'16px 24px', gap:24, borderBottom:`3px solid ${A2.ink}`
      }}>
        <div style={{ position:'relative', display:'flex', alignItems:'baseline', gap:14 }}>
          <RisoHeadline size={42} color={A2.cream} ghost1={A2.yellow} ghost2={A2.blue}>
            異端
          </RisoHeadline>
          <Sticker bg={A2.yellow} rotate={-6} size={10} style={{position:'relative'}}>ITAN.07</Sticker>
        </div>
        <nav style={{ display:'flex', gap:18, justifyContent:'center', fontFamily:a2Fonts.sans, fontSize:14, fontWeight:900 }}>
          {[['ARCHIVE', null], ['COLUMN', A2.yellow], ['RANDOM', null], ['SUBSCRIBE', A2.lime]].map(([n, hl]) => (
            <a key={n} href="#" style={{
              color: hl || A2.cream, textDecoration:'none',
              borderBottom: hl ? `3px solid ${hl}` : 'none', paddingBottom:2
            }}>{n}</a>
          ))}
        </nav>
        <Sticker bg={A2.cream} rotate={3} size={11} style={{position:'relative'}}>● REC</Sticker>
      </div>
    </header>
  );
}

function A2Footer(){
  return (
    <footer style={{ background:A2.ink, color:A2.cream, padding:'56px 32px 28px', position:'relative', overflow:'hidden' }}>
      <HalftoneSquare width="100%" height="100%" color={`${A2.red}80`} density={6} dot={1.2}
        style={{position:'absolute', inset:0, opacity:.4, pointerEvents:'none'}}/>
      <div style={{ position:'relative' }}>
        <RisoHeadline size={200} color={A2.cream} ghost1={A2.red} ghost2={A2.yellow}>異端.</RisoHeadline>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:32, marginTop:36, paddingTop:24, borderTop:`1px solid ${A2.cream}40` }}>
          <div style={{ fontFamily:a2Fonts.serif, fontSize:13, lineHeight:1.85, color:`${A2.cream}cc` }}>
            Z級・カルト・低評価映画専門の独立メディア。記事の無断転載を禁ず。映画を観るのは、自由意志です。
          </div>
          {[['ARCHIVE', A2.yellow], ['COLUMN', A2.lime], ['EDITORIAL', A2.pink]].map(([h, c]) => (
            <div key={h}>
              <div style={{ fontFamily:a2Fonts.monoDisplay, fontSize:10, letterSpacing:'.3em', color:c, marginBottom:10 }}>{h}</div>
              <div style={{ fontFamily:a2Fonts.sans, fontSize:12, lineHeight:1.95, color:`${A2.cream}cc` }}>
                {h==='ARCHIVE' && '一覧 / 年代別 / 監督別 / スコア別'}
                {h==='COLUMN' && 'エッセイ / 論考 / インタビュー'}
                {h==='EDITORIAL' && '編集部 / 寄稿募集 / お問い合わせ / RSS'}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:32, fontFamily:a2Fonts.mono, fontSize:10, letterSpacing:'.18em', color:`${A2.cream}88` }}>
          <span>© 2026 ITAN EDITORIAL · CRASH ISSUE</span>
          <Stamp color={A2.yellow} rotate={-3} size={11}>NO MASTERPIECES HARMED</Stamp>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// A2 · TOP
// ============================================================

function A2Home(){
  const featured = MOVIES[0];
  const second = MOVIES[1];
  return (
    <div style={{ width:'100%', height:'100%', background:A2.red, color:A2.cream, fontFamily:a2Fonts.sans, position:'relative', overflow:'hidden' }}>
      <GrainOverlay opacity={0.18}/>
      <DeadPixels count={36} opacity={0.5}/>
      <A2Nav/>

      {/* HERO with clutter */}
      <section style={{ position:'relative', padding:'40px 32px 64px', overflow:'hidden' }}>
        <SignalNoise opacity={.65}/>
        {/* scattered stickers */}
        <div style={{ position:'absolute', top:30, right:50 }}>
          <Sticker bg={A2.yellow} rotate={8}>VOL.07 / 異端</Sticker>
        </div>
        <div style={{ position:'absolute', top:80, right:240 }}>
          <Stamp color={A2.cream} rotate={-8}>NOT FOR SQUARES</Stamp>
        </div>
        <div style={{ position:'absolute', top:140, right:32 }}>
          <PostIt bg={A2.lime} rotate={6} w={180}>
            編集後記より、 「批評を撮るな、 映画を撮れ」<br/>—— E. ARAI
          </PostIt>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(12, 1fr)', gap:16, position:'relative' }}>
          <div style={{ gridColumn:'1 / 9' }}>
            <A2Label color={A2.yellow}>FEATURE — VOL.07 / 異端の正典</A2Label>
            <div style={{ marginTop:18 }}>
              <RisoHeadline size={172} color={A2.cream} ghost1={A2.yellow} ghost2={A2.blue}>史上最悪</RisoHeadline>
            </div>
            <div style={{ fontFamily:a2Fonts.serif, fontStyle:'italic', fontWeight:800, fontSize:128, lineHeight:.92, letterSpacing:'-.02em', color:A2.ink, position:'relative' }}>
              もしくは
              <ScribbleUnderline color={A2.yellow} width={360} style={{position:'absolute', bottom:-10, left:0}}/>
            </div>
            <div style={{ position:'relative', marginTop:8 }}>
              <RisoHeadline size={172} color={A2.cream} ghost1={A2.lime} ghost2={A2.pink}>純粋無垢の</RisoHeadline>
              <ScribbleCircle color={A2.yellow} w={260} h={120} style={{ top:-20, right:-30 }}/>
            </div>
            <div style={{ fontFamily:a2Fonts.display, fontSize:172, lineHeight:.92, color:A2.ink }}>
              到達点<span style={{color:A2.yellow}}>。</span>
            </div>
          </div>

          {/* right sidebar editor's note */}
          <aside style={{
            gridColumn:'10 / 13', alignSelf:'end',
            background:A2.cream, color:A2.ink, padding:'18px 18px',
            border:`3px solid ${A2.ink}`, boxShadow:`6px 6px 0 0 ${A2.ink}`, transform:'rotate(-1deg)',
            position:'relative'
          }}>
            <div style={{ position:'absolute', top:-14, right:-14 }}>
              <Sticker bg={A2.pink} rotate={8} size={10}>EDITORS NOTE</Sticker>
            </div>
            <A2Label color={A2.red}>編集長より</A2Label>
            <div style={{ fontFamily:a2Fonts.serif, fontSize:14, lineHeight:1.85, marginTop:10, fontWeight:500 }}>
              本号は、世に「失敗作」と呼ばれる映画の中に、しばしば見落とされる純度と狂気の手触りを探る試みである。我々は、駄作を擁護しない。ただ、それが映画である事実を引き受ける。
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginTop:12 }}>
              <Tape color={A2.blue} w={50} rotate={0} style={{position:'static', display:'inline-block'}}/>
              <span style={{ fontFamily:a2Fonts.mono, fontSize:10, letterSpacing:'.25em', color:A2.redDeep }}>—— E. ARAI</span>
            </div>
          </aside>
        </div>

        {/* tagline ribbon below */}
        <div style={{ marginTop:48, display:'grid', gridTemplateColumns:'auto 1fr auto', alignItems:'center', gap:24, position:'relative' }}>
          <Stamp color={A2.cream} rotate={-4} size={14}>READ ↓ NOW ↓</Stamp>
          <div style={{ fontFamily:a2Fonts.serif, fontSize:22, lineHeight:1.55, fontWeight:500, fontStyle:'italic', maxWidth:760, color:A2.cream }}>
            「世評の低さ」とは、誰の世のものか。誰の評価か。低いとは、何に対して低いのか — 本誌は、その問いから始める。
          </div>
          <ScribbleArrow color={A2.yellow} w={140} h={70} style={{transform:'rotate(20deg)'}}/>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee speed={26} bg={A2.yellow} color={A2.ink} height={52}>
        <span style={{padding:'0 18px'}}>★1.4/5 · Z級 · CULT · 駄作 · 異端 · TROLL 2 · PLAN 9 · THE ROOM · ★ NO REFUNDS ★ </span>
      </Marquee>

      {/* FEATURE 01 — cream paper */}
      <section style={{ padding:'56px 32px 56px', background:A2.cream, color:A2.ink, position:'relative', overflow:'hidden' }}>
        <HalftoneSquare width="100%" height="100%" color={`${A2.red}40`} density={6} dot={1.2}
          style={{position:'absolute', inset:0, opacity:.45, pointerEvents:'none'}}/>
        <div style={{position:'relative'}}>
          <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:24 }}>
            <A2Label color={A2.red}>FEATURED — 01 / 異端の聖典</A2Label>
            <div style={{display:'flex', gap:8}}>
              <Sticker bg={A2.blue} color={A2.cream} rotate={-3} size={10}>BANNED IN BIRMINGHAM</Sticker>
              <Sticker bg={A2.lime} rotate={3} size={10}>CULT</Sticker>
            </div>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'480px 1fr', gap:48, alignItems:'start', position:'relative' }}>
            <div style={{ position:'relative' }}>
              <Tape color={A2.blue} w={120} rotate={-8} style={{ top:-12, left:-20, zIndex:3 }}/>
              <Tape color={A2.yellow} w={100} rotate={6} style={{ top:-12, right:-10, zIndex:3 }}/>
              <A2Poster movie={featured} w={480} h={680} accent={A2.blue}/>
              <Stamp color={A2.red} rotate={-14} size={20} style={{ position:'absolute', bottom:30, left:-30, background:A2.cream, zIndex:4 }}>RATED Z</Stamp>
            </div>
            <div style={{ position:'relative' }}>
              <div style={{ fontFamily:a2Fonts.mono, fontSize:11, letterSpacing:'.2em', color:A2.red, marginBottom:14 }}>
                {featured.year} / {featured.country} / {featured.runtime}分 / DIR: {featured.director}
              </div>
              <h2 style={{ fontFamily:a2Fonts.display, fontSize:80, lineHeight:.92, margin:'0 0 8px', letterSpacing:'-.03em', color:A2.ink, position:'relative' }}>
                {featured.title}
                <ScribbleCircle color={A2.blue} w={400} h={160} style={{top:-40, left:-40, zIndex:-1}}/>
              </h2>
              <div style={{ fontFamily:a2Fonts.monoDisplay, fontSize:13, letterSpacing:'.2em', color:A2.redDeep, marginBottom:24 }}>
                {featured.titleEn}
              </div>

              {/* big score with messy accents */}
              <div style={{ display:'flex', alignItems:'flex-end', gap:24, margin:'24px 0 32px', position:'relative' }}>
                <div>
                  <div style={{ fontFamily:a2Fonts.mono, fontSize:10, letterSpacing:'.25em', color:A2.ink, marginBottom:4 }}>
                    AUDIENCE SCORE
                  </div>
                  <div style={{ fontFamily:a2Fonts.display, fontSize:172, lineHeight:.78, color:A2.red }}>
                    {featured.score.toFixed(0).padStart(2,'0')}<span style={{ fontSize:48, color:A2.ink }}>/100</span>
                  </div>
                </div>
                <div style={{
                  background:A2.yellow, color:A2.ink, padding:'14px 18px',
                  border:`3px solid ${A2.ink}`, boxShadow:`5px 5px 0 0 ${A2.ink}`,
                  transform:'rotate(-3deg)', marginLeft:14, marginBottom:32
                }}>
                  <div style={{ fontFamily:a2Fonts.mono, fontSize:10, letterSpacing:'.2em' }}>STAR</div>
                  <div style={{ fontFamily:a2Fonts.display, fontSize:48, lineHeight:1 }}>★{featured.starScore.toFixed(1)}</div>
                </div>
                <ScribbleArrow color={A2.red} w={120} h={70} style={{position:'absolute', left:0, top:-50, transform:'rotate(-20deg)'}}/>
              </div>

              <div style={{ fontFamily:a2Fonts.serif, fontSize:18, lineHeight:1.85, fontWeight:500, marginBottom:24, maxWidth:560 }}>
                {featured.synopsis}
              </div>
              <div style={{
                background:A2.ink, color:A2.cream, padding:'14px 18px',
                borderLeft:`6px solid ${A2.yellow}`, fontFamily:a2Fonts.serif, fontStyle:'italic',
                fontSize:18, fontWeight:500, lineHeight:1.6, transform:'rotate(-.5deg)'
              }}>
                {featured.quote}
              </div>
              <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginTop:18 }}>
                {featured.genres.map((g, i) => (
                  <Sticker key={g} bg={[A2.blue, A2.lime, A2.pink][i%3]} color={i===0 ? A2.cream : A2.ink} rotate={[-2,3,-1][i%3]} size={11}>
                    #{g}
                  </Sticker>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 02 — inverted, on red */}
      <section style={{ padding:'56px 32px', position:'relative' }}>
        <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom:24 }}>
          <A2Label color={A2.yellow}>FEATURED — 02 / 駄作の中の親愛</A2Label>
          <div style={{ display:'flex', alignItems:'center', gap:14 }}>
            <Sticker bg={A2.pink} rotate={4} size={10}>MIDNIGHT FAVE</Sticker>
            <Sticker bg={A2.lime} rotate={-3} size={10}>SPOON THROWING ALLOWED</Sticker>
          </div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 380px', gap:48, position:'relative' }}>
          <div>
            <RisoHeadline size={108} color={A2.cream} ghost1={A2.blue} ghost2={A2.yellow}>{second.title}</RisoHeadline>
            <div style={{ fontFamily:a2Fonts.mono, fontSize:13, letterSpacing:'.2em', color:A2.cream, marginTop:14 }}>
              {second.year} · {second.directorEn} · ★{second.starScore.toFixed(1)}/5
            </div>
            <div style={{ fontFamily:a2Fonts.serif, fontSize:17, lineHeight:1.85, fontWeight:500, marginTop:24, maxWidth:560, color:A2.cream }}>
              {second.synopsis}
            </div>
            <div style={{ fontFamily:a2Fonts.reggae, fontSize:36, marginTop:24, color:A2.yellow, lineHeight:1.2 }}>
              「{second.quote.replace(/[「」！]/g,'')}！」
            </div>

            {/* CTA row */}
            <div style={{ display:'flex', gap:12, marginTop:28, alignItems:'center' }}>
              <button style={{
                background:A2.yellow, color:A2.ink, border:`3px solid ${A2.ink}`, padding:'12px 20px',
                fontFamily:a2Fonts.display, fontSize:18, cursor:'pointer', boxShadow:`5px 5px 0 ${A2.ink}`
              }}>
                ▶ 詳細を観る
              </button>
              <Sticker bg={A2.cream} rotate={-4} size={11}>EP-002</Sticker>
            </div>
          </div>
          <div style={{ position:'relative' }}>
            <Tape color={A2.lime} w={130} rotate={5} style={{top:-10, left:-15, zIndex:3}}/>
            <A2Poster movie={second} w={380} h={520} accent={A2.pink}/>
            <PostIt bg={A2.yellow} rotate={-6} w={150} style={{ position:'absolute', bottom:-30, right:-40, zIndex:4 }}>
              「製作費600万ドルの 出所が、 今もって、 不明である。」
            </PostIt>
          </div>
        </div>
      </section>

      <Marquee speed={28} bg={A2.blue} color={A2.cream} height={44}>
        <span style={{padding:'0 18px'}}>★ NEW UPDATE WEDNESDAY 00:00 ★ NEW UPDATE WEDNESDAY 00:00 ★ </span>
      </Marquee>

      {/* INDEX 4 grid */}
      <section style={{ padding:'64px 32px', background:A2.cream, color:A2.ink, position:'relative', overflow:'hidden' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:32 }}>
          <div>
            <A2Label color={A2.blue}>INDEX — RECENT ENTRIES</A2Label>
            <div style={{ fontFamily:a2Fonts.display, fontSize:84, lineHeight:.95, marginTop:8, color:A2.ink, position:'relative' }}>
              近影
              <ScribbleUnderline color={A2.red} width={220} style={{position:'absolute', bottom:-12, left:0}}/>
            </div>
          </div>
          <a href="#" style={{
            background:A2.ink, color:A2.cream, padding:'10px 16px', textDecoration:'none',
            fontFamily:a2Fonts.mono, fontSize:12, letterSpacing:'.2em', display:'inline-flex', alignItems:'center', gap:8
          }}>
            ALL ARCHIVE
            <ScribbleArrow color={A2.yellow} w={36} h={20}/>
          </a>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:32, marginTop:24 }}>
          {MOVIES.slice(2, 6).map((m, i) => {
            const accents = [A2.blue, A2.yellow, A2.pink, A2.lime];
            const rots = [-2, 1, -1, 2];
            return (
              <div key={m.id} style={{ position:'relative', transform:`rotate(${rots[i]}deg)` }}>
                <div style={{
                  position:'absolute', top:-14, left:-14, zIndex:3,
                  fontFamily:a2Fonts.display, fontSize:80, color:accents[i], lineHeight:.8,
                  textShadow:`2px 2px 0 ${A2.ink}`
                }}>{String(i+3).padStart(2,'0')}</div>
                <Tape color={accents[i]} w={70} rotate={[8,-6,4,-3][i]} style={{top:-10, right:30, zIndex:3}}/>
                <A2Poster movie={m} w={240} h={340} accent={accents[i]}/>
                <div style={{ fontFamily:a2Fonts.mono, fontSize:10, letterSpacing:'.2em', color:A2.red, marginTop:12 }}>
                  {m.year} · ★{m.starScore.toFixed(1)}
                </div>
                <div style={{ fontFamily:a2Fonts.serif, fontSize:18, fontWeight:800, lineHeight:1.3, marginTop:4, color:A2.ink }}>
                  {m.title}
                </div>
                <div style={{ fontFamily:a2Fonts.serif, fontSize:13, lineHeight:1.65, marginTop:6, color:A2.ink, opacity:.75 }}>
                  {m.tagline}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* COLUMN PROMO */}
      <section style={{ padding:'64px 32px', background:A2.ink, color:A2.cream, position:'relative', overflow:'hidden' }}>
        <HalftoneSquare width="100%" height="100%" color={`${A2.red}80`} density={5} dot={1.2}
          style={{position:'absolute', inset:0, opacity:.3, pointerEvents:'none'}}/>
        <div style={{ position:'relative', display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:32 }}>
          <article>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:18 }}>
              <A2Label color={A2.yellow}>EDITORIAL · {COLUMNS[0].date}</A2Label>
              <Sticker bg={A2.red} color={A2.cream} rotate={-3} size={9}>NEW</Sticker>
            </div>
            <h3 style={{ fontFamily:a2Fonts.display, fontSize:72, lineHeight:.95, margin:'0 0 12px', color:A2.cream, position:'relative' }}>
              なぜ「悪さ」は<br/>
              <span style={{color:A2.yellow}}>美しいのか</span>
            </h3>
            <div style={{ fontFamily:a2Fonts.serif, fontSize:17, lineHeight:1.85, fontWeight:500, color:`${A2.cream}cc`, maxWidth:560 }}>
              欠落は、しばしば美学に転化する。低予算ゆえの省略、ピントの甘さ、編集の破綻 — それらは、もし「過剰」の名の下に行われれば、前衛と呼ばれただろう。本稿は、その逆説を…
            </div>
          </article>
          {COLUMNS.slice(1, 3).map((c, i) => (
            <article key={c.id} style={{ borderLeft:`3px solid ${[A2.lime, A2.pink][i]}`, paddingLeft:18 }}>
              <div style={{ fontFamily:a2Fonts.mono, fontSize:10, letterSpacing:'.25em', color:[A2.lime, A2.pink][i] }}>
                {c.author} · {c.date}
              </div>
              <h4 style={{ fontFamily:a2Fonts.serif, fontWeight:800, fontSize:22, lineHeight:1.3, margin:'10px 0 8px' }}>
                {c.title}
              </h4>
              <div style={{ fontFamily:a2Fonts.serif, fontSize:13, lineHeight:1.7, color:`${A2.cream}aa` }}>
                {c.subtitle}
              </div>
            </article>
          ))}
        </div>
      </section>

      <A2Footer/>
    </div>
  );
}

// ============================================================
// A2 · ARCHIVE
// ============================================================

function A2Archive(){
  const stickerLabels = ['必見', 'マスト', '鷲爆発', 'ニルボーグ', '紙コップ', '600万', 'BEES!', '酷評', '再評価', '刀'];
  const accents = [A2.blue, A2.yellow, A2.pink, A2.lime, A2.red, A2.blue, A2.yellow, A2.pink, A2.lime, A2.red];
  const rots = [-1.6, 1.2, -.8, 1.5, -1.2, .8, -1.4, 1, -.6, 1.3];
  return (
    <div style={{ width:'100%', height:'100%', background:A2.red, color:A2.cream, fontFamily:a2Fonts.sans, position:'relative', overflow:'hidden' }}>
      <GrainOverlay opacity={0.2}/>
      <DeadPixels count={40} opacity={0.55}/>
      <A2Nav/>

      {/* Header */}
      <section style={{ padding:'24px 32px 28px', position:'relative', overflow:'hidden' }}>
        <ColorBars height={6} style={{marginBottom:24, opacity:.9}}/>
        <SignalNoise opacity={.7}/>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', position:'relative'}}>
          <div>
            <A2Label color={A2.yellow}>ARCHIVE / 全アーカイブ ── INDEX</A2Label>
            <div style={{ marginTop:14, position:'relative' }}>
              <RisoHeadline size={160} color={A2.cream} ghost1={A2.yellow} ghost2={A2.blue}>駄作目録</RisoHeadline>
            </div>
            <div style={{
              fontFamily:a2Fonts.serif, fontStyle:'italic', fontWeight:800, fontSize:88, color:A2.ink,
              lineHeight:.95, marginTop:4
            }}>
              異端、<ChromaText size={92} font={a2Fonts.serif} color={A2.ink} shift={3}>十番勝負</ChromaText>。
            </div>
          </div>
          <div style={{textAlign:'right', position:'relative'}}>
            <Sticker bg={A2.yellow} rotate={-6} style={{position:'relative'}}>{MOVIES.length} TITLES INDEXED</Sticker>
            <div style={{marginTop:10, fontFamily:a2Fonts.mono, fontSize:10, letterSpacing:'.22em', color:A2.cream}}>
              UPDATED 2026.05.16
            </div>
            <BarcodeStrip height={28} color={A2.cream} count={40} style={{marginTop:18, opacity:.7}}/>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section style={{
        padding:'14px 32px', background:A2.cream, color:A2.ink,
        borderTop:`3px solid ${A2.ink}`, borderBottom:`3px solid ${A2.ink}`,
        display:'flex', gap:10, flexWrap:'wrap', alignItems:'center', position:'sticky', top:0, zIndex:5
      }}>
        <A2Label color={A2.red}>FILTER ──</A2Label>
        {[['ALL', A2.ink, A2.yellow], ['低予算'], ['カルト'], ['ホラー'], ['SF'], ['ニコラス'], ['90s'], ['00s']].map(([f, bg, color]) => (
          <button key={f} style={{
            fontFamily:a2Fonts.mono, fontSize:11, letterSpacing:'.15em',
            background: bg || 'transparent', color: color || A2.ink,
            padding:'6px 11px', border:`1.5px solid ${A2.ink}`, cursor:'pointer'
          }}>{f}</button>
        ))}
        <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap:12 }}>
          <span style={{ fontFamily:a2Fonts.mono, fontSize:11, letterSpacing:'.2em', color:A2.redDeep }}>SORT</span>
          <Sticker bg={A2.blue} color={A2.cream} rotate={-2} size={10}>★ 低い順</Sticker>
          <span style={{fontFamily:a2Fonts.mono, fontSize:10, letterSpacing:'.18em', color:A2.ink, paddingLeft:8, borderLeft:`1.5px solid ${A2.ink}30`}}>VIEW: ▦ GRID</span>
        </div>
      </section>

      {/* CARD GRID — 10 cards */}
      <section style={{ padding:'40px 32px 40px', background:A2.cream, color:A2.ink, position:'relative', overflow:'hidden' }}>
        <SignalNoise opacity={.55}/>
        <HalftoneSquare width="100%" height="100%" color={`${A2.red}40`} density={6} dot={1.2}
          style={{position:'absolute', inset:0, opacity:.35, pointerEvents:'none'}}/>
        <div style={{display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:28, position:'relative'}}>
          {MOVIES.slice(0, 10).map((m, i) => {
            const acc = accents[i];
            const numRot = [-6,4,-3,6,-5,3,-4,5,-3,4][i];
            const tagRot = [6,-4,3,-6,5,-3,4,-5,3,-4][i];
            return (
              <a key={m.id} href="#" style={{
                textDecoration:'none', color:A2.ink, position:'relative',
                background:A2.cream, padding:12,
                border:`2.5px solid ${A2.ink}`, boxShadow:`6px 6px 0 ${A2.ink}`,
                transform:`rotate(${rots[i]}deg)`, display:'flex', flexDirection:'column'
              }}>
                <Tape color={acc} w={70} rotate={i%2===0?-8:6} style={{top:-12, left: i%2===0 ? 18 : 80, zIndex:3}}/>
                <div style={{position:'absolute', top:-14, right:-10, zIndex:4}}>
                  <Sticker bg={acc} color={acc===A2.blue ? A2.cream : A2.ink} rotate={numRot} size={9}>
                    №{String(i+1).padStart(2,'0')}
                  </Sticker>
                </div>

                {/* Poster */}
                <div style={{position:'relative'}}>
                  <A2Poster movie={m} w={196} h={272} accent={acc}/>
                  <Stamp color={A2.red} rotate={-12} size={11} style={{position:'absolute', bottom:6, left:-10, background:A2.cream, zIndex:4}}>
                    {m.score.toFixed(0)}/100
                  </Stamp>
                  {/* glitch corner */}
                  <div aria-hidden style={{
                    position:'absolute', top:0, left:0, right:0, height:6,
                    background:`linear-gradient(90deg, ${A2.blue} 0 30%, transparent 30% 50%, ${A2.yellow} 50% 75%, transparent 75% 100%)`,
                    mixBlendMode:'screen', opacity:.85
                  }}/>
                </div>

                {/* Meta */}
                <div style={{marginTop:12}}>
                  <div style={{fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.18em', color:A2.red}}>
                    {m.year} · {m.country}
                  </div>
                  <div style={{fontFamily:a2Fonts.serif, fontSize:15, fontWeight:800, lineHeight:1.2, marginTop:4}}>
                    {m.title}
                  </div>
                  <div style={{fontFamily:a2Fonts.mono, fontSize:8.5, letterSpacing:'.15em', color:A2.redDeep, marginTop:2}}>
                    {m.titleEn}
                  </div>
                </div>

                {/* Score row */}
                <div style={{
                  display:'flex', justifyContent:'space-between', alignItems:'flex-end',
                  marginTop:10, paddingTop:8, borderTop:`1.5px dashed ${A2.ink}40`
                }}>
                  <div>
                    <div style={{fontFamily:a2Fonts.mono, fontSize:8, letterSpacing:'.2em', color:A2.ink}}>★ STAR</div>
                    <div style={{
                      fontFamily:a2Fonts.display, fontSize:22, color:acc, lineHeight:1,
                      textShadow: (acc===A2.yellow || acc===A2.lime) ? `1.5px 1.5px 0 ${A2.ink}` : 'none'
                    }}>
                      ★{m.starScore.toFixed(1)}
                    </div>
                  </div>
                  <span style={{
                    fontFamily:a2Fonts.mono, fontSize:11, letterSpacing:'.1em',
                    background:A2.ink, color:A2.cream, padding:'3px 6px'
                  }}>→</span>
                </div>

                {/* Tag sticker */}
                <div style={{position:'absolute', bottom:-12, right:-8, zIndex:4}}>
                  <Sticker bg={A2.ink} color={A2.yellow} rotate={tagRot} size={9}>
                    {stickerLabels[i]}
                  </Sticker>
                </div>
              </a>
            );
          })}
        </div>

        {/* Pagination */}
        <div style={{
          marginTop:48, padding:'18px 0',
          borderTop:`2px solid ${A2.ink}`, display:'flex', justifyContent:'space-between', alignItems:'center', position:'relative'
        }}>
          <div style={{fontFamily:a2Fonts.mono, fontSize:11, letterSpacing:'.2em', color:A2.red}}>
            SHOWING 1—{Math.min(10, MOVIES.length)} OF {MOVIES.length}
          </div>
          <div style={{display:'flex', gap:8}}>
            {['‹','1','2','3','...','12','›'].map((p, i) => (
              <button key={i} style={{
                fontFamily:a2Fonts.mono, fontSize:13, padding:'8px 12px',
                background: i===1 ? A2.ink : 'transparent', color: i===1 ? A2.yellow : A2.ink,
                border:`2px solid ${A2.ink}`, cursor:'pointer', letterSpacing:'.15em', minWidth:36
              }}>{p}</button>
            ))}
          </div>
        </div>
      </section>

      <A2Footer/>
    </div>
  );
}

// ============================================================
// A2 · MOVIE DETAIL
// ============================================================

function A2Movie(){
  const m = MOVIES[1]; // The Room
  return (
    <div style={{ width:'100%', height:'100%', background:A2.red, color:A2.cream, fontFamily:a2Fonts.sans, position:'relative', overflow:'hidden' }}>
      <GrainOverlay opacity={0.16}/>
      <DeadPixels count={42} opacity={0.55}/>
      <A2Nav/>

      <div style={{
        padding:'14px 32px', fontFamily:a2Fonts.mono, fontSize:11, letterSpacing:'.2em',
        borderBottom:`1px solid ${A2.cream}30`, color:A2.cream, background:A2.redDeep,
        display:'flex', justifyContent:'space-between'
      }}>
        <span>ARCHIVE · 2000s · {m.titleEn}</span>
        <span style={{color:A2.yellow}}>EP {String(MOVIES.indexOf(m)+1).padStart(3,'0')}</span>
      </div>

      {/* HERO */}
      <section style={{ padding:'40px 32px 32px', position:'relative', overflow:'hidden' }}>
        <SignalNoise opacity={.7}/>
        {/* scattered stickers */}
        <div style={{position:'absolute', top:40, right:60}}>
          <PostIt bg={A2.lime} rotate={7} w={170}>
            「俺はネタとして 撮ったんだ」 ── と、後年トミー本人が 主張するに至った
          </PostIt>
        </div>
        <div style={{position:'absolute', top:240, right:520, zIndex:5}}>
          <Sticker bg={A2.yellow} rotate={-12} size={11}>製作費 不明</Sticker>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 460px', gap:48, position:'relative' }}>
          <div>
            <A2Label color={A2.yellow}>VOL.07 / 異端 · 第02席</A2Label>
            <h1 style={{ margin:'14px 0 0', position:'relative' }}>
              <RisoHeadline size={148} color={A2.cream} ghost1={A2.yellow} ghost2={A2.blue}>
                {m.title}
              </RisoHeadline>
            </h1>
            <div style={{ fontFamily:a2Fonts.serif, fontStyle:'italic', fontSize:32, marginTop:18, fontWeight:500, maxWidth:640, color:A2.ink, position:'relative' }}>
              {m.tagline}
              <ScribbleUnderline color={A2.cream} width={300} style={{position:'absolute', bottom:-12, left:0}}/>
            </div>
            <div style={{ fontFamily:a2Fonts.monoDisplay, fontSize:11, letterSpacing:'.25em', color:A2.cream, marginTop:24 }}>
              {m.taglineEn}
            </div>

            {/* META */}
            <div style={{
              display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:0, marginTop:36,
              background:A2.cream, color:A2.ink,
              border:`3px solid ${A2.ink}`, boxShadow:`6px 6px 0 ${A2.ink}`
            }}>
              {[['DIRECTOR', m.director, A2.red], ['YEAR', m.year, A2.blue], ['COUNTRY', m.country, A2.pink], ['RUNTIME', `${m.runtime}分`, A2.lime]].map(([k, v, c], i, arr) => (
                <div key={k} style={{
                  padding:'14px 16px',
                  borderRight: i<arr.length-1 ? `1.5px solid ${A2.ink}30`: 'none',
                  position:'relative'
                }}>
                  <div style={{ fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.25em', color:c }}>{k}</div>
                  <div style={{ fontFamily:a2Fonts.serif, fontSize:18, fontWeight:800, marginTop:6 }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Poster */}
          <aside style={{ position:'relative' }}>
            <Tape color={A2.blue} w={140} rotate={-6} style={{top:-12, left:30, zIndex:3}}/>
            <Tape color={A2.yellow} w={120} rotate={5} style={{top:-12, right:0, zIndex:3}}/>
            <A2Poster movie={m} w={460} h={640} accent={A2.blue}/>
            <Stamp color={A2.red} rotate={-10} size={22} style={{position:'absolute', bottom:-10, left:-20, background:A2.cream, zIndex:4}}>SCORE: 03/100</Stamp>
          </aside>
        </div>

        {/* GIANT SCORE */}
        <div style={{
          marginTop:56, padding:'32px 0',
          borderTop:`3px solid ${A2.ink}`, borderBottom:`3px solid ${A2.ink}`,
          position:'relative'
        }}>
          <A2Label color={A2.yellow}>AUDIENCE SCORE — 観客評価</A2Label>
          <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginTop:14, gap:32, position:'relative' }}>
            <div style={{
              fontFamily:a2Fonts.display, fontSize:300, lineHeight:.78, color:A2.cream,
              letterSpacing:'-.06em', position:'relative'
            }}>
              {m.score.toFixed(0).padStart(2,'0')}<span style={{fontSize:80, color:A2.ink}}>/100</span>
              <ScribbleCircle color={A2.yellow} w={420} h={240} style={{ top:-30, left:-30, zIndex:0 }} sw={5}/>
            </div>
            <div style={{ textAlign:'right', paddingBottom:32 }}>
              <div style={{ fontFamily:a2Fonts.serif, fontStyle:'italic', fontSize:36, fontWeight:500, lineHeight:1.2, color:A2.ink }}>
                これは、誇るべき<br/>低さである。
              </div>
              <div style={{ marginTop:14, display:'flex', justifyContent:'flex-end', gap:8 }}>
                <Stamp color={A2.cream} rotate={-4} size={11}>ROTTEN</Stamp>
                <Stamp color={A2.yellow} rotate={3} size={11}>IMDb 3.7</Stamp>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYNOPSIS — cream paper */}
      <section style={{ padding:'56px 32px', background:A2.cream, color:A2.ink, position:'relative' }}>
        <div style={{ display:'grid', gridTemplateColumns:'200px 1fr 220px', gap:32 }}>
          <A2Label color={A2.red}>SYNOPSIS / 梗概</A2Label>
          <div style={{ fontFamily:a2Fonts.serif, fontSize:22, lineHeight:1.95, fontWeight:500, maxWidth:680 }}>
            <span style={{ float:'left', fontFamily:a2Fonts.display, fontSize:108, lineHeight:.8, paddingRight:14, color:A2.red }}>
              {m.synopsis.charAt(0)}
            </span>
            {m.synopsis.slice(1)}
          </div>
          <aside style={{
            fontFamily:a2Fonts.serif, fontSize:13, lineHeight:1.85,
            padding:'14px 14px', borderLeft:`4px solid ${A2.blue}`, background:A2.paper,
            position:'relative', transform:'rotate(-.8deg)', boxShadow:`4px 4px 0 ${A2.ink}`
          }}>
            <A2Label color={A2.blue}>ASIDE / 余白</A2Label>
            <div style={{ marginTop:6 }}>{m.crime}</div>
            <Tape color={A2.yellow} w={60} rotate={-4} style={{top:-10, right:10}}/>
          </aside>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section style={{ padding:'56px 32px', background:A2.ink, color:A2.cream, position:'relative', overflow:'hidden' }}>
        <HalftoneSquare width="100%" height="100%" color={`${A2.red}80`} density={5} dot={1.2}
          style={{position:'absolute', inset:0, opacity:.3, pointerEvents:'none'}}/>
        <A2Label color={A2.yellow}>QUOTE / 名（迷）台詞</A2Label>
        <div style={{
          fontFamily:a2Fonts.reggae, fontSize:120, lineHeight:1.05,
          marginTop:24, letterSpacing:'-.01em', color:A2.cream, position:'relative'
        }}>
          <span style={{color:A2.yellow}}>「</span>{m.quote.replace(/[「」]/g,'')}<span style={{color:A2.yellow}}>」</span>
        </div>
        <div style={{ marginTop:24, fontFamily:a2Fonts.mono, fontSize:12, letterSpacing:'.2em', color:`${A2.cream}88` }}>
          —— {m.director}, {m.titleEn} ({m.year})
        </div>
      </section>

      {/* REVIEW BODY */}
      <section style={{ padding:'56px 32px', background:A2.red }}>
        <div style={{ display:'grid', gridTemplateColumns:'200px 1fr 220px', gap:32 }}>
          <div>
            <A2Label color={A2.yellow}>REVIEW / 評</A2Label>
            <div style={{ fontFamily:a2Fonts.mono, fontSize:11, letterSpacing:'.15em', color:A2.cream, marginTop:8, lineHeight:2 }}>
              BY E. ARAI<br/>2026.04.18<br/>8分
            </div>
            <Sticker bg={A2.yellow} rotate={-4} size={10} style={{marginTop:14, position:'relative'}}>EDITORS PICK</Sticker>
          </div>
          <article style={{ fontFamily:a2Fonts.serif, fontSize:17, lineHeight:1.95, fontWeight:500, maxWidth:680, color:A2.cream }}>
            <p style={{margin:'0 0 1.3em'}}>
              屋上の場面が三度、繰り返される。ジョニーがマークと挨拶する。「ハイ・マーク」。同じ角度、同じ手の振り。背後にあるのはサンフランシスコのストックフッテージで、撮影はロサンゼルスで行われている。
            </p>
            <p style={{margin:'0 0 1.3em'}}>
              この反復に、何の意味もない。意味がないことこそが、ザ・ルームの本質である。意味があってはならない。脚本は破綻し、伏線は回収されず、登場人物は唐突に「ガンになった」と告白して二度と話題にならない。
            </p>
            <p style={{margin:'0 0 1.3em'}}>
              <strong style={{ fontWeight:900, color:A2.yellow }}>そして、それでも、これは映画である。</strong> 映画である、ということは、ここで強い意味を持つ。フィルムに収められ、上映され、そして — トミー・ウィソーは、これを「ブラック・コメディ」だと主張した。観客は、そう受け取った。
            </p>
          </article>
          <aside>
            <A2Label color={A2.yellow}>RELATED / 関連</A2Label>
            <div style={{ marginTop:14, display:'flex', flexDirection:'column', gap:14 }}>
              {MOVIES.slice(2, 5).map((r, i) => (
                <a key={r.id} href="#" style={{
                  textDecoration:'none', color:A2.cream, display:'block',
                  background:[A2.blue, A2.redDeep, A2.ink][i], padding:'10px 12px',
                  border:`2px solid ${A2.ink}`, boxShadow:`3px 3px 0 ${A2.ink}`, transform:`rotate(${[-1,1,-1][i]}deg)`
                }}>
                  <div style={{ fontFamily:a2Fonts.serif, fontSize:14, fontWeight:800, lineHeight:1.3 }}>{r.title}</div>
                  <div style={{ fontFamily:a2Fonts.mono, fontSize:10, letterSpacing:'.18em', color:[A2.yellow, A2.lime, A2.pink][i], marginTop:2 }}>
                    {r.year} · ★{r.starScore.toFixed(1)}
                  </div>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <A2Footer/>
    </div>
  );
}

// ============================================================
// A2 · DASHBOARD (logged-in user collection)
// ============================================================

function A2Dashboard(){
  const user = {
    name: '山田 太郎',
    handle: '@trash_lover_99',
    role: 'B-MOVIE 探検家',
    level: 7,
    since: '2024.08.12',
    motto: '3点以下の映画でしか、心を許せない。',
    collected: 27,
    watched: 41,
    wishlist: 13,
    avgScore: 12.4,
    lowestScore: 1.9,
    favoriteDirector: 'エド・ウッド',
    screeningHours: 84,
    streakDays: 12,
  };

  const myCollection = MOVIES.slice(0, 8).map((m, i) => ({
    ...m,
    status: ['WATCHED', 'WATCHING', 'WANT', 'WATCHED', 'WANT', 'WATCHED', 'WATCHED', 'WANT'][i],
    userNote: ['完璧。', '今夜 二度目。', '友人に貸す。', '想像の上を行った。', '5月の夜に。', '酒と共に。', '父が好きだった。', null][i],
    userRating: [5, 5, null, 5, null, 4, 5, null][i],
  }));

  const customLists = [
    { title:'週末ゴブリン映画祭', count:6, color:A2.lime, sub:'菜食主義者専用'},
    { title:'ニコラス・ケイジ徹夜', count:9, color:A2.blue, sub:'BEES! を含む'},
    { title:'初鑑賞者向け課題', count:4, color:A2.pink, sub:'プラン9から始める'},
  ];

  const activities = [
    { type:'REVIEW', date:'2026.05.15', movie:'ザ・ルーム', text:'三度目の鑑賞。やはり屋上シーンで笑い泣きする。' },
    { type:'COLLECT', date:'2026.05.14', movie:'バーデミック', text:'マイコレクションに追加。鷲爆発に備える。' },
    { type:'NOTE', date:'2026.05.12', movie:'プラン9', text:'紙コップの墓石、もはや美術である。' },
    { type:'RATE', date:'2026.05.10', movie:'トロール2', text:'★5/5 を献上。ニルボーグへ。' },
    { type:'LIST',  date:'2026.05.08', movie:'週末ゴブリン映画祭', text:'新規プログラム作成。' },
  ];

  const activityColors = { REVIEW:A2.red, COLLECT:A2.lime, NOTE:A2.yellow, RATE:A2.pink, LIST:A2.blue };

  return (
    <div style={{ width:'100%', height:'100%', background:A2.red, color:A2.cream, fontFamily:a2Fonts.sans, position:'relative', overflow:'hidden' }}>
      <GrainOverlay opacity={0.18}/>
      <DeadPixels count={50} opacity={0.55}/>
      <A2Nav/>

      {/* Login bar */}
      <div style={{
        padding:'10px 32px', background:A2.ink, color:A2.cream,
        fontFamily:a2Fonts.mono, fontSize:11, letterSpacing:'.22em',
        display:'flex', justifyContent:'space-between', alignItems:'center', position:'relative', overflow:'hidden'
      }}>
        <span><span style={{color:A2.lime}}>● LOGGED IN AS</span>　{user.handle}</span>
        <span style={{display:'flex', gap:18}}>
          <span style={{color:A2.yellow}}>NOTIFICATIONS (3)</span>
          <span>SETTINGS</span>
          <span style={{color:A2.pink}}>LOGOUT</span>
        </span>
      </div>

      {/* PROFILE HERO */}
      <section style={{ padding:'48px 32px 36px', position:'relative', overflow:'hidden' }}>
        <SignalNoise opacity={.65}/>
        <div style={{position:'absolute', top:36, right:280, zIndex:3}}>
          <PostIt bg={A2.yellow} rotate={5} w={170}>
            「今夜は何を 観ようか。」 ── このサイトに来た、 ということは、 答えは決まっている。
          </PostIt>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'200px 1fr 380px', gap:32, alignItems:'start', position:'relative'}}>
          {/* Avatar */}
          <div style={{position:'relative'}}>
            <div style={{
              width:180, height:180, background:A2.yellow, border:`3px solid ${A2.ink}`,
              boxShadow:`8px 8px 0 ${A2.ink}`, transform:'rotate(-2deg)',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:a2Fonts.display, fontSize:96, color:A2.ink, position:'relative', overflow:'hidden'
            }}>
              山
              <div aria-hidden style={{
                position:'absolute', inset:0, color:A2.blue, fontFamily:a2Fonts.display, fontSize:96,
                display:'flex', alignItems:'center', justifyContent:'center',
                mixBlendMode:'screen', transform:'translate(3px, -2px)', opacity:.85
              }}>山</div>
              <div aria-hidden style={{
                position:'absolute', inset:0, color:A2.red, fontFamily:a2Fonts.display, fontSize:96,
                display:'flex', alignItems:'center', justifyContent:'center',
                mixBlendMode:'multiply', transform:'translate(-2px, 1px)', opacity:.7
              }}>山</div>
            </div>
            <Sticker bg={A2.pink} rotate={6} size={10} style={{position:'absolute', bottom:-12, right:-10, zIndex:3}}>LV.{String(user.level).padStart(2,'0')}</Sticker>
            <Tape color={A2.blue} w={70} rotate={-12} style={{top:-14, left:30, zIndex:3}}/>
          </div>

          {/* Name */}
          <div>
            <A2Label color={A2.yellow}>USER PROFILE / 異端者ID</A2Label>
            <h1 style={{ margin:'10px 0 0' }}>
              <RisoHeadline size={88} color={A2.cream} ghost1={A2.yellow} ghost2={A2.blue}>{user.name}</RisoHeadline>
            </h1>
            <div style={{fontFamily:a2Fonts.mono, fontSize:14, letterSpacing:'.2em', color:A2.ink, marginTop:8}}>
              {user.handle}
            </div>
            <div style={{display:'flex', gap:10, alignItems:'center', marginTop:14, flexWrap:'wrap'}}>
              <Sticker bg={A2.blue} color={A2.cream} rotate={-2}>{user.role}</Sticker>
              <Sticker bg={A2.lime} rotate={3}>{user.streakDays}日 連続観劇中</Sticker>
              <span style={{fontFamily:a2Fonts.mono, fontSize:10, letterSpacing:'.22em', color:A2.cream}}>
                MEMBER SINCE {user.since}
              </span>
            </div>
            <div style={{
              marginTop:28, fontFamily:a2Fonts.serif, fontStyle:'italic', fontSize:26, fontWeight:500, lineHeight:1.4,
              color:A2.ink, maxWidth:560, position:'relative'
            }}>
              「{user.motto}」
              <ScribbleUnderline color={A2.yellow} width={300} style={{position:'absolute', bottom:-10, left:0}}/>
            </div>
          </div>

          {/* Collection counter */}
          <aside style={{
            background:A2.ink, color:A2.cream, padding:'22px 24px',
            border:`3px solid ${A2.cream}`, boxShadow:`8px 8px 0 ${A2.ink}`, transform:'rotate(1deg)',
            position:'relative', overflow:'hidden'
          }}>
            <ColorBars height={4} style={{marginBottom:14, opacity:.85}}/>
            <A2Label color={A2.yellow}>COLLECTED / 蒐集件数</A2Label>
            <div style={{position:'relative', marginTop:8}}>
              <div style={{fontFamily:a2Fonts.display, fontSize:160, color:A2.cream, lineHeight:.78, letterSpacing:'-.04em', position:'relative'}}>
                {String(user.collected).padStart(3,'0')}
              </div>
              <ScribbleCircle color={A2.yellow} w={260} h={160} style={{top:-12, left:-20, zIndex:0}}/>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', marginTop:14, fontFamily:a2Fonts.mono, fontSize:11, letterSpacing:'.2em'}}>
              <span style={{color:A2.lime}}>WATCHED {user.watched}</span>
              <span style={{color:A2.pink}}>WISH {user.wishlist}</span>
            </div>
          </aside>
        </div>
      </section>

      {/* STATS GRID */}
      <section style={{
        background:A2.cream, color:A2.ink, position:'relative',
        borderTop:`3px solid ${A2.ink}`, borderBottom:`3px solid ${A2.ink}`, overflow:'hidden'
      }}>
        <SignalNoise opacity={.55}/>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', position:'relative'}}>
          {[
            {label:'AVG SCORE / 平均点', value:user.avgScore.toFixed(1), sub:'/100 ── 低い、誇れ', acc:A2.red, big:true},
            {label:'WORST LOVED / 最も愛した低評価', value:user.lowestScore.toFixed(1), sub:'/100  ザ・ルーム', acc:A2.blue, big:true},
            {label:'FAV DIRECTOR / 偏愛監督', value:user.favoriteDirector, sub:'7本中 4本', acc:A2.pink, big:false},
            {label:'SCREEN TIME / 鑑賞時間', value:`${user.screeningHours}h`, sub:'累計 — まだまだ', acc:A2.lime, big:true},
          ].map((s, i, a) => (
            <div key={s.label} style={{
              padding:'24px 22px', borderRight: i<a.length-1 ? `1.5px solid ${A2.ink}30` : 'none',
              position:'relative'
            }}>
              <A2Label color={s.acc}>{s.label}</A2Label>
              <div style={{
                fontFamily: s.big ? a2Fonts.display : a2Fonts.serif,
                fontSize: s.big ? 64 : 32,
                fontWeight: s.big ? 400 : 800,
                lineHeight:.95, marginTop:10, color:A2.ink
              }}>
                {s.value}
              </div>
              <div style={{fontFamily:a2Fonts.mono, fontSize:10, letterSpacing:'.18em', color:A2.redDeep, marginTop:8}}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tab strip */}
      <section style={{
        padding:'14px 32px', background:A2.red, color:A2.cream, position:'sticky', top:0, zIndex:5,
        display:'flex', gap:14, alignItems:'center', borderBottom:`3px solid ${A2.ink}`
      }}>
        <A2Label color={A2.yellow}>VIEW ──</A2Label>
        {[
          ['MY COLLECTION', true],
          ['WATCHED', false],
          ['WISHLIST', false],
          ['CUSTOM LISTS', false],
          ['NOTES', false],
        ].map(([t, active]) => (
          <button key={t} style={{
            fontFamily:a2Fonts.mono, fontSize:11, letterSpacing:'.18em', fontWeight:700,
            background: active ? A2.cream : 'transparent',
            color: active ? A2.ink : A2.cream,
            padding:'7px 13px', border:`1.5px solid ${active ? A2.ink : `${A2.cream}80`}`, cursor:'pointer'
          }}>{t}</button>
        ))}
        <button style={{
          marginLeft:'auto', background:A2.yellow, color:A2.ink, border:`2px solid ${A2.ink}`,
          padding:'8px 14px', fontFamily:a2Fonts.display, fontSize:13, cursor:'pointer',
          boxShadow:`3px 3px 0 ${A2.ink}`
        }}>
          ＋ 駄作を追加
        </button>
      </section>

      {/* MY COLLECTION GRID */}
      <section style={{padding:'40px 32px 48px', background:A2.cream, color:A2.ink, position:'relative', overflow:'hidden'}}>
        <SignalNoise opacity={.5}/>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:28, position:'relative'}}>
          <div>
            <A2Label color={A2.red}>MY COLLECTION / 私の駄作たち</A2Label>
            <div style={{fontFamily:a2Fonts.display, fontSize:60, lineHeight:.95, marginTop:8, position:'relative'}}>
              私の<span style={{color:A2.blue}}>駄作</span>たち
              <ScribbleUnderline color={A2.red} width={240} style={{position:'absolute', bottom:-8, left:0}}/>
            </div>
          </div>
          <div style={{display:'flex', gap:10}}>
            <Sticker bg={A2.lime} rotate={-3}>★ {myCollection.filter(m=>m.status==='WATCHED').length} 観覧済</Sticker>
            <Sticker bg={A2.yellow} rotate={4}>{myCollection.filter(m=>m.status==='WATCHING').length} 視聴中</Sticker>
            <Sticker bg={A2.pink} rotate={-2}>{myCollection.filter(m=>m.status==='WANT').length} 観たい</Sticker>
          </div>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:28, position:'relative'}}>
          {myCollection.map((m, i) => {
            const colAccents = [A2.blue, A2.yellow, A2.pink, A2.lime, A2.red, A2.blue, A2.yellow, A2.pink];
            const colRots = [-1, 1.2, -.8, 1, -1.4, .6, -1, 1.4];
            const acc = colAccents[i];
            const statusColor = m.status==='WATCHED' ? A2.lime : m.status==='WATCHING' ? A2.yellow : A2.pink;
            const statusLabel = m.status==='WATCHED' ? '観覧済' : m.status==='WATCHING' ? '視聴中' : '観たい';
            return (
              <div key={m.id} style={{
                background:A2.cream, padding:12,
                border:`2.5px solid ${A2.ink}`, boxShadow:`6px 6px 0 ${A2.ink}`,
                transform:`rotate(${colRots[i]}deg)`, position:'relative'
              }}>
                <div style={{position:'absolute', top:-12, left:-8, zIndex:4}}>
                  <Sticker bg={statusColor} color={A2.ink} rotate={-6} size={9}>{statusLabel}</Sticker>
                </div>
                <Tape color={acc} w={60} rotate={i%2===0?-6:8} style={{top:-10, right:30, zIndex:3}}/>
                <div style={{position:'relative'}}>
                  <A2Poster movie={m} w={228} h={316} accent={acc}/>
                  {m.userRating && (
                    <Stamp color={A2.red} rotate={-12} size={11} style={{position:'absolute', bottom:8, left:-10, background:A2.cream, zIndex:4}}>
                      MY ★{m.userRating}
                    </Stamp>
                  )}
                </div>
                <div style={{marginTop:12}}>
                  <div style={{fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.18em', color:A2.red}}>
                    {m.year} · ★{m.starScore.toFixed(1)}
                  </div>
                  <div style={{fontFamily:a2Fonts.serif, fontSize:15, fontWeight:800, lineHeight:1.25, marginTop:4}}>
                    {m.title}
                  </div>
                </div>
                {m.userNote && (
                  <div style={{
                    marginTop:10, padding:'8px 10px', background:A2.yellow, fontFamily:a2Fonts.reggae, fontSize:13, lineHeight:1.45,
                    border:`1.5px solid ${A2.ink}`, transform:'rotate(-1deg)'
                  }}>
                    「{m.userNote}」
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CUSTOM LISTS */}
      <section style={{padding:'56px 32px', background:A2.red, color:A2.cream, position:'relative', overflow:'hidden'}}>
        <SignalNoise opacity={.75}/>
        <DeadPixels count={28}/>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:28, position:'relative'}}>
          <div>
            <A2Label color={A2.yellow}>CUSTOM LISTS / 自作プログラム</A2Label>
            <div style={{fontFamily:a2Fonts.display, fontSize:64, lineHeight:.95, marginTop:8, color:A2.cream}}>
              俺だけの<span style={{color:A2.yellow}}>上映会</span>
            </div>
          </div>
          <button style={{
            background:A2.yellow, color:A2.ink, border:`2.5px solid ${A2.ink}`,
            padding:'10px 18px', fontFamily:a2Fonts.display, fontSize:14, cursor:'pointer',
            boxShadow:`5px 5px 0 ${A2.ink}`
          }}>＋ NEW LIST</button>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24, position:'relative'}}>
          {customLists.map((l, i) => (
            <div key={l.title} style={{
              background:l.color, color: l.color===A2.blue ? A2.cream : A2.ink, padding:24,
              border:`3px solid ${A2.ink}`, boxShadow:`6px 6px 0 ${A2.ink}`,
              transform:`rotate(${[-1, .8, -.6][i]}deg)`, position:'relative', overflow:'hidden'
            }}>
              <HalftoneSquare width="100%" height="100%" color={`${A2.ink}25`} density={6} dot={1.2}
                style={{position:'absolute', inset:0, opacity:.32, pointerEvents:'none'}}/>
              <Tape color={A2.ink} w={70} rotate={-8} style={{top:-12, left:30, opacity:.9, zIndex:2}}/>
              <div style={{position:'relative', zIndex:1}}>
                <div style={{fontFamily:a2Fonts.mono, fontSize:10, letterSpacing:'.22em', opacity:.8}}>LIST №{String(i+1).padStart(2,'0')}</div>
                <h3 style={{fontFamily:a2Fonts.display, fontSize:36, lineHeight:1.05, margin:'10px 0 6px', letterSpacing:'-.02em'}}>
                  {l.title}
                </h3>
                <div style={{fontFamily:a2Fonts.serif, fontSize:14, fontStyle:'italic', fontWeight:500, opacity:.88}}>
                  {l.sub}
                </div>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginTop:24}}>
                  <span style={{fontFamily:a2Fonts.display, fontSize:48, lineHeight:.85}}>{l.count}<span style={{fontSize:18}}>本</span></span>
                  <span style={{fontFamily:a2Fonts.mono, fontSize:11, letterSpacing:'.18em'}}>→ OPEN</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITY + NOW PLAYING */}
      <section style={{padding:'56px 32px', background:A2.ink, color:A2.cream, position:'relative', overflow:'hidden'}}>
        <SignalNoise opacity={.85}/>
        <DeadPixels count={40}/>
        <HalftoneSquare width="100%" height="100%" color={`${A2.red}80`} density={5} dot={1.2}
          style={{position:'absolute', inset:0, opacity:.25, pointerEvents:'none'}}/>
        <div style={{position:'relative', display:'grid', gridTemplateColumns:'1fr 380px', gap:48}}>
          <div>
            <A2Label color={A2.yellow}>RECENT ACTIVITY / 観察日誌</A2Label>
            <h2 style={{fontFamily:a2Fonts.display, fontSize:64, lineHeight:.95, margin:'10px 0 32px', position:'relative'}}>
              観察<span style={{color:A2.yellow}}>日誌</span>
              <ScribbleUnderline color={A2.red} width={180} style={{position:'absolute', bottom:-8, left:0}}/>
            </h2>
            <div style={{position:'relative'}}>
              <div style={{position:'absolute', left:88, top:8, bottom:8, width:2, background:A2.yellow, opacity:.45}}/>
              {activities.map((a, i) => (
                <div key={i} style={{display:'grid', gridTemplateColumns:'82px 40px 1fr', gap:14, marginBottom:22, alignItems:'start'}}>
                  <div style={{fontFamily:a2Fonts.mono, fontSize:10, letterSpacing:'.18em', color:`${A2.cream}88`, textAlign:'right', paddingTop:6}}>
                    {a.date}
                  </div>
                  <div style={{
                    width:14, height:14, background: activityColors[a.type],
                    border:`2px solid ${A2.cream}`, marginTop:8, zIndex:2, position:'relative', marginLeft:8
                  }}/>
                  <div>
                    <div style={{display:'flex', gap:8, alignItems:'center', flexWrap:'wrap'}}>
                      <Sticker bg={activityColors[a.type]} color={a.type==='REVIEW' ? A2.cream : a.type==='LIST' ? A2.cream : A2.ink} rotate={-3} size={9} style={{position:'relative'}}>
                        {a.type}
                      </Sticker>
                      <span style={{fontFamily:a2Fonts.serif, fontWeight:800, fontSize:18}}>{a.movie}</span>
                    </div>
                    <div style={{fontFamily:a2Fonts.serif, fontSize:14, lineHeight:1.65, marginTop:6, color:`${A2.cream}cc`, fontStyle:'italic', fontWeight:500}}>
                      {a.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside>
            <A2Label color={A2.lime}>NOW PLAYING</A2Label>
            <div style={{
              marginTop:14, padding:18, background:A2.ink, border:`3px solid ${A2.lime}`,
              boxShadow:`6px 6px 0 ${A2.cream}`, transform:'rotate(1.5deg)', position:'relative', overflow:'hidden'
            }}>
              <ColorBars height={4} style={{marginBottom:14, opacity:.85}}/>
              <div style={{fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.22em', color:A2.lime}}>● NOW PLAYING</div>
              <h4 style={{fontFamily:a2Fonts.display, fontSize:26, lineHeight:1.1, margin:'8px 0 4px'}}>{MOVIES[2].title}</h4>
              <div style={{fontFamily:a2Fonts.mono, fontSize:10, letterSpacing:'.18em', color:`${A2.cream}88`}}>{MOVIES[2].year} · {MOVIES[2].country}</div>
              <div style={{marginTop:14, height:6, background:`${A2.cream}30`, position:'relative'}}>
                <div style={{width:'42%', height:'100%', background:A2.lime}}/>
              </div>
              <div style={{display:'flex', justifyContent:'space-between', marginTop:6, fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.18em', color:`${A2.cream}88`}}>
                <span>00:40</span>
                <span>01:35</span>
              </div>
              <div style={{display:'flex', gap:8, marginTop:16, justifyContent:'center'}}>
                <button style={{background:'transparent', border:`2px solid ${A2.cream}`, color:A2.cream, padding:'6px 14px', cursor:'pointer', fontFamily:a2Fonts.display, fontSize:14}}>‹‹</button>
                <button style={{background:A2.cream, border:`2px solid ${A2.cream}`, color:A2.ink, padding:'6px 20px', cursor:'pointer', fontFamily:a2Fonts.display, fontSize:14}}>||</button>
                <button style={{background:'transparent', border:`2px solid ${A2.cream}`, color:A2.cream, padding:'6px 14px', cursor:'pointer', fontFamily:a2Fonts.display, fontSize:14}}>››</button>
              </div>
            </div>
            <PostIt bg={A2.pink} rotate={-4} w={220} style={{marginTop:24}}>
              次は何にしよう。 リスト「ニコラス徹夜」 から自動再生？
            </PostIt>
          </aside>
        </div>
      </section>

      {/* Recommend strip */}
      <section style={{padding:'48px 32px', background:A2.cream, color:A2.ink, position:'relative', overflow:'hidden'}}>
        <SignalNoise opacity={.5}/>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:24, position:'relative'}}>
          <div>
            <A2Label color={A2.red}>RECOMMENDED / お勧め</A2Label>
            <div style={{fontFamily:a2Fonts.display, fontSize:48, lineHeight:.95, marginTop:6}}>
              あなたなら、<span style={{color:A2.blue}}>これも</span>。
            </div>
          </div>
          <Sticker bg={A2.blue} color={A2.cream} rotate={-4}>BASED ON ★ LOWEST</Sticker>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:16, position:'relative'}}>
          {MOVIES.slice(5, 10).map((m, i) => {
            const recAccents = [A2.red, A2.blue, A2.pink, A2.lime, A2.yellow];
            const acc = recAccents[i];
            return (
              <a key={m.id} href="#" style={{textDecoration:'none', color:A2.ink, display:'block', position:'relative'}}>
                <A2Poster movie={m} w={196} h={272} accent={acc}/>
                <div style={{fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.18em', color:A2.red, marginTop:8}}>
                  {m.year} · ★{m.starScore.toFixed(1)}
                </div>
                <div style={{fontFamily:a2Fonts.serif, fontSize:14, fontWeight:800, lineHeight:1.2, marginTop:3}}>
                  {m.title}
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <A2Footer/>
    </div>
  );
}

Object.assign(window, { A2Home, A2Archive, A2Movie, A2Dashboard, A2: A2 });
