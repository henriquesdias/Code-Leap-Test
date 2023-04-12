export type PostType = {
  id: number;
  username: string;
  created_datetime: Date | string;
  title: string;
  content: string;
};

export type NewPostType = Omit<PostType, "id" | "created_datetime">;

export type DeletePostState = {
  id: number;
  toDelete: boolean;
};
