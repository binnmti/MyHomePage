# Bin Matsui - フリーランスプログラマ

このサイトは Blazor WebAssembly で作成された個人ホームページです。

## GitHub Pages での公開

このプロジェクトはGitHub Actionsを使用してGitHub Pagesに自動デプロイされます。

### セットアップ手順

1. GitHubリポジトリの Settings > Pages で以下を設定：
   - Source: "GitHub Actions" を選択

2. メインブランチにプッシュすると自動でビルド・デプロイされます

### ローカル開発

```bash
# 依存関係の復元
dotnet restore

# 開発サーバー起動
dotnet run

# または watch モード
dotnet watch
```

### 手動ビルド

```bash
# リリースビルド
dotnet publish -c Release -o dist

# 静的ファイルは dist/wwwroot に生成されます
```

## 技術スタック

- Blazor WebAssembly (.NET 8)
- CSS (ドット絵風デザイン)
- JavaScript (Tetris ゲーム)

## 特徴

- レスポンシブデザイン
- ドット絵風の8-bitスタイル
- インタラクティブなTetrisゲーム
- GitHub Pages完全対応
