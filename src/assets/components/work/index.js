import React from "react";
import "./styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import "aos/dist/aos.css";
import Aos from "aos";
import adecco from "../../images/adecco.svg";
import refinitiv from "../../images/refinitiv.png";
import { isGameStart } from "../../redux/actions";
import { useDispatch } from "react-redux";
export default function Index() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <Row sm className="work" id="Work" onClick={() => {
      dispatch(isGameStart(false))
    }}>
      <Col sm>
        <Container fluid="md">
          <Row sm>
            <Col sm>
              <h2 className="workHeader">
                <div data-aos="fade-up">My Work Experience</div>
              </h2>
            </Col>
          </Row>
          <Row sm className="workContent">
            <Col
              sm={4}
              className="d-flex justify-content-center align-items-center workBox"
            >
              <div
                className={"yearText"}
              >
                <h1>2020</h1>
                <p>1 June - 31 July 2020</p>
                <p>Web developer (Internship)</p>
              </div>
              <img
                src={adecco}
                className="workImage imageHover"
                width="100%"
                height="100%"
                alt="adecco"
              />
            </Col>
            <Col
              sm={4}
              className="d-flex justify-content-center align-items-center workBox"
            >
              <div
                className={"yearText"}
              >
                <h1>2021</h1>
                <p>Oct 2021 - present</p>
                <p>Software Engineer (Front-end team)</p>
              </div>
              <img
                src={refinitiv}
                className="workImage imageHover"
                width="100%"
                height="100%"
                alt="refinitiv"
              />
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
}
