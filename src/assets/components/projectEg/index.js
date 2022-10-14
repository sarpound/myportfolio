import React from "react";
import "./styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import "aos/dist/aos.css";
import Aos from "aos";
import { useDispatch } from "react-redux";
import { projectHover, projectImg,isGameStart } from "../../redux/actions";

export default function Index() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <Row className="projectEg" id="Project" onClick={()=>{
        dispatch(isGameStart(false))
      }}>
        <Col sm>
          <Container fluid="md">
            <Row className="pb-1">
              <Col
                sm={3}
                className="d-flex justify-content-center align-items-center"
              >
                <h2 className="projectHeader" data-aos="zoom-in">
                  My Projects
                </h2>
              </Col>
              <Col sm className="d-flex align-items-center">
                <p className="projectDes">
                  Here are my projects I have designed and developed by myself.
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm={{ offset: 3 }} style={{ zIndex: 1500 }}>
                <a href="https://mercuryt-shirt.web.app/">
                  <Row
                    className="pb-5 projectEgText desAni"
                    onMouseEnter={() => {
                      dispatch(projectImg("mercury"));
                      dispatch(projectHover(true));
                    }}
                    onMouseLeave={() => {
                      dispatch(projectHover(false));
                    }}
                  >
                    <Col sm={9} className="cool-link">
                      <Row>
                        <Col xs>
                          <h1 className="poppins-text ">Mercuryt-shirt</h1>
                        </Col>
                      </Row>
                      <Row className="font-weight-bold projectTech">
                        <Col xs>
                          <ul style={{ padding: 0, margin: 0 }}>
                            <li style={{ display: "inline", marginRight: 20 }}>
                              React
                            </li>
                            <li style={{ display: "inline", marginRight: 20 }}>
                              Material-UI
                            </li>
                          </ul>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs className="overflow-hidden">
                          <p className="description">
                            This website is about a t-shirt store. The website
                            shows a description of the store and shows how can
                            customers order a t-shirt.
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </a>
                <a href="/siitgate">
                  <Row
                    className="pb-5 projectEgText desAni"
                    onMouseEnter={() => {
                      dispatch(projectImg("siitgate"));
                      dispatch(projectHover(true));
                    }}
                    onMouseLeave={() => {
                      dispatch(projectHover(false));
                    }}
                  >
                    <Col sm={9} className="cool-link">
                      <Row>
                        <Col xs>
                          <h1 className="poppins-text ">SIIT Gate</h1>
                        </Col>
                      </Row>
                      <Row className="font-weight-bold projectTech">
                        <Col xs>
                          <ul style={{ padding: 0, margin: 0 }}>
                            <li style={{ display: "inline", marginRight: 20 }}>
                              React Native
                            </li>
                            <li style={{ display: "inline", marginRight: 20 }}>
                              Node Js
                            </li>
                            <li style={{ display: "inline", marginRight: 20 }}>
                              Express Js
                            </li>
                            <li style={{ display: "inline", marginRight: 20 }}>
                              Axios
                            </li>
                            <li style={{ display: "inline", marginRight: 20 }}>
                              Puppeteer
                            </li>
                            <li style={{ display: "inline", marginRight: 20 }}>
                              Firebase
                            </li>
                          </ul>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs className="overflow-hidden">
                          <p className="description">
                            This is my senior project when I was in last year at
                            university. This project designs and implements an
                            application that works as the middleman which allows
                            students of Sirindhorn International Institute of
                            Technology(SIIT), Thammasat University. to access
                            necessary information involved in education: grade
                            results, study schedules and class notifications.
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </a>
                <a href="/anticovid">
                  <Row
                    className="pb-5 projectEgText desAni"
                    onMouseEnter={() => {
                      dispatch(projectImg("anticovid"));
                      dispatch(projectHover(true));
                    }}
                    onMouseLeave={() => {
                      dispatch(projectHover(false));
                    }}
                  >
                    <Col sm={9} className="cool-link">
                      <Row>
                        <Col xs>
                          <h1 className="poppins-text ">Anti Covid</h1>
                        </Col>
                      </Row>
                      <Row className="font-weight-bold projectTech">
                        <Col xs>
                          <ul style={{ padding: 0, margin: 0 }}>
                            <li style={{ display: "inline", marginRight: 20 }}>
                              React Native
                            </li>
                            <li style={{ display: "inline", marginRight: 20 }}>
                              Node Js
                            </li>
                            <li style={{ display: "inline", marginRight: 20 }}>
                              Express Js
                            </li>
                            <li style={{ display: "inline", marginRight: 20 }}>
                              Axios
                            </li>
                            <li style={{ display: "inline", marginRight: 20 }}>
                              Firebase
                            </li>
                          </ul>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs className="overflow-hidden">
                          <p className="description">
                            This project is a part of ITS432 Mobile Application
                            Programming.When I was in third year at the
                            University.I would like to create an covid-19
                            application that can help everyone who would like to
                            know about the situation of covid-19 in the present.
                            Application will show information of covid-19 in
                            real time.
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </a>
                <a href="https://gamegirl.firebaseapp.com/">
                  <Row
                    className="pb-5 projectEgText desAni"
                    onMouseEnter={() => {
                      dispatch(projectImg("game"));
                      dispatch(projectHover(true));
                    }}
                    onMouseLeave={() => {
                      dispatch(projectHover(false));
                    }}
                  >
                    <Col sm={9} className="cool-link">
                      <Row>
                        <Col xs>
                          <h1 className="poppins-text ">Game Girl</h1>
                        </Col>
                      </Row>
                      <Row className="font-weight-bold projectTech">
                        <Col xs>
                          <ul style={{ padding: 0, margin: 0 }}>
                            <li style={{ display: "inline", marginRight: 20 }}>
                              React
                            </li>
                            <li style={{ display: "inline", marginRight: 20 }}>
                              Bootstrap
                            </li>
                          </ul>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs className="overflow-hidden">
                          <p className="description">
                            This project is a part of ITS344 Web and Business
                            Application Development. When I was in third year at
                            the University.I would like to create a gambling
                            game call "pokdeng" because I think this project
                            will help me to improve my logic of the coding.
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </a>
                <a href="https://bookbookonlinestore.000webhostapp.com/">
                  <Row
                    className="pb-5 projectEgText desAni"
                    onMouseEnter={() => {
                      dispatch(projectImg("book"));
                      dispatch(projectHover(true));
                    }}
                    onMouseLeave={() => {
                      dispatch(projectHover(false));
                    }}
                  >
                    <Col sm={9} className="cool-link">
                      <Row>
                        <Col xs>
                          <h1 className="poppins-text ">Book Book</h1>
                        </Col>
                      </Row>
                      <Row className="font-weight-bold projectTech">
                        <Col xs>
                          <ul style={{ padding: 0, margin: 0 }}>
                            <li style={{ display: "inline", marginRight: 20 }}>
                              Html
                            </li>
                            <li style={{ display: "inline", marginRight: 20 }}>
                              CSS
                            </li>
                            <li style={{ display: "inline", marginRight: 20 }}>
                              PHP
                            </li>
                            <li style={{ display: "inline", marginRight: 20 }}>
                              MySql
                            </li>
                          </ul>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs className="overflow-hidden">
                          <p className="description">
                            This project is a part of ITS322 Database Systems.
                            This is my first project in my university that I
                            have developed a website by myself. Why do I choose
                            to develop an online book store? I think an online
                            book store It's has a lot of features. It makes me
                            have to learn more about system of online stores.
                            How can I design an ER diagram for my website's
                            database to get the best interactive for the
                            customers.
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </a>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
}
