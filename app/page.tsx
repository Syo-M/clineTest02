'use client';

import { useState, useEffect, useMemo } from 'react';

// ============== PALETTE & FONTS (Direction A2 — Neon colorful + glitchy pictorial) ============

const A2 = {
    cream: '#F9F5EB',
    ink: '#191A2A',
    red: '#FF1744',
    redDeep: '#D00027',
    blue: '#00B0FF',
    cyan: '#18FFFF',
    lime: '#CCFF00',
    yellow: '#F9EA00',
    pink: '#FF80CC',
};

const a2Fonts = {
    sans: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif',
    serif: 'Georgia,"Times New Roman",serif',
    mono: '"Courier New",Courier,monospace',
    display: 'Impact,"Arial Black",sans-serif',
    monoDisplay: 'Impact,"Courier New",monospace',
    reggae: '"Comic Sans MS","Chalkboard SE",cursive',
};

// ============== MOVIES DATA ============

interface Movie {
    id: number;
    title: string;
    titleEn: string;
    year: string;
    country: string;
    director: string;
    directorEn: string;
    runtime: number;
    score: number;
    starScore: number;
    synopsis: string;
    quote: string;
    tagline: string;
    genres: string[];
}

const MOVIES: Movie[] = [
    {
        id: 1,
        title: 'THE ROOM',
        titleEn: 'THE ROOM',
        year: '2003',
        country: 'USA',
        director: 'Tommy Wiseau',
        directorEn: 'T. Wiseau',
        runtime: 99,
        score: 26,
        starScore: 1.4,
        synopsis:
            'ある銀行員のジェニーへの片想いが、裏切りと狂気へ――。「何が起きたのか、誰も知らない。」低予算・奇作・カルトの最高峰。',
        quote: '「私は在るの、ジョニー。」 / 「なぜそんなことを言うの、ダミアン？」',
        tagline: '「何が起きたのか、誰も知らない。」',
        genres: ['カルト', 'ドラマ', 'クランクイン'],
    },
    {
        id: 2,
        title: 'PLAN 9 FROM OUTER SPACE',
        titleEn: 'PLAN 9 FROM OUTER SPACE',
        year: '1959',
        country: 'USA',
        director: 'Ed Wood',
        directorEn: 'E. Wood',
        runtime: 79,
        score: 21,
        starScore: 1.6,
        synopsis:
            '宇宙からの脅威に対し、死者たち（幽霊俳優）が出撃する。実写とアニメの奇想な併せ。フィルム端の穴まで詩。',
        quote: '「この地球は、すでに死んだ者たちの手にかかった。」',
        tagline: '「死んだ者たちが、地球を守る。」',
        genres: ['SF', 'B級', 'CULT'],
    },
];

// ============== COLUMNS DATA ============

interface Column {
    id: number;
    title: string;
    subtitle: string;
    author: string;
    date: string;
}

const COLUMNS: Column[] = [
    {
        id: 1,
        title: 'なぜ「悪さ」は美しいのか',
        subtitle: '低予算が前衛へ転じる瞬間',
        author: 'DIR:B',
        date: '2026.05.14',
    },
    { id: 2, title: '映画が壊れる美意識', subtitle: '編集の破綻がもたらす余白', author: 'A2', date: '2026.05.11' },
    {
        id: 3,
        title: '悪役の美学：狂気の系譜',
        subtitle: '『THE ROOM』から『TROLL 2』へ',
        author: 'E',
        date: '2026.05.09',
    },
];

// ============== COMPONENTS ============

