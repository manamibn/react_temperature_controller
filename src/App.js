import { useState } from "react";
import "./App.css";

const bannerTexts = {
  cold: "I can't feel my body!!!",
  freezing: "I'm freezing!",
  frozen: "Deadly!",
  zero: "It's so cold!",
  pleasant: "It's pleasant!",
  warm: "Strted to get warmer, huh!",
  hot: "Damn, It's so hot!",
  burning: "Are we inside a volcano!",
};

function App() {
  const [tempValue, setTempValue] = useState(15);
  const [bannerTextValue, setBannerTextValue] = useState(
    bannerTexts["pleasant"]
  );
  const [backgroundColor, setBackgroundColor] = useState("pleasant");

  const tempFuntion = (tempValue) => {
    if (tempValue >= -5 && tempValue <= 7) {
      setBackgroundColor("zero");
      setBannerTextValue(bannerTexts["zero"]);
    } else if (tempValue >= 8 && tempValue <= 15) {
      setBackgroundColor("pleasant");
      setBannerTextValue(bannerTexts["pleasant"]);
    } else if (tempValue >= 16 && tempValue <= 25) {
      setBackgroundColor("warm");
      setBannerTextValue(bannerTexts["warm"]);
    } else if (tempValue >= 26 && tempValue <= 40) {
      setBackgroundColor("hot");
      setBannerTextValue(bannerTexts["hot"]);
    } else if (tempValue >= 41 && tempValue <= 50) {
      setBackgroundColor("burning");
      setBannerTextValue(bannerTexts["burning"]);
    } else if (tempValue >= -15 && tempValue <= -6) {
      setBackgroundColor("cold");
      setBannerTextValue(bannerTexts["cold"]);
    } else if (tempValue >= -30 && tempValue <= -16) {
      setBackgroundColor("freezing");
      setBannerTextValue(bannerTexts["freezing"]);
    } else if (tempValue >= -50 && tempValue <= -31) {
      setBackgroundColor("frozen");
      setBannerTextValue(bannerTexts["frozen"]);
    }
  };

  const increaseTemp = () => {
    setTempValue(tempValue + 1);
    tempFuntion(tempValue + 1);
    console.log("tempValue--", tempValue + 1);

    if (tempValue >= 50) {
      return setTempValue(50);
    }
  };

  const decreaseTemp = () => {
    setTempValue(tempValue - 1);
    tempFuntion(tempValue - 1);
    console.log("tempValue--", tempValue - 1);

    if (tempValue <= -50) {
      return setTempValue(-50);
    }
  };

  return (
    <div className={`app-container ${backgroundColor}`}>
      <div className="banner-text-container">{bannerTextValue}</div>
      <div className="button-temp-wrapper">
        <div className="button-container">
          <div className="button1" onClick={decreaseTemp}>
            -
          </div>
        </div>
        <div className="temperature-display-container">{tempValue} &deg;C</div>
        <div className="button-container">
          <div className="button2" onClick={increaseTemp}>
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
