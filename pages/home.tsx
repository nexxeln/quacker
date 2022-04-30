import { Container } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Heading from "../components/Home/Heading";
import PostButton from "../components/Home/PostButton";
import Post from "../components/Home/Posts/Post";

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
      <Container mx="auto" pt="xl"></Container>
    </div>
  );
};

export default Home;
