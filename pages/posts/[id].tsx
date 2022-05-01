import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PostComponent from "../../components/PostPage/PostComponent";

const PostPage: NextPage = () => {
  const [id, setId] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    setId(router.query.id as string);
  }, [router.isReady, router.query.id]);

  return (
    <div>
      <PostComponent id={id} />
    </div>
  );
};

export default PostPage;
