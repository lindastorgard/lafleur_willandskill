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

// Called at build time
export async function getStaticProps() {
  const res = await fetch('https://flowers-mock-data.firebaseio.com/flowers.json')
  const flowers = await res.json()

  return {
    props: {
      flowers,
    },
  }
}

export default Home;