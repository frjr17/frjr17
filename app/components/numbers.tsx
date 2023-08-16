import { numbers } from "../lib/data";

export default function Numbers() {
  return (
    <section id="numbers" className="s-numbers">
      <div className="row counter-items">
        {numbers.map((number) => {
          return (
            <div key={number.name} className="column counter-items__item">
              <div className="num">
                {number.number}
                <span>+</span>
              </div>
              <h5>{number.name}</h5>
              <p>{number.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
