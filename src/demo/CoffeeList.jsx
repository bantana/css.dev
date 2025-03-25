import "./CoffeeList.css";
export default function CoffeeList() {
  return (
    <div>
      <p>Try some of our newest coffees:</p>
      <div className="coffees">
        <a href="/coffees/costa-rica">Costa Rica</a>
        <a href="/coffees/ethiopia">Ethiopia</a>
        <a href="/coffees/guatamala">Guatemala</a>
        <a href="/coffees/kenya">Kenya</a>
        <a href="/coffees/mexico">Mexico</a>
      </div>
    </div>
  );
}
