import { Header, About, Footer, Skills, Work } from "./container";
// import Header from "./container/Header"
import { Navbar } from "./components";
import "./sass/main.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      {/* <About /> */}
      <Work />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
