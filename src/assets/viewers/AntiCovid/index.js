import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../components/header";
import phone from "../../images/anti1.png";
import phone2 from "../../images/anti2.png";
import antiApp from "../../videos/1414.mp4";
import "./styles.scss";
import Aos from "aos";
import { useDispatch } from "react-redux";
import { onPage } from "../../redux/actions";

export default function Index() {
  React.useEffect(() => {
    Aos.init({ duration: 1200, delay: 300 });
  }, []);

  const dispatch = useDispatch();
  dispatch(onPage("ANTICOVID"));
  return (
    <>
      <Row className="antiLanding">
        <Col sm>
          <Row style={{ backgroundColor: "#ffffff" }} className="shadow-sm">
            <Col sm className="antiHeader ">
              <Header />
            </Col>
          </Row>
          <Row style={{ margin: 0 }}>
            <Container fluid={"md"}>
              <Col sm className="w-100 h-100">
                <Row className="w-100 h-100  m-0">
                  <Col
                    sm
                    className="mt-5 d-flex justify-content-center align-items-center"
                  >
                    <div className="text-sm-center">
                      <h2 className="antititle d-flex justify-content-center align-items-center">
                        ANTI COVID
                      </h2>
                      <p className="anticontext anticontext--inter-word">
                        &nbsp;&nbsp;ANTI COVID application. It's application
                        that can help everyone who would like to know about the
                        situation of covid-19 in the present. Application will
                        show information of covid-19 in real time.
                      </p>
                    </div>
                  </Col>
                  <Col
                    sm
                    className=" m-5 d-flex justify-content-center align-items-center imgBannerCol  "
                  >
                    {
                      <img
                        src={phone}
                        alt="phone"
                        className="imgAnti"
                        data-aos="fade-up"
                      />
                    }
                  </Col>
                </Row>
              </Col>
            </Container>
          </Row>
        </Col>
      </Row>
      <Row className="rowMotivate p-5">
        <Col sm>
          <Row className="d-flex justify-content-center align-items-center">
            <Col sm={{ span: 6 }} className="text-sm-center">
              <h2 className="title">Motivation</h2>
              <p className="context">
                &nbsp;&nbsp;The motivation comes from I was in third year at
                university. I had to do a project for the final exam in ITS432
                Mobile Application Programming. I think what the project should
                I do and I get the idea. At that time, Thailand was in the first
                phase of COVID-19 situation. In my opinion I had to do some
                project that could help people in Thailand about COVID-19.
              </p>
            </Col>
          </Row>
          <Row className="d-flex align-items-center justify-content-center p-xl-4">
            <Col
              sm
              className=" d-flex  justify-content-center align-items-center m-lg-2 mt-2 "
            >
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={100}
                  height={100}
                  fill="#008C99"
                  className="bi bi-palette-fill m-sm-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>

                <div className="raleWay-font m-lg-0 mt-2">
                  <h4 className="text-center raleWay-font--700">APP DESIGN</h4>
                  <p className="text-center">User Experience Design</p>
                  <p className="text-center">User Interface Design</p>
                </div>
              </div>
            </Col>
            <Col
              sm
              className=" d-flex justify-content-center align-items-center m-lg-0 mt-2"
            >
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50 * 2}
                  height={50 * 2.63}
                  fill="#FED263"
                  className="bi bi-phone-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                </svg>

                <div className="raleWay-font m-lg-0 mt-2">
                  <h4 className="text-center raleWay-font--700">
                    FRONTEND DEVELOPMENT
                  </h4>
                  <p className="text-center">REACT NATIVE</p>
                  <p className="text-center">EXPO</p>
                </div>
              </div>
            </Col>
            <Col
              sm
              className=" d-flex  justify-content-center align-items-center m-lg-0 mt-2"
            >
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50 * 2}
                  height={50 * 2}
                  fill="#79081C"
                  className="bi bi-palette-fill m-sm-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
                </svg>
                <div className="raleWay-font m-lg-0 mt-2">
                  <h4 className="text-center raleWay-font--700">
                    BACKEND DEVELOPMENT
                  </h4>
                  <p className="text-center">FIREBASE</p>
                  <p className="text-center">API</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="anti-mainChallenges p-5">
        <Container fluid={"md"}>
          <Row>
            <Col sm>
              <Row>
                <Col sm className="p-2">
                  <h2 className="antititle text-left">Main Challenges </h2>
                </Col>
              </Row>
              <Row>
                <Col sm className="p-2">
                  <p className="anticontext anticontext--inter-word">
                    API of the application is considered to be the main
                    challenges for this project because when I developed this
                    project at that time I did not have any knowledge about API.
                    I have to learn more about API. I had learned how to fetch
                    the data from the open API website and how could I sort the
                    data when server respond the data back to my application. 
                  </p>
                </Col>
              </Row>
            </Col>
            <Col
              sm
              className="p-2 d-flex justify-content-center align-items-center"
            >
              <div style={{ height: "60vh" }} data-aos="fade-left">
                <img
                  src={phone2}
                  alt="ios-android"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="features p-5">
        <Container fluid={"md"}>
          <Row>
            <Col
              sm
              className="p-2 d-flex justify-content-center align-items-center"
            >
              <div style={{ height: "70vh" }} data-aos="fade-right">
                <video
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={antiApp} type="video/mp4" />
                </video>
              </div>
            </Col>
            <Col
              sm
              className="d-flex justify-content-center align-items-center"
            >
              <div>
                <Row>
                  <Col sm className="p-2">
                    <h2 className="title text-left">Features</h2>
                  </Col>
                </Row>
                <Row>
                  <Col sm={{ span: 9 }} className="p-2">
                    <ul
                      className="context h4 text-left"
                      style={{ fontSize: "1.5rem" }}
                    >
                      <li>Daily number of new COVID-19 cases and deaths</li>
                      <li className="mt-2">Male:Female ratio</li>
                      <li className="mt-2">
                        Historical data of COVID-19 in Thailand
                      </li>
                      <li className="mt-2">COVID-19 tracker</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Row className="antiFooter">
        <Col sm className="justify-content-center align-items-center d-flex">
          <div>
            <Row>
              <Col xs>
                <h2 className="footer-header" style={{ color: "#ffffff" }}>
                  Get in touch with me 😃{" "}
                </h2>
              </Col>
            </Row>
            <Row
              className="d-flex justify-content-center align-items-center"
              style={{
                paddingLeft: 50,
                paddingRight: 50,
                paddingTop: 20,
                paddingBottom: 20,
              }}
            >
              <Col xs={3}>
                <a
                  href="www.linkedin.com/in/soravit-varanich
"
                  className="hoverable"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={45}
                    height={45}
                    fill="#ffffff"
                    className="bi bi-linkedin footer-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </Col>
              <Col xs={3}>
                <a
                  href="https://github.com/poundps
"
                  className="hoverable"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={45}
                    height={45}
                    fill="#ffffff"
                    className="bi bi-github footer-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </Col>
              <Col xs={3}>
                <a href="mailto:soravit.var@hotmail.com" className="hoverable">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={45}
                    height={45}
                    fill="#ffffff"
                    className="footer-icon bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                  </svg>
                </a>
              </Col>
            </Row>
            <Row>
              <Col
                xs
                className="d-flex justify-content-center align-items-center"
              >
                <a href="https://reactjs.org/" className="hoverable">
                  <p className="footer-end" style={{ color: "#ffffff" }}>
                    Made with React ❤️
                  </p>
                </a>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
}
