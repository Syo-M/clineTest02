// DIRECTION A · v2 — MOBILE
// iPhone-sized versions of A2 (red dominant, clutter, riso accents)

// ─── Mobile-tuned chrome ───────────────────────────────

function A2MNav(){
  return (
    <header style={{ background:A2.red, color:A2.cream, position:'relative' }}>
      {/* upper meta strip */}
      <div style={{
        background:A2.ink, padding:'4px 16px',
        display:'flex', justifyContent:'space-between', alignItems:'center',
        fontFamily:a2Fonts.mono, fontSize:8.5, letterSpacing:'.2em', color:A2.cream
      }}>
        <span>VOL.07</span>
        <span style={{color:A2.yellow}}>● LIVE</span>
        <span style={{color:A2.lime}}>SUB ▸</span>
      </div>
      <div style={{
        display:'flex', justifyContent:'space-between', alignItems:'center',
        padding:'12px 16px', borderBottom:`3px solid ${A2.ink}`
      }}>
        <RisoHeadline size={28} color={A2.cream} ghost1={A2.yellow} ghost2={A2.blue}>異端</RisoHeadline>
        <div style={{display:'flex', gap:8, alignItems:'center'}}>
          <Sticker bg={A2.yellow} rotate={-4} size={9}>07</Sticker>
          <button style={{
            background:'transparent', border:'none', color:A2.cream, padding:0, cursor:'pointer',
            display:'flex', flexDirection:'column', gap:3
          }} aria-label="menu">
            <span style={{display:'block', width:24, height:3, background:A2.cream}}/>
            <span style={{display:'block', width:24, height:3, background:A2.yellow}}/>
            <span style={{display:'block', width:24, height:3, background:A2.cream}}/>
          </button>
        </div>
      </div>
    </header>
  );
}

function A2MTabBar({ active='home' }){
  const tabs = [
    {id:'home', label:'HOME', glyph:'■'},
    {id:'archive', label:'ARCHIVE', glyph:'≡'},
    {id:'random', label:'RANDOM', glyph:'？'},
    {id:'me', label:'ME', glyph:'◉'},
  ];
  return (
    <nav style={{
      position:'sticky', bottom:0,
      background:A2.ink, color:A2.cream, borderTop:`3px solid ${A2.red}`,
      display:'grid', gridTemplateColumns:'repeat(4, 1fr)',
      padding:'8px 0 30px'
    }}>
      {tabs.map(t => (
        <button key={t.id} style={{
          background:'transparent', border:'none', color: t.id===active ? A2.yellow : A2.cream,
          padding:'6px 4px', cursor:'pointer',
          display:'flex', flexDirection:'column', alignItems:'center', gap:4,
          fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.15em'
        }}>
          <span style={{
            fontFamily:a2Fonts.display, fontSize:16,
            color: t.id===active ? A2.yellow : A2.cream
          }}>{t.glyph}</span>
          {t.label}
        </button>
      ))}
    </nav>
  );
}

