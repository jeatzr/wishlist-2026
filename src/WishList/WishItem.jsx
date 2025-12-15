function WishItem({ wish, onCompletedChange }) {
  return (
    <li
      className={`wish-list__item 
              ${wish.completed && "wish-list__item--done"}
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
