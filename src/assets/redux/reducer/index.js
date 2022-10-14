import projectHover from "./projectHover";
import projectHoverIMG from "./projectHoverImg"
import isGameStart from "./isGameStart";
import onPage from "./onPage"
import { combineReducers } from "redux";

const allReducer = combineReducers({
    projectHover,projectHoverIMG,isGameStart,onPage
})

export default allReducer;