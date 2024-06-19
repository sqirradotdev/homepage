import Layout from "@/components/layout"

import styles from "@/styles/about.module.css"

export default function AboutMe() {
  return (
    <>
      <Layout page="about me">
        <h1>Greetings! <i>Selamat Datang!</i></h1>
        <p>My name is Ari and I do programming and game dev as a hobby, and perhaps as a job in the future.</p>
        <p>Welcome to my personal homepage! It serves as an index for my existence in the internet, and also documenting my journeys in programming.</p>
        <p>Want to contact me?</p>
        <ul>
          <li><i className="bi bi-envelope-fill" /> harikr<span className={styles.doNotSpamMePleaseThankYou} aria-hidden="true">i dont know if this thing works lmao</span>esnagede (at) gm<span className={styles.doNotSpamMePleaseThankYou} aria-hidden="true">adding it here for good measure</span>ail (dot) com</li>
          <li><i className="bi bi-discord" /> sqirradotdev</li>
        </ul>
        <p>You can also find me on these sites.</p>
        <ul>
          <li><a href="https://github.com/sqirradotdev" target="_blank"><i className="bi bi-github" /> sqirradotdev</a></li>
          <li><a href="https://twitter.com/sqirradotdev" target="_blank"><i className="bi bi-twitter" /> @sqirradotdev</a></li>
          <li><a href="https://www.instagram.com/gedehari/" target="_blank"><i className="bi bi-instagram" /> @gedehari</a></li>
          <li><a href="https://www.linkedin.com/in/i-gede-hari-kresna-wiyasa-682316175/" target="_blank"><i className="bi bi-linkedin" /> I Gede Hari Kresna Wiyasa</a></li>
        </ul>
        <p>Thank you for visiting!</p>
      </Layout>
    </>
  )
}
