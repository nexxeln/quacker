import type { NextPage } from "next";
import Head from "next/head";
import { Title } from "@mantine/core";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Quacker</title>
        <meta name="description" content="Just quack it!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title align="center" order={1}>
        Quack
      </Title>
    </div>
  );
};

export default Home;
