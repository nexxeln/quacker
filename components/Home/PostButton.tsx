import { Button, createStyles } from "@mantine/core";
import Link from "next/link";
import React from "react";

const useStyles = createStyles(() => ({
  button: {
    width: "40%",
    margin: "0 auto",
    marginTop: 10,
  },
}));

const PostButton = () => {
  const { classes, cx } = useStyles();
  return (
    <div className={classes.button}>
      <Link passHref href="/create">
        <Button component="a" variant="outline" fullWidth color="indigo">
          Create Post
        </Button>
      </Link>
    </div>
  );
};

export default PostButton;
