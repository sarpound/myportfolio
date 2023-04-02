import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";
import me from "../../images/me.jpg";
import Aos from "aos";
import { TweenMax, Power0 } from "gsap";
import "aos/dist/aos.css";
import {isGameStart } from "../../redux/actions";
import { useDispatch } from "react-redux";
export default function Index() {
    const dispatch = useDispatch();
  React.useEffect(() => {
    Aos.init({ duration: 1200 });

    TweenMax.from(".circleText", 6, {
      rotation: 360,
      ease: Power0.easeNone,
      repeat: -1,
    });
  }, []);

  return (
    <div className="about" id="About" onClick={()=>{
        dispatch(isGameStart(false))
      }}>
      <Container fluid="md">
        <Row sm className="mb-5">
          <Col
            sm
            className="d-flex justify-content-center align-items-center aboutMeRow px-0"
          >
            <h2 className="aboutMeFont zoomIn" data-aos="zoom-out">
              About me
            </h2>
      
              <svg
               
                className="circleText"
                viewBox="0 0 500 500"
                data-duration={5}
              >
                <path
                  id="textcircle"
                  fill="none"
                  strokeWidth={5}
                  data-duration={5}
                  d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
                ></path>
                <text dy={-25}>
                  <textPath className="text" xlinkHref="#textcircle">
                    Happiness is only real when shared.
                  </textPath>
                </text>
              </svg>
      
          </Col>
        </Row>
        <Row sm >
          <Col sm className="d-flex justify-content-center align-items-center">
            <p className="subAboutMeFont">
            I have several years of experience in Fintech, having worked at Refinitiv, an LSEG business Thailand as a developer. My main responsibilities included developing and maintaining a financial platform for the front-end team, as well as bug fixing and creating unit tests for unexpected behavior. I also helped review code for performance, readability, and future use, and validated data requests and responses from the backend team. I am skilled in Angular 8+, Observable (RxJS), TypeScript, JavaScript, Node.js, Express.js, ReactJs, and Redux, as well as using service worker to manage requests on the UI. Additionally, I have experience building a server-side application using service worker that allows for the development of localhost on a real domain, acting as a proxy for the app.
            </p>
          </Col>
          <Col sm className="d-flex justify-content-center align-items-center">
            <img src={me} alt="Soravit Varanich" width="100%" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
