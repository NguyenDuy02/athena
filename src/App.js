import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.scss";
import { Header } from "./components/Header";
import { Routers } from "./components/Routers";
import { React }  from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />

          <Routers />

          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
