---
marp: true
theme: default
class: lead
paginate: true
footer: 'AirReal - 架空の企業サイト制作 -'
---
<style>
h1 {
  position: fixed;
  top: 7%;
}
</style>

# AirReal - 架空の企業サイト制作 -
### Astro + microCMS を用いたサイト構築
- 宮脇 光輝
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

# ![w:400](images/astro-logo.png)
### 概要:
- 静的サイトジェネレーター
  - HTMLファイルを事前に生成して高速な表示を実現
- MPAを採用
  - 複数のページを持つアプリケーションを効率的に管理

---

# ![w:400](images/astro-logo.png)
### 特徴:
- 高速なページロード
  - 事前生成されたHTMLにより、ページの表示が非常に速い
- React、Vue、Svelteなどの統合
  - 好みのフレームワークを使用して、柔軟な開発が可能
- MarkdownやMDXのサポート
  - コンテンツをMarkdownで簡単に作成・管理

---

# ![w:400](images/microcms-logo.png)
### 概要:
- ヘッドレスCMS
  - フロントエンドと分離され、API経由でデータを提供
- APIを通じたコンテンツ管理
  - RESTful APIを使用して、データを柔軟に管理・取得

---

# ![w:400](images/microcms-logo.png)
### 特徴:
- ノーコードでコンテンツモデル構築
  - コーディングなしで、直感的にデータモデルを作成可能
- RESTful API提供
  - 標準化されたAPIで、他のサービスと簡単に連携。
- リアルタイムコンテンツ更新
  - 即時にコンテンツを更新し、反映可能

---

# ![w:400](images/cloudflare-logo.png)
### 概要:
- 静的ホスティングサービス
  - 静的サイトを迅速かつ効率的にホスティング
- Gitリポジトリとの連携
  - GitHubやGitLabと直接連携し、デプロイを自動化

---

# ![w:400](images/cloudflare-logo.png)
### 特徴:
- エッジネットワーク
  - 低遅延, 高速なコンテンツ配信, 信頼性向上
- 継続的デプロイ
  - 自動的にデプロイ実行
- SSL/TLS証明書の自動提供
  - 無料でSSL/TLS証明書が提供

---

# デモンストレーション
### 各環境
- Astroの開発環境説明
- microCMSでのコンテンツ管理のワークフロー
- Cloudflare Pagesのデプロイ画面

---

# 結論
### 公開作業
  - 別にmicroCMSでもWordPressでも変わらん
  - PR→Rv→Merge→Deployが1本道ならいいがそうでない
  - でも、API提供でデータ取るのは便利そう

