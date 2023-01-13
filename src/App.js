import logo from "./assets/wobot_logo_blue.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";

function App() {
  return (
    <div className=" min-h-screen mx-auto bg-main">
      <Navbar />
      <div className="flex justify-center items-center  pb-28">
        <Card />
      </div>
      <p className="text-center pb-14 text-[#545454] text-sm">
        <a href="https://wobot.ai/terms">Terms of use</a> |{" "}
        <a href="https://wobot.ai/privacy">Privacy policy</a>
      </p>
    </div>
  );
}

export default App;
