import { ReactNode } from "react"

import Link from "next/link"
import Head from "next/head"

import styles from "./layout.module.css"

interface LayoutProps {
  children: ReactNode
  page: "home" | "about me" | "projects" | "blog"
  customTitle?: string
}

export default function Layout({ children, page, customTitle }: LayoutProps) {
  let title = `${customTitle || page} - gedehari's homepage`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>
      <header>
        <nav className={styles.navbar}>
          <ul>
            <li className={page == "home" ? styles.currentPage : ""}><Link href="/">index</Link></li>
            <li className={page == "about me" ? styles.currentPage : ""}><Link href="/about">about me</Link></li>
            <li className={page == "projects" ? styles.currentPage : ""}><Link href="/projects">projects</Link></li>
            <li className={page == "blog" ? styles.currentPage : ""}><Link href="/blog">blog</Link></li>
          </ul>
        </nav>
      </header>
      <main className={`${styles.layoutMain} ${page == "home" ? styles.layoutMainHome : ""}`}>
        {children}
      </main>

      <footer>
        <p className={`${styles.copyright} ${page == "home" ? styles.copyrightHome : ""}`}><b>2023</b> - gedehari</p>
      </footer>
    </>
  )
}