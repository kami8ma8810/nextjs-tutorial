---
title: '静的生成する場合 vs サーバーサイドレンダリング'
date: '2022-11-02'
---

可能な限り **Static Generation（静的生成）** (データありとなし) を使用することをお勧めします。これは、ページを一度構築して CDN で提供できるためです。これによりリクエストごとにサーバーがページをレンダリングするよりも、はるかに高速になります。

次のような種類のページに静的生成を使用できます。

- マーケティングページ
- ブログ
- 商品リストページ
- ヘルプとドキュメント

静的生成とサーバーサイドレンダリングを選ぶ際に「ユーザーのリクエストよりも**先**にこのページをプリレンダリングできますか？」と自問する必要があります。答えが「はい」の場合は、静的生成を選択する必要があります。

一方、静的生成はユーザーのリクエストより先にページをプリレンダリングできない場合、**良い方法ではありません**。恐らくページには頻繁に更新されるデータが表示され、リクエストごとにページのコンテンツが変更されます。

その場合、**サーバーサイドレンダリング** を使用できます。表示速度は遅くなりますが、プリレンダリングされたページは常に最新の状態になります。またはプリレンダリングをスキップしてクライアントサイドの JavaScript を使用してデータを入力することもできます。