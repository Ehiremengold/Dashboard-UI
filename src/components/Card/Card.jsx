import "./Card.css";
import card from "../../assets/images/card.svg";

const Card = () => {
  return (
    <section className="card">
      <h1>My Card</h1>
      <div className="card-balance">
        <p>Card Balance</p>
        <h3>$5,750.20</h3>
      </div>
      <img src={card} alt="" />
      <div className="manage-transfer">
        <div className="manage">Manage</div>
        <div className="transfer">Transfer</div>
      </div>
    </section>
  );
};
export default Card;