function Marquee({
    speed,
    bg,
    color,
    height,
    children,
}: {
    speed: number;
    bg: string;
    color: string;
    height: number;
    children: React.ReactNode;
}) {
    return (
        <div
            style={{
                background: bg,
                color,
                height,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                borderTop: `3px solid ${A2.ink}`,
                borderBottom: `3px solid ${A2.ink}`,
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
            }}
        >
            <div
                style={{
                    display: 'inline-flex',
                    animation: `marquee-${speed}s linear infinite`,
                }}
            >
                {children}
                <span style={{ minWidth: '200vw', display: 'inline-flex', justifyContent: 'center' }}>{children}</span>
            </div>
            <style>{`@keyframes marquee-${speed}s { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        </div>
    );
}

function A2Label({ color, children }: { color: string; children: React.ReactNode }) {
    return (
        <span
            style={{
                fontFamily: a2Fonts.mono,
                fontSize: 12,
                letterSpacing: '.22em',
                color,
                fontWeight: 700,
                textShadow: `1px 1px 0 ${A2.ink}40`,
            }}
        >
            {children}
        </span>
    );
}

function Sticker({
    bg,
    color,
    rotate,
    size,
    children,
}: {
    bg: string;
    color?: string;
    rotate?: number;
    size: number;
    children: React.ReactNode;
}) {
    return (
        <span
            style={{
                background: bg,
                color,
                padding: `6px ${size * 1.2}px`,
                fontFamily: a2Fonts.mono,
                fontSize: size,
                fontWeight: 700,
                letterSpacing: '.12em',
                border: `2.5px solid ${A2.ink}`,
                boxShadow: `3px 3px 0 ${A2.ink}`,
                transform: `rotate(${rotate || 0}deg)`,
                display: 'inline-block',
            }}
        >
            {children}
        </span>
    );
}

function Tape({ color, w, rotate, style }: { color: string; w: number; rotate?: number; style?: React.CSSProperties }) {
    return (
        <div
            style={{
                position: 'absolute',
                width: w,
                height: 18,
                background: color,
                opacity: 0.88,
                transform: `rotate(${rotate || 0}deg)`,
                ...style,
                borderLeft: `1px dashed ${A2.ink}40`,
                borderRight: `1px dashed ${A2.ink}40`,
            }}
        />
    );
}

function A2Poster({ movie, w, h, accent }: { movie: Movie; w: number; h: number; accent: string }) {
    return (
        <div
            style={{
                width: w,
                height: h,
                position: 'relative',
                border: `3px solid ${A2.ink}`,
                boxShadow: `4px 4px 0 ${A2.ink}`,
                overflow: 'hidden',
                background: accent,
            }}
        >
            {/* Placeholder poster art */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                }}
            >
                <div
                    style={{
                        fontFamily: a2Fonts.display,
                        fontSize: w * 0.12,
                        lineHeight: 0.95,
                        color: A2.ink,
                        textAlign: 'center',
                        textShadow: `2px 2px 0 ${accent}`,
                        fontWeight: 900,
                    }}
                >
                    {movie.title}
                </div>
                <div
                    style={{
                        fontFamily: a2Fonts.mono,
                        fontSize: w * 0.04,
                        letterSpacing: '.2em',
                        color: A2.ink,
                        marginTop: w * 0.08,
                        opacity: 0.8,
                    }}
                >
                    {movie.year}
                </div>
                {/* Glitch effect */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${A2.ink}10 2px, ${A2.ink}10 4px)`,
                        mixBlendMode: 'multiply',
                        pointerEvents: 'none',
                    }}
                />
            </div>
        </div>
    );
}

function Stamp({
    color,
    rotate,
    size,
    children,
    style,
}: {
    color: string;
    rotate?: number;
    size: number;
    children: React.ReactNode;
    style?: React.CSSProperties;
}) {
    return (
        <div
            style={{
                fontFamily: a2Fonts.mono,
                fontSize: size,
                fontWeight: 900,
                color,
                border: `3px solid ${color}`,
                padding: `4px 8px`,
                transform: `rotate(${rotate || 0}deg)`,
                lineHeight: 1,
                ...style,
            }}
        >
            {children}
        </div>
    );
}

function PostIt({
    bg,
    rotate,
    w,
    children,
    style,
}: {
    bg: string;
    rotate?: number;
    w: number;
    children: React.ReactNode;
    style?: React.CSSProperties;
}) {
    return (
        <div
            style={{
                width: w,
                background: bg,
                padding: '16px 14px 14px',
                fontFamily: a2Fonts.serif,
                fontStyle: 'italic',
                fontSize: 13,
                lineHeight: 1.5,
                boxShadow: '2px 2px 6px rgba(0,0,0,.15)',
                transform: `rotate(${rotate || 0}deg)`,
                position: 'relative',
                ...style,
            }}
        >
            {children}
            <div
                style={{
                    position: 'absolute',
                    top: -8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 20,
                    height: 12,
                    background: 'rgba(0,0,0,.1)',
                }}
            />
        </div>
    );
}

function ColorBars({
    height,
    color,
    count,
    style,
}: {
    height?: number;
    color?: string;
    count?: number;
    style?: React.CSSProperties;
}) {
    const bars = Array.from({ length: count || 50 }, (_, i) => ({
        width: '2%',
        background: [A2.red, A2.yellow, A2.blue, A2.cyan, A2.lime, A2.pink][i % 6],
        opacity: 0.9,
    }));
    return (
        <div style={{ height: height || 6, display: 'flex', ...style }}>
            {bars.map((b, i) => (
                <div key={i} style={{ ...b, flex: 1 }} />
            ))}
        </div>
    );
}

