import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./styles.scss";
import { isGameStart } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";

export default function Header() {
  const [footer, setfooter] = useState("Home")
  const dispatch = useDispatch();
  const onPage = useSelector(state => state.onPage)
  React.useState(() => {
    switch (onPage) {
      case "Home":
        setfooter("footer");
        break;
      case "SIIT":
        setfooter("siitFooter");
        break;
      case "ANTICOVID":
        setfooter("antiFooter");
        break;
      default:
        setfooter("Home");
    }
  }, [])
  return (
    <div
      className="sticky-nav"
      onClick={() => {
        dispatch(isGameStart(false));
      }}
    >
      <Navbar expand="lg navbar-light">
        <Navbar.Brand
          href="/"
          style={{
            fontSize: 50,
            color: "#ffffff" /*color:"rgb(237, 24, 79)"*/,
          }}
          className="logoFontHeader hoverable"
        >
          <p /*data-item='สรวิศ วารนิช' className="HeaderLogoAnimate"*/>
            สรวิศ วารนิช
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={36}
              height={36}
              fill="#ffffff"
              className="bi bi-grid-3x3-gap-fill"
              viewBox="0 0 16 16"
            >
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />

            </svg>

          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto topnav">
            <Nav.Item
              eventkey={1}
              as="li"
              className="hoverable"
            >
              <Navbar.Brand
                href="https://1drv.ms/b/s!AuWCAh70QImWgQ7btT10uF5q7byt?e=wtqBSc"
                target="_blank"
              >

                <Button className="navItem resume-button">RESUME</Button>
              </Navbar.Brand>
            </Nav.Item>
            <Nav.Item
              eventkey={2}
              as="li"
              style={{ marginRight: 30 }}
              className="hoverable"
            >
              {
                onPage !== "Home" ?

                  <Navbar.Brand
                    href="/#About"
                    className="scrollDown "
                    style={{ textDecoration: "none" }}
                  >

                    <span className="navItem">ABOUT</span>
                  </Navbar.Brand>
                  :
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    className="scrollDown "
                    style={{ textDecoration: "none" }}
                  >

                    <span className="navItem">ABOUT</span>
                  </Link>
              }
            </Nav.Item>
            <Nav.Item
              eventkey={3}
              as="li"
              style={{ marginRight: 30 }}
              className="hoverable"
            >              {
                onPage !== "Home" ?

                  <Navbar.Brand
                    href="/#Skill"
                    className="scrollDown "
                    style={{ textDecoration: "none" }}
                  >

                    <span className="navItem">SKILLS</span>
                  </Navbar.Brand>
                  :
                  <Link
                    to="skill"
                    spy={true}
                    smooth={true}
                    className="scrollDown "
                    style={{ textDecoration: "none" }}
                  >
                    <span className="navItem">SKILLS</span>
                  </Link>}
            </Nav.Item>
            <Nav.Item
              eventkey={4}
              as="li"
              style={{ marginRight: 30 }}
              className="hoverable"
            >
              {
                onPage !== "Home" ?

                  <Navbar.Brand
                    href="/#Work"
                    className="scrollDown "
                    style={{ textDecoration: "none" }}
                  >

                    <span className="navItem">WORK</span>
                  </Navbar.Brand>
                  :
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    className="scrollDown "
                    style={{ textDecoration: "none" }}
                  >
                    <span className="navItem">WORK</span>
                  </Link>}
            </Nav.Item>
            <Nav.Item eventkey={5} as="li" className="hoverable"
              style={{ marginRight: 30 }}>
              {
                onPage !== "Home" ?

                  <Navbar.Brand
                    href="/#Project"
                    className="scrollDown "
                    style={{ textDecoration: "none" }}
                  >

                    <span className="navItem">PROJECTS</span>
                  </Navbar.Brand>
                  :
                  <Link
                    to="projectEg"
                    spy={true}
                    smooth={true}
                    className="scrollDown "
                    style={{ textDecoration: "none" }}
                  >
                    <span className="navItem">PROJECTS</span>
                  </Link>}
            </Nav.Item>
            <Nav.Item eventkey={6} as="li" className="hoverable">

              <Link
                to={footer}
                spy={true}
                smooth={true}
                className="scrollDown "
                style={{ textDecoration: "none" }}
              >
                {" "}
                <span className="navItem">CONTACT</span>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

  );
}
