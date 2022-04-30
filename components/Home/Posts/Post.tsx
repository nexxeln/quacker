import { Paper, Text, Title } from "@mantine/core";
import { FC } from "react";
import { PostTypes } from "../../../lib/fetcher";

type PostProps = {
  data: PostTypes;
};

const Post: FC<PostProps> = ({ data }) => {
  return (
    <>
      <Paper shadow="md" radius="md" p="md" mb="xl" withBorder>
        <Title pb={20} sx={{ lineHeight: 1.15 }}>
          {data.title}
        </Title>
        <Text lineClamp={3}>{data.body}</Text>
      </Paper>
    </>
  );
};

export default Post;
