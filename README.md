# README

## auf

## コマンドメモ
### package.jsonの依存パッケージをインストールしたいとき

`yarn`

### Vueファイル更新時に都度buildしたい場合

`yarn run webpack-watch`

→ public/packs以下に生成される

### Vueファイルを1度だけbuildしたいとき

`bin/webpack`

→ 同様にpublic/packs以下に生成される

### サーバー起動するとき

`bundle exec rails s` 

を起動してhttp://localhost:3000

### Vueファイルの変更を監視しながらサーバーを起動する

`bin/server` もしくは `yarn run server-progress`

を起動してhttp://localhost:5000

### vueのユニットテストをするとき

`yarn run unit`




