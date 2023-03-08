import Layout from "@/components/layout"
import Link from "next/link"

import { getPostInfoList, PostInfo } from "@/lib/posts"

import styles from "@/styles/blog.module.css"

interface BlogProps {
  postList: Array<PostInfo>
}

export async function getStaticProps() {
  return {
    props: {
      postList: JSON.parse(JSON.stringify(getPostInfoList()))
    }
  }
}

export default function Blog({ postList }: BlogProps) {
  postList.map((post) => {
    post.date = new Date(post.date as string)
  })

  postList.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });

  return (
    <>
      <Layout page="blog">
        <div className={`${styles.postList} ignoreAnim`}>
          {
            postList.map((post) => {
              return (
                <Link className={styles.postRow} href={`/blog/${post.id}`} key={post.id}>
                  <h1>{post.title}</h1>
                  <h3>{(post.date as Date).toLocaleString()}</h3>
                  <p>{post.summary}</p>
                </Link>
              )
            })
          }
        </div>
      </Layout>
    </>
  )
}
