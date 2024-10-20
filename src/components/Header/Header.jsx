import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="auth-intro">
        <h3>Welcome Back,&nbsp;Rejoice👋</h3>
        <p>Here&apos;s what&apos;s happening with your store today.</p>
      </div>
      <input type="text" placeholder="Search for anything..." />
    </header>
  );
};
export default Header;
