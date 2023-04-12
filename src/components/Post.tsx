import PostStyle from "../styles/Post-Style";
import { PostType } from "../protocols";
import { IconDelete, IconUpdate } from "../styles/Icons";

interface IPost {
  post: PostType;
  setPostDeleted: Function;
}

export default function Post({ post, setPostDeleted }: IPost) {
  const username = localStorage.getItem("username");
  return (
    <PostStyle>
      <div>
        <h3>{post.title}</h3>
        <div>
          {username === post.username ? (
            <>
              <IconDelete
                onClick={() =>
                  setPostDeleted(() => {
                    return { ...{ id: post.id, toDelete: true } };
                  })
                }
              />
              <IconUpdate />
            </>
          ) : (
            <></>
          )}
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
