import React, { useEffect } from "react";
import { TweenMax } from "gsap";
import "./styles.scss";
import { useSelector } from "react-redux";
const Cursor = () => {

  const isProjectHover = useSelector((state) => state.projectHover);
  const projectHoverIMG =useSelector((state) => state.projectHoverIMG);
  useEffect(() => {
    const $ballImg = document.querySelector(".cursor__img");
    const $bigBall = document.querySelector(".cursor__ball--big");
    const $smallBall = document.querySelector(".cursor__ball--small");
    const $hoverables = document.querySelectorAll(".hoverable");
    TweenMax.set($bigBall, { clearProps: "all" });
    TweenMax.set($smallBall, { clearProps: "all" });
    // Listeners
    document.body.addEventListener("mousemove", onMouseMove);

    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener("mouseenter", onMouseHover);
      $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
    }

    // Move the cursor
    function onMouseMove(e) {
        TweenMax.to($ballImg, 0.4, {
        x: e.clientX - 15,
        y: e.clientY - 15,
      });
      TweenMax.to($bigBall, 0.4, {
        x: e.clientX - 15,
        y: e.clientY - 15,
      });
      TweenMax.to($smallBall, 0.1, {
        x: e.clientX - 5,
        y: e.clientY - 7,
      });
    }

    // Hover an element
    function onMouseHover() {
      TweenMax.to($bigBall, 0.3, {
        scale: 2,
      });
    }
    function onMouseHoverOut() {
      TweenMax.to($bigBall, 0.3, {
        scale: 1,
      });
    }
  }, []);

  return (
    <>
      <div className="cursor">
        <div className="cursor__ball__img cursor__img " style={isProjectHover?{display:"block"}:{display:"none"}}>
              <img
                style={{ position: "relative", top: "-80px", left: "-40%" }}
                src={projectHoverIMG}
                width="300rem"
                height="auto"
                alt={projectHoverIMG}
                className={isProjectHover?"projectImg ":""}
              />
        </div>
        <div className="cursor__ball cursor__ball--big ">
          <svg height={40} width={40}>
            <circle cx={20} cy={20} r={17} strokeWidth={0} />
          </svg>
        </div>
        <div className="cursor__ball cursor__ball--small">
          <svg height={10} width={10}>
            <circle cx={5} cy={5} r={4} strokeWidth={0} />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Cursor;
