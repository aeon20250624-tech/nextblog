'use client';
import { useEffect, useState } from "react";
// import Image from "next/image";
// import styles from "./page.module.css";
import matter from 'gray-matter';
import { FXEF80ConsiderPersonalImport as contMD } from '@/content/FXEF80-consider-personal-import'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { myDateFmt } from '@/utils'

export default function Home() {
    const { data: fmat, content: mdcontent } = matter(contMD); // markdownコンテンツをfront matterと本文へ分解
    const [htmlContent, setHtmlContent] = useState('');
    useEffect(() => {
        (async () => {
            const htmlObj = await unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypeStringify)
            .process(mdcontent);
            setHtmlContent(htmlObj.toString());
        })();
    }, []);

    let idx = 0;
    const tags = fmat.tag.map((tag: string) => <span className="tag" key={idx++}>{tag}</span>);

    return (
        <>
            <div className="hero my-hero is-large" style={{backgroundImage: "url('/img/IMG_0092.jpeg')"}}>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-4">{ fmat.title }</h1>
                    </div>
                </div>
            </div>
            <section className="section">
            <div className="container">
                <div className="level">
                    <div className="level-left">
                        <div className="tags">
                            { tags }
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            <small>{ myDateFmt(fmat.date) }</small>
                        </div>
                    </div>
                </div>
            </div>
            </section>
            <div className="container">
                <div dangerouslySetInnerHTML={{__html: htmlContent}}/>
            </div>
        </>
    );
}
