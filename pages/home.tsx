import { Container } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Heading from "../components/Home/Heading";
import PostButton from "../components/Home/PostButton";
import Posts from "../components/Home/Posts/Posts";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Quacker</title>
        <meta name="description" content="Just quack it!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading />
      <PostButton />
      <Container mx="auto" pt="xl">
        <Posts />
      </Container>
    </div>
  );
};

export default Home;
