Next.jsインストール
https://qiita.com/Sicut_study/items/2c9df846e96a47900e6d
Next公式のyarn create next-app@latest my-app --yesだと
next-app@latestがコマンドとして認識されないとなってエラーになる
===>yarnのグロバールパスを設定
	export PATH="$PATH:`yarn global bin`"
	yarn create next-app@latest next-blog
	====>それでもエラーになるので、yarn create next-app next-blogとした。
		同じcreate-next-app@16.2.5をインストールして使うようなので、これでヨシとした。

SSR禁止
https://zenn.dev/umi_mori/books/next-js-typescript/viewer/what-is-nextjs
'use client';

markdown
Front matterを抜き出して、残りのコンテンツを表示するには、これが最良か。
https://vivliostyle.github.io/vivliostyle_doc/ja/vivliostyle-user-group-vol2/spring-raining/index.html
全体像がわかりにくいが、これも使えそう
https://reffect.co.jp/react/nextjs-markdown-blog#gray-matter


react-markdown
https://github.com/remarkjs/react-markdown
remark
https://github.com/remarkjs/remark
Marked
https://github.com/markedjs/marked
markdown-it
https://github.com/markdown-it/markdown-it


その他
https://qiita.com/tomy0610/items/f07d586c08a0a2aadb01
https://note.com/hafnium/n/n749ef0396fbc
https://zenn.dev/jnch/articles/a8a641c6679f86
https://zenn.dev/rasshii/books/learning-react-2026/viewer/25-nextjs-intro
https://qiita.com/free-honda/items/3336a9ac5887f61871d9
https://qiita.com/komeri/items/f29e86f2174432a32104
https://qiita.com/oizumi-yuta/items/4b626733eb8ff7399246
https://qiita.com/yun_bow/items/cc22bc76971e6a4bc7a4
https://qiita.com/oizumi-yuta/items/4b626733eb8ff7399246