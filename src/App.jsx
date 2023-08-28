import "./App.css";
import Home from "./components/Home/Home";
import Shortener from "./components/Shortener/Shortener";
import Statistics from "./components/Statistics/Statistics";
import Header from "./components/header/Header";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <Statistics />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
