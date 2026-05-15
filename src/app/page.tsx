'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import matter from 'gray-matter';
import { FXEF80ConsiderPersonalImport as contMD } from '@/content/FXEF80-consider-personal-import'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'

export default function Home() {
  const { data, content } = matter(contMD); // markdownコンテンツをfront matterと本文へ分解
  const [htmlContent, setHtmlContent] = useState('');
  useEffect(() => {
    (async () => {
      const htmlObj = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(content);
      setHtmlContent(htmlObj.toString());
    })();
  }, []);

  return (
    <div className="container">
      <h1 className="title is-1">{ data.title }</h1>
      <div dangerouslySetInnerHTML={{__html: htmlContent}}/>
    </div>
  );
}
