import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Coffees</a>
        </li>
        <li>
          <a href="">Brewers</a>
        </li>
        <li>
          <a href="" className="featured">
            Specials
          </a>
        </li>
      </ul>
    </nav>
  );
}
