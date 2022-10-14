import React from "react";
import "./styles.scss";
import { Container, Row, Col } from "react-bootstrap";
import Photoshop from "../../images/Adobe_Photoshop.png";
import Illustrator from "../../images/Adobe_Illustrator_CC.png";
import Xd from "../../images/Adobe_XD.png";
import Html from "../../images/HTML5.png";
import Css from "../../images/CSS.png";
import Js from "../../images/Js.png";
import reactImg from "../../images/react.png";
import redux from "../../images/redux.png";
import Angular from "../../images/angular.png";
import Node from "../../images/nodejs.png";
import Mongo from "../../images/MongoDB.png";
import Firebase from "../../images/firebase.png";
import Docker from "../../images/docker.png";
import Aos from "aos";
import {isGameStart } from "../../redux/actions";
import { useDispatch } from "react-redux";
export default function Index() {
    const dispatch = useDispatch();
    React.useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className="skill " id="Skill" onClick={()=>{
        dispatch(isGameStart(false))
      }}>   
        <Row sm className="poppins-text px-0" style={{width:"100%",margin: 0,backgroundColor: "#111111"}}>
          <Col sm className="px-0">
          
            <Container fluid="md">
              <div style={{position:"relative",top:"6.8vw"}} >
            <h2 className="techHeader" style={{overflow:"hidden"}} >
              <div className="techHeaderBorder" >Technical</div>
            </h2>
             <h2 className="techHeader">
              <span className="techHeaderSkill">Skills</span>
            </h2>
            </div>
            </Container>
          </Col>
        </Row>
        <Container fluid="md">
        <Row sm className="mt-5">
          <Col sm>
            <h2 className="skillHeader poppins-text">DESIGNER</h2>
          </Col>
        </Row>
        <Row sm>
          <Col sm={2} className="skillImageMain">
            <div style={{ textAlign: "center" }}>
              <img
                className="skillImage contrast-200"
                src={Photoshop}
                alt="Photoshop"
                title="Adobe Photoshop"
              />
            </div>
          </Col>
          <Col sm={2} className="skillImageMain">
            <div style={{ textAlign: "center" }}>
              <img
                className="skillImage contrast-200"
                src={Illustrator}
                alt="Illustrator"
                title="Adobe Illustrator"
              />
            </div>
          </Col>
          <Col sm={2} className="skillImageMain">
            <div style={{ textAlign: "center" }}>
              <img
                className="skillImage contrast-200"
                src={Xd}
                alt="Xd"
                title="Adobe Xd"
              />
            </div>
          </Col>
        </Row>
        <Row sm className="skillTitleMain">
          <Col sm>
            <h2 className="skillHeader poppins-text">FRONTEND</h2>
          </Col>
        </Row>
        <Row sm>
          <Col sm={2} className="skillImageMain">
            <div style={{ textAlign: "center" }}>
              <img
                className="skillImage dark-filter"
                src={Html}
                alt="Html"
                title="Html"
              />
            </div>
          </Col>
          <Col sm={2} className="skillImageMain">
            <div style={{ textAlign: "center" }}>
              <img
                className="skillImage dark-filter"
                src={Css}
                alt="Css"
                title="CSS"
              />
            </div>
          </Col>
          <Col sm={2} className="skillImageMain">
            <div style={{ textAlign: "center" }}>
              <img
                className="skillImage  dark-filter"
                src={Js}
                alt="Javascript"
                title="Javascript"
              />
            </div>
          </Col>
          <Col sm={2} className="skillImageMain">
            <div style={{ textAlign: "center" }}>
              <img
                className="skillImage dark-filter-2"
                src={reactImg}
                alt="React"
                title="React"
              />
            </div>
          </Col>
          <Col sm={2} className="skillImageMain">
            <div style={{ textAlign: "center" }}>
              <img
                className="skillImage dark-filter-2"
                src={redux}
                alt="Redux"
                title="Redux"
              />
            </div>
          </Col>
          <Col sm={2} className="skillImageMain">
            <div style={{ textAlign: "center" }}>
              <img
                className="skillImage dark-filter"
                src={Angular}
                alt="Angular"
                title="Angular"
              />
            </div>
          </Col>
        </Row>
        <Row sm className="skillTitleMain">
          <Col sm>
            <h2 className="skillHeader poppins-text">BACKEND</h2>
          </Col>
        </Row>
        <Row sm>
          <Col sm={2} className="skillImageMain">
            <div style={{ textAlign: "center" }}>
              <img
                className="skillImage dark-filter-2"
                src={Node}
                alt="Node"
                title="Node Js"
              />
            </div>
          </Col>
          <Col sm={2} className="skillImageMain">
            <div style={{ textAlign: "center" }}>
              <img
                className="skillImage dark-filter"
                src={Mongo}
                alt="MongoDB"
                title="MongoDB"
              />
            </div>
          </Col>
          <Col sm={2} className="skillImageMain">
            <div style={{ textAlign: "center" }}>
              <img
                className="skillImage dark-filter"
                src={Firebase}
                alt="Firebase"
                title="Firebase"
              />
            </div>
          </Col>
          <Col sm={2} className="skillImageMain">
            <div style={{ textAlign: "center" }}>
              <img
                className="skillImage dark-filter"
                src={Docker}
                alt="Docker"
                title="Docker"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
