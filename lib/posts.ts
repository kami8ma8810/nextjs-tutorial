import fs from 'fs'; //ファイルシステムからファイルを読み取ることができるNode.jsモジュール
import path from 'path'; //ファイルパスを操作するNode.jsモジュール
import matter from 'gray-matter'; //マークダウンファイルのメタデータを解析するライブラリ

// マークダウンコンテンツのレンダリングに必要なパッケージ
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // postsフォルダ下層のファイルネームを取得
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // ファイルネームから .md を除去、idに変換
    const id = fileName.replace(/\.md$/, '');

    // 文字列としてマークダウンファイルを読み込む
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // gray-matterを使って投稿メタデータを解析する
    const matterResult = matter(fileContents);

    // データとidを統合する
    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
  // 投稿データをソート
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// 全ての記事IDを出力
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  // 返すリストはオブジェクトの配列にする
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

// 全ての記事データを出力
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // gray-matterを使って投稿メタデータを解析する
  const matterResult = matter(fileContents);

  // remarkを使ってマークダウンをHTMLに変換する
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // データにidと投稿コンテンツを統合する
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}
