import "./App.css";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  return (
    <div className="bg-white dark:bg-[#09090B]">
      <div className="py-6 px-6 md:px-4 w-full max-w-2xl mx-auto pt-14 text-black dark:text-white">
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App;
