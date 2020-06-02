import Head from "next/head"

import dayjs from "dayjs"
// import customParseFormat from "dayjs/plugin/customParseFormat"
// dayjs.extend(customParseFormat)

import Layout from "../../components/Layout"
import { getAllPostIds, getPostData } from "../../lib/posts"

const Post = ({ postData }) => {
  const postDate = dayjs(postData.date).format("MMMM D, YYYY")
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div style={{ maxWidth: "70%", margin: "auto" }}>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postDate}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </div>
    </Layout>
  )
}

export default Post

export const getStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
