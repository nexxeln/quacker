import { useState } from "react";
import { useRouter } from "next/router";
import { Button, Textarea, TextInput } from "@mantine/core";

const PostInput = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleClick = async () => {
    if (title.length > 35) {
      return setError("Title must be less than 35 characters");
    }

    await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: body,
      }),
    });

    setTitle("");
    setBody("");

    router.push("/home");
  };

  return (
    <>
      <TextInput
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setError("");
        }}
        label="Title"
        required
        error={error}
        mx={20}
        my={10}
      />
      <Textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        label="Body"
        autosize
        minRows={15}
        required
        mx={20}
        my={10}
      />

      <Button onClick={handleClick} variant="light" mx={20} my={10}>
        Submit
      </Button>
    </>
  );
};

export default PostInput;
