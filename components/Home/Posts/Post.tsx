import { Paper, Text, Title } from "@mantine/core";
import { FC } from "react";

type PostProps = {
  title: string;
  body: string;
  hearts: number;
  createdAt: string;
};

const Post: FC<PostProps> = ({ title, body, hearts, createdAt }) => {
  return (
    <>
      <Paper shadow="md" radius="md" p="md" mb="xl" withBorder>
        <Title pb={20} sx={{ lineHeight: 1.15 }}>
          {title}
        </Title>
        <Text lineClamp={3}>{body}</Text>
      </Paper>
    </>
  );
};

export default Post;
