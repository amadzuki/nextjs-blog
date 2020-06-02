import Layout from "../../components/Layout"
import { getAllPostIds, getPostData } from "../../lib/posts"

const Post = ({ postData }) => {
  return (
    <Layout>
      <div style={{ maxWidth: "70%", margin: "auto" }}>
        {" "}
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
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
