export const postFetcher = async (
  input: RequestInfo,
  init?: RequestInit
): Promise<Post[]> => {
  const res = await fetch(input, init);
  return res.json();
};

export type Post = {
  id: number;
  title: string;
  body: string;
  hearts: number;
  createdAt: string;
  updatedAt: string;
};
