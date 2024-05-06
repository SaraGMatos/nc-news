import { useState } from "react";

function Expandable({ children }) {
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <button className="expandable-button" onClick={toggleHidden}>
        {isHidden ? "View comments" : "Hide comments"}
      </button>
      {!isHidden && children}
    </>
  );
}

export default Expandable;
