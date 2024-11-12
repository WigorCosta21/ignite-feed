export type IPost = {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: Content[];
  publishedAt: Date;
};

type Content = {
  type: "paragraph" | "link";
  content: string;
};
