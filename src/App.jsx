import "./App.css";

let wishes = [
  {
    id: 0,
    text: "Been millionaire",
    completed: false,
  },
  {
    id: 1,
    text: "Pass this beautiful subject",
    completed: false,
  },
  {
    id: 2,
    text: "Eat a burger",
    completed: true,
  },
];

function App() {
  return (
    <div className="app">
      <h1>My Wishlist</h1>

      <fieldset className="wish-input">
        <legend className="wish-input__label">New wish:</legend>
        <input type="text" placeholder="My new wish" />
      </fieldset>
      <ul className="wish-list">
        {wishes.map((wish) => (
          <li
            key={wish.id}
            className={`wish-list__item 
              ${wish.completed && "wish-list__item--done"}
              `}
          >
            <input type="checkbox" checked={wish.completed} id={wish.id} />
            <label htmlFor={wish.id}>{wish.text}</label>
          </li>
        ))}
      </ul>
      <button type="button">Archive all wishes</button>
    </div>
  );
}

export default App;
