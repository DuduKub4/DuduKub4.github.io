import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contador from "./components/Contador";

const App = () => {

  const [darkmode, setDarkMode] = useState(false);

  const alterarDarkMode = () =>{
    setDarkMode(darkMode);
};


  return(
    <div className={darkmode ? "modo-escuro" : "">
      <Header />
      <Contador/> 
      <button onClick={alterarDarkMode}>Alterar</button>
      <Footer />
    </div>
  );
};
export default App;