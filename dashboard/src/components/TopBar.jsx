import Menu from "./Menu";
import "./style/topbar.css";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <div className="index-block">
          <p className="index">NIFTY</p>
          <p className="index-points">100.2</p>
          <p className="percent"></p>
        </div>

        <div className="index-block">
          <p className="index">SENSEX</p>
          <p className="index-points">100.2</p>
          <p className="percent"></p>
        </div>
      </div>

      {/* Menu on the right */}
      <Menu />
    </div>
  );
};

export default TopBar;
