import MainScreenStyle from "../styles/Main-Screen-Style";
import CreatePost from "../components/Create-Post";

export default function MainScreen() {
  return (
    <MainScreenStyle>
      <main>
        <h2>CodeLeap Network</h2>
        <CreatePost />
      </main>
    </MainScreenStyle>
  );
}
