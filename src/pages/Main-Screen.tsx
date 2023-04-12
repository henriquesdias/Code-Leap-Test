import { useState } from "react";

import MainScreenStyle from "../styles/Main-Screen-Style";
import CreatePost from "../components/Create-Post";
import Post from "../components/Post";
import useGetPosts from "../hooks/useGetPosts";
import Loading from "../styles/Loading";
import DeletePage from "./Delete-Page";
import { ChangePostState } from "../protocols";
import UpdatePage from "./Update-Page";

export default function MainScreen() {
  const [changePost, setChangePost] = useState<ChangePostState>({
    id: 0,
    toDelete: false,
    toUpdate: false,
  });
  const { setPosts, posts, isLoading } = useGetPosts();

  return (
    <MainScreenStyle>
      <main>
        <h2>CodeLeap Network</h2>
        <CreatePost setPosts={setPosts} />
        {isLoading ? <Loading /> : <></>}
        {changePost.toDelete ? (
          <DeletePage
            setPosts={setPosts}
            setChangePost={setChangePost}
            changePost={changePost}
          />
        ) : (
          <></>
        )}
        {changePost.toUpdate ? (
          <UpdatePage
            setChangePost={setChangePost}
            setPosts={setPosts}
            changePost={changePost}
          />
        ) : (
          <></>
        )}
        {posts?.map((e, index) => (
          <Post post={e} setChangePost={setChangePost} key={index} />
        ))}
      </main>
    </MainScreenStyle>
  );
}
