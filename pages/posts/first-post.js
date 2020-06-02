import Link from "next/link"
import Head from "next/head"

import Layout from "../../components/Layout"

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>Blog | First Post</title>
      </Head>
      <h1>The First Post</h1>
      <p>
        use this link to go back{" "}
        <Link href="/">
          <a>home</a>
        </Link>
      </p>
    </Layout>
  )
}

export default FirstPost
