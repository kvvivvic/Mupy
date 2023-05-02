import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { AuthContext } from "./context/AuthContext";

function App() {
  const userInfo = useContext(AuthContext);
  console.log(userInfo);

  return (
    <div className=" max-w-screen-2xl mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
