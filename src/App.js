import Home from "./pages/home";
import Navbar from "./components/navbar";
import Shots from "./pages/shots";
import "./css/main.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pageContainer">
      <Home />
      <Shots />
      </div>
      
      
    </div>
  );
}

export default App;
