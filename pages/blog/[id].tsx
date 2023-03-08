import Layout from "@/components/layout"
import { useRouter } from "next/router"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

import { getPostDataFromId, getPostInfoList, Post } from "@/lib/posts"

import styles from "@/styles/blog.module.css"
import Link from "next/link"

interface PostDisplayProps {
  post: Post
}

export async function getStaticPaths() {
  let postList = getPostInfoList()
  return {
    paths: postList.map((post) => {
      return {
        params: { id: post.id }
      }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  return {
    props: {
      post: JSON.parse(JSON.stringify(getPostDataFromId(params.id)))
    }
  }
}

export default function PostDisplay({ post }: PostDisplayProps) {
  post.postInfo.date = new Date(post.postInfo.date as string)

  return (
    <>
      <Layout page="blog" customTitle={post.postInfo.title}>
        <Link href="/blog"><p>&larr; Back</p></Link>
        <div className={styles.postDiv}>
          <h1>{post.postInfo.title}</h1>
          <h3>{(post.postInfo.date as Date).toLocaleString()}</h3>
          <ReactMarkdown>
            {post.content}
          </ReactMarkdown>
        </div>
      </Layout>
    </>
  )
}
