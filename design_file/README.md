# Handoff: 異端 — Z級映画紹介サイト

## Overview

「異端 (ITAN)」は、Z級映画・カルト映画・低評価映画を専門に扱う独立メディアサイトです。**王道から外れた映画群の魅力を、ただ嘲笑するのではなく、その逸脱の中に宿る抗いがたい魅力を記録するアーカイブ**として設計されています。

採用されたデザイン方向は **Direction A v2 · RED EDITORIAL / CRASH EDITION** — 朱赤メインカラー＋4色補色アクセント、雑誌的グリッド崩し、スクラップブック的乱雑、リソグラフ印刷の誤点装、VHS/グリッチノイズ、ステッカー・マスキングテープ・ポストイットの散布で「ごちゃっとした熱量」を表現する Web ブルータリズム + Editorial の折衷。

## About the Design Files

この `source/` フォルダ内のファイルは、Babel-in-browser ＋ React 18 で動作する **HTML プロトタイプ用の JSX 参照デザインファイル**です。これらは見た目と挙動の意図を示す「設計図」であり、本番コードとしてそのまま使用するものではありません。

**実装タスクは、これらの HTML 参照デザインを、ターゲットコードベースの既存環境（Next.js / Remix / SvelteKit / Astro 等）で、その環境の確立されたパターンとライブラリを使って再現することです。** まだ環境が存在しない場合は、プロジェクトに最も適したフレームワークを選んでそこで実装してください。

ファイル分割について:
- `direction-a2-desktop.jsx` — デスクトップ4画面（TOP / ARCHIVE / MOVIE DETAIL / DASHBOARD）+ 共通クロム + クラッタコンポーネント
- `direction-a2-mobile.jsx` — モバイル4画面（同上）+ モバイル専用クロム（TabBar 等）
- `shared.jsx` — 映画データ、テクスチャ／ノイズコンポーネント
- `ios-frame.jsx` — モバイルプレビュー用 iPhone フレーム（実装時は **不要**、デザイン確認のためだけのもの）

## Fidelity

**High-fidelity (hifi)** です。最終的な配色・タイポグラフィ・余白・ステッカー位置・回転角度まで決定済みです。ピクセル単位で再現してください — ただし、ステッカーや回転、紙のテクスチャは「演出としての乱雑さ」を狙ったものなので、若干のランダム性／揺らぎは保ったまま実装してください（むしろ完璧に整列させると意図が損なわれます）。

## 推奨技術スタック

特に指定がなければ、以下を推奨します:

- **Next.js 16+ (App Router)** または **Remix**
- **TypeScript**
- **Tailwind CSS v4+** (アクセントカラーをカスタム設定で追加)
- 状態管理: **Zustand** または React Context（ダッシュボードのコレクション管理用）
- フォント: **next/font** で Google Fonts プリロード
- API: TMDB (The Movie Database) API or OMDb API — 映画データ取得用
- 認証: NextAuth.js / Clerk / Supabase Auth — ダッシュボードログイン用

---

## Design Tokens

### Colors

```ts
// tokens/colors.ts
export const colors = {
  // Primary
  red:      '#d72a1e',  // メインカラー、画面の主要面積
  redDeep:  '#9b1a14',  // 赤の深い層、ログインバー、breadcrumb 背景
  ink:      '#0f0c08',  // テキスト、枠線、影、フッター、暗いセクション
  cream:    '#f5f1e8',  // 紙面、カード、明るいセクション
  paper:    '#ede7d8',  // クリームの一段暗いバリエーション
  
  // Accents (補色アクセント — 4色)
  blue:     '#1c47ff',  // コバルト青
  yellow:   '#ffe000',  // 電光黄
  lime:     '#c8ff2c',  // ライム
  pink:     '#ff66a0',  // ホットピンク
  
  // Muted
  muted:    'rgba(255,255,255,0.65)',
} as const;
```

