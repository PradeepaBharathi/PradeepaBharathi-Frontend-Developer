import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/Home";
import Create from "./components/creations/Create";
import Working from "./components/working/Working";
import Tag from "./components/tag/Tag";
import Nav from "./components/nav/Nav";

import Tokenomics from "./components/Tokenomics/Tokenomics";
import Features from "./components/features/Features";
import Roadmap1 from "./components/roadmap/Roadmap1";
import Roadmap2 from "./components/roadmap/Roadmap2";
import Roadmap3 from "./components/roadmap/Roadmap3";
import Filler from "./components/Filler/Filler";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div className="app bg-gradient-to-b from-black to-customColor min-h-screen w-full">
      <Nav />
      <Home/>
      <Create/>
      <Working/>
      <Tag/>
      <Features/>
      <Tokenomics/>
      <Roadmap1/>
      <Roadmap2/>
      <Roadmap3 />
      <Filler/>
      <Contact/>
      
    </div>
  );
}

export default App;
