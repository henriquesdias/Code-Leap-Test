import { useState } from "react";

import MainScreenStyle from "../styles/Main-Screen-Style";
import CreatePost from "../components/Create-Post";
import Post from "../components/Post";
import useGetPosts from "../hooks/useGetPosts";
import Loading from "../styles/Loading";
import DeletePage from "./Delete-Page";
import { DeletePostState } from "../protocols";

export default function MainScreen() {
  const [postDeleted, setPostDeleted] = useState<DeletePostState>({
    id: 0,
    toDelete: false,
  });
  const { setPosts, posts, isLoading } = useGetPosts();

  return (
    <MainScreenStyle>
      <main>
        <h2>CodeLeap Network</h2>
        <CreatePost setPosts={setPosts} />
        {isLoading ? <Loading /> : <></>}
        {postDeleted.toDelete ? (
          <DeletePage
            setPosts={setPosts}
            posts={posts}
            setPostDeleted={setPostDeleted}
            postDeleted={postDeleted}
          />
        ) : (
          <></>
        )}
        {posts?.map((e, index) => (
          <Post post={e} setPostDeleted={setPostDeleted} key={index} />
        ))}
      </main>
    </MainScreenStyle>
  );
}
