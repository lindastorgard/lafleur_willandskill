/** @jsx jsx */
import { jsx } from "theme-ui";
import Head from 'next/head';
import { useRouter } from 'next/router'
import Layout from "../../components/Layout";
import IngressSection from '../../components/IngressSection';
import SingleProduct from '../../components/SingleProduct';
import Comments from '../../components/Comments';

const FlowerDetails = ({ flower }) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <Head>
        <title>La Fleur | Flowers we love</title>
      </Head>
      <SingleProduct flower={flower}/>
      <IngressSection title={"Comments"} />
      <Comments id={id}/>
    </Layout>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch('https://flowers-mock-data.firebaseio.com/flowers.json')
  const flowers = await res.json()
  const paths = flowers.map((flower, id) => `/flower/${id}`)

  return { paths, fallback: false }
};

// This also gets called at build time
export async function getStaticProps({ params }) {
  const res = await fetch(`https://flowers-mock-data.firebaseio.com/flowers/${params.id}.json`)
  const flower = await res.json()
  console.log(flower)

  return { props: { flower } }
};

export default FlowerDetails;