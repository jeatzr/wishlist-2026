import { useState, useEffect } from "react";

function WishItem({ wish, onCompletedChange }) {
  const [age, setAge] = useState(0);

  useEffect(() => {
    // Capture the value of wish.completed at this moment
    const completedValue = wish.completed;
    console.log("effect", completedValue);

    // Variable for the interval; belongs to THIS effect execution
    let ageInterval;

    // If the wish is not completed, start an interval to increase age
    if (!completedValue) {
      ageInterval = setInterval(() => {
        setAge((currentAge) => currentAge + 1); // functional update
      }, 1000);
    }

    // Cleanup runs when:
    // 1. The component unmounts
    // 2. OR wish.completed changes (before the next effect)
    return () => {
      console.log("cleanup", completedValue);

      // Only stop the interval and reset age if we were counting
      if (!completedValue) {
        clearInterval(ageInterval); // stop the timer
        setAge(0); // reset age because counting stopped
      }
    };
  }, [wish.completed]); // Re-run the effect every time wish.completed changes

  return (
    <li
      className={`wish-list__item 
              ${wish.completed && "wish-list__item--done"}
              ${age >= 5 && age < 10 && "wish-list__item--warn"}
              ${age >= 10 && "wish-list__item--danger"}
              `}
    >
      <input
        type="checkbox"
        checked={wish.completed}
        id={wish.id}
        onChange={(e) => onCompletedChange(e.target.checked)}
      />
      <label htmlFor={wish.id}>{wish.text}</label>
    </li>
  );
}

export default WishItem;
