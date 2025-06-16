import AppLayout from "./layout/AppLayout";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppLayout>
        <div className="App">
          <h1>Hello Threads Clone!</h1>
        </div>
      </AppLayout>
    </>
  );
}

export default App;
