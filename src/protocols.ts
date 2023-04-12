export type PostType = {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
};

export type NewPostType = Omit<PostType, "id" | "created_datetime">;

export type UpdatePostType = Omit<
  PostType,
  "id" | "username" | "created_datetime"
>;

export type ChangePostState = {
  id: number;
  toDelete: boolean;
  toUpdate: boolean;
};
