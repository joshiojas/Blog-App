export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type Post = {
  id: number;
  title: string;
  content: string;
  authorId: number;
  url: string;
};
