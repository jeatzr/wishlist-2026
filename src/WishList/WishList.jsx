import WishItem from "./WishItem";

function WishList({ wishes, setWishes }) {
  function onCompletedChange(checked, wishId) {
    const tempWishes = [...wishes];
    const changedWish = tempWishes.filter((wish) => wish.id == wishId)[0];
    changedWish.completed = checked;
    console.log(tempWishes);
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
