import { useState } from "react";
import Content from "./components/Content";

function App() {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      className="bg-neutral-800 w-screen h-screen flex items-center justify-center"
      onMouseMove={(e) => {
        setMousePos({
          x:e.pageX,
          y:e.pageY
        })
      }}
    >
      <Content />
      <div style={{left:mousePos.x, top:mousePos.y}} className="absolute rounded-full shadow-[0_0_4rem_4rem_rgba(255,255,255,0.2)]">
      </div>
    </div>
  );
}

export default App;
