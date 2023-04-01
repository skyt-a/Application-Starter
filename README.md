# Application-Starter
なんかアプリ作るときの初期プロジェクト的なやつ

### Frontend
Svelte

### ServerSide
Express.js + prisma + GraphQL

### Database
MySQL

## 起動
```
docker-compose up
```

## ページ
```
http://localhost:3001 (front)
http://localhost:3000 (api)
```

## Eslint + Prettierによるlinter + 自動フォーマットのセットアップ
- VScodeにEslintとPrettierの拡張機能を追加
- VScodeのsetting.jsonに以下を追加
```
"eslint.enable": true,
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"editor.formatOnSave": false,
"javascript.format.enable": false,
"eslint.alwaysShowStatus": true,
"eslint.packageManager": "yarn",
```
- VSCodeのOUTPUTタブでESlintでエラーが起きてる場合
  1. `/$ npm install -g eslint`
  2. `/$ npm link eslint`(不要かも)