function BarcodeStrip({
    height,
    color,
    count,
    style,
}: {
    height?: number;
    color?: string;
    count?: number;
    style?: React.CSSProperties;
}) {
    return (
        <div
            style={{
                display: 'flex',
                height: height || 28,
                width: '100%',
                ...style,
            }}
        >
            {Array.from({ length: count || 40 }, (_, i) => (
                <div
                    key={i}
                    style={{
                        flex: i % 3 === 0 ? 3 : 1,
                        background: i % 2 === 0 ? color || A2.cream : 'transparent',
                        borderRight: `1px solid ${color || A2.cream}40`,
                    }}
                />
            ))}
        </div>
    );
}

function HalftoneSquare({
    width,
    height,
    color,
    density,
    dot,
    style,
}: {
    width: string;
    height: string;
    color: string;
    density: number;
    dot: number;
    style?: React.CSSProperties;
}) {
    return (
        <svg
            width={width}
            height={height}
            style={{ ...style, filter: 'contrast(1.2)' }}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <pattern id="halftone" width={density} height={density} patternUnits="userSpaceOnUse">
                    <circle cx={density / 2} cy={density / 2} r={dot} fill={color} />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#halftone)" />
        </svg>
    );
}

function GrainOverlay({ opacity }: { opacity: number }) {
    return (
        <div
            style={{
                position: 'absolute',
                inset: 0,
                opacity,
                pointerEvents: 'none',
                zIndex: 1,
                background:
                    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
                mixBlendMode: 'overlay',
            }}
        />
    );
}

const useDeadPixels = (count: number) => {
    const [pixels] = useState(() => generatePixels(count));
    return pixels;
};

function DeadPixels({ count, opacity }: { count: number; opacity: number }) {
    const pixels = useDeadPixels(count);

    return (
        <div style={{ position: 'absolute', inset: 0, opacity, pointerEvents: 'none', zIndex: 2 }}>
            {pixels.map((p) => (
                <div
                    key={p.id}
                    style={{
                        position: 'absolute',
                        left: p.left,
                        top: p.top,
                        width: p.width,
                        height: p.height,
                        background: p.background,
                    }}
                />
            ))}
        </div>
    );
}

