import "./App.css";
import Navbar from "./components/navbar";
import Main from "./components/main";

function App() {
  return (
    <div className="py-6 px-6 md:px-4 w-full max-w-3xl mx-auto">
      <Navbar />
      <Main />
    </div>
  )
}

export default App;
