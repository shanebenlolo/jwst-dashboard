import { Suspense } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Canvas, useLoader } from "@react-three/fiber";

import { Home } from "./components/home/Home";
import { SignUp } from "./components/signup/Signup";
import { Login } from "./components/login/Login";
import { Scene } from "./components/scene/Scene";

import "./App.css";

function App() {
  const Jwst = (
    <Canvas>
      <Scene />
    </Canvas>
  );

  return (
    <div className="App">
      <Suspense fallback={null}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="jwst" element={Jwst} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
