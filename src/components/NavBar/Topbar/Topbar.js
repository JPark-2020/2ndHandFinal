import "./Topbar.css";
import { Search } from "@material-ui/icons";
import { fire } from "../../../util/firebase";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Topbar = ({ user }) => {
  const logoutHandler = () => {
    fire.auth().signOut();
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">
          <a href="/">2ND HAND</a>
        </span>
      </div>

      <div className="topbarCenter">
        <div className="searchbarMain">
          <div className="searchbarInner">
            <Search className="searchIcon" />
            <input placeholder="Search" className="searchInput" />
            <button className="searchButton" type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
      {user ? (
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink shopLink">
              <a href="/shop">SHOP</a>
            </span>
            <span className="topbarLink sellLink">
              <a href="/sell">SELL</a>
            </span>
            <a href="/cart">
              <ShoppingCartIcon className="topbarLink" />
            </a>
            <a href="/profile">
              <PersonIcon className="topbarLink" />
            </a>
            <ExitToAppIcon className="topbarLink" onClick={logoutHandler} />
          </div>
        </div>
      ) : (
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink shopLink">
              <a href="/signin">Sign In</a>
            </span>
            <span className="topbarLink sellLink">
              <a href="/signup">Sign Up</a>
            </span>
            <ShoppingCartIcon className="topbarLink" />
            <a href="/profile">
              <PersonIcon className="topbarLink" />
            </a>
            <ExitToAppIcon className="topbarLink" onClick={logoutHandler}>
              <a href="/"></a>
            </ExitToAppIcon>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;
