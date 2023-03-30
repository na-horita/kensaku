## コマンド

```bash
cd kensaku
npm run lint
npm run dev
```

Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) 

トップページの編集`pages/Top.jsx` 
お気に入り一覧ページの編集(例:/favorite/)`pages/Favorite.jsx`

## Expressを使ってAPIのエンドポイントの作成(local開発用)

良く検索されるワード一覧はfrequent.jsonに保存、これにより/api/frequent というAPIエンドポイントを定義する。

```bash
//JSON-serverインストール
npm install express data

//web Serverを起動します。
node index.cjs
```

## JSON Server(local開発用)

良く検索されるワード一覧はdb.jsonに保存をして、JSON serverを利用してデータ取得を行います。

```bash
//JSON-serverインストール
npm install -g json-server

//DBとして利用するためのJSONファイルを作成する
type nul > db.json

//JSON Serverを起動します。
json-server --watch db.json --port 3000
```
