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
              I’m interested in web development since 2016. I started to learn about HTML, CSS and javascript when I was in High school. Moreover, after I graduated from the university in 2021, I had the opportunity to work as a full-time employee in the position of a software engineer (front-end team) at Refinitiv (Thailand). In this work experience, I have gained pretty technical knowledge. It’s improved me to be more specialist in javascript, typescript, angular, version control (git), agile methodology and processes for thinking about how we could develop an application to get the best performance. Personality, I am interested in learning new things and fast learner. I love my job and achieving milestones working in a team.
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
