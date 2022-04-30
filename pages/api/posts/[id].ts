import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const numId: number = +id;

  if (req.method === "GET") {
    const post = await getPostById(numId);
    return res.status(200).json(post);
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}

const getPostById = async (id: number) => {
  const post = await prisma.post.findMany({
    where: {
      id: id,
    },
  });

  return post;
};
