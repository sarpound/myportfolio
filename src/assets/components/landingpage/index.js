import React from "react";
import "./styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import { TimelineMax, Power2, TweenMax, SteppedEase } from "gsap";
import { Link } from "react-scroll";
import {isGameStart } from "../../redux/actions";
import { useDispatch } from "react-redux";
export default function Index() {
    const dispatch = useDispatch();
  React.useEffect(() => {
    var typewriter = new TimelineMax({
      paused: true,
    });
    // letter animation
    typewriter.fromTo(
      ".anim-typewriter",
      4,
      {
        width: "0",
      },
      {
        width: "12.18em" /* same as CSS .line-1 width */,
        ease: SteppedEase.config(37),
      },
      0
    );
    // text cursor animation
    typewriter.fromTo(
      ".anim-typewriter",
      0.5,
      {
        "border-right-color": "rgba(255,255,255,0.75)",
      },
      {
        "border-right-color": "rgba(255,255,255,0)",
        repeat: -1,
        ease: SteppedEase.config(37),
      },
      0
    );
    typewriter.play();

    TweenMax.to(".scroll-down", 1.2, {
      delay: 0,
      y: "20px",
      yoyo: true,
      repeat: -1,
      ease: Power2.easeInOut,
    });
  }, []);

  return (
    <div className="landing" onClick={()=>{
        dispatch(isGameStart(false))
      }}>
      <Container className="landingBox">
        <Row sm style={{ margin: 0, flex:1}}>
          <Col
            sm
            className="d-flex justify-content-center align-items-center px-0"
          >
            <h2>
              <p className="line-1 anim-typewriter introFontWriter">
                Hi, I'm Soravit Varanich
              </p>
            </h2>
          </Col>
        </Row>
        <Row style={{ margin: 0, flex: 1 }}>
          <Col className="d-flex justify-content-center align-items-center px-0 ">
            <div className="d-flex justify-content-center align-items-center px-0 hoverable">
              <Link
                to="about"
                spy={true}
                smooth={true}
                className="scrollDown "
                style={{ textDecoration: "none" }}
              >
                <p style={{ margin: 10 }}>Scroll down</p>
                <div className="d-flex justify-content-center align-items-center px-0 ">
                  <i
                    style={{ margin: 0, fontSize: 25, position: "absolute" }}
                    className="bi bi-chevron-down scroll-down"
                  ></i>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
