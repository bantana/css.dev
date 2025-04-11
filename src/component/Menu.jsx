import "./Menu.css";
function Menu({ items, onSelect }) {
  return (
    <nav className="Menu">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <button onClick={() => onSelect(item)}>{item.label}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
