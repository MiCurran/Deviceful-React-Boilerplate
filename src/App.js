import React, { useEffect, useRef } from "react";
import Deviceful from "deviceful";
import "./App.css";
import { ArrowUp, ArrowDown } from "react-bootstrap-icons";

function App() {
  const parent = useRef();
  const device = new Deviceful({
    screenshot: "stripe.png", // stripeMobile.png if using phone device
    screenshotHeight: 6494, // 8442 for mobile screenshot
    path: "./deviceful",
    device: "laptop", // can be changed to "phone"
    scrollOnLoad: { direction: "down", duration: 8000 },
    initialDeviceRotation: -25,
  });

  useEffect(() => {
    device.mount(parent.current);
  });

  return (
    <>
      <div ref={parent} className="laptop"></div>

      <div className="flex">
        <button onClick={() => device.swivel()}>Swivel</button>
        <button onClick={() => device.swivel({ to: 0 })}>Center</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>
          SCROLL UP
          <ArrowUp
            onClick={() => device.scroll({ direction: "up", duration: 10000 })}
          />
        </h2>
        <h2>
          SCROLL DOWN
          <ArrowDown
            onClick={() =>
              device.scroll({ direction: "down", duration: 10000 })
            }
          />
        </h2>
      </div>
    </>
  );
}

export default App;
