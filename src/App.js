import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Router from "./router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
