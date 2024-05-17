---
marp: true
theme: default
class: lead
paginate: true
footer: 'AirReal - 架空の企業サイト制作 -'
---

# AirReal - 架空の企業サイト制作 -
### Astro + microCMS を用いたサイト構築
- 
- 2024/05/22

---

# イントロダクション
- プロジェクトの背景と目的
- Astro、microCMS、Cloudflare Pagesの概要
- デモンストレーション
- 結論

---

# プロジェクトの背景と目的
- 弊社のWordPress管理だるくない？
- Astroってどんなもん？
- microCMSってどんなもん？
- Cloudflare Pagesってどんなもん？

---

![bg](images/project.png)

---

# Astro
### 概要:
- 静的サイトジェネレーター
- MPAを採用

### 特徴:
- 高速なページロード
- React、Vue、Svelteなどの統合
- MarkdownやMDXのサポート

![fit bg right](images/astro-logo.png)

---

# microCMS
### 概要:
- ヘッドレスCMS
- APIを通じたコンテンツ管理

### 特徴:
- ノーコードでコンテンツモデル構築
- RESTful API提供
- リアルタイムコンテンツ更新

![fit bg right](images/microcms-logo.png)

---

# Cloudflare Pages
### 概要:
- 静的ホスティングサービス
- Gitリポジトリとの連携

### 特徴:
- エッジネットワーク
- 継続的デプロイ
- SSL/TLS証明書の自動提供

![fit bg right](images/cloudflare-logo.png)

---

# デモンストレーション
- Astroの開発環境説明
- microCMSでのコンテンツ管理のワークフロー
- Cloudflare Pagesのデプロイ画面

---

# 結論
### 公開作業
  - 別にmicroCMSでもWordPressでも変わらん
  - PR→Rv→Merge→Deployが1本道ならいいがそうでない
  - でも、API提供でデータ取るのは便利そう

