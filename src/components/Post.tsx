import PostStyle from "../styles/Post-Style";
import { PostType } from "../protocols";
import { IconDelete, IconUpdate } from "../styles/Icons";
import { genereteTimeDifference } from "../utils";

interface IPost {
  post: PostType;
  setChangePost: Function;
}

export default function Post({ post, setChangePost }: IPost) {
  const username = localStorage.getItem("username");
  const minutesPassed = genereteTimeDifference(post.created_datetime);

  return (
    <PostStyle>
      <div>
        <h3>{post.title}</h3>
        <div>
          {username === post.username ? (
            <>
              <IconDelete
                onClick={() =>
                  setChangePost(() => {
                    return {
                      ...{ id: post.id, toDelete: true, toUpdate: false },
                    };
                  })
                }
              />
              <IconUpdate
                onClick={() =>
                  setChangePost(() => {
                    return {
                      ...{ id: post.id, toDelete: false, toUpdate: true },
                    };
                  })
                }
              />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div>
        <span>@{post.username}</span>
        <span>
          {minutesPassed >= 60
            ? `${Math.floor(minutesPassed / 60)} hours ago`
            : `${minutesPassed}  minutes ago`}
        </span>
      </div>
      <div>{post.content}</div>
    </PostStyle>
  );
}
