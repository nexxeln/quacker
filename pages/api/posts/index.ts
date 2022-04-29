import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    return await getPosts(req, res);
  } else if (req.method === "POST") {
    return await createPost(req, res);
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}

async function getPosts(req: NextApiRequest, res: NextApiResponse) {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json(posts);
  } catch (error) {
    console.error("Request error", error);
    return res.status(500).json({ error: "Error fetching posts" });
  }
}

async function createPost(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;

  try {
    const newEntry = await prisma.post.create({
      data: {
        body: body.body,
        title: body.title,
      },
    });

    return res.status(200).json(newEntry);
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating post" });
  }
}
