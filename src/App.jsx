import { Header, About, Footer, Skills, Work } from "./container";
// import Header from "./container/Header"
import { Navbar } from "./components";
import "./sass/main.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Footer />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
