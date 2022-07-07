import { combineReducers } from "redux";

import sidebarReducer from "./sidebarReducer";
import themeReducer from "./themeReducer";
import rtlReducer from "./rtlReducer";

export default combineReducers({
  sidebar: sidebarReducer,
  theme: themeReducer,
  rtl: rtlReducer,

});