**配色ルール:**
- 朱赤(red)を背景の主面積に置き、補色4色はステッカー／ハイライト／カード差し色として点在させる
- インク(ink #0f0c08)は純黒ではなく、ほんの少しブラウン寄り(R:15 G:12 B:8)
- 補色アクセントはランダムにではなく、`[blue, yellow, pink, lime]` の順でローテーション（コードに繰り返し登場するパターン）

### Typography

```ts
// tokens/fonts.ts
export const fonts = {
  display:      "'Dela Gothic One', sans-serif",       // 大見出し、超極太ゴシック
  serif:        "'Shippori Mincho B1', serif",          // 本文セリフ、引用、tagline
  serifAlt:     "'Zen Old Mincho', serif",              // 縦組み補助
  sans:         "'Zen Kaku Gothic New', sans-serif",    // UI、ナビ
  mono:         "'JetBrains Mono', monospace",          // メタ情報、SCORE/100、日付
  monoDisplay:  "'Major Mono Display', monospace",      // 全角英ラベル（上品な強調）
  reggae:       "'Reggae One', cursive",                // 手書き風、ポストイット、引用台詞
  dot:          "'DotGothic16', sans-serif",            // ピクセルフォント（オプション）
};
```

Google Fonts URL:
```
https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Reggae+One&family=Shippori+Mincho+B1:wght@400;500;700;800&family=Zen+Old+Mincho:wght@400;700;900&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&family=DotGothic16&family=JetBrains+Mono:wght@400;700;800&family=Major+Mono+Display&display=swap
```

**サイズスケール (デスクトップ):**
- Hero見出し: `148–172px` / lineHeight `.88–.92` / letterSpacing `-.03em〜-.04em` (display)
- セクション見出し: `72–108px` / lineHeight `.92–1.05` (display または serif italic 800)
- カード見出し: `24–36px` / lineHeight `1.1–1.25` (serif 800 または display)
- 本文: `16–17px` / lineHeight `1.85–1.95` / fontWeight `500` (serif)
- ラベル: `10–11px` / letterSpacing `.20–.30em` / uppercase (monoDisplay or mono)
- データ表示: `11–13px` / letterSpacing `.15–.22em` (mono)
- 巨大スコア: `220–300px` / lineHeight `.78–.82` (display)

**モバイル時はスケールを概ね 50–60% に縮小:**
- Hero: `56–88px`
- セクション見出し: `32–48px`
- 本文: `13–15px`

### Spacing

セクション間: `40–72px`
カード間: `16–32px`
カード内パディング: `12–24px`
コンテンツの左右余白: デスクトップ `32px` / モバイル `16px`

### Border / Shadow

ブロック化された箱状の要素には次の組み合わせを徹底:
- `border: 2.5–3px solid #0f0c08` (太い黒枠)
- `box-shadow: 4px 4px 0 0 #0f0c08` 〜 `8px 8px 0 0 #0f0c08` (ハードな黒影、ブラー無し)
- 角丸は **ゼロ**（rounded corners は使わない — ブルータリズムの基本）
- `transform: rotate(-1deg〜2deg)` で微回転（剛直さを崩す）

---

## クラッタコンポーネント (Clutter Components)

「ごちゃっとした熱量」を作る再利用コンポーネント群。`direction-a2-desktop.jsx` 内に定義されています。実装時は別ファイル `components/clutter/` に切り出してください。

### `<RisoHeadline>`
リソグラフ印刷の誤点装を再現する大見出し。
- 同じテキストを3回重ね、青／黄のゴーストを `mixBlendMode: screen / multiply` でオフセット
- 引数: `{ children, size, color, ghost1, ghost2, font }`
- 用法: `<RisoHeadline size={172} color={cream} ghost1={yellow} ghost2={blue}>史上最悪</RisoHeadline>`

### `<ChromaText>`
RGB分離の `text-shadow` テキスト（簡易グリッチ）。

### `<Sticker>`
回転した正方形ステッカー。`bg`色＋`color`色＋`rotate`角度。`box-shadow: 4px 4px 0 ink` でハード影。

### `<Stamp>`
ゴム判子風（半透明、極太枠、回転、letterspacing大）。`RATED Z` `NOT FOR SQUARES` 等。

### `<PostIt>`
ポストイット風メモ。背景色付き、手書き Reggae One フォント。微回転。

### `<Tape>`
マスキングテープ。横方向の帯（color, w, rotate）。背景に 5px ストライプの`repeating-linear-gradient` で布の質感。`opacity: .85`。

### `<ScribbleUnderline>` / `<ScribbleCircle>` / `<ScribbleArrow>`
SVG で描いた手書き感の下線・○囲み・矢印。見出しや要素を「指し示す」。

### `<A2Poster>`
映画ポスタープレースホルダー。
- 内部に `<PosterPlaceholder>` を埋め、リソカラーオーバーレイ + ハーフトーンドット + 角の glitch バーを追加
- 本番では TMDB から取得した実画像に差し替え、それでも上のオーバーレイ群は維持（質感）
- 引数: `{ movie, w, h, accent }`

---

## ノイズ／グリッチコンポーネント (Texture Components)

`shared.jsx` で定義。**全画面の主要セクションで常時オンにする**（消すと意図が薄れる）。

### `<GrainOverlay>`
SVG fractalNoise を使った粒子状ノイズ。各画面のトップで `opacity: 0.13–0.20` で全面に。

### `<SignalNoise>`
スキャンライン＋色違いティアバー6本（青/黄/赤がランダム位置で水平に走る）。主要セクション内で `opacity: .5–.7` で。

### `<DeadPixels>`
散布された5x色のデッドピクセル（毎ピクセル決定的座標）。`mixBlendMode: screen` で。

### `<VHSScanlines>`
水平スキャンライン（モバイル時の暗いセクションで併用）。

### `<HalftoneSquare>`
radial-gradient のドット網点（density / dot サイズ可変）。深い赤の上に黒ドット、紙面の質感に。

### `<ColorBars>`
TVカラーバー（白・黄・シアン・緑・マゼンタ・青・赤・黒の8色帯）。カードのアクセントヘッダーや「NOW PLAYING」ブロック上部の数pxストライプとして。

### `<BarcodeStrip>`
装飾用バーコード。ARCHIVE ヘッダー右下、メタ情報のあしらいに。

### `<Marquee>`
水平に流れるマーキー文字列。`bg / color / speed / height` 可変。Hero と Hero の間のセパレーター的に使う。

---

## 共通クロム

### `<A2Nav>` (Desktop)
- 上段に黒の `meta strip` (VOL.07 / LIVE / SUBSCRIBE) — fontSize 10px / letterSpacing .25em / mono
- 下段に grid `auto 1fr auto` で **ロゴ（RisoHeadline "異端" 42px）／中央ナビ／右側 REC バッジ**
- 下に `3px solid ink` ボーダー

ナビメニュー: `ARCHIVE / COLUMN / RANDOM / SUBSCRIBE` (※ COLUMN は今回削除、`MY COLLECTION` 等に置換予定)

### `<A2Footer>` (Desktop)
- 黒地、ハーフトーンオーバーレイ
- `RisoHeadline "異端."` を `fontSize: 200px` で大きく
- 4カラム grid: 説明文 / ARCHIVE / COLUMN / EDITORIAL
- 下に Stamp で `NO MASTERPIECES HARMED`

### `<A2MNav>` / `<A2MTabBar>` / `<A2MFooterMini>` (Mobile)
- ナビは縮小版（ロゴ + ハンバーガー + ステッカー）
- 画面下に固定 TabBar `HOME / ARCHIVE / RANDOM / ME` — 4分割、active は yellow
- iOS Safe Area 対応 (`padding-bottom: 30px` 程度)

---

## 映画データ構造

`shared.jsx` の `MOVIES` 配列が参照スキーマ。実装時は **TMDB API** から動的取得する想定。

```ts
type Movie = {
  id: string;              // 'plan9', 'theroom' 等
  title: string;           // 日本語題
  titleEn: string;         // 英題（大文字）
  year: number;
  director: string;
  directorEn: string;
  country: string;         // '米国', '伊国' 等
  runtime: number;         // 分
  score: number;           // /100 のオーディエンススコア — 低いほど「誇るべき」
  starScore: number;       // /5 の星 — 同上
  tagline: string;         // 日本語キャッチ（一行）
  taglineEn: string;       // 英文キャッチ（全大文字 / 詩的）
  genres: string[];        // タグ ['SF', 'カルト', '事故'] 等
  synopsis: string;        // あらすじ 2–3文
  crime: string;           // 「事件記録」— 撮影中の逸話、奇妙な事実
  quote: string;           // 名（迷）台詞 「」付き
  color: string;           // ポスター生成用のアクセント色
};
```

サンプル10本（プラン9 / ザ・ルーム / トロール2 / バーデミック / マノス / バトルフィールド・アース / キャットウーマン / ウィッカーマン / ショーガール / サムライ・コップ）は `shared.jsx` 参照。実装時は **このトーンの記述スタイル**（皮肉と敬意の同居、批評誌寄り）を維持してください — 単純な「ひどい映画」ではなく「異端の魅力」として書く。

---

## Screens / Views

### 1. TOP (Home)

**目的**: 編集部の編集姿勢を示し、当号の「featured」映画 1–2 本と、近影（最近のエントリ）4本＋コラム紹介で誘導する。

**レイアウト** (Desktop 1280×3400px):

1. **NAV** — 高さ 88px。上段黒メタ + 下段ロゴ/ナビ。
2. **HERO** — padding: 40px 32px 64px、12-col grid。
   - 左 (col 1-8): `A2Label` + 4行の `RisoHeadline` で「史上最悪 / もしくは / 純粋無垢の / 到達点。」を fontSize 148–172px で。間に `ScribbleUnderline` と `ScribbleCircle` を挟む。
   - 右 (col 10-12): クリーム背景の「EDITORS NOTE」ブロック（border + shadow + rotate -1deg）。pink ステッカー、Tape、`Sticker bg=blue`。
   - 散布物: 右上に `Sticker "VOL.07"`、その下に `Stamp "NOT FOR SQUARES"`、さらに下に lime `PostIt` で編集後記引用。
3. **Marquee** — yellow / ink、高さ 48px、`★ Z級 ★ CULT ★ 駄作 ★...`
4. **FEATURED 01** — cream paper section、padding 56px 32px。grid `480px 1fr`。
   - 左: A2Poster (480×680, accent=blue)、Tape 2本、Stamp "RATED Z"
   - 右: タイトル / titleEn / `BigScore` で `04/100` (display 172px, red) + 黄色ボックスで `★1.4` / 5
   - synopsis + 黒ブロックの引用 + ジャンルステッカー
5. **FEATURED 02** — red section, inverted layout
6. **Marquee** — blue, "NEW UPDATE WEDNESDAY"
7. **INDEX グリッド** — cream section, 4列、4作品。各カードは microrotation（-2/1/-1/2 deg）、`A2Poster` 240×340、Tape、サイズ違いの数字スタンプ。
8. **COLUMN プロモ** (※ ダッシュボードに置換予定だが、外部から見える未ログイン状態の紹介としては残置可) — ink section
9. **FOOTER**

**モバイル** (402×800〜):
- HERO: `RisoHeadline 56px` × 4行を縦に
- EDITORS NOTE は別ブロックとして HERO の下に
- 各 Featured セクションは縦並び（ポスター + テキスト 1カラム）
- INDEX は4枚を縦に並べ、各カードは `grid 90px 1fr` のサムネ+メタ構成
- 下部 TabBar 固定

### 2. ARCHIVE

**目的**: 全映画タイトルの一覧。10件をカードグリッドで表示。フィルター・ソート・ページネーション。

**レイアウト** (Desktop 1280×2400px):

1. **NAV**
2. **HEADER** — padding 24px 32px 28px、上部に `<ColorBars height={6}>`、右下に `<BarcodeStrip>`。左に `RisoHeadline "駄作目録"` 160px、その下に italic 800 で「異端、十番勝負。」（"十番勝負"は `<ChromaText>`）。右上に `Sticker "10 TITLES INDEXED"` と `UPDATED 2026.05.16`。`<SignalNoise>` オーバーレイ。
3. **FILTER BAR** — クリーム背景、sticky top 0。`FILTER ──` ラベル後にボタン群: `ALL` (active=ink+yellow) / `低予算` / `カルト` / `ホラー` / `SF` / `ニコラス` / `90s` / `00s`。右に `SORT ── ★ 低い順` Sticker(blue)、`VIEW: ▦ GRID`。
4. **CARD GRID** — cream section、5列×2行=10枚、gap 28px、padding 40px 32px 40px。`<SignalNoise>` + ハーフトーン。

   各カード仕様:
   - `transform: rotate({-1.6, 1.2, -.8, 1.5, ...}deg)` (各カードで異なる)
   - `padding: 12px`, `border: 2.5px solid ink`, `box-shadow: 6px 6px 0 ink`
   - 上部: `<Tape>` 70x14, 各カードで色をローテーション (blue/yellow/pink/lime/red)
   - 右上: 番号ステッカー `Sticker bg={acc} rotate={numRot}` で `№01〜№10`
   - 中央: `<A2Poster movie={m} w={196} h={272} accent={acc}>`
   - ポスターの左下: `<Stamp>` で `{score}/100` (cream背景, rotate -12)
   - ポスター上部 6px: 青/透明/黄/透明のグリッチライン（mixBlend screen）
   - メタ: 年・国 (mono 9px red) → タイトル (serif 15px 800) → titleEn (mono 8.5px redDeep)
   - 下部 (dashed top border): `★ STAR` ラベル + `★X.X` (display 22px, accent color, 黄/ライムには ink テキスト影)、右に `→` (ink背景に cream)
   - 右下: タグステッカー（`ink背景 yellow文字`、rotate `tagRot`、ラベル `['必見', 'マスト', '鷲爆発', 'ニルボーグ', '紙コップ', '600万', 'BEES!', '酷評', '再評価', '刀']`）

5. **PAGINATION** — section 下部、`SHOWING 1—10 OF {total}` + ボタン `‹ 1 2 3 ... 12 ›`、active(1)は ink+yellow

**モバイル** (402×850〜): 2列グリッド、カード幅約 148px、`<A2Poster 148×206>` を中央に。各要素を 50% 縮尺で。

### 3. MOVIE DETAIL

**目的**: 個別映画ページ。`★1.4/100` をデカく誇らしげに見せる、批評と熱量が同居するページ。

**レイアウト** (Desktop 1280×3600px):

1. **NAV** + breadcrumb (redDeep背景 mono `ARCHIVE · 2000s · {titleEn}` 左、`EP {番号}` 右 yellow)
2. **HERO** — padding 40px 32px 32px、`<SignalNoise>` オーバーレイ。grid `1fr 460px`。
   - 左:
     - `A2Label "第02席"`
     - `<RisoHeadline size={148}>{title}</RisoHeadline>`
     - tagline (serif italic 32px, ink, with `ScribbleUnderline cream`)
     - taglineEn (monoDisplay 11px cream)
     - **META 4分割テーブル** (DIRECTOR / YEAR / COUNTRY / RUNTIME) — クリーム背景、border + shadow、各セルの上部ラベルを accent 色（red / blue / pink / lime）でローテーション
   - 右: A2Poster 460×640 + Tape×2 + Stamp "SCORE: {score}/100"
   - 散布: 右下に `PostIt lime` で逸話、`Sticker "製作費 不明"`
3. **GIANT SCORE** — padding 32px 0、上下 3px ink ボーダー。
   - 左: `display 300px` で `{score}/100` (cream色)、`ScribbleCircle yellow` でぐるぐる囲み
   - 右: serif italic 36px で "これは、誇るべき低さである。" + Stamp×2 (cream "ROTTEN", yellow "IMDb 3.7")
4. **SYNOPSIS** — cream section、`grid 200px 1fr 220px`
   - 左: `A2Label "SYNOPSIS / 梗概"`
   - 中央: serif 22px、文頭1文字は `float: left` で display 108px の **dropcap** (赤)
   - 右: paper背景 aside「ASIDE / 余白」(crime 引用) + `Tape yellow`、`rotate -.8deg`、shadow
5. **PULL QUOTE** — ink section、`<HalftoneSquare red>` オーバーレイ
   - `RisoHeadline Reggae font` で `「{quote}」` 120px (yellow「」+ cream本体)
   - mono 12px で監督・タイトル・年
6. **REVIEW BODY** — red section、`grid 200px 1fr 220px`
   - 左: ラベル + `BY E. ARAI / 2026.04.18 / 8分` (mono cream) + `Sticker yellow "EDITORS PICK"`
   - 中央: 4–5段落のレビュー本文、太字部分は yellow ハイライト
   - 右: RELATED — 3作品、各カード `bg={blue|redDeep|ink}`、回転、shadow

**モバイル**: ヒーローはタイトル + tagline → ポスター → META 2×2 グリッド → GIANT SCORE (display 140px) → SYNOPSIS → 引用 → レビュー → RELATED の縦並び。

### 4. DASHBOARD (ログイン後)

**目的**: ユーザーが自分のZ級映画コレクション、観察日誌、自作上映プログラムを管理する。ログインユーザー専用のメインダッシュボード。

**レイアウト** (Desktop 1280×3600px):

1. **NAV**
2. **LOGIN BAR** — black bar, padding 10px 32px、mono 11px、左 `● LOGGED IN AS @trash_lover_99`、右 `NOTIFICATIONS (3) | SETTINGS | LOGOUT` (各 yellow/cream/pink)
3. **PROFILE HERO** — padding 48px 32px、`grid 200px 1fr 380px`
   - 左: アバター 180×180 yellow + ink枠 + shadow + rotate -2deg。中身は文字1字（姓の1文字目）を **3重レイヤー** (ink本体 + blue mixBlend:screen + red mixBlend:multiply で各2-3pxオフセット) でリソ風に。`Sticker pink "LV.07"` 右下、`Tape blue` 左上。
   - 中央: `USER PROFILE / 異端者ID` → `RisoHeadline {ユーザー名}` 88px → `@handle` → `Sticker {役割} | {streak日連続}` → italic 26px で座右の銘（`ScribbleUnderline yellow`）
   - 右: 黒コレクションカウンタ (border cream + shadow + rotate 1deg)、`ColorBars` 4px、display 160px で `027`、`ScribbleCircle yellow` で囲み、下に WATCHED / WISH のサブカウント
4. **STATS グリッド** — cream section、`grid-cols-4` で各カラム border-right、`<SignalNoise>`
   - AVG SCORE (red) / BEST WORST (blue) / FAV DIRECTOR (pink) / SCREEN TIME (lime)
   - 大きい数値は display 64px、テキスト値（監督名）は serif 32px 800
5. **TAB STRIP** — red section、sticky top 0、padding 14px 32px
   - `VIEW ──` ラベル + ボタン群 `MY COLLECTION (active=cream+ink) / WATCHED / WISHLIST / CUSTOM LISTS / NOTES`
   - 右に `＋ 駄作を追加` (yellow + ink + shadow)
6. **MY COLLECTION GRID** — cream section、4列、padding 40px 32px 48px、`<SignalNoise>`
   - ヘッダー: 左 `私の駄作たち` (display 60px, "駄作"=blue, `ScribbleUnderline red`)、右にステータスステッカー3個 `★N 観覧済 (lime) / N 視聴中 (yellow) / N 観たい (pink)`
   - カード仕様 (8枚):
     - rotation 各カードで微妙に異なる (-1〜1.4deg)
     - 左上: ステータスステッカー (`観覧済/視聴中/観たい`)、色は lime/yellow/pink
     - `<A2Poster 228×316>`
     - ユーザー評価がある場合: ポスター左下に `Stamp "MY ★5"` (red, cream背景, rotate -12)
     - メタ: 年 ★X.X (mono red) → タイトル (serif 800 15px)
     - ユーザーメモ (任意): yellow背景 + reggae font 13px で `「メモ内容」` + ink border + rotate -1deg
7. **CUSTOM LISTS** — red section、3列、padding 56px 32px、`<SignalNoise>` + `<DeadPixels>`
   - ヘッダー: 左 `俺だけの上映会` + 右 `＋ NEW LIST` (yellow + shadow)
   - 各カード:
     - `bg={lime|blue|pink}` (3枚で異なる)、border 3px ink、shadow 6px、rotate
     - 内部に `<HalftoneSquare>` + `<Tape ink>`
     - `LIST №{XX}` (mono 10px)、タイトル (display 36px)、sub (serif italic 14px)
     - 右下: count (display 48px) + `→ OPEN`
8. **ACTIVITY + NOW PLAYING** — ink section、`grid 1fr 380px`、`<SignalNoise opacity=.85>` + `<DeadPixels>` + `<HalftoneSquare red>`
   - 左: `観察日誌` (display 64px, "日誌"=yellow, `ScribbleUnderline red`)
     - タイムライン: 縦線 yellow opacity .45、各エントリは `grid 82px 40px 1fr` で `日付 / 色付きドット / 内容`
     - 内容: 上に `Sticker {TYPE}` (REVIEW=red, COLLECT=lime, NOTE=yellow, RATE=pink, LIST=blue) + 映画名 (serif 800 18px)、下に説明 (serif italic 14px)
   - 右: NOW PLAYING カード
     - border 3px lime、shadow 6px cream、rotate 1.5deg
     - `<ColorBars>` 4px ヘッダー、`● NOW PLAYING` (lime mono)、タイトル + 年・国、進捗バー (cream30 背景 + lime塗り 42%)、時刻 00:40 / 01:35、再生コントロール `‹‹ || ››`
     - 下に `PostIt pink rotate -4`
9. **RECOMMENDED** — cream section、5列ポスター、`BASED ON ★ LOWEST` Sticker(blue)
10. **FOOTER**

**モバイル**: PROFILE → STATS 2×2 → TabStrip(横スクロール) → MY COLLECTION 2列 → CUSTOM LISTS 縦並び → ACTIVITY タイムライン + NOW PLAYING → RECOMMEND 横スクロール → TabBar(active=ME)

---

## Interactions & Behavior

### スクロール

- ページ自体は通常スクロール
- 任意で、HERO の `RisoHeadline` ゴーストレイヤーが scroll position で微小に追従（パララックス、translateX ±5px 程度）
- `ScribbleUnderline` `ScribbleCircle` は entry 時に `stroke-dasharray` アニメで描画されるとよい (0.4s ease-out)

### ホバー

- カード: `transform: scale(1.02) rotate(0deg)` + `box-shadow: 10px 10px 0 ink` への遷移 (150ms)
- ボタン: `transform: translate(-2px, -2px)` + `box-shadow: 6px 6px 0 ink` (押下時は逆)
- リンクテキスト: `text-decoration-color` を accent color にスナップ

### TabBar / Filter

- アクティブ状態は `background: ink, color: yellow` (または cream+ink)
- フィルタは多選択可（toggle、ALL は単独）

### ダッシュボード機能

- **コレクション追加**: モーダルで映画検索 → コレクションに add (`POST /api/collections`)
- **ステータス切替**: ポスター右クリック or 長押し → `WATCHED / WATCHING / WANT` ラジオ
- **メモ編集**: ポストイットをクリックで inline editing
- **カスタムリスト**: NEW LIST → 名前 + 説明 + 色選択 → 映画ドラッグ追加
- **観察日誌**: コレクション操作・評価・メモが自動でタイムラインに記録

---

## State Management

```ts
type User = {
  id: string; handle: string; name: string;
  level: number; since: string; motto: string;
  collected: number; watched: number; wishlist: number;
  avgScore: number; lowestScore: number;
  favoriteDirector: string; screeningHours: number; streakDays: number;
};

type UserMovieEntry = {
  movieId: string;
  status: 'WATCHED' | 'WATCHING' | 'WANT';
  userRating: number | null;  // /5
  userNote: string | null;
  addedAt: Date; watchedAt?: Date;
};

type CustomList = {
  id: string; title: string; sub: string; color: 'lime' | 'blue' | 'pink' | 'yellow';
  movieIds: string[]; createdAt: Date;
};

type ActivityEntry = {
  type: 'REVIEW' | 'COLLECT' | 'NOTE' | 'RATE' | 'LIST';
  date: string; movie: string; text: string;
};
```

データ取得: TMDB API で映画情報取得 → サイト独自データ（score / starScore / tagline / crime / quote）はバックエンド DB に保持してマージ。

---

## Responsive Breakpoints

- **Mobile**: 〜640px (HERO は縦並び、グリッドは 1〜2列)
- **Tablet**: 640–1024px (グリッドは 2〜3列、スコアは 60% スケール)
- **Desktop**: 1024px+ (上記仕様、最大幅 1400px、内側 32px パディング)

モバイル時の特記事項:
- 巨大スコアは画面幅に合わせて `clamp(80px, 30vw, 300px)` で
- 散布されるステッカーはモバイルで数を減らす（縦に積まれて読みにくくなるため）
- `Marquee` は速度を 60% に
- `<DeadPixels count>` は半分に

---

## Files

`source/` 配下:

- `direction-a2-desktop.jsx` — Desktop 4画面 + クラッタコンポーネント定義
- `direction-a2-mobile.jsx` — Mobile 4画面 + モバイルクロム
- `shared.jsx` — 映画データ、ノイズ／グリッチ／テクスチャコンポーネント
- `ios-frame.jsx` — モバイルプレビュー用（**実装には不要**、確認用のみ）

### 画面別エクスポート関数

Desktop: `A2Home` / `A2Archive` / `A2Movie` / `A2Dashboard`
Mobile: `A2MHome` / `A2MArchive` / `A2MMovie` / `A2MDashboard`

クロム: `A2Nav` / `A2Footer` / `A2MNav` / `A2MTabBar` / `A2MFooterMini`

クラッタ: `RisoHeadline` / `Sticker` / `Stamp` / `PostIt` / `Tape` / `ScribbleUnderline` / `ScribbleCircle` / `ScribbleArrow` / `A2Poster` / `A2Label`

テクスチャ: `GrainOverlay` / `SignalNoise` / `DeadPixels` / `VHSScanlines` / `HalftoneSquare` / `HalftoneCircle` / `ColorBars` / `BarcodeStrip` / `Marquee` / `ChromaText`

データ: `MOVIES` (映画10本) / `MOVIES_BY_DECADE`

---

## 実装の優先順位

1. **トークン定義** — `colors.ts` / `fonts.ts` / Tailwind config の `theme.extend`
2. **テクスチャコンポーネント移植** — `GrainOverlay` / `SignalNoise` / `DeadPixels` 等。これらは画面の "正体" を決めるので最優先。
3. **クラッタコンポーネント移植** — `Sticker` / `Stamp` / `PostIt` / `Tape` / `RisoHeadline` / `A2Poster`。`A2Poster` は TMDB 画像URL を受け取ってオーバーレイ群と合成する形に。
4. **共通クロム** — `Nav` / `Footer` / `TabBar`
5. **画面実装** — 順序: TOP → MOVIE DETAIL → ARCHIVE → DASHBOARD
6. **データ取得** — TMDB API ラッパー、サイト独自データのマージ
7. **認証 + ダッシュボード機能** — DB スキーマ設計、コレクション CRUD、リアルタイムアクティビティ

---

## やってはいけないこと

- **rounded corners を入れない**（border-radius: 0）。角は直角。
- **滑らかなアニメーションを多用しない**。snapping / ease-out / hard cut を好む。
- **シャドウをぼかさない**。`box-shadow` は `Npx Npx 0 0 #color` のハード影のみ。
- **ステッカーや回転をきれいに整列させない**。各カード毎に微妙に異なる角度・色・位置を保持。
- **トーンを薄めない**。「Z級映画への愛のあるツッコミ」「敬意」「ジャンク」を全画面で維持する。`「これは、誇るべき低さである。」` のような文を真顔で書く。
- **ノイズ／グリッチを消さない**。最低でも `GrainOverlay + SignalNoise` を全画面に。

---

## 質問・確認事項

- 認証プロバイダーの選定（NextAuth / Clerk / Supabase / 自前）
- 映画データソース（TMDB / OMDb / 自前 DB）
- サイト独自データ（score, starScore, tagline, crime, quote）の編集者 UI が必要か
- コメント・レビューの公開／非公開機能の有無
- SSR / SSG / CSR の方針（SEO 重要なら SSG + ISR 推奨）

不明点があれば、デザインの初期判断者に確認してから実装してください。
