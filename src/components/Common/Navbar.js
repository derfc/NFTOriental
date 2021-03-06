import { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Web3 from "web3";
import logo from "../../asset/nftsealogo.png";
import classes from "./Navbar.module.css";

const Navi = (props) => {
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    const metamaskCheck = async () => {
      if (window.ethereum) {
        setLoginStatus(true);
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      } else if (window.web3) {
        setLoginStatus(true);
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        setLoginStatus(false);
        // window.alert("working here");
      }
    };
    metamaskCheck();
  }, []);
  return (
    <Navbar className={classes.navbar} variant="dark" sticky="top" expand="md">
      <LinkContainer to="/">
        <Navbar.Brand className={classes.brand}>
          <img
            className={`ml-4 mr-2 ${classes.logo}`}
            width="30px"
            src={logo}
            alt="logo"
          />
          OrientalNFT
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto pr-4">
          <LinkContainer to="/items">
            <Nav.Link className={classes.navlink}>Browse</Nav.Link>
          </LinkContainer>
          {/* <LinkContainer to="/">
          <Nav.Link className={classes.navlink}>How to Buy</Nav.Link>
        </LinkContainer> */}

          {loginStatus && (
            <>
              <LinkContainer to="/profile">
                <Nav.Link className={classes.navlink}>Profile</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cincochicos">
                <Nav.Link className={classes.navlink}>Bank</Nav.Link>
              </LinkContainer>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navi;
