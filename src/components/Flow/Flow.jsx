import "./Flow.css";
import incomeIcon from "../../assets/icons/income.svg";
import outcomeIcon from "../../assets/icons/outcome.svg";

const Flow = () => {
  return (
    <div className="flow">
      <div className="flow-box income">
        <div className="income-icon">
          <img src={incomeIcon} alt="" />
        </div>
        <div className="income-fig">
          <p>Total Income</p>
          <h3>$632.00</h3>
        </div>
        <div className="rate">
          <p>+1.29%</p>
        </div>
      </div>

      <div className="flow-box outcome">
        <div className="outcome-icon">
          <img src={outcomeIcon} alt="" />
        </div>
        <div className="outcome-fig">
          <p>Total Outcome</p>
          <h3>$239.30</h3>
        </div>
        <div className="rate">
          <p>-3.91%</p>
        </div>
      </div>
    </div>
  );
};
export default Flow;