function generatePixels(count: number) {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${1 + Math.random() * 3}px`,
        height: `${1 + Math.random() * 3}px`,
        background: i % 3 === 0 ? '#fff' : '#000',
    }));
}

function SignalNoise({ opacity }: { opacity: number }) {
    return (
        <div
            style={{
                position: 'absolute',
                inset: 0,
                opacity,
                pointerEvents: 'none',
                background: `repeating-linear-gradient(90deg, transparent, transparent 10px, ${A2.cyan}15 10px, ${A2.cyan}15 11px)`,
            }}
        />
    );
}

function ScribbleCircle({ color, w, h, style }: { color: string; w: number; h: number; style?: React.CSSProperties }) {
    return (
        <svg
            width={w}
            height={h}
            style={{ ...style, position: 'absolute', pointerEvents: 'none' }}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={`M${w * 0.1},${h * 0.5} Q${w * 0.3},${h * 0.1} ${w * 0.5},${h * 0.5} Q${w * 0.7},${h * 0.9} ${w * 0.9},${h * 0.5}`}
                fill="none"
                stroke={color}
                strokeWidth={4}
                strokeDasharray="8 4"
                strokeLinecap="round"
            />
        </svg>
    );
}

function ScribbleArrow({ color, w, h, style }: { color: string; w: number; h: number; style?: React.CSSProperties }) {
    return (
        <svg
            width={w}
            height={h}
            style={{ ...style, position: 'absolute', pointerEvents: 'none' }}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={`M0,${h * 0.5} L${w * 0.7},${h * 0.5} L${w * 0.5},${h * 0.2} M${w * 0.7},${h * 0.5} L${w * 0.5},${h * 0.8}`}
                fill="none"
                stroke={color}
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ScribbleUnderline({ color, width, style }: { color: string; width: number; style?: React.CSSProperties }) {
    return (
        <svg
            width={width}
            height={8}
            style={{ ...style, position: 'absolute', pointerEvents: 'none' }}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={`M0,4 Q${width * 0.25},0 ${width * 0.5},4 Q${width * 0.75},8 ${width},4`}
                fill="none"
                stroke={color}
                strokeWidth={3}
                strokeLinecap="round"
            />
        </svg>
    );
}

function RisoHeadline({
    size,
    color,
    ghost1,
    ghost2,
    children,
}: {
    size: number;
    color: string;
    ghost1?: string;
    ghost2?: string;
    children: React.ReactNode;
}) {
    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            {ghost1 && (
                <span
                    style={{
                        position: 'absolute',
                        inset: 0,
                        fontFamily: a2Fonts.display,
                        fontSize: size,
                        lineHeight: 0.95,
                        color: ghost1,
                        transform: 'translate(-4px, 3px)',
                        opacity: 0.5,
                        pointerEvents: 'none',
                    }}
                >
                    {children}
                </span>
            )}
            {ghost2 && (
                <span
                    style={{
                        position: 'absolute',
                        inset: 0,
                        fontFamily: a2Fonts.display,
                        fontSize: size,
                        lineHeight: 0.95,
                        color: ghost2,
                        transform: 'translate(4px, -3px)',
                        opacity: 0.5,
                        pointerEvents: 'none',
                    }}
                >
                    {children}
                </span>
            )}
            <span
                style={{
                    fontFamily: a2Fonts.display,
                    fontSize: size,
                    lineHeight: 0.95,
                    color,
                    textShadow: `2px 2px 0 ${A2.ink}`,
                }}
            >
                {children}
            </span>
        </div>
    );
}

function ChromaText({
    size,
    font,
    color,
    shift,
    children,
}: {
    size: number;
    font: string;
    color: string;
    shift?: number;
    children: React.ReactNode;
}) {
    const s = shift || 2;
    return (
        <span style={{ position: 'relative', display: 'inline-block' }}>
            <span
                style={{
                    position: 'absolute',
                    inset: 0,
                    color: A2.blue,
                    transform: `translate(-${s}px, 0)`,
                    opacity: 0.6,
                    pointerEvents: 'none',
                    fontFamily: font,
                    fontSize: size,
                    lineHeight: 0.95,
                }}
            >
                {children}
            </span>
            <span
                style={{
                    position: 'absolute',
                    inset: 0,
                    color: A2.yellow,
                    transform: `translate(${s}px, 0)`,
                    opacity: 0.6,
                    pointerEvents: 'none',
                    fontFamily: font,
                    fontSize: size,
                    lineHeight: 0.95,
                }}
            >
                {children}
            </span>
            <span style={{ fontFamily: font, fontSize: size, lineHeight: 0.95, color }}>{children}</span>
        </span>
    );
}

function A2Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pages = [
        { label: 'HOME', to: '#home' },
        { label: 'ARCHIVE', to: '#archive' },
        { label: 'MOVIE', to: '#movie' },
    ];
    return (
        <nav
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 10,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 32px',
                background: A2.red,
                borderBottom: `3px solid ${A2.ink}`,
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div
                    style={{
                        fontFamily: a2Fonts.mono,
                        fontSize: 14,
                        letterSpacing: '.2em',
                        color: A2.cream,
                        borderBottom: `2px solid ${A2.yellow}`,
                        paddingBottom: 2,
                    }}
                >
                    A2.ARCHIVE
                </div>
            </div>
            {/* Desktop nav */}
            <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                {pages.map((p) => (
                    <a
                        key={p.label}
                        href={p.to}
                        style={{
                            fontFamily: a2Fonts.mono,
                            fontSize: 11,
                            letterSpacing: '.2em',
                            color: A2.cream,
                            textDecoration: 'none',
                            borderBottom: `2px solid transparent`,
                            paddingBottom: 2,
                            transition: 'border-color .2s',
                        }}
                    >
                        {p.label}
                    </a>
                ))}
            </div>
            {/* Mobile hamburger */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                    display: 'none', // hide on desktop, show on mobile via media queries
                    background: 'none',
                    border: `2px solid ${A2.cream}`,
                    color: A2.cream,
                    padding: '6px 10px',
                    cursor: 'pointer',
                    fontFamily: a2Fonts.mono,
                    fontSize: 16,
                }}
            >
                {menuOpen ? '✕' : '☰'}
            </button>
        </nav>
    );
}

function A2Footer() {
    return (
        <footer
            style={{
                padding: '32px',
                borderTop: `3px solid ${A2.ink}`,
                background: A2.ink,
                color: A2.cream,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <div style={{ fontFamily: a2Fonts.mono, fontSize: 10, letterSpacing: '.2em', opacity: 0.6 }}>
                © 2026 A2.ARCHIVE — 駄作は美しく、異端は光る。
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
                <a
                    href="#"
                    style={{ color: A2.yellow, fontFamily: a2Fonts.mono, fontSize: 11, textDecoration: 'none' }}
                >
                    INSTAGRAM
                </a>
                <a href="#" style={{ color: A2.cyan, fontFamily: a2Fonts.mono, fontSize: 11, textDecoration: 'none' }}>
                    TWITTER
                </a>
                <a href="#" style={{ color: A2.pink, fontFamily: a2Fonts.mono, fontSize: 11, textDecoration: 'none' }}>
                    BLURB
                </a>
            </div>
        </footer>
    );
}

// ============== MAIN PAGE (HOME) ============

const featured = MOVIES[0];
const second = MOVIES[1];

export default function Home() {
    return (
        <div
            style={{
                width: '100%',
                minHeight: '100vh',
                background: A2.red,
                color: A2.cream,
                fontFamily: a2Fonts.sans,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <GrainOverlay opacity={0.16} />
            <DeadPixels count={40} opacity={0.55} />
            <A2Nav />

            {/* HERO */}
            <section style={{ padding: '80px 32px 56px', position: 'relative', overflow: 'hidden' }}>
                <ColorBars height={8} style={{ marginBottom: 32, opacity: 0.9 }} />
                <SignalNoise opacity={0.6} />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        position: 'relative',
                    }}
                >
                    <div>
                        <A2Label color={A2.yellow}>NEW UPDATE — 05.16 / 2026</A2Label>
                        <RisoHeadline size={160} color={A2.cream} ghost1={A2.blue} ghost2={A2.yellow}>
                            駄作は
                            <br />
                            美しく、
                            <br />
                            <ChromaText size={160} font={a2Fonts.display} color={A2.cream} shift={4}>
                                異端は光る
                            </ChromaText>
                            。
                        </RisoHeadline>
                        <div
                            style={{
                                fontFamily: a2Fonts.mono,
                                fontSize: 13,
                                letterSpacing: '.22em',
                                color: A2.cream,
                                marginTop: 16,
                                background: A2.ink,
                                display: 'inline-block',
                                padding: '8px 16px',
                                borderLeft: `4px solid ${A2.yellow}`,
                            }}
                        >
                            低予算・B級・カルト映画のアーカイブ。悪さを愛する者だけのコレクション。
                        </div>
                        <div style={{ display: 'flex', gap: 16, marginTop: 28, alignItems: 'center' }}>
                            <button
                                style={{
                                    background: A2.yellow,
                                    color: A2.ink,
                                    border: `3px solid ${A2.ink}`,
                                    padding: '14px 24px',
                                    fontFamily: a2Fonts.display,
                                    fontSize: 20,
                                    cursor: 'pointer',
                                    boxShadow: `6px 6px 0 ${A2.ink}`,
                                }}
                            >
                                archives を覗く →
                            </button>
                            <Sticker bg={A2.blue} color={A2.cream} rotate={-4} size={10}>
                                B-CLASSIFIED
                            </Sticker>
                        </div>
                    </div>
                    <div style={{ textAlign: 'right', position: 'relative' }}>
                        <Sticker bg={A2.redDeep} color={A2.cream} rotate={6} size={10}>
                            CULT
                        </Sticker>
                        <Sticker bg={A2.lime} rotate={-3} size={10}>
                            TROLL 2
                        </Sticker>
                        <div style={{ marginTop: 16, position: 'relative' }}>
                            <A2Poster movie={featured} w={280} h={396} accent={A2.yellow} />
                            <Tape color={A2.cyan} w={80} rotate={-8} style={{ top: -10, left: 10, zIndex: 3 }} />
                            <Stamp
                                color={A2.yellow}
                                rotate={-12}
                                size={10}
                                style={{ position: 'absolute', bottom: 8, left: -16, background: A2.cream, zIndex: 4 }}
                            >
                                ★{featured.starScore.toFixed(1)}
                            </Stamp>
                        </div>
                        <div
                            style={{
                                fontFamily: a2Fonts.mono,
                                fontSize: 11,
                                letterSpacing: '.2em',
                                color: A2.cream,
                                marginTop: 12,
                                opacity: 0.7,
                            }}
                        >
                            {featured.title} / {featured.year}
                        </div>
                    </div>
                </div>
            </section>

            {/* MARQUEE */}
            <Marquee speed={26} bg={A2.yellow} color={A2.ink} height={52}>
                <span style={{ padding: '0 18px' }}>
                    ★1.4/5 · Z級 · CULT · 駄作 · 異端 · TROLL 2 · PLAN 9 · THE ROOM · ★ NO REFUNDS ★{' '}
                </span>
            </Marquee>

            {/* FEATURE 01 */}
            <section
                style={{
                    padding: '56px 32px',
                    background: A2.cream,
                    color: A2.ink,
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <HalftoneSquare
                    width="100%"
                    height="100%"
                    color={`${A2.red}40`}
                    density={6}
                    dot={1.2}
                    style={{ position: 'absolute', inset: 0, opacity: 0.45, pointerEvents: 'none' }}
                />
                <div style={{ position: 'relative' }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            justifyContent: 'space-between',
                            marginBottom: 24,
                        }}
                    >
                        <A2Label color={A2.red}>FEATURED — 01 / 異端の聖典</A2Label>
                        <div style={{ display: 'flex', gap: 8 }}>
                            <Sticker bg={A2.blue} color={A2.cream} rotate={-3} size={10}>
                                BANNED IN BIRMINGHAM
                            </Sticker>
                            <Sticker bg={A2.lime} rotate={3} size={10}>
                                CULT
                            </Sticker>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '480px 1fr', gap: 48, alignItems: 'start' }}>
                        <div style={{ position: 'relative' }}>
                            <Tape color={A2.blue} w={120} rotate={-8} style={{ top: -12, left: -20, zIndex: 3 }} />
                            <Tape color={A2.yellow} w={100} rotate={6} style={{ top: -12, right: -10, zIndex: 3 }} />
                            <A2Poster movie={featured} w={480} h={680} accent={A2.blue} />
                            <Stamp
                                color={A2.red}
                                rotate={-14}
                                size={20}
                                style={{ position: 'absolute', bottom: 30, left: -30, background: A2.cream, zIndex: 4 }}
                            >
                                RATED Z
                            </Stamp>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div
                                style={{
                                    fontFamily: a2Fonts.mono,
                                    fontSize: 11,
                                    letterSpacing: '.2em',
                                    color: A2.red,
                                    marginBottom: 14,
                                }}
                            >
                                {featured.year} / {featured.country} / {featured.runtime}分 / DIR: {featured.director}
                            </div>
                            <h2
                                style={{
                                    fontFamily: a2Fonts.display,
                                    fontSize: 80,
                                    lineHeight: 0.92,
                                    margin: '0 0 8px',
                                    letterSpacing: '-.03em',
                                    color: A2.ink,
                                    position: 'relative',
                                }}
                            >
                                {featured.title}
                                <ScribbleCircle
                                    color={A2.blue}
                                    w={400}
                                    h={160}
                                    style={{ top: -40, left: -40, zIndex: -1 }}
                                />
                            </h2>
                            <div
                                style={{
                                    fontFamily: a2Fonts.monoDisplay,
                                    fontSize: 13,
                                    letterSpacing: '.2em',
                                    color: A2.redDeep,
                                    marginBottom: 24,
                                }}
                            >
                                {featured.titleEn}
                            </div>

                            {/* big score */}
                            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24, margin: '24px 0 32px' }}>
                                <div>
                                    <div
                                        style={{
                                            fontFamily: a2Fonts.mono,
                                            fontSize: 10,
                                            letterSpacing: '.25em',
                                            color: A2.ink,
                                            marginBottom: 4,
                                        }}
                                    >
                                        AUDIENCE SCORE
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: a2Fonts.display,
                                            fontSize: 172,
                                            lineHeight: 0.78,
                                            color: A2.red,
                                        }}
                                    >
                                        {featured.score.toFixed(0).padStart(2, '0')}
                                        <span style={{ fontSize: 48, color: A2.ink }}>/100</span>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        background: A2.yellow,
                                        color: A2.ink,
                                        padding: '14px 18px',
                                        border: `3px solid ${A2.ink}`,
                                        boxShadow: `5px 5px 0 0 ${A2.ink}`,
                                        transform: 'rotate(-3deg)',
                                        marginLeft: 14,
                                        marginBottom: 32,
                                    }}
                                >
                                    <div style={{ fontFamily: a2Fonts.mono, fontSize: 10, letterSpacing: '.2em' }}>
                                        STAR
                                    </div>
                                    <div style={{ fontFamily: a2Fonts.display, fontSize: 48, lineHeight: 1 }}>
                                        ★{featured.starScore.toFixed(1)}
                                    </div>
                                </div>
                                <ScribbleArrow
                                    color={A2.red}
                                    w={120}
                                    h={70}
                                    style={{ position: 'absolute', left: 0, top: -50, transform: 'rotate(-20deg)' }}
                                />
                            </div>

                            <div
                                style={{
                                    fontFamily: a2Fonts.serif,
                                    fontSize: 18,
                                    lineHeight: 1.85,
                                    fontWeight: 500,
                                    marginBottom: 24,
                                    maxWidth: 560,
                                }}
                            >
                                {featured.synopsis}
                            </div>
                            <div
                                style={{
                                    background: A2.ink,
                                    color: A2.cream,
                                    padding: '14px 18px',
                                    borderLeft: `6px solid ${A2.yellow}`,
                                    fontFamily: a2Fonts.serif,
                                    fontStyle: 'italic',
                                    fontSize: 18,
                                    fontWeight: 500,
                                    lineHeight: 1.6,
                                    transform: 'rotate(-.5deg)',
                                }}
                            >
                                {featured.quote}
                            </div>
                            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 18 }}>
                                {featured.genres.map((g, i) => (
                                    <Sticker
                                        key={g}
                                        bg={[A2.blue, A2.lime, A2.pink][i % 3]}
                                        color={i === 0 ? A2.cream : A2.ink}
                                        rotate={[-2, 3, -1][i % 3]}
                                        size={11}
                                    >
                                        #{g}
                                    </Sticker>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURE 02 */}
            <section style={{ padding: '56px 32px', position: 'relative' }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        marginBottom: 24,
                    }}
                >
                    <A2Label color={A2.yellow}>FEATURED — 02 / 駄作の中の親愛</A2Label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                        <Sticker bg={A2.pink} rotate={4} size={10}>
                            MIDNIGHT FAVE
                        </Sticker>
                        <Sticker bg={A2.lime} rotate={-3} size={10}>
                            SPOON THROWING ALLOWED
                        </Sticker>
                    </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 48 }}>
                    <div>
                        <RisoHeadline size={108} color={A2.cream} ghost1={A2.blue} ghost2={A2.yellow}>
                            {second.title}
                        </RisoHeadline>
                        <div
                            style={{
                                fontFamily: a2Fonts.mono,
                                fontSize: 13,
                                letterSpacing: '.2em',
                                color: A2.cream,
                                marginTop: 14,
                            }}
                        >
                            {second.year} · {second.directorEn} · ★{second.starScore.toFixed(1)}/5
                        </div>
                        <div
                            style={{
                                fontFamily: a2Fonts.serif,
                                fontSize: 17,
                                lineHeight: 1.85,
                                fontWeight: 500,
                                marginTop: 24,
                                maxWidth: 560,
                                color: A2.cream,
                            }}
                        >
                            {second.synopsis}
                        </div>
                        <div
                            style={{
                                fontFamily: a2Fonts.reggae,
                                fontSize: 36,
                                marginTop: 24,
                                color: A2.yellow,
                                lineHeight: 1.2,
                            }}
                        >
                            「{second.quote.replace(/[「」！]/g, '')}！」
                        </div>
                        <div style={{ display: 'flex', gap: 12, marginTop: 28, alignItems: 'center' }}>
                            <button
                                style={{
                                    background: A2.yellow,
                                    color: A2.ink,
                                    border: `3px solid ${A2.ink}`,
                                    padding: '12px 20px',
                                    fontFamily: a2Fonts.display,
                                    fontSize: 18,
                                    cursor: 'pointer',
                                    boxShadow: `5px 5px 0 ${A2.ink}`,
                                }}
                            >
                                ▶ 詳細を観る
                            </button>
                            <Sticker bg={A2.cream} rotate={-4} size={11}>
                                EP-002
                            </Sticker>
                        </div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <Tape color={A2.lime} w={130} rotate={5} style={{ top: -10, left: -15, zIndex: 3 }} />
                        <A2Poster movie={second} w={380} h={520} accent={A2.pink} />
                        <PostIt
                            bg={A2.yellow}
                            rotate={-6}
                            w={150}
                            style={{ position: 'absolute', bottom: -30, right: -40, zIndex: 4 }}
                        >
                            「製作費600万ドルの出所が、今もって、不明である。」
                        </PostIt>
                    </div>
                </div>
            </section>

            <Marquee speed={28} bg={A2.blue} color={A2.cream} height={44}>
                <span style={{ padding: '0 18px' }}>★ NEW UPDATE WEDNESDAY 00:00 ★ NEW UPDATE WEDNESDAY 00:00 ★ </span>
            </Marquee>

            {/* INDEX grid */}
            <section
                style={{
                    padding: '64px 32px',
                    background: A2.cream,
                    color: A2.ink,
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        marginBottom: 32,
                    }}
                >
                    <div>
                        <A2Label color={A2.blue}>INDEX — RECENT ENTRIES</A2Label>
                        <div
                            style={{
                                fontFamily: a2Fonts.display,
                                fontSize: 84,
                                lineHeight: 0.95,
                                marginTop: 8,
                                color: A2.ink,
                                position: 'relative',
                            }}
                        >
                            近影
                            <ScribbleUnderline
                                color={A2.red}
                                width={220}
                                style={{ position: 'absolute', bottom: -12, left: 0 }}
                            />
                        </div>
                    </div>
                    <a
                        href="#archive"
                        style={{
                            background: A2.ink,
                            color: A2.cream,
                            padding: '10px 16px',
                            textDecoration: 'none',
                            fontFamily: a2Fonts.mono,
                            fontSize: 12,
                            letterSpacing: '.2em',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 8,
                        }}
                    >
                        ALL ARCHIVE
                        <ScribbleArrow color={A2.yellow} w={36} h={20} />
                    </a>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32, marginTop: 24 }}>
                    {MOVIES.map((m, i) => (
                        <div
                            key={m.id}
                            style={{ position: 'relative', transform: i === 0 ? 'rotate(-1deg)' : 'rotate(1deg)' }}
                        >
                            <Tape
                                color={[A2.blue, A2.yellow][i]}
                                w={70}
                                rotate={[8, -6][i]}
                                style={{ top: -10, right: 30, zIndex: 3 }}
                            />
                            <A2Poster movie={m} w={240} h={340} accent={[A2.blue, A2.yellow][i]} />
                            <div
                                style={{
                                    fontFamily: a2Fonts.mono,
                                    fontSize: 10,
                                    letterSpacing: '.2em',
                                    color: A2.red,
                                    marginTop: 12,
                                }}
                            >
                                {m.year} · ★{m.starScore.toFixed(1)}
                            </div>
                            <div
                                style={{
                                    fontFamily: a2Fonts.serif,
                                    fontSize: 24,
                                    fontWeight: 800,
                                    lineHeight: 1.3,
                                    marginTop: 4,
                                    color: A2.ink,
                                }}
                            >
                                {m.title}
                            </div>
                            <div
                                style={{
                                    fontFamily: a2Fonts.serif,
                                    fontSize: 14,
                                    lineHeight: 1.65,
                                    marginTop: 6,
                                    color: A2.ink,
                                    opacity: 0.75,
                                }}
                            >
                                {m.tagline}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* COLUMN PROMO */}
            <section
                style={{
                    padding: '64px 32px',
                    background: A2.ink,
                    color: A2.cream,
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <HalftoneSquare
                    width="100%"
                    height="100%"
                    color={`${A2.red}80`}
                    density={5}
                    dot={1.2}
                    style={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }}
                />
                <div style={{ position: 'relative' }}>
                    <A2Label color={A2.yellow}>EDITORIAL</A2Label>
                    <h3
                        style={{
                            fontFamily: a2Fonts.display,
                            fontSize: 72,
                            lineHeight: 0.95,
                            margin: '12px 0 24px',
                            color: A2.cream,
                        }}
                    >
                        新着エディトリアル
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
                        {COLUMNS.map((c, i) => (
                            <article
                                key={c.id}
                                style={{ borderLeft: `3px solid ${[A2.lime, A2.pink, A2.yellow][i]}`, paddingLeft: 18 }}
                            >
                                <div
                                    style={{
                                        fontFamily: a2Fonts.mono,
                                        fontSize: 10,
                                        letterSpacing: '.25em',
                                        color: [A2.lime, A2.pink, A2.yellow][i],
                                    }}
                                >
                                    {c.author} · {c.date}
                                </div>
                                <h4
                                    style={{
                                        fontFamily: a2Fonts.serif,
                                        fontWeight: 800,
                                        fontSize: 22,
                                        lineHeight: 1.3,
                                        margin: '10px 0 8px',
                                    }}
                                >
                                    {c.title}
                                </h4>
                                <div
                                    style={{
                                        fontFamily: a2Fonts.serif,
                                        fontSize: 13,
                                        lineHeight: 1.7,
                                        color: `${A2.cream}aa`,
                                    }}
                                >
                                    {c.subtitle}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <A2Footer />
        </div>
    );
}
