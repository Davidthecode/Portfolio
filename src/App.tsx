import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Layover from "./components/layover";

function App() {
  return (
    <div className="py-6 px-6 md:px-4 w-full max-w-2xl mx-auto mt-14">
      <Header />
      <Main />
      <Layover />
    </div>
  )
}

export default App;
