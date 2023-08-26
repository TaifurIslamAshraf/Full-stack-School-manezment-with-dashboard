import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { NavToggle } from "./context/navToggle";
import Routers from "./routers";

function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <BrowserRouter>
      <NavToggle.Provider value={{ isShow, setIsShow }}>
        <Routers />
      </NavToggle.Provider>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
