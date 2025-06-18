import AppLayout from "./layout/AppLayout";
import GlobalStyle from "./styles/GlobalStyle";
import Post from "./components/Post";

function App() {
  const postList = Array.from({ length: 9 }); // 더미, 테스트용
  return (
    <>
      <GlobalStyle />
      <AppLayout>
        {postList.map((_, i) => (
          <Post key={i} />
        ))}
      </AppLayout>
    </>
  );
}

export default App;
