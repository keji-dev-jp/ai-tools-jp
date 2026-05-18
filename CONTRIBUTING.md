# AI Tools JP 運用ルール

## ファイル構成

```
ai-tools-jp/
├── index.html              # トップページ
├── reviews/
│   ├── index.html          # レビュー一覧ページ
│   └── {slug}.html         # 各レビュー記事
├── assets/
│   ├── css/common.css      # 全ページ共通スタイル
│   ├── js/common.js        # 共通ヘッダー/フッター
│   └── images/
│       ├── hero_banner.png  # トップページヒーロー画像
│       ├── logo.png         # サイトロゴ
│       └── reviews/         # 各記事のサムネイル画像
│           └── {slug}.jpg/.png
└── CONTRIBUTING.md
```

---

## 新規記事作成ルール

### 1. ファイル名・パス

| 項目 | ルール |
|---|---|
| 記事HTML | `reviews/{slug}.html` |
| サムネ画像 | `assets/images/reviews/{slug}.jpg` または `.png` |
| slug形式 | 半角英数字・ハイフンのみ（例: `chatgpt`, `perplexity-vs-chatgpt`） |

### 2. サムネ画像ルール

- **サイズ**: 1200×630px
- **容量**: **1MB以内**に圧縮してからアップロード
- **形式**: `.jpg`（写真系）または `.png`（イラスト・スクリーンショット系）
- **内容**: 実サイトのスクリーンショットまたはAI生成画像（著作権・ロゴを含まないもの）
- **格納先**: 必ず `assets/images/reviews/` に統一
- カードの画像エリアは `class="card-thumb"` で高さ160px固定（ページゆれ防止）

#### 推奨圧縮ツール
- [Squoosh](https://squoosh.app/) — JPEG 80% 品質
- [TinyPNG](https://tinypng.com/) — PNG最大圧縮

### 3. HTML `<head>` 必須項目

```html
<meta name="description" content="{120字以内}">
<meta property="og:type" content="article">
<meta property="og:title" content="{title} | AI Tools JP">
<meta property="og:description" content="{description}">
<meta property="og:url" content="https://keji-dev-jp.github.io/ai-tools-jp/reviews/{slug}.html">
<meta property="og:image" content="https://keji-dev-jp.github.io/ai-tools-jp/assets/images/reviews/{slug}.jpg">
<meta property="og:site_name" content="AI Tools JP">
<meta name="twitter:card" content="summary_large_image">
<meta name="article:modified_time" content="{YYYY-MM-DD}">
<link rel="canonical" href="https://keji-dev-jp.github.io/ai-tools-jp/reviews/{slug}.html">
```

### 4. パンくず（必須）

```html
<nav class="breadcrumb">
  <a href="/ai-tools-jp/">ホーム</a> &rsaquo;
  <a href="/ai-tools-jp/reviews/">AIツール・副業レビュー一覧</a> &rsaquo;
  {ToolName}
</nav>
```

### 5. 共通コンポーネント

```html
<header id="site-header"></header>
<nav id="site-nav" class="global-nav"></nav>
<!-- 本文 -->
<footer id="site-footer"></footer>
```

ヘッダー/ナビ/フッターは `common.js` が自動挿入。直接記述不要。

### 6. レビュー一覧・トップへの追加

新規記事を作成したら **両方** に追加する：

**`reviews/index.html`** の該当カテゴリに追加：
```html
<a href="/ai-tools-jp/reviews/{slug}.html" class="review-card">
  <img class="card-thumb" src="/ai-tools-jp/assets/images/reviews/{slug}.jpg" alt="{ToolName}">
  <div class="review-card-body">
    <span class="tag">{category}</span>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
</a>
```

**`index.html`（トップ）** の「最新レビュー」セクションにも同様に追加。

---

## 公開前チェックリスト

- [ ] `reviews/{slug}.html` 作成済み
- [ ] `<head>` OGP・canonical 全項目入り
- [ ] パンくず記載済み
- [ ] `assets/images/reviews/{slug}.jpg` を **1MB以内** で用意・アップロード済み
- [ ] `reviews/index.html` にカード追加済み
- [ ] `index.html`（トップ）の最新レビューにカード追加済み
- [ ] PC・SP両方で表示確認済み
