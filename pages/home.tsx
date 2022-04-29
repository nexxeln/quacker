import type { NextPage } from "next";
import Head from "next/head";
import Heading from "../components/Home/Heading";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Quacker</title>
        <meta name="description" content="Just quack it!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading />
    </div>
  );
};

export default Home;
