# Messi 1000 Goals 完全版

## 公開
GitHub Pages / Cloudflare Pages / Netlify等の静的ホスティングで公開できます。

## 最初に変更するもの
1. `index.html` の canonical / OG URL
2. `sitemap.xml` と `robots.txt` のドメイン
3. `contact.html` のメールアドレス
4. `assets/app.js` のデータ

## 広告
トップページに広告枠を1つだけ配置済みです。
AdSense承認後、`<div class="adbox">...</div>` をAdSenseから発行された広告コードに置き換えます。
承認前は広告を表示しません。

## データ更新
`assets/app.js` の DATA を更新します。
将来的にFootyStats APIを使ってサーバー側で更新する構成へ移行可能です。
APIキーはブラウザ側JSに直接書かないでください。

## 収益化の考え方
広告1枠に限定し、サイト本体のコンテンツを主役にします。
AdSense審査では、十分な独自コンテンツと完成したサイトが重要です。
