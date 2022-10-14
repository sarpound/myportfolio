import mercury from "../../images/mercury.png";
import siitgate from "../../images/siitgate.png";
import anti from "../../images/anti.png";
import game from "../../images/game.png";
import book from "../../images/book.png";

const projectHoverImg = (state = "", action) => {
  switch (action.type) {
    case "PROJECT_HOVER_IMG":
      switch (action.payload) {
        case "mercury":
          return mercury;
        case "siitgate":
          return siitgate;
        case "anticovid":
          return anti;
        case "game":
          return game;
        case "book":
          return book;
        default:
          return "Nothing";
      }
    default:
      return state;
  }
};

export default projectHoverImg;
