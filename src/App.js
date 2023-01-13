import logo from "./assets/wobot_logo_blue.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Card from "./Components/Card/Card";

function App() {
  return (
    <div className="max-w-screen-2xl min-h-screen mx-auto bg-main">
      <Navbar />
      <div className="flex justify-center items-center pt-40 pb-28">
        <Card />
      </div>
      <p className="text-center pb-14 text-[#545454] text-sm">
        Terms of use | Privacy policy
      </p>
    </div>
  );
}

export default App;
