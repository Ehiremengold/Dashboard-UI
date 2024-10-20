import "./Transactions.css";
import aeIcon from "../../assets/icons/ae.svg";
import mdIcon from "../../assets/icons/md.svg";
import leviIcon from "../../assets/icons/levi.svg";

const Transactions = () => {
  const data = [
    {
      logo: aeIcon,
      company: "After Effect",
      date: "Jul 4",
      amount: "$35.69",
      status: "Debit",
    },
    {
      logo: mdIcon,
      company: "Mcdonald's",
      date: "Sep 25",
      amount: "$16.34",
      status: "Debit",
    },
    {
      logo: leviIcon,
      company: "Levi Bank",
      date: "Sep 29",
      amount: "$2,300",
      status: "Credit",
    },
  ];

  return (
    <section className="transactions">
      <div className="section-header">
        <h3>Transaction</h3>
        <input type="text" placeholder="Find something" />
      </div>
      <div className="table-head">
        <p>Name</p>
        <p>Date</p>
        <p>Amount</p>
        <p>Status</p>
      </div>
      <div className="table-body">
        {data.map((row, index) => {
          return (
            <div className="transaction-row" key={index}>
              <div className="img-company">
                <div className="img-container">
                  <img src={row.logo} alt={`${row.company} logo`} />
                </div>
                <p>{row.company}</p>
              </div>
              <p className="date">{row.date}</p>
              <p className="amount">{row.amount}</p>
              <p className="status">{row.status}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Transactions;
