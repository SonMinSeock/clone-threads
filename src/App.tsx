import AppLayout from "./layout/AppLayout";
import GlobalStyle from "./styles/GlobalStyle";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppLayout>
        <Home />
      </AppLayout>
    </>
  );
}

export default App;
