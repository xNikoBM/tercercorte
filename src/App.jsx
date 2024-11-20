import { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Perfil from "./routes/Perfil";
import LayoutRedirect from "./Components/Layout/LayaoutRedirect";
import NotFound from "./routes/NotFound";

import Navbar from "./Components/Navbar";
import RequireAuth from "./Components/Layout/RequireAuth";
import "./App.css";
import Register from "./routes/Register";
import { UserContext } from "./context/UserProvider";
import LayoutContainerForm from "./Components/Layout/LayoutContainerForm";

function App() {
  const { user } = useContext(UserContext);

  if (user === false) {
    return <p>loading user............</p>;
  }

  return (
    <>
      <Navbar />
      <h1>APP</h1>

      <Routes>
        <Route path="/" element={<RequireAuth />}>
          <Route index element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
        </Route>
        <Route path={"/"} element={<LayoutContainerForm />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>

        <Route path="/:nanoid" element={<LayoutRedirect />}>
          <Route index element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
