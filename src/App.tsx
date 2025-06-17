import AppLayout from "./layout/AppLayout";
import GlobalStyle from "./styles/GlobalStyle";
import Post from "./components/Post";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppLayout>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </AppLayout>
    </>
  );
}

export default App;
