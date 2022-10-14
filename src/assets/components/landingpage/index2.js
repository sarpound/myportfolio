import React from "react";
import "./styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import { TimelineMax, Power2, TweenMax, Back, SteppedEase } from "gsap";
export default function Index() {
  React.useEffect(() => {
    TweenMax.from(".zoomOut", 0.4, {
      opacity: 0,
      scale: 0.8,
      ease: Back.easeOut,
      delay: 0.3,
    });

    var t1 = new TimelineMax({ repeat: 0 });
    t1.staggerFrom(
      ".upper",
      0.8,
      { y: "100%", ease: Power2.easeOut, delay: 0.5 },
      0.5
    );
    TweenMax.fromTo(
      ".circleInScroll",
      0.5,
      { scale: 0, opacity: 0, ease: Back.easeOut },
      { scale: 1, opacity: 1, ease: Back.easeOut, yoyo: true },
      0.5
    );
    TweenMax.fromTo(
      ".circleOutScroll",
      1,
      { scale: 0, opacity: 0, ease: Back.easeOut, repeat: 5 },
      { scale: 1.05, opacity: 0.4, ease: Back.easeOut, repeat: 5, yoyo: true },
      1
    );

    var t2 = new TimelineMax({
      paused: true,
    });
    // letter animation
    t2.fromTo(
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
    t2.fromTo(
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
    t2.play();

  }, []);

  return (
    <div className="landing">
      <Container className="landingBox">
        <Row style={{ margin: 0, flex: 2 }}>
          <Col className="d-flex justify-content-center align-items-center px-0">
             <div>
              <h2 className="introFont inline zoomOut">
                <div className="pinkIntro">Hello</div>
              </h2>
              <h2 className="introFont inline">
                <div className="upper">,&nbsp;I'm</div>
              </h2>

              <h2 className="introFont">
                <div className="upper">Soravit</div>
              </h2>

              <h2 className="introFont">
                <div className="upper">Varanich</div>
              </h2>
           </div> 
          </Col>
        </Row>
        <Row style={{ margin: 0, flex: 1 }}>
          <Col className="d-flex justify-content-center align-items-center px-0 ">
           <div className="d-flex justify-content-center align-items-center px-0 ">
              <div className="circleOutScroll d-flex justify-content-center align-items-center px-0 "></div>
              <div className="circleInScroll d-flex justify-content-center align-items-center px-0 " onMouseOver={() => {
                TweenMax.fromTo(
                  ".circleOutScroll",
                  1,
                  { scale: 0, opacity: 0, ease: Back.easeOut,repeat:5},
                  { scale: 1.05, opacity: 0.4, ease: Back.easeOut, repeat: 5 ,yoyo: true },
                  1
                ).restart();
              }}>
                <i className="fas fa-chevron-down fa-lg" style={{ color:"#111111"}}></i>
              </div>
              </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
}
