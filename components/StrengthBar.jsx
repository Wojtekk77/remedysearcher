import React, { useState } from "react";

const StrengthBar = ({ strength = 0, onClick, repertorySymptomId }) => {
  const [currentStrength, setCurrentStrength] = useState(strength);

  const handleStrengthClick = (level) => {

    setCurrentStrength(prevState => prevState === level ? 0 : level);
    onClick(repertorySymptomId, level)
  };

  return (
    <div className="strength-bar">
      {[1, 2, 3].map((level) => (
        <div
          key={level}
          className={`strength-bar__segment strength-bar__segment--${level} ${
            currentStrength >= level ? "active" : ""
          }`}
          onClick={() => handleStrengthClick(level)}
        />
      ))}
    </div>
  );
};

export default StrengthBar;