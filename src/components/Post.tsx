import PostStyle from "../styles/Post-Style";
import { PostType } from "../protocols";
import { IconDelete, IconUpdate } from "../styles/Icons";

interface IPost {
  post: PostType;
}

export default function Post({ post }: IPost) {
  return (
    <PostStyle>
      <div>
        <h3>{post.title}</h3>
        <div>
          <IconDelete />
          <IconUpdate />
        </div>
      </div>
      <div>
        <span>@{post.username}</span>
        <span>25 minutes ago</span>
      </div>
      <div>{post.content}</div>
    </PostStyle>
  );
}
