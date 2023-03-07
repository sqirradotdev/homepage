import Layout from "@/components/layout"
import Image from "next/image"
import Link from "next/link"

import styles from "@/styles/home.module.css"

export default function Home() {
  return (
    <>
      <Layout page="home">
        <div className={styles.homeProfile}>
          <h3>gedehari &bull; Ari the Squirrel</h3>
          <Image className={styles.avatar} src="/img/avatar.png" alt="Avatar" width={200} height={200} />
          <p>icon: <a href="https://twitter.com/Iku_Aldena" target="_blank"><i className="bi bi-twitter" /> @Iku_Aldena</a></p>
        </div>

        <h2 className={styles.heading}>I code in:</h2>
        <div className={styles.languageIconsList}>
          <img src="/img/languages/c.svg" />
          <img src="/img/languages/cpp.svg" />
          <img src="/img/languages/javascript.svg" />
          <img src="/img/languages/typescript.svg" />
          <img src="/img/languages/haxe.svg" />
          <img src="/img/languages/godot.svg" />
          <img src="/img/languages/kotlin.svg" />
        </div>

        <h2 className={styles.heading}>Find me in:</h2>
        <div className={styles.socialIconsList}>
          <a href="https://github.com/gedehari" target="_blank"><i className="bi bi-github" /></a>
          <a href="https://twitter.com/gedehari" target="_blank"><i className="bi bi-twitter" /></a>
          <a href="https://www.instagram.com/gedehari/" target="_blank"><i className="bi bi-instagram" /></a>
        </div>
      </Layout>
    </>
  )
}
