import { FC } from "react";
import { postFetcher } from "../../lib/fetcher";
import Post from "../Home/Posts/Post";
import useSWR from "swr";
import Heading from "../Home/Heading";
import { Container } from "@mantine/core";

const PostComponent: FC<{ id: string | string[] | undefined }> = ({ id }) => {
  const { data } = useSWR(`/api/posts/${id}`, postFetcher);

  return (
    <div>
      <Heading />
      <Container mx="auto" my={25}>
        <Post data={data!} />
      </Container>
    </div>
  );
};

export default PostComponent;
