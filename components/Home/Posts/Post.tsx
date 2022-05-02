import { Modal, Paper, Text, Title } from "@mantine/core";
import { FC, useState } from "react";
import { PostTypes } from "../../../lib/fetcher";

type PostProps = {
  data: PostTypes;
  lineClamp?: boolean;
};

const Post: FC<PostProps> = ({ data, lineClamp }) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Paper
        shadow="md"
        radius="md"
        p="md"
        mb="xl"
        withBorder
        onClick={() => setOpened(true)}
        sx={{
          cursor: "pointer",
        }}
      >
        <Title pb={20} sx={{ lineHeight: 1.15 }}>
          {data.title}
        </Title>
        {lineClamp ? (
          <Text lineClamp={3}>{data.body}</Text>
        ) : (
          <Text>{data.body}</Text>
        )}
      </Paper>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size="xl"
        centered
        overflow="inside"
        transition="fade"
        transitionDuration={300}
        transitionTimingFunction="ease"
        styles={{
          title: { fontWeight: "bold", fontSize: "2.5rem" },
        }}
        title={data.title}
      >
        <Text>{data.body}</Text>
      </Modal>
    </>
  );
};

export default Post;
