import Header from "./Header";
import Lottie from "lottie-react";
import notFoundAnimation from "../assets/notFoundAnimation.json";

function ErrorPage() {
  return (
    <>
      <Header />
      <section className="error-page-section">
        <h2>Oops, nothing to see here!</h2>
        <div className="not-found-animation">
          <Lottie animationData={notFoundAnimation} loop={true} />
        </div>
        <h2>Time to navigate back...</h2>
      </section>
    </>
  );
}

export default ErrorPage;
