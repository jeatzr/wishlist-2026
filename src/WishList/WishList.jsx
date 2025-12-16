import WishItem from "./WishItem";

function WishList({ wishes, setWishes }) {
  function onCompletedChange(checked, wishId) {
    // Copy by value all the wishes in a new array using destructuring
    const tempWishes = [...wishes];
    // Filtering by id and taking the first (and only) element
    const changedWish = tempWishes.filter((wish) => wish.id == wishId)[0];
    changedWish.completed = checked;
    //console.log(tempWishes);
    setWishes(tempWishes);
  }

  return (
    <ul className="wish-list">
      {wishes.map((wish) => (
        <WishItem
          key={wish.id}
          wish={wish}
          onCompletedChange={(checked) => {
            onCompletedChange(checked, wish.id);
          }}
        />
      ))}
    </ul>
  );
}

export default WishList;
