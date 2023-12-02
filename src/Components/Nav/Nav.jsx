import { useEffect } from "react";
import "./Nav.css";

const Nav = (props) => {
  const toggleMenu = () => {
    props.toggleMenu();
  };

  useEffect(() => {
    console.log(props.showMenu);
  }, [props.showMenu]);
  return (
    <>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            yago
            <strong>estévez</strong>
          </p>
          <a
            onClick={toggleMenu}
            className={props.showMenu ? "menu-button active" : "menu-button"}
          >
            <span />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
