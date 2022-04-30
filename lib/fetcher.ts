export const postsFetcher = async (
  input: RequestInfo,
  init?: RequestInit
): Promise<PostTypes[]> => {
  const res = await fetch(input, init);
  return res.json();
};

export const postFetcher = async (
  input: RequestInfo,
  init?: RequestInit
): Promise<PostTypes> => {
  const res = await fetch(input, init);
  return res.json();
};

export type PostTypes = {
  id: number;
  title: string;
  body: string;
  hearts: number;
  createdAt: string;
  updatedAt: string;
};
