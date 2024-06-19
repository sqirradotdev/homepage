import { ReactNode } from "react"

import Link from "next/link"
import Head from "next/head"

import styles from "./layout.module.css"

interface LayoutProps {
  children: ReactNode
  page: "home" | "about me" | "projects" | "blog"
  title?: string,
  mainClass?: string,
  fadeIn?: boolean
}

export default function Layout({ children, page, title, mainClass = "", fadeIn = true }: LayoutProps) {
  let pageTitle = `${title || page} - sqirradotdev's homepage`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
      </Head>

      <header>
        <nav className={styles.navbar}>
          <ul>
            <li className={page == "home" ? styles.currentPage : ""}><Link href="/">home</Link></li>
            <li className={page == "about me" ? styles.currentPage : ""}><Link href="/about">about me</Link></li>
            <li className={page == "projects" ? styles.currentPage : ""}><Link href="/projects">projects</Link></li>
            <li className={page == "blog" ? styles.currentPage : ""}><Link href="/blog">blog</Link></li>
          </ul>
        </nav>
      </header>

      <main className={`${styles.layoutMain} ${fadeIn ? styles.fadeIn : ""} ${mainClass}`}>
        {children}
      </main>

      <footer>
        <p className={styles.copyright}>sqirradotdev</p>
      </footer>
    </>
  )
}