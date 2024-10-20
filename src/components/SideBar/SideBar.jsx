import "./SideBar.css";
import logo from "../../assets/logo/logo.svg";
import accountIcon from "../../assets/icons/account.svg";
import analyticsIcon from "../../assets/icons/analytics.svg";
import dashboardIcon from "../../assets/icons/dashboard.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import walletIcon from "../../assets/icons/wallet.svg";
import securityIcon from "../../assets/icons/security.svg";
import helpIcon from "../../assets/icons/help.svg";
import darkModeIcon from "../../assets/icons/darkmode.svg";

const SideBar = () => {
  return (
    <section className="side-bar">
      <img src={logo} alt="" />

      <div className="action-items">
        <div className="icon-item-name active">
          <img src={dashboardIcon} alt="" />
          <p>Dashboard</p>
        </div>
        <div className="icon-item-name">
          <img src={analyticsIcon} alt="" />
          <p>Analytics</p>
        </div>
        <div className="icon-item-name">
          <img src={walletIcon} alt="" />
          <p>My Wallet</p>
        </div>
        <div className="icon-item-name">
          <img src={accountIcon} alt="" />
          <p>Accounts</p>
        </div>
        <div className="icon-item-name">
          <img src={settingsIcon} alt="" />
          <p>Settings</p>
        </div>
      </div>
      <hr />
      <div className="action-items">
        <div className="icon-item-name">
          <img src={securityIcon} alt="" />
          <p>Security</p>
        </div>
        <div className="icon-item-name">
          <img src={helpIcon} alt="" />
          <p>Help Center</p>
        </div>
        <div className="icon-item-name">
          <img src={darkModeIcon} alt="" />
          <p>Dark Mode</p>
        </div>
      </div>
    </section>
  );
};
export default SideBar;
