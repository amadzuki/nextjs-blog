import Head from "next/head"
import Link from "next/link"

import Layout, { siteTitle } from "../components/Layout"

import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from "../lib/posts"

export default function Home({ allPostsData }) {
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => {
            return (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            )
          })}
        </ul>
      </section>
      <main>
        <p>
          Read my hard coded blog{" "}
          <Link href="./posts/first-post">
            <a>here</a>
          </Link>
        </p>
      </main>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
