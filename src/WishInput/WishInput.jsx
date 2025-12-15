import { useState } from "react";

function WishInput({ onNewWish }) {
  const [newWish, setNewWish] = useState("");

  function handleKeyUp(ev) {
    if (ev.key === "Enter" && newWish !== "") {
      const newWishObject = {
        id: Date.now(),
        text: newWish,
        completed: false,
      };
      // insert the new wish object in the parent's array of wishes
      onNewWish(newWishObject);
      setNewWish("");
    }
  }

  return (
    <fieldset className="wish-input">
      <legend className="wish-input__label">New wish:</legend>
      <input
        value={newWish}
        type="text"
        placeholder="My new wish"
        onChange={(ev) => setNewWish(ev.target.value)}
        onKeyUp={handleKeyUp}
      />
    </fieldset>
  );
}

export default WishInput;
