import Layout from "@/components/layout"

export default function AboutMe() {
  return (
    <>
      <Layout page="about me">
        <h1>Greetings! <i>Selamat Datang!</i></h1>
        <p>My name is Hari. I do programming and game dev as a hobby, and perhaps as a job in the future.</p>
        <p>Welcome to my personal homepage! It serves as an index for my existence in the internet, and also documenting most of my journeys in programming.</p>
        <p>Want to contact me?</p>
        <ul>
          <li><i className="bi bi-envelope-fill" /> harikresnagede (at) gmail (dot) com</li>
          <li><i className="bi bi-discord" /> Ari the Squirrel#1520</li>
        </ul>
        <p>You can also find me on these sites.</p>
        <ul>
          <li><a href="https://github.com/gedehari" target="_blank"><i className="bi bi-github" /> gedehari</a></li>
          <li><a href="https://twitter.com/gedehari" target="_blank"><i className="bi bi-twitter" /> @gedehari</a></li>
          <li><a href="https://www.instagram.com/gedehari/" target="_blank"><i className="bi bi-instagram" /> @gedehari</a></li>
          <li><a href="https://www.linkedin.com/in/i-gede-hari-kresna-wiyasa-682316175/" target="_blank"><i className="bi bi-linkedin" /> I Gede Hari Kresna Wiyasa</a></li>
        </ul>
        <p>Thank you for visiting!</p>
      </Layout>
    </>
  )
}
