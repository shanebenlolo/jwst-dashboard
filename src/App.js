import { Suspense } from "react";
import { Navbar } from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import { Canvas, useLoader } from "@react-three/fiber";

import { Home } from "./components/home/Home";
import { SignUp } from "./components/signup/Signup";
import { Login } from "./components/login/Login";
import { JwstScene } from "./components/jwst-visualization/scene/JwstScene";
import { WebGL } from "./components/webgl-visualization/WebGL";

import "./App.css";

function App() {
  const Jwst = (
    <Canvas>
      <JwstScene />
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
          <Route path="webgl" element={<WebGL />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
