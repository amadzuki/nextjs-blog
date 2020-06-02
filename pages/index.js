import Head from "next/head"
import Link from "next/link"

import Layout, { siteTitle } from "../components/Layout"

import utilStyles from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, my name is Marzuki</p>
        <p>
          I'm experimenting on new framework to upgrade myself. Further reading
          on Next.js doc{" "}
          <a href="https://nextjs.org/docs/getting-started" target="_blank">
            here
          </a>
        </p>
      </section>
      <main>
        <p>
          Read my blog{" "}
          <Link href="./posts/first-post">
            <a>here</a>
          </Link>
        </p>
      </main>
    </Layout>
  )
}
