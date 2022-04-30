import { Paper, Text, Title } from "@mantine/core";
import { FC } from "react";
import { PostTypes } from "../../../lib/fetcher";

type PostProps = {
  data: PostTypes;
  lineClamp?: boolean;
};

const Post: FC<PostProps> = ({ data, lineClamp }) => {
  return (
    <>
      <Paper shadow="md" radius="md" p="md" mb="xl" withBorder>
        <Title pb={20} sx={{ lineHeight: 1.15 }}>
          {data.title}
        </Title>
        {lineClamp ? (
          <Text lineClamp={3}>{data.body}</Text>
        ) : (
          <Text>{data.body}</Text>
        )}
      </Paper>
    </>
  );
};

export default Post;
