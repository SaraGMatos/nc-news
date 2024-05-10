import Lottie from "lottie-react";
import PinWheel from "../assets/PinWheel.json";

function LoadingPage({ message }) {
  return (
    <div className="loading-page-section">
      <h2 className="loading-text">Page loading, please wait...</h2>
      <div className="loading-animation">
        <Lottie
          className="pin-wheel-animation"
          animationData={PinWheel}
          loop={true}
        ></Lottie>
      </div>
      <h2 className="loading-text">{message}</h2>
    </div>
  );
}

export default LoadingPage;
