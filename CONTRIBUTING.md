# AI Tools JP — サイト運用ルール

> 記事を新規作成・更新する際はこのドキュメントに従ってください。

---

## 1. カテゴリ・タグの統一ルール

| カテゴリ | `<span class="tag">値</span>` | 対象ツール例 |
|---|---|---|
| チャット・AI検索 | `チャット・AI検索` | Perplexity・ChatGPT |
| デザイン・画像生成 | `デザイン・画像生成` | Canva・Midjourney |
| 文章・ライティング | `文章・ライティング` | DeepL・Jasper |
| 業務効率化・自動化 | `業務効率化・自動化` | Notion・Zapier |
| 副業・フリーランス | `副業・フリーランス` | クラウドワークス |
| AIツール比較 | `AIツール比較` | vs系記事 |

❗ 独自表記（「比較記事」等）は使わない。必ず上記のいずれかに属する。

---

## 2. アイコンルール（Font Awesome）

**原則：絵文字（エモジ）は使わない。Font Awesomeアイコンを必ず使う。**

| 用途 | アイコン | クラス |
|---|---|---|
| ホームナビ | house | `fa-solid fa-house` |
| AIツールナビ | robot | `fa-solid fa-robot` |
| 副業ナビ | briefcase | `fa-solid fa-briefcase` |
| カテゴリナビ | table-cells-large | `fa-solid fa-table-cells-large` |
| Perplexity記事内 | magnifying-glass | `fa-solid fa-magnifying-glass` |
| ChatGPT記事内 | robot | `fa-solid fa-robot` |
| 副業記事内 | briefcase | `fa-solid fa-briefcase` |
| ヒント・チップボックス | lightbulb | `fa-solid fa-lightbulb` |
| ペン・ライティング | pen | `fa-solid fa-pen` |
| スター・評価 | star | `fa-solid fa-star` |
| フォルダ | folder-open | `fa-solid fa-folder-open` |
| ユーザー | users | `fa-solid fa-users` |
| 鍵・安全 | lock | `fa-solid fa-lock` |
| 雷・スピード | bolt | `fa-solid fa-bolt` |
| ステップ番号 | カウンター自動 | CSS `counter` 使用（絵文字不可） |
| おすすめバッジ | ✅ | テキストのみ（変更不要） |
| 警告バッジ | ⚠️ | テキストのみ（変更不要） |

```html
<!-- ✅ 正しい -->
<i class="fa-solid fa-magnifying-glass" style="color:#4f8ef7;"></i> Perplexity AI

<!-- ❌ 間違い -->
🔍 Perplexity AI
```

---

## 3. サムネイル画像ルール

- **記事1本につき1枚**専用サムネイルを用意する
- 保存場所：`assets/images/reviews/<slug>.png`
- サイズ：**1200×630px**（OGP推奨サイズ）
- 内容ルール：
  - 実在の人物写真・ロゴ・スクリーンショットは使用しない
  - フラットデザイン・グラデーション背景 + テキストで構成する
  - 記事タイトルと対応するカテゴリカラーを使用する
- カテゴリ別カラー：
  | カテゴリ | メインカラー |
  |---|---|
  | AIツール全般 | `#4f8ef7` (blue) |
  | 副業・フリーランス | `#0082cc` (dark blue) |
  | デザイン | `#e74c3c` (red) |
  | ライティング | `#27ae60` (green) |
  | 業務効率化 | `#8e44ad` (purple) |

---

## 4. OGP・canonicalの必須タグ（全記事共通）

```html
<meta property="og:type" content="article">
<meta property="og:title" content="記事タイトル | AI Tools JP">
<meta property="og:description" content="meta descriptionと同じ文">
<meta property="og:url" content="https://keji-dev-jp.github.io/ai-tools-jp/reviews/SLUG.html">
<meta property="og:image" content="https://keji-dev-jp.github.io/ai-tools-jp/assets/images/reviews/SLUG.png">
<meta property="og:site_name" content="AI Tools JP">
<meta name="twitter:card" content="summary_large_image">
<meta name="article:modified_time" content="YYYY-MM-DD">
<link rel="canonical" href="https://keji-dev-jp.github.io/ai-tools-jp/reviews/SLUG.html">
```

❗ `SLUG` は記事のHTMLファイル名（拡張子なし）に合わせる。

---

## 5. パンくずリンクの統一

```html
<nav class="breadcrumb">
  <a href="/ai-tools-jp/">ホーム</a> &rsaquo;
  <a href="/ai-tools-jp/reviews/">AIツール・副業レビュー一覧</a> &rsaquo;
  ページ名
</nav>
```

❗「レビュー一覧」など他の表記は使わない。

---

## 6. meta descriptionの書き方

- **必ず「仕事・副業に使えるツール」というコンセプトと結びつくキーワードを入れる**
- 60字〜120字でまとめる
- 「日本語で解説」「徹底解説」「実際に使った」のいずれかを入れる

```
例：「クラウドワークスで副業を始めたい人必見。仕事・副業に使えるツールとして登録方法・仕事の取り方・稼ぐコツを徹底解説。」
```

---

## 7. sitemap.xmlの更新ルール

新しい記事を追加したら **必ず `sitemap.xml` に追記する**。

```xml
<url>
  <loc>https://keji-dev-jp.github.io/ai-tools-jp/reviews/SLUG.html</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## 8. 新記事作成チェックリスト

- [ ] `<span class="tag">値</span>` は上記カテゴリ表のいずれかに属する
- [ ] アイコンは Font Awesome を使用（絵文字禁止）
- [ ] サムネイル画像を `assets/images/reviews/<slug>.png` に配置済み（1200×630px）
- [ ] OGP・canonicalタグが全て揃っている
- [ ] パンくずのリンクテキストが `AIツール・副業レビュー一覧` になっている
- [ ] `index.html`（トップ）の最新レビューセクションに追加した
- [ ] `reviews/index.html` の該当セクションに追加した
- [ ] `sitemap.xml` に追記した
- [ ] `meta description` にコンセプトキーワードが入っている
- [ ] `article:modified_time` に更新日を記載した
