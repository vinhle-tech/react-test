import "./App.css";
import { Button } from "./components/common/Button";
import Footer from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Button variant={"primary"}>Them vao gio hang</Button>
      <Button variant={"secondary"}>Mua hang ngay</Button>
      <Button variant={"secondary"} disabled>
        Nut ko the kich hoat
      </Button>

      <Footer />
    </>
  );
}

export default App;
