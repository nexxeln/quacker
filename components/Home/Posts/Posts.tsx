import { FC } from "react";
import useSWR from "swr";
import { PostTypes, postFetcher } from "../../../lib/fetcher";
import Post from "./Post";

const Card = ({ data }: any) => {
  return (
    <div>
      {/* @ts-ignore */}
      {data?.map((post, index) => (
        <Post key={index} data={post} />
      ))}
    </div>
  );
};

const Posts: FC = () => {
  const { data } = useSWR("/api/posts", postFetcher);
  return (
    <>
      <Card data={data} />
    </>
  );
};

export default Posts;
