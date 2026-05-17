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
| ホームナビ | 🏠 → | `fa-solid fa-house` |
| AIツールナビ | 🤖 → | `fa-solid fa-robot` |
| 副業ナビ | 💼 → | `fa-solid fa-briefcase` |
| カテゴリナビ | 📦 → | `fa-solid fa-table-cells-large` |
| Perplexity記事内 | 🔍 → | `fa-solid fa-magnifying-glass` |
| ChatGPT記事内 | 🤖 → | `fa-solid fa-robot` |
| 副業記事内 | 💼 → | `fa-solid fa-briefcase` |
| ステップ番号 | カウンター自動 | CSS `counter` 使用（絵文字不可） |
| ヒント・チップボックス | 💡 → | `fa-solid fa-lightbulb` |
| おすすめバッジ | ✅ | テキストのみ（変更不要） |
| 警告・注意バッジ | ⚠️ | テキストのみ（変更不要） |

**具体的な書き方:**
```html
<!-- ✅ 正しい -->
<i class="fa-solid fa-magnifying-glass" style="color:#4f8ef7;"></i> Perplexity AI

<!-- ❌ 間違い -->
🔍 Perplexity AI
```

---

## 3. パンくずリ・レビュー一覧リンクの表記

```html
<!-- パンくずり -->
<nav class="breadcrumb">
  <a href="/ai-tools-jp/">ホーム</a> &rsaquo;
  <a href="/ai-tools-jp/reviews/">AIツール・副業レビュー一覧</a> &rsaquo;
  ページ名
</nav>
```

❗ 「レビュー一覧」と不一致の表記を使わない。

---

## 4. meta descriptionの書き方

- **必ず「仕事・副業に使える」というコンセプトと結びつくキーワードを入れる**
- 60字～120字でまとめる
- 「「日本語で解説」「徹底解説」「実際に使った」のいずれかを入れる

例：
```
「クラウドワークスで副業を始めたい人必見。仕事・副業に使えるツールとプラットフォームを日本語で徹底解説。」
```

---

## 5. 新記事チェックリスト

新しく記事を作成したら必ず以下を確認する：

- [ ] `<span class="tag">値</span>` は上記カテゴリ表のいずれかに属する
- [ ] アイコンは Font Awesomeを使用（絵文字禁止）
- [ ] パンくずりの「レビュー一覧」リンクテキストが `AIツール・副業レビュー一覧` になっている
- [ ] `index.html`（トップ）の最新レビューセクションに追加した
- [ ] `reviews/index.html` の該当セクションに追加した
- [ ] `meta description` にコンセプトキーワードが入っている
