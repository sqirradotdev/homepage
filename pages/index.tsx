import Layout from "@/components/layout"

import styles from "@/styles/home.module.css"

export default function Home() {
  return (
    <>
      <Layout page="home" fadeIn={false} mainClass={styles.homeLayoutMain}>
        <div className={styles.infobox}>
          <h2>gedehari &bull; Ari the Squirrel</h2>
          <p>Local squirrel who loves programming and technology in general.</p>
          <p>I&apos;m interested in these fields: game developer, backend web developer, DevOps</p>
          <p><i>&quot;Good at programming, bad at everything else.&quot;</i></p>
          <p><i>art: <a href="https://twitter.com/EIectroDev" target="_blank"><i className="bi bi-twitter" /> @EIectroDev</a></i></p>
        </div>
        <img className={styles.halfbody} src="/img/halfbody.png" height={325} alt="Half-body sona art of Ari the Squirrel" />
      </Layout>
    </>
  )
}
