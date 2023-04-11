import MainScreenStyle from "../styles/Main-Screen-Style";
import CreatePost from "../components/Create-Post";
import Post from "../components/Post";
import useGetPosts from "../hooks/useGetPosts";
import Loading from "../styles/Loading";

export default function MainScreen() {
  const { setPosts, posts, isLoading } = useGetPosts();

  return (
    <MainScreenStyle>
      <main>
        <h2>CodeLeap Network</h2>
        <CreatePost />
        {isLoading ? <Loading /> : <></>}
        {posts?.map((e, index) => (
          <Post post={e} key={index} />
        ))}
      </main>
    </MainScreenStyle>
  );
}
