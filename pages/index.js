/** @jsx jsx */
import { jsx } from "theme-ui";
import Head from 'next/head';
import Layout from "../components/Layout";
import HeroSection from '../components/HeroSection';
import IngressSection from '../components/IngressSection';
import Products from '../components/Products';

const Home = ({ flowers }) => {
  console.log(flowers);
  return (
    <Layout>
      <Head>
        <title>La Fleur | Home</title>
      </Head>
        <div>
          <HeroSection />
          <IngressSection title={"Our vision"} />
          <Products section={flowers} />
        </div>
    </Layout>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://flowers-mock-data.firebaseio.com/flowers.json')
  const flowers = await res.json()

  // By returning { props: flowers }, the Home component
  // will receive `flowers` as a prop at build time
  return {
    props: {
      flowers,
    },
  }
}

export default Home;