import { Button, createStyles } from "@mantine/core";
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
      <Button variant="outline" fullWidth color="indigo">
        Post
      </Button>
    </div>
  );
};

export default PostButton;
