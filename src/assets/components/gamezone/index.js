import React from "react";
import "./styles.scss";
import { TweenMax } from "gsap";
import { Container, Row, Col } from "react-bootstrap";
import BgGame from "../../images/Game/bg2.jpg";
import mainActStand from "../../images/Game/mainActStand.gif";
import mainActRun from "../../images/Game/mainActRun.gif";
import mainActRunBack from "../../images/Game/mainActRunBack.gif";
import mainActAttack from "../../images/Game/mainActAttack.gif";
import enBull from "../../images/Game/enemy.gif";
import {isGameStart } from "../../redux/actions";
import { useDispatch , useSelector} from "react-redux";
export default function Index() {
  const dispatch = useDispatch();
  const isGameStartStatus = useSelector(state => state.isGameStart)
  const [mainActType, setMainActType] = React.useState(mainActStand);
  const [statusDis, setStatusDis] = React.useState("d-none");
  const [isGameDone, setIsGameDone] = React.useState(false);
  
  React.useEffect(() => {
    if (isGameDone || !isGameStartStatus) {
      return;
    } else {
      setInterval(() => {
        setMainActType(mainActStand);
      }, 1000);

      setInterval(() => {
        onEnemyAttack();
      }, 1000);
    }

    //////////////////////////////
    function onMainActMove(e) {
      e.preventDefault();

      const gameScreen = document.querySelector(".game-screen");
      var gScreen = gameScreen.getBoundingClientRect();
      const $mainAct = document.querySelector(".mainCollision");
      var keyCode = e.code;
      switch (keyCode) {
        //Backward
        case "KeyA":
          setMainActType(mainActRunBack);

          var mainAct = $mainAct.getBoundingClientRect();
          var isOverlap = !(mainAct.left - 10 > gScreen.left);
          if (!isOverlap) {
            TweenMax.to($mainAct, {
              left: `-=50px`,
            });
          }

          break;
        //Forward
        case "KeyD":
          onEnemyAttack();
          setMainActType(mainActRun);
          var mainAvatar = $mainAct.getBoundingClientRect();
          var position = {
            x: mainAvatar.x,
            y: mainAvatar.y,
          };
          if (position.x - gScreen.x / 2 > gScreen.x) {
            const bgScreen = document.querySelector(".game-bg");
            var bScreen = bgScreen.getBoundingClientRect();
            isOverlap = !(bScreen.right - 80 > gScreen.right);
            if (!isOverlap) {
              var bgGame = document.querySelector(".game-bg");
              TweenMax.to(bgGame, 0.4, {
                left: `-=50px`,
              });
              var enemy = document.querySelector(".EnemyBullStyle");

              TweenMax.to(enemy, 0.4, {
                left: `-=50px`,
              });

              var enemy2 = document.querySelector(".EnemyBullStyle2");

              TweenMax.to(enemy2, 0.4, {
                left: `-=50px`,
              });

              var enemy3 = document.querySelector(".EnemyBullStyle3");

              TweenMax.to(enemy3, 0.4, {
                left: `-=50px`,
              });
            } else {
              mainAct = $mainAct.getBoundingClientRect();
              isOverlap = !(mainAct.right < gScreen.right);
              if (!isOverlap) {
                TweenMax.to($mainAct, 0.4, {
                  left: `+=20px`,
                });
              }
            }
          } else {
            TweenMax.to($mainAct, 0.4, {
              left: `+=20px`,
            });
          }

          break;
        default:
          setMainActType(mainActStand);
          break;
      }
    }
    window.addEventListener("keydown", onMainActMove);
    window.addEventListener("click", onMainActAttack);
    return () => {
      window.removeEventListener("keydown", onMainActMove);
      window.removeEventListener("click", onMainActAttack);
    };
  }, [isGameDone,isGameStartStatus]);

  //////////////////////////////
  function onMainActAttack(e) {
    e.preventDefault();
    if (e.type === "click") {
      setMainActType(mainActAttack);

      var main = document.querySelector(".mainAttackCollision");
      var mainAct = main.getBoundingClientRect();

      var enemy = document.querySelector(".EnemyBullStyle");
      var enemy2 = document.querySelector(".EnemyBullStyle2");
      var enemy3 = document.querySelector(".EnemyBullStyle3");
      var enemyAct = enemy.getBoundingClientRect();
      var enemyAct2 = enemy2.getBoundingClientRect();
      var enemyAct3 = enemy3.getBoundingClientRect();
      var isOverlapE1 = !(
        mainAct.right < enemyAct.left ||
        mainAct.left > enemyAct.right ||
        mainAct.bottom < enemyAct.top ||
        mainAct.top > enemyAct.bottom
      );
      console.log(isOverlapE1 + "TTT");
      if (isOverlapE1) {
        enemy = document.querySelector(".EnemyBullStyle");
        TweenMax.to(enemy, 0.3, { top: "+=100px" });
      }
      var isOverlapE2 = !(
        mainAct.right < enemyAct2.left ||
        mainAct.left > enemyAct2.right ||
        mainAct.bottom < enemyAct2.top ||
        mainAct.top > enemyAct2.bottom
      );
      if (isOverlapE2) {
        enemy = document.querySelector(".EnemyBullStyle2");
        TweenMax.to(enemy, 0.3, { top: "+=100px" });
      }
      var isOverlapE3 = !(
        mainAct.right < enemyAct3.left ||
        mainAct.left > enemyAct3.right ||
        mainAct.bottom < enemyAct3.top ||
        mainAct.top > enemyAct3.bottom
      );
      if (isOverlapE3) {
        setIsGameDone(true);
        setStatusDis("d-flex fade-in bgGreen");
        enemy = document.querySelector(".EnemyBullStyle3");
        TweenMax.to(enemy, 0.3, { top: "+=100px" });
      }
    }
  }
  //////////////////////////////
  function onEnemyAttack() {
  
    var swordArea = document.querySelector(".mainAttackCollision");
    var sword = swordArea.getBoundingClientRect();
    var enemy = document.querySelector(".EnemyBullStyle");
    var enemyAct = enemy.getBoundingClientRect();
    var isSwordAreaXEnemy = !(
      sword.right < enemyAct.left ||
      sword.left > enemyAct.right ||
      sword.bottom < enemyAct.top ||
      sword.top > enemyAct.bottom
    );
    if (isSwordAreaXEnemy) {
      setTimeout(() => {
        TweenMax.to(enemy, 0.2, {
          left: `-=80px`,
          onComplete: () => {
            var mainBody = document.querySelector(".mainCollision");
            var mainActBody = mainBody.getBoundingClientRect();
            var enemy = document.querySelector(".EnemyBullStyle");
            var enemyAct = enemy.getBoundingClientRect();
            var isBodyAreaXEnemy = !(
              mainActBody.right < enemyAct.left ||
              mainActBody.left > enemyAct.right ||
              mainActBody.bottom < enemyAct.top ||
              mainActBody.top > enemyAct.bottom
            );

            if (isBodyAreaXEnemy) {
              setIsGameDone(true);
              setStatusDis("d-flex fade-in bgRed");
            }

            TweenMax.to(enemy, 0.2, { left: `+=80px` });
          },
        });
      }, 1000);
    }

    var enemy2 = document.querySelector(".EnemyBullStyle2");
    var enemyAct2 = enemy2.getBoundingClientRect();
    isSwordAreaXEnemy = !(
      sword.right < enemyAct2.left ||
      sword.left > enemyAct2.right ||
      sword.bottom < enemyAct2.top ||
      sword.top > enemyAct2.bottom
    );
    if (isSwordAreaXEnemy) {
      setTimeout(() => {
        TweenMax.to(enemy2, 0.2, {
          left: `-=80px`,
          onComplete: () => {
            var mainBody = document.querySelector(".mainCollision");
            var mainActBody = mainBody.getBoundingClientRect();
            var enemy2 = document.querySelector(".EnemyBullStyle2");
            var enemyAct2 = enemy2.getBoundingClientRect();
            var isBodyAreaXEnemy = !(
              mainActBody.right < enemyAct2.left ||
              mainActBody.left > enemyAct2.right ||
              mainActBody.bottom < enemyAct2.top ||
              mainActBody.top > enemyAct2.bottom
            );

            if (isBodyAreaXEnemy) {
              setIsGameDone(true);
              setStatusDis("d-flex fade-in bgRed");
            }

            TweenMax.to(enemy2, 0.2, { left: `+=80px` });
          },
        });
      }, 1000);
    }

    var enemy3 = document.querySelector(".EnemyBullStyle3");
    var enemyAct3 = enemy3.getBoundingClientRect();
    isSwordAreaXEnemy = !(
      sword.right < enemyAct3.left ||
      sword.left > enemyAct3.right ||
      sword.bottom < enemyAct3.top ||
      sword.top > enemyAct3.bottom
    );
    if (isSwordAreaXEnemy) {
      setTimeout(() => {
        TweenMax.to(enemy3, 0.2, {
          left: `-=80px`,
          onComplete: () => {
            var mainBody = document.querySelector(".mainCollision");
            var mainActBody = mainBody.getBoundingClientRect();
            var enemy3 = document.querySelector(".EnemyBullStyle3");
            var enemyAct3 = enemy3.getBoundingClientRect();
            var isBodyAreaXEnemy = !(
              mainActBody.right < enemyAct3.left ||
              mainActBody.left > enemyAct3.right ||
              mainActBody.bottom < enemyAct3.top ||
              mainActBody.top > enemyAct3.bottom
            );

            if (isBodyAreaXEnemy) {
              setIsGameDone(true);
              setStatusDis("d-flex fade-in bgRed");
            }

            TweenMax.to(enemy3, 0.2, { left: `+=80px` });
          },
        });
      }, 1000);
    }
  }

  return (
    <Row className="game" onMouseEnter={()=>{
        dispatch(isGameStart(true))
      }}
      onMouseLeave={()=>{
          dispatch(isGameStart(false))
      }}

      >
      <Col sm>
        <Container fluid="md">
          <Row>
            <Col sm className="d-flex justify-content-center align-items-center m-3" >
              <div >
            <Row>
              <Col sm >
              <h1 className="gameTitle">MINIGAME^^</h1>
              </Col>
            </Row>
            <Row>
              <Col sm>
              <h2 className="gameHowTitle">HOW TO PLAY?</h2>
              </Col>
            </Row>
            <Row>
              <Col sm className="gameHow">
              <p >1. Press " A " walks left. </p>
              <p>2. Press " D " walks right. </p>
              <p>3. Left click to attack. </p>
              </Col>
            </Row>
              </div>

            </Col>
            <Col>
              <Row className="game-wrap">
                <Col>
                  <Row>
                    <Col className="game-header">
                      <svg height={30} width={30}>
                        <circle
                          cx={15}
                          cy={15}
                          r={7.5}
                          strokeWidth={0}
                          className="circleRed"
                        />
                      </svg>
                      <svg height={30} width={30} className="circleYell">
                        <circle cx={15} cy={15} r={7.5} strokeWidth={0} />
                      </svg>
                      <svg height={30} width={30} className="circleGreen">
                        <circle cx={15} cy={15} r={7.5} strokeWidth={0} />
                      </svg>
                    </Col>
                  </Row>
                  <Row className="h-100">
                    <Col className="game-contain">
                      <div className="game-screen">
                        <div className="game-content">
                          <div className="game-bg">
                            <img src={BgGame} alt="game-background" />
                          </div>
                          <div className="mainCollision">
                            <div className="mainAttackCollision">
                              <img
                                src={mainActType}
                                className="mainActStyle"
                                alt={"mainAct"}
                              />
                            </div>
                          </div>
                          <img
                            src={enBull}
                            className="EnemyBullStyle"
                            alt={"enemy"}
                          />

                          <img
                            src={enBull}
                            className="EnemyBullStyle2"
                            alt={"enemy2"}
                          />

                          <img
                            src={enBull}
                            className="EnemyBullStyle3"
                            alt={"enemy3"}
                          />
                        </div>

                        {/*  <div
                          className="circleX"
                          style={{
                            position: "relative",
                            zIndex: 1000,
                            top:270
                          }}
                        >
                          <svg height={60} width={60} className="circleRed">
                            <circle cx={30} cy={30} r={15} strokeWidth={0} />
                          </svg>
                        </div>*/}

                        <div
                          className={`gameWin ${statusDis} justify-content-center align-items-center`}
                        >
                          {statusDis.includes("bgGreen") ? (
                            <h1>WINNER</h1>
                          ) : (
                            <h1>GAME OVER</h1>
                          )}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
}
