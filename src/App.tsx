import React from "react";
import Slider from "./components/Slider/Slider";

function App() {
  const slides = [
    {
      img: "https://picsum.photos/id/100/900/500",
      text: "Caption Text 1",
    },
    {
      img: "https://picsum.photos/id/1000/900/500",
      text: "Caption Text 2",
    },
    {
      img: "https://picsum.photos/id/101/900/500",
      text: "Caption Text 3",
    },
    {
      img: "https://picsum.photos/id/1014/900/500",
      text: "Caption Text 4",
    },
    {
      img: "https://picsum.photos/id/1026/900/500",
      text: "Caption Text 5",
    },
  ];
  return (
    <div className="container">
      <Slider
        slides={slides}
        navs={true}
        loop={true}
        pags={true}
        auto={true}
        stopMouseHover={true}
        delay={3}
      />
    </div>
  );
}

export default App;
