import Header from "./Header";
import Lottie from "lottie-react";
import notFoundAnimation from "../assets/notFoundAnimation.json";

function ErrorPage() {
  return (
    <>
      <Header />
      <section className="error-page-section">
        <h2>Oops, the page does not exist!</h2>
        <div className="not-found-animation">
          <Lottie animationData={notFoundAnimation} loop={true} />
        </div>
      </section>
    </>
  );
}

export default ErrorPage;