function A2MFooterMini(){
  return (
    <div style={{ padding:'24px 16px', background:A2.ink, color:`${A2.cream}99`, fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.18em', textAlign:'center', lineHeight:1.8 }}>
      © 2026 ITAN EDITORIAL<br/>
      <span style={{color:A2.yellow}}>NO MASTERPIECES HARMED</span>
    </div>
  );
}

// ─── MOBILE · TOP ──────────────────────────────────────

function A2MHome(){
  const f = MOVIES[0];
  const s = MOVIES[1];
  return (
    <div style={{ background:A2.red, color:A2.cream, fontFamily:a2Fonts.sans, position:'relative', minHeight:'100%' }}>
      <GrainOverlay opacity={0.18}/>
      <DeadPixels count={25} opacity={0.55}/>
      <A2MNav/>

      {/* HERO */}
      <section style={{ padding:'24px 16px 32px', position:'relative', overflow:'hidden' }}>
        <SignalNoise opacity={.65}/>
        <div style={{ position:'absolute', top:14, right:8, zIndex:3 }}>
          <Sticker bg={A2.yellow} rotate={8} size={9}>VOL.07</Sticker>
        </div>

        <div style={{ fontFamily:a2Fonts.monoDisplay, fontSize:9, letterSpacing:'.3em', color:A2.yellow }}>
          FEATURE — 異端の正典
        </div>
        <div style={{ marginTop:10 }}>
          <RisoHeadline size={56} color={A2.cream} ghost1={A2.yellow} ghost2={A2.blue}>史上最悪</RisoHeadline>
        </div>
        <div style={{ fontFamily:a2Fonts.serif, fontStyle:'italic', fontWeight:800, fontSize:42, lineHeight:.95, color:A2.ink, position:'relative', marginTop:4 }}>
          もしくは
          <ScribbleUnderline color={A2.yellow} width={120} style={{position:'absolute', bottom:-6, left:0}}/>
        </div>
        <div style={{ marginTop:6 }}>
          <RisoHeadline size={56} color={A2.cream} ghost1={A2.lime} ghost2={A2.pink}>純粋無垢の</RisoHeadline>
        </div>
        <div style={{ fontFamily:a2Fonts.display, fontSize:56, lineHeight:.95, color:A2.ink }}>
          到達点<span style={{color:A2.yellow}}>。</span>
        </div>

        <div style={{
          marginTop:18, background:A2.cream, color:A2.ink, padding:'12px 12px',
          border:`2px solid ${A2.ink}`, boxShadow:`4px 4px 0 ${A2.ink}`, transform:'rotate(-1deg)', position:'relative'
        }}>
          <div style={{ position:'absolute', top:-10, right:-8 }}>
            <Sticker bg={A2.pink} rotate={6} size={8}>EDITORS NOTE</Sticker>
          </div>
          <div style={{ fontFamily:a2Fonts.serif, fontSize:12.5, lineHeight:1.75, fontWeight:500 }}>
            本号は、「失敗作」と呼ばれる映画の中に、見落とされる純度と狂気の手触りを探る試みである。
          </div>
          <div style={{ marginTop:8, fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.25em', color:A2.red }}>
            —— E. ARAI
          </div>
        </div>
      </section>

      <Marquee speed={20} bg={A2.yellow} color={A2.ink} height={36}>
        <span style={{padding:'0 12px', fontSize:18}}>★ Z級 ★ CULT ★ 駄作 ★ TROLL 2 ★ PLAN 9 ★ </span>
      </Marquee>

      {/* FEATURED 01 */}
      <section style={{ padding:'28px 16px', background:A2.cream, color:A2.ink, position:'relative' }}>
        <HalftoneSquare width="100%" height="100%" color={`${A2.red}40`} density={5} dot={1}
          style={{position:'absolute', inset:0, opacity:.4, pointerEvents:'none'}}/>
        <div style={{ position:'relative' }}>
          <A2Label color={A2.red}>FEATURED · 01</A2Label>
          <div style={{ marginTop:12, position:'relative' }}>
            <Tape color={A2.blue} w={70} rotate={-6} style={{top:-8, left:30, zIndex:3}}/>
            <Tape color={A2.yellow} w={56} rotate={5} style={{top:-8, right:60, zIndex:3}}/>
            <A2Poster movie={f} w={300} h={420} accent={A2.blue}/>
            <Stamp color={A2.red} rotate={-12} size={13} style={{position:'absolute', bottom:14, left:-12, background:A2.cream, zIndex:4}}>RATED Z</Stamp>
          </div>

          <div style={{ fontFamily:a2Fonts.mono, fontSize:9.5, letterSpacing:'.2em', color:A2.red, marginTop:18 }}>
            {f.year} / {f.country} / {f.runtime}分
          </div>
          <h2 style={{ fontFamily:a2Fonts.display, fontSize:36, lineHeight:.95, margin:'10px 0 4px', color:A2.ink }}>
            {f.title}
          </h2>
          <div style={{ fontFamily:a2Fonts.monoDisplay, fontSize:10, letterSpacing:'.18em', color:A2.redDeep }}>
            {f.titleEn}
          </div>

          {/* Big score */}
          <div style={{ display:'flex', alignItems:'flex-end', gap:14, marginTop:18, position:'relative' }}>
            <div>
              <div style={{ fontFamily:a2Fonts.mono, fontSize:8.5, letterSpacing:'.2em' }}>AUDIENCE SCORE</div>
              <div style={{ fontFamily:a2Fonts.display, fontSize:88, lineHeight:.8, color:A2.red }}>
                {f.score.toFixed(0).padStart(2,'0')}<span style={{fontSize:28, color:A2.ink}}>/100</span>
              </div>
            </div>
            <div style={{
              background:A2.yellow, padding:'8px 10px', border:`2px solid ${A2.ink}`,
              boxShadow:`3px 3px 0 ${A2.ink}`, transform:'rotate(-3deg)', marginBottom:10
            }}>
              <div style={{ fontFamily:a2Fonts.mono, fontSize:8, letterSpacing:'.18em' }}>STAR</div>
              <div style={{ fontFamily:a2Fonts.display, fontSize:24, lineHeight:1 }}>★{f.starScore.toFixed(1)}</div>
            </div>
          </div>

          <div style={{ fontFamily:a2Fonts.serif, fontSize:13.5, lineHeight:1.8, fontWeight:500, marginTop:18, color:A2.ink }}>
            {f.synopsis}
          </div>
          <div style={{
            marginTop:14, background:A2.ink, color:A2.cream, padding:'10px 12px',
            borderLeft:`5px solid ${A2.yellow}`, fontFamily:a2Fonts.serif, fontStyle:'italic',
            fontSize:13, lineHeight:1.55, transform:'rotate(-.5deg)'
          }}>
            {f.quote}
          </div>
          <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginTop:12 }}>
            {f.genres.map((g, i) => (
              <Sticker key={g} bg={[A2.blue, A2.lime, A2.pink][i%3]} color={i===0 ? A2.cream : A2.ink} rotate={[-2,3,-1][i%3]} size={9}>
                #{g}
              </Sticker>
            ))}
          </div>
          <button style={{
            marginTop:18, width:'100%', background:A2.ink, color:A2.cream, border:'none',
            padding:'14px', fontFamily:a2Fonts.display, fontSize:16, cursor:'pointer'
          }}>
            ▶ 全文を読む
          </button>
        </div>
      </section>

      <Marquee speed={22} bg={A2.blue} color={A2.cream} height={32}>
        <span style={{padding:'0 12px', fontSize:14}}>★ NEW WED 00:00 ★ NEW WED 00:00 ★ </span>
      </Marquee>

      {/* INDEX list */}
      <section style={{ padding:'28px 16px', position:'relative' }}>
        <A2Label color={A2.yellow}>近影 / RECENT</A2Label>
        <div style={{ fontFamily:a2Fonts.display, fontSize:48, lineHeight:.95, color:A2.cream, marginTop:6, position:'relative' }}>
          INDEX
          <ScribbleUnderline color={A2.yellow} width={160} style={{position:'absolute', bottom:-8, left:0}}/>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:16, marginTop:24 }}>
          {MOVIES.slice(2, 6).map((m, i) => {
            const accents = [A2.blue, A2.yellow, A2.pink, A2.lime];
            const acc = accents[i];
            return (
              <a key={m.id} href="#" style={{
                textDecoration:'none', color:A2.ink, background:A2.cream, padding:14,
                display:'grid', gridTemplateColumns:'90px 1fr', gap:14,
                border:`2.5px solid ${A2.ink}`, boxShadow:`5px 5px 0 ${A2.ink}`,
                transform:`rotate(${[-.5, .5, -.3, .3][i]}deg)`, position:'relative'
              }}>
                <div style={{ position:'absolute', top:-12, right:-8, zIndex:3 }}>
                  <Sticker bg={acc} color={i===0 ? A2.cream : A2.ink} rotate={[6,-4,3,-3][i]} size={8}>
                    №{String(i+3).padStart(2,'0')}
                  </Sticker>
                </div>
                <A2Poster movie={m} w={90} h={130} accent={acc}/>
                <div>
                  <div style={{ fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.18em', color:A2.red }}>
                    {m.year} · ★{m.starScore.toFixed(1)}
                  </div>
                  <div style={{ fontFamily:a2Fonts.serif, fontSize:16, fontWeight:800, lineHeight:1.2, marginTop:4 }}>
                    {m.title}
                  </div>
                  <div style={{ fontFamily:a2Fonts.serif, fontSize:11.5, lineHeight:1.55, marginTop:6, opacity:.78 }}>
                    {m.tagline}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* COLUMN PROMO */}
      <section style={{ padding:'28px 16px', background:A2.ink, color:A2.cream }}>
        <A2Label color={A2.yellow}>COLUMN — 駄作論</A2Label>
        <h3 style={{ fontFamily:a2Fonts.display, fontSize:38, lineHeight:.95, margin:'12px 0' }}>
          なぜ「悪さ」は<br/>
          <span style={{color:A2.yellow}}>美しいのか</span>
        </h3>
        <div style={{ fontFamily:a2Fonts.serif, fontSize:13, lineHeight:1.8, fontWeight:500, color:`${A2.cream}cc` }}>
          欠落は、しばしば美学に転化する。低予算ゆえの省略、ピントの甘さ、編集の破綻 — もし「過剰」の名の下に行われれば、前衛と呼ばれただろう。
        </div>
        <button style={{
          marginTop:14, background:A2.yellow, color:A2.ink, border:`2px solid ${A2.ink}`,
          padding:'10px 14px', fontFamily:a2Fonts.mono, fontSize:11, letterSpacing:'.18em',
          cursor:'pointer', boxShadow:`4px 4px 0 ${A2.red}`
        }}>
          ▶ READ — 8分
        </button>
      </section>

      <A2MFooterMini/>
      <A2MTabBar active="home"/>
    </div>
  );
}

// ─── MOBILE · ARCHIVE ──────────────────────────────────

function A2MArchive(){
  const stickerLabels = ['必見', 'マスト', '鷲爆発', 'ニルボーグ', '紙コップ', '600万', 'BEES!', '酷評', '再評価', '刀'];
  const accents = [A2.blue, A2.yellow, A2.pink, A2.lime, A2.red, A2.blue, A2.yellow, A2.pink, A2.lime, A2.red];
  const rots = [-1.4, 1.2, -.8, 1.4, -1.2, .8, -1.3, 1, -.6, 1.2];
  return (
    <div style={{ background:A2.red, color:A2.cream, fontFamily:a2Fonts.sans, position:'relative', minHeight:'100%' }}>
      <GrainOverlay opacity={0.18}/>
      <DeadPixels count={28} opacity={0.55}/>
      <A2MNav/>

      <section style={{ padding:'18px 16px 18px', position:'relative', overflow:'hidden' }}>
        <SignalNoise opacity={.7}/>
        <ColorBars height={5} style={{marginBottom:14, opacity:.9}}/>
        <A2Label color={A2.yellow}>ARCHIVE / INDEX</A2Label>
        <div style={{marginTop:10}}>
          <RisoHeadline size={56} color={A2.cream} ghost1={A2.yellow} ghost2={A2.blue}>駄作目録</RisoHeadline>
        </div>
        <div style={{
          fontFamily:a2Fonts.serif, fontStyle:'italic', fontWeight:800, fontSize:32, color:A2.ink, lineHeight:.95, marginTop:4
        }}>
          異端、<ChromaText size={32} font={a2Fonts.serif} color={A2.ink} shift={2}>十番勝負</ChromaText>。
        </div>
        <div style={{
          marginTop:14, display:'flex', justifyContent:'space-between', alignItems:'baseline',
          padding:'8px 12px', background:A2.cream, color:A2.ink, border:`2px solid ${A2.ink}`
        }}>
          <span style={{ fontFamily:a2Fonts.mono, fontSize:10, letterSpacing:'.2em' }}>TOTAL TITLES</span>
          <span style={{ fontFamily:a2Fonts.display, fontSize:28, color:A2.red }}>
            {String(MOVIES.length).padStart(3,'0')}
          </span>
        </div>
      </section>

      {/* Filter scroll */}
      <section style={{
        padding:'10px 0 12px', background:A2.cream, color:A2.ink,
        borderTop:`3px solid ${A2.ink}`, borderBottom:`3px solid ${A2.ink}`,
        position:'sticky', top:0, zIndex:5
      }}>
        <div style={{ padding:'0 16px 8px', display:'flex', justifyContent:'space-between' }}>
          <span style={{ fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.25em', color:A2.red }}>FILTER ──</span>
          <span style={{ fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.2em', color:A2.blue }}>SORT ★ 低い順 ▼</span>
        </div>
        <div style={{
          display:'flex', gap:8, overflowX:'auto', padding:'0 16px',
          scrollbarWidth:'none'
        }}>
          {[['ALL', A2.ink, A2.yellow], ['低予算'], ['カルト'], ['ホラー'], ['SF'], ['ニコラス'], ['90年代'], ['00年代']].map(([f, bg, color]) => (
            <button key={f} style={{
              fontFamily:a2Fonts.mono, fontSize:11, letterSpacing:'.15em', flex:'0 0 auto',
              background: bg || 'transparent', color: color || A2.ink,
              padding:'6px 12px', border:`1.5px solid ${A2.ink}`, cursor:'pointer', whiteSpace:'nowrap'
            }}>{f}</button>
          ))}
        </div>
      </section>

      {/* Card grid — 10 cards, 2 cols */}
      <section style={{ padding:'24px 16px 28px', background:A2.cream, color:A2.ink, position:'relative', overflow:'hidden' }}>
        <SignalNoise opacity={.55}/>
        <HalftoneSquare width="100%" height="100%" color={`${A2.red}40`} density={5} dot={1}
          style={{position:'absolute', inset:0, opacity:.3, pointerEvents:'none'}}/>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:18, position:'relative'}}>
          {MOVIES.slice(0, 10).map((m, i) => {
            const acc = accents[i];
            const numRot = [-6,4,-3,6,-5,3,-4,5,-3,4][i];
            const tagRot = [6,-4,3,-6,5,-3,4,-5,3,-4][i];
            return (
              <a key={m.id} href="#" style={{
                textDecoration:'none', color:A2.ink, position:'relative',
                background:A2.cream, padding:9,
                border:`2px solid ${A2.ink}`, boxShadow:`4px 4px 0 ${A2.ink}`,
                transform:`rotate(${rots[i]}deg)`, display:'flex', flexDirection:'column'
              }}>
                <Tape color={acc} w={42} rotate={i%2===0?-8:6} style={{top:-8, left: i%2===0 ? 14 : 70, zIndex:3, height:14}}/>
                <div style={{position:'absolute', top:-10, right:-6, zIndex:4}}>
                  <Sticker bg={acc} color={acc===A2.blue ? A2.cream : A2.ink} rotate={numRot} size={8}>
                    №{String(i+1).padStart(2,'0')}
                  </Sticker>
                </div>
                <div style={{position:'relative'}}>
                  <A2Poster movie={m} w={148} h={206} accent={acc}/>
                  <Stamp color={A2.red} rotate={-12} size={9} style={{position:'absolute', bottom:6, left:-6, background:A2.cream, zIndex:4}}>
                    {m.score.toFixed(0)}/100
                  </Stamp>
                </div>
                <div style={{marginTop:10}}>
                  <div style={{fontFamily:a2Fonts.mono, fontSize:8, letterSpacing:'.18em', color:A2.red}}>
                    {m.year} · {m.country}
                  </div>
                  <div style={{fontFamily:a2Fonts.serif, fontSize:12.5, fontWeight:800, lineHeight:1.2, marginTop:3}}>
                    {m.title}
                  </div>
                </div>
                <div style={{
                  display:'flex', justifyContent:'space-between', alignItems:'flex-end',
                  marginTop:8, paddingTop:6, borderTop:`1.5px dashed ${A2.ink}40`
                }}>
                  <div style={{
                    fontFamily:a2Fonts.display, fontSize:18, color:acc, lineHeight:1,
                    textShadow: (acc===A2.yellow || acc===A2.lime) ? `1px 1px 0 ${A2.ink}` : 'none'
                  }}>
                    ★{m.starScore.toFixed(1)}
                  </div>
                  <span style={{ fontFamily:a2Fonts.mono, fontSize:9, background:A2.ink, color:A2.cream, padding:'2px 5px' }}>→</span>
                </div>
                <div style={{position:'absolute', bottom:-10, right:-6, zIndex:4}}>
                  <Sticker bg={A2.ink} color={A2.yellow} rotate={tagRot} size={8}>
                    {stickerLabels[i]}
                  </Sticker>
                </div>
              </a>
            );
          })}
        </div>

        <div style={{
          marginTop:32, padding:'14px 0', borderTop:`2px solid ${A2.ink}`,
          display:'flex', justifyContent:'space-between', alignItems:'center'
        }}>
          <span style={{fontFamily:a2Fonts.mono, fontSize:9.5, letterSpacing:'.2em', color:A2.red}}>1—10 / {MOVIES.length}</span>
          <div style={{display:'flex', gap:6}}>
            {['1','2','3','›'].map((p,i) => (
              <button key={i} style={{
                fontFamily:a2Fonts.mono, fontSize:11, padding:'6px 9px',
                background: i===0 ? A2.ink : 'transparent', color: i===0 ? A2.yellow : A2.ink,
                border:`1.5px solid ${A2.ink}`, cursor:'pointer'
              }}>{p}</button>
            ))}
          </div>
        </div>
      </section>

      <A2MFooterMini/>
      <A2MTabBar active="archive"/>
    </div>
  );
}

// ─── MOBILE · MOVIE DETAIL ─────────────────────────────

function A2MMovie(){
  const m = MOVIES[1];
  return (
    <div style={{ background:A2.red, color:A2.cream, fontFamily:a2Fonts.sans, position:'relative', minHeight:'100%' }}>
      <GrainOverlay opacity={0.16}/>
      <DeadPixels count={28} opacity={0.55}/>
      <A2MNav/>

      <div style={{
        padding:'8px 16px', background:A2.redDeep, color:A2.cream,
        fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.18em',
        display:'flex', justifyContent:'space-between'
      }}>
        <span>← ARCHIVE · 2000s</span>
        <span style={{color:A2.yellow}}>EP {String(MOVIES.indexOf(m)+1).padStart(3,'0')}</span>
      </div>

      {/* Hero */}
      <section style={{ padding:'20px 16px 28px', position:'relative', overflow:'hidden' }}>
        <A2Label color={A2.yellow}>第02席</A2Label>
        <h1 style={{ margin:'10px 0 0' }}>
          <RisoHeadline size={48} color={A2.cream} ghost1={A2.yellow} ghost2={A2.blue}>
            {m.title}
          </RisoHeadline>
        </h1>
        <div style={{ fontFamily:a2Fonts.serif, fontStyle:'italic', fontSize:18, lineHeight:1.4, fontWeight:500, color:A2.ink, marginTop:14 }}>
          {m.tagline}
        </div>
        <div style={{ fontFamily:a2Fonts.monoDisplay, fontSize:9, letterSpacing:'.25em', color:A2.cream, marginTop:14 }}>
          {m.taglineEn}
        </div>

        {/* Poster */}
        <div style={{ position:'relative', marginTop:24 }}>
          <Tape color={A2.blue} w={90} rotate={-6} style={{top:-10, left:60, zIndex:3}}/>
          <Tape color={A2.yellow} w={70} rotate={5} style={{top:-10, right:30, zIndex:3}}/>
          <A2Poster movie={m} w={358} h={500} accent={A2.blue}/>
          <Stamp color={A2.red} rotate={-12} size={14} style={{position:'absolute', bottom:14, left:-8, background:A2.cream, zIndex:4}}>SCORE: 03</Stamp>
        </div>

        {/* META */}
        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1fr', gap:0, marginTop:24,
          background:A2.cream, color:A2.ink, border:`2.5px solid ${A2.ink}`, boxShadow:`5px 5px 0 ${A2.ink}`
        }}>
          {[['DIRECTOR', m.director, A2.red], ['YEAR', m.year, A2.blue], ['COUNTRY', m.country, A2.pink], ['RUNTIME', `${m.runtime}分`, A2.lime]].map(([k, v, c], i) => (
            <div key={k} style={{
              padding:'10px 12px',
              borderRight: i%2===0 ? `1.5px solid ${A2.ink}30`: 'none',
              borderBottom: i<2 ? `1.5px solid ${A2.ink}30` : 'none'
            }}>
              <div style={{ fontFamily:a2Fonts.mono, fontSize:8, letterSpacing:'.25em', color:c }}>{k}</div>
              <div style={{ fontFamily:a2Fonts.serif, fontSize:14, fontWeight:800, marginTop:4 }}>{v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GIANT SCORE */}
      <section style={{ padding:'24px 16px', background:A2.ink, color:A2.cream, position:'relative' }}>
        <A2Label color={A2.yellow}>AUDIENCE SCORE</A2Label>
        <div style={{ display:'flex', alignItems:'flex-end', gap:10, marginTop:8, position:'relative' }}>
          <div style={{
            fontFamily:a2Fonts.display, fontSize:140, lineHeight:.78, color:A2.cream,
            letterSpacing:'-.04em', position:'relative'
          }}>
            {m.score.toFixed(0).padStart(2,'0')}<span style={{fontSize:32, color:A2.yellow}}>/100</span>
            <ScribbleCircle color={A2.yellow} w={240} h={140} style={{ top:-20, left:-20, zIndex:0 }} sw={3}/>
          </div>
          <div style={{ paddingBottom:16 }}>
            <Stamp color={A2.yellow} rotate={-5} size={9}>ROTTEN</Stamp>
          </div>
        </div>
        <div style={{ fontFamily:a2Fonts.serif, fontStyle:'italic', fontSize:18, marginTop:8, fontWeight:500, color:A2.yellow }}>
          これは、誇るべき低さである。
        </div>
      </section>

      {/* SYNOPSIS */}
      <section style={{ padding:'24px 16px', background:A2.cream, color:A2.ink }}>
        <A2Label color={A2.red}>梗概 / SYNOPSIS</A2Label>
        <div style={{ fontFamily:a2Fonts.serif, fontSize:14.5, lineHeight:1.85, fontWeight:500, marginTop:14 }}>
          <span style={{ float:'left', fontFamily:a2Fonts.display, fontSize:64, lineHeight:.8, paddingRight:10, color:A2.red }}>
            {m.synopsis.charAt(0)}
          </span>
          {m.synopsis.slice(1)}
        </div>
        <aside style={{
          marginTop:18, fontFamily:a2Fonts.serif, fontSize:12, lineHeight:1.75,
          padding:'12px 12px', borderLeft:`4px solid ${A2.blue}`, background:A2.paper,
          transform:'rotate(-.5deg)', boxShadow:`3px 3px 0 ${A2.ink}`, position:'relative'
        }}>
          <A2Label color={A2.blue}>ASIDE / 余白</A2Label>
          <div style={{ marginTop:4 }}>{m.crime}</div>
        </aside>
      </section>

      {/* PULL QUOTE */}
      <section style={{ padding:'24px 16px', background:A2.ink, color:A2.cream }}>
        <A2Label color={A2.yellow}>QUOTE</A2Label>
        <div style={{
          fontFamily:a2Fonts.reggae, fontSize:42, lineHeight:1.1, marginTop:14, color:A2.cream
        }}>
          <span style={{color:A2.yellow}}>「</span>{m.quote.replace(/[「」]/g,'')}<span style={{color:A2.yellow}}>」</span>
        </div>
        <div style={{ marginTop:14, fontFamily:a2Fonts.mono, fontSize:9.5, letterSpacing:'.18em', color:`${A2.cream}88` }}>
          —— {m.director}, {m.year}
        </div>
      </section>

      {/* REVIEW */}
      <section style={{ padding:'24px 16px', background:A2.red, color:A2.cream }}>
        <A2Label color={A2.yellow}>REVIEW / 評</A2Label>
        <div style={{ fontFamily:a2Fonts.mono, fontSize:9.5, letterSpacing:'.18em', color:A2.cream, marginTop:8, opacity:.85 }}>
          BY E. ARAI · 2026.04.18 · 8分
        </div>
        <article style={{ fontFamily:a2Fonts.serif, fontSize:13.5, lineHeight:1.9, fontWeight:500, marginTop:14 }}>
          <p style={{margin:'0 0 1.1em'}}>
            屋上の場面が三度、繰り返される。同じ角度、同じ手の振り。背後はサンフランシスコのストックフッテージで、撮影はロサンゼルスで行われている。
          </p>
          <p style={{margin:'0 0 1.1em'}}>
            この反復に、何の意味もない。意味がないことこそが、ザ・ルームの本質である。
          </p>
          <p style={{margin:'0 0 1.1em'}}>
            <strong style={{ fontWeight:900, color:A2.yellow }}>そして、それでも、これは映画である。</strong> ウィソーは、これを「ブラック・コメディ」だと主張した。観客は、そう受け取った。
          </p>
        </article>
      </section>

      {/* RELATED */}
      <section style={{ padding:'24px 16px', background:A2.cream, color:A2.ink }}>
        <A2Label color={A2.red}>RELATED</A2Label>
        <div style={{ display:'flex', flexDirection:'column', gap:10, marginTop:14 }}>
          {MOVIES.slice(2, 5).map((r, i) => (
            <a key={r.id} href="#" style={{
              textDecoration:'none', color:A2.cream,
              background:[A2.blue, A2.redDeep, A2.ink][i], padding:'10px 12px',
              border:`2px solid ${A2.ink}`, boxShadow:`3px 3px 0 ${A2.ink}`, transform:`rotate(${[-.5, .5, -.3][i]}deg)`,
              display:'flex', justifyContent:'space-between', alignItems:'center'
            }}>
              <div>
                <div style={{ fontFamily:a2Fonts.serif, fontSize:13, fontWeight:800, lineHeight:1.3 }}>{r.title}</div>
                <div style={{ fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.18em', color:[A2.yellow, A2.lime, A2.pink][i], marginTop:2 }}>
                  {r.year} · ★{r.starScore.toFixed(1)}
                </div>
              </div>
              <span style={{fontFamily:a2Fonts.display, fontSize:18}}>→</span>
            </a>
          ))}
        </div>
      </section>

      <A2MFooterMini/>
      <A2MTabBar active="archive"/>
    </div>
  );
}

// ─── MOBILE · DASHBOARD ────────────────────────────────

function A2MDashboard(){
  const user = {
    name:'山田 太郎',
    handle:'@trash_lover_99',
    role:'B-MOVIE 探検家',
    level:7,
    since:'2024.08.12',
    motto:'3点以下の映画でしか、心を許せない。',
    collected:27, watched:41, wishlist:13,
    avgScore:12.4, lowestScore:1.9,
    favoriteDirector:'エド・ウッド', screeningHours:84, streakDays:12,
  };
  const myCollection = MOVIES.slice(0, 6).map((m, i) => ({
    ...m,
    status: ['WATCHED', 'WATCHING', 'WANT', 'WATCHED', 'WANT', 'WATCHED'][i],
    userRating: [5, 5, null, 5, null, 4][i],
    userNote: ['完璧。', '今夜 二度目。', null, '想像の上を行った。', null, '酒と共に。'][i],
  }));
  const customLists = [
    { title:'週末ゴブリン映画祭', count:6, color:A2.lime, sub:'菜食主義者専用'},
    { title:'ニコラス徹夜', count:9, color:A2.blue, sub:'BEES! を含む'},
    { title:'初鑑賞者向け', count:4, color:A2.pink, sub:'プラン9から始める'},
  ];
  const activities = [
    { type:'REVIEW', date:'2026.05.15', movie:'ザ・ルーム', text:'三度目の鑑賞。やはり屋上で笑い泣きする。' },
    { type:'COLLECT', date:'2026.05.14', movie:'バーデミック', text:'コレクションに追加。' },
    { type:'NOTE', date:'2026.05.12', movie:'プラン9', text:'紙コップの墓石、もはや美術。' },
    { type:'RATE', date:'2026.05.10', movie:'トロール2', text:'★5/5 を献上。' },
  ];
  const activityColors = { REVIEW:A2.red, COLLECT:A2.lime, NOTE:A2.yellow, RATE:A2.pink };

  return (
    <div style={{ background:A2.red, color:A2.cream, fontFamily:a2Fonts.sans, position:'relative', minHeight:'100%' }}>
      <GrainOverlay opacity={0.18}/>
      <DeadPixels count={30} opacity={0.55}/>
      <A2MNav/>

      {/* Login bar */}
      <div style={{
        padding:'6px 16px', background:A2.ink, color:A2.cream, fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.22em',
        display:'flex', justifyContent:'space-between', alignItems:'center'
      }}>
        <span><span style={{color:A2.lime}}>● LIVE</span>　{user.handle}</span>
        <span style={{color:A2.pink}}>LOGOUT</span>
      </div>

      {/* PROFILE HERO */}
      <section style={{ padding:'18px 16px 20px', position:'relative', overflow:'hidden' }}>
        <SignalNoise opacity={.65}/>
        <ColorBars height={4} style={{marginBottom:14, opacity:.9}}/>
        <div style={{display:'grid', gridTemplateColumns:'90px 1fr', gap:14, alignItems:'center', position:'relative'}}>
          <div style={{position:'relative'}}>
            <div style={{
              width:84, height:84, background:A2.yellow, border:`2.5px solid ${A2.ink}`,
              boxShadow:`4px 4px 0 ${A2.ink}`, transform:'rotate(-2deg)',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontFamily:a2Fonts.display, fontSize:48, color:A2.ink, position:'relative', overflow:'hidden'
            }}>
              山
              <div aria-hidden style={{
                position:'absolute', inset:0, color:A2.blue, fontFamily:a2Fonts.display, fontSize:48,
                display:'flex', alignItems:'center', justifyContent:'center',
                mixBlendMode:'screen', transform:'translate(2px, -1px)', opacity:.85
              }}>山</div>
            </div>
            <Sticker bg={A2.pink} rotate={6} size={8} style={{position:'absolute', bottom:-8, right:-6}}>LV.07</Sticker>
          </div>
          <div>
            <A2Label color={A2.yellow}>異端者ID</A2Label>
            <h1 style={{margin:'4px 0 0'}}>
              <RisoHeadline size={32} color={A2.cream} ghost1={A2.yellow} ghost2={A2.blue}>{user.name}</RisoHeadline>
            </h1>
            <div style={{fontFamily:a2Fonts.mono, fontSize:10, letterSpacing:'.18em', color:A2.ink, marginTop:4}}>
              {user.handle}
            </div>
            <div style={{display:'flex', gap:6, alignItems:'center', marginTop:8, flexWrap:'wrap'}}>
              <Sticker bg={A2.blue} color={A2.cream} rotate={-3} size={8}>{user.role}</Sticker>
              <Sticker bg={A2.lime} rotate={3} size={8}>{user.streakDays}日連続</Sticker>
            </div>
          </div>
        </div>
        <div style={{
          marginTop:14, fontFamily:a2Fonts.serif, fontStyle:'italic', fontSize:15, fontWeight:500,
          lineHeight:1.4, color:A2.ink, position:'relative'
        }}>
          「{user.motto}」
          <ScribbleUnderline color={A2.yellow} width={200} style={{position:'absolute', bottom:-6, left:0}}/>
        </div>

        {/* Collection counter card */}
        <div style={{
          marginTop:20, padding:'14px 16px', background:A2.ink, color:A2.cream,
          border:`2.5px solid ${A2.cream}`, boxShadow:`5px 5px 0 ${A2.ink}`, position:'relative', overflow:'hidden'
        }}>
          <A2Label color={A2.yellow}>蒐集件数 / COLLECTED</A2Label>
          <div style={{display:'flex', alignItems:'flex-end', gap:10, marginTop:6, position:'relative'}}>
            <div style={{fontFamily:a2Fonts.display, fontSize:88, lineHeight:.78, color:A2.cream, letterSpacing:'-.04em', position:'relative'}}>
              {String(user.collected).padStart(3,'0')}
              <ScribbleCircle color={A2.yellow} w={170} h={100} style={{top:-12, left:-14, zIndex:0}} sw={3}/>
            </div>
            <div style={{paddingBottom:10, fontFamily:a2Fonts.mono, fontSize:10, letterSpacing:'.2em'}}>
              <div style={{color:A2.lime}}>WATCHED {user.watched}</div>
              <div style={{color:A2.pink}}>WISH {user.wishlist}</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS 2x2 */}
      <section style={{
        background:A2.cream, color:A2.ink, position:'relative',
        borderTop:`3px solid ${A2.ink}`, borderBottom:`3px solid ${A2.ink}`, overflow:'hidden'
      }}>
        <SignalNoise opacity={.5}/>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', position:'relative'}}>
          {[
            {label:'AVG / 平均点', value:user.avgScore.toFixed(1), sub:'/100 低い、誇れ', acc:A2.red, big:true},
            {label:'BEST WORST', value:user.lowestScore.toFixed(1), sub:'/100 ザ・ルーム', acc:A2.blue, big:true},
            {label:'偏愛監督', value:user.favoriteDirector, sub:'7本中 4本', acc:A2.pink, big:false},
            {label:'鑑賞時間', value:`${user.screeningHours}h`, sub:'累計', acc:A2.lime, big:true},
          ].map((s, i) => (
            <div key={s.label} style={{
              padding:'14px 14px', borderRight: i%2===0 ? `1.5px solid ${A2.ink}30` : 'none',
              borderBottom: i<2 ? `1.5px solid ${A2.ink}30` : 'none'
            }}>
              <div style={{fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.22em', color:s.acc}}>{s.label}</div>
              <div style={{
                fontFamily: s.big ? a2Fonts.display : a2Fonts.serif,
                fontSize: s.big ? 36 : 18, fontWeight: s.big ? 400 : 800,
                lineHeight:.95, marginTop:6
              }}>{s.value}</div>
              <div style={{fontFamily:a2Fonts.mono, fontSize:8.5, letterSpacing:'.18em', color:A2.redDeep, marginTop:4}}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tab strip */}
      <section style={{
        padding:'10px 0 12px', background:A2.red, color:A2.cream, position:'sticky', top:0, zIndex:5,
        borderBottom:`3px solid ${A2.ink}`
      }}>
        <div style={{padding:'0 16px 8px', display:'flex', justifyContent:'space-between'}}>
          <span style={{fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.25em', color:A2.yellow}}>VIEW ──</span>
          <button style={{
            background:A2.yellow, color:A2.ink, border:`1.5px solid ${A2.ink}`,
            padding:'2px 10px', fontFamily:a2Fonts.display, fontSize:11, cursor:'pointer'
          }}>＋ 追加</button>
        </div>
        <div style={{display:'flex', gap:6, overflowX:'auto', padding:'0 16px', scrollbarWidth:'none'}}>
          {[['MY COLLECTION', true], ['WATCHED', false], ['WISHLIST', false], ['CUSTOM LISTS', false], ['NOTES', false]].map(([t, active]) => (
            <button key={t} style={{
              fontFamily:a2Fonts.mono, fontSize:10, letterSpacing:'.18em', flex:'0 0 auto',
              background: active ? A2.cream : 'transparent', color: active ? A2.ink : A2.cream,
              padding:'6px 10px', border:`1.5px solid ${active ? A2.ink : `${A2.cream}80`}`, cursor:'pointer', whiteSpace:'nowrap'
            }}>{t}</button>
          ))}
        </div>
      </section>

      {/* MY COLLECTION 2-col */}
      <section style={{padding:'20px 16px 28px', background:A2.cream, color:A2.ink, position:'relative', overflow:'hidden'}}>
        <SignalNoise opacity={.5}/>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:14}}>
          <div>
            <A2Label color={A2.red}>MY COLLECTION</A2Label>
            <div style={{fontFamily:a2Fonts.display, fontSize:32, lineHeight:.95, marginTop:4}}>
              私の<span style={{color:A2.blue}}>駄作</span>たち
            </div>
          </div>
          <Sticker bg={A2.lime} rotate={-3} size={9}>{myCollection.filter(m=>m.status==='WATCHED').length}/{myCollection.length}観覧</Sticker>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:18, position:'relative'}}>
          {myCollection.map((m, i) => {
            const colAccents = [A2.blue, A2.yellow, A2.pink, A2.lime, A2.red, A2.blue];
            const colRots = [-1, 1.2, -.8, 1, -1.4, .6];
            const acc = colAccents[i];
            const statusColor = m.status==='WATCHED' ? A2.lime : m.status==='WATCHING' ? A2.yellow : A2.pink;
            const statusLabel = m.status==='WATCHED' ? '観覧済' : m.status==='WATCHING' ? '視聴中' : '観たい';
            return (
              <div key={m.id} style={{
                background:A2.cream, padding:9, border:`2px solid ${A2.ink}`, boxShadow:`4px 4px 0 ${A2.ink}`,
                transform:`rotate(${colRots[i]}deg)`, position:'relative'
              }}>
                <div style={{position:'absolute', top:-10, left:-6, zIndex:4}}>
                  <Sticker bg={statusColor} color={A2.ink} rotate={-6} size={8}>{statusLabel}</Sticker>
                </div>
                <Tape color={acc} w={40} rotate={i%2===0?-6:8} style={{top:-8, right:20, height:14, zIndex:3}}/>
                <div style={{position:'relative'}}>
                  <A2Poster movie={m} w={148} h={206} accent={acc}/>
                  {m.userRating && (
                    <Stamp color={A2.red} rotate={-12} size={9} style={{position:'absolute', bottom:6, left:-6, background:A2.cream, zIndex:4}}>
                      MY ★{m.userRating}
                    </Stamp>
                  )}
                </div>
                <div style={{marginTop:8}}>
                  <div style={{fontFamily:a2Fonts.mono, fontSize:8, letterSpacing:'.18em', color:A2.red}}>
                    {m.year} · ★{m.starScore.toFixed(1)}
                  </div>
                  <div style={{fontFamily:a2Fonts.serif, fontSize:12.5, fontWeight:800, lineHeight:1.2, marginTop:2}}>
                    {m.title}
                  </div>
                </div>
                {m.userNote && (
                  <div style={{
                    marginTop:8, padding:'6px 8px', background:A2.yellow, fontFamily:a2Fonts.reggae, fontSize:11, lineHeight:1.4,
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

      {/* CUSTOM LISTS — vertical */}
      <section style={{padding:'24px 16px', background:A2.red, color:A2.cream, position:'relative', overflow:'hidden'}}>
        <SignalNoise opacity={.7}/>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:14, position:'relative'}}>
          <div>
            <A2Label color={A2.yellow}>CUSTOM LISTS</A2Label>
            <div style={{fontFamily:a2Fonts.display, fontSize:32, lineHeight:.95, marginTop:4}}>
              俺だけの<span style={{color:A2.yellow}}>上映会</span>
            </div>
          </div>
          <button style={{
            background:A2.yellow, color:A2.ink, border:`2px solid ${A2.ink}`,
            padding:'6px 10px', fontFamily:a2Fonts.display, fontSize:11, cursor:'pointer',
            boxShadow:`3px 3px 0 ${A2.ink}`
          }}>＋ NEW</button>
        </div>
        <div style={{display:'flex', flexDirection:'column', gap:14, position:'relative'}}>
          {customLists.map((l, i) => (
            <div key={l.title} style={{
              background:l.color, color: l.color===A2.blue ? A2.cream : A2.ink, padding:'14px 16px',
              border:`2.5px solid ${A2.ink}`, boxShadow:`5px 5px 0 ${A2.ink}`,
              transform:`rotate(${[-.8, .6, -.4][i]}deg)`, position:'relative', overflow:'hidden'
            }}>
              <HalftoneSquare width="100%" height="100%" color={`${A2.ink}25`} density={5} dot={1}
                style={{position:'absolute', inset:0, opacity:.3, pointerEvents:'none'}}/>
              <Tape color={A2.ink} w={50} rotate={-8} style={{top:-10, left:20, opacity:.85, zIndex:2}}/>
              <div style={{position:'relative', display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:14}}>
                <div>
                  <div style={{fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.2em', opacity:.85}}>LIST №{String(i+1).padStart(2,'0')}</div>
                  <div style={{fontFamily:a2Fonts.display, fontSize:22, lineHeight:1.05, marginTop:4, letterSpacing:'-.01em'}}>
                    {l.title}
                  </div>
                  <div style={{fontFamily:a2Fonts.serif, fontSize:12, fontStyle:'italic', fontWeight:500, marginTop:2}}>
                    {l.sub}
                  </div>
                </div>
                <div style={{fontFamily:a2Fonts.display, fontSize:28, lineHeight:.85, textAlign:'right'}}>
                  {l.count}<span style={{fontSize:12}}>本</span>
                  <div style={{fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.18em', marginTop:4}}>→ OPEN</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITY */}
      <section style={{padding:'24px 16px', background:A2.ink, color:A2.cream, position:'relative', overflow:'hidden'}}>
        <SignalNoise opacity={.8}/>
        <DeadPixels count={18}/>
        <A2Label color={A2.yellow}>RECENT ACTIVITY / 観察日誌</A2Label>
        <div style={{marginTop:14, position:'relative'}}>
          <div style={{position:'absolute', left:78, top:8, bottom:8, width:2, background:A2.yellow, opacity:.45}}/>
          {activities.map((a, i) => (
            <div key={i} style={{display:'grid', gridTemplateColumns:'72px 28px 1fr', gap:8, marginBottom:18, alignItems:'start'}}>
              <div style={{fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.18em', color:`${A2.cream}88`, textAlign:'right', paddingTop:5}}>
                {a.date}
              </div>
              <div style={{
                width:12, height:12, background: activityColors[a.type],
                border:`2px solid ${A2.cream}`, marginTop:6, zIndex:2, position:'relative', marginLeft:6
              }}/>
              <div>
                <div style={{display:'flex', gap:6, alignItems:'center', flexWrap:'wrap'}}>
                  <Sticker bg={activityColors[a.type]} color={a.type==='REVIEW' ? A2.cream : A2.ink} rotate={-3} size={8} style={{position:'relative'}}>
                    {a.type}
                  </Sticker>
                  <span style={{fontFamily:a2Fonts.serif, fontWeight:800, fontSize:14}}>{a.movie}</span>
                </div>
                <div style={{fontFamily:a2Fonts.serif, fontSize:12, lineHeight:1.6, marginTop:4, color:`${A2.cream}cc`, fontStyle:'italic', fontWeight:500}}>
                  {a.text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NOW PLAYING mini */}
        <div style={{
          marginTop:18, padding:14, border:`2.5px solid ${A2.lime}`, boxShadow:`4px 4px 0 ${A2.cream}`, transform:'rotate(1.2deg)', position:'relative', overflow:'hidden'
        }}>
          <ColorBars height={3} style={{marginBottom:10, opacity:.85}}/>
          <div style={{fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.22em', color:A2.lime}}>● NOW PLAYING</div>
          <div style={{fontFamily:a2Fonts.display, fontSize:18, lineHeight:1.1, marginTop:6}}>{MOVIES[2].title}</div>
          <div style={{marginTop:10, height:5, background:`${A2.cream}30`}}>
            <div style={{width:'42%', height:'100%', background:A2.lime}}/>
          </div>
          <div style={{display:'flex', justifyContent:'space-between', marginTop:4, fontFamily:a2Fonts.mono, fontSize:9, letterSpacing:'.18em', color:`${A2.cream}88`}}>
            <span>00:40</span><span>01:35</span>
          </div>
        </div>
      </section>

      {/* RECOMMEND horizontal */}
      <section style={{padding:'24px 16px', background:A2.cream, color:A2.ink, position:'relative'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:14}}>
          <div>
            <A2Label color={A2.red}>お勧め</A2Label>
            <div style={{fontFamily:a2Fonts.display, fontSize:24, lineHeight:1, marginTop:4}}>
              あなたなら、<span style={{color:A2.blue}}>これも</span>
            </div>
          </div>
          <Sticker bg={A2.blue} color={A2.cream} rotate={-3} size={8}>★ LOWEST</Sticker>
        </div>
        <div style={{display:'flex', gap:12, overflowX:'auto', scrollbarWidth:'none', paddingBottom:8}}>
          {MOVIES.slice(5, 10).map((m, i) => {
            const recAccents = [A2.red, A2.blue, A2.pink, A2.lime, A2.yellow];
            const acc = recAccents[i];
            return (
              <a key={m.id} href="#" style={{textDecoration:'none', color:A2.ink, flex:'0 0 auto', width:140}}>
                <A2Poster movie={m} w={140} h={196} accent={acc}/>
                <div style={{fontFamily:a2Fonts.mono, fontSize:8, letterSpacing:'.18em', color:A2.red, marginTop:6}}>
                  {m.year} · ★{m.starScore.toFixed(1)}
                </div>
                <div style={{fontFamily:a2Fonts.serif, fontSize:12, fontWeight:800, lineHeight:1.2, marginTop:2}}>
                  {m.title}
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <A2MFooterMini/>
      <A2MTabBar active="me"/>
    </div>
  );
}

Object.assign(window, { A2MHome, A2MArchive, A2MMovie, A2MDashboard });
