import SideBar from "../../components/SideBar/SideBar";
import "./Home.css";
import Header from "../../components/Header/Header";
import Flow from "../../components/Flow/Flow";
import AnalyticsChart from "../../components/AnalyticsChart/AnalyticsChart";
import Transactions from "../../components/Transactions/Transactions";
import Card from "../../components/Card/Card";
const Home = () => {
  return (
    <div>
      <SideBar />
      <div className="wrapper">
        <Header />
        <div className="body-container">
          <div className="center-body">
            <Flow />
            <div className="analytics-container">
              <h3>Analytics</h3>
              <AnalyticsChart />
            </div>
            <Transactions />
          </div>
          <div className="right-body">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
