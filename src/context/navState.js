import { useReducer } from "react";
import NavContext from "./navContext";

const type = {
  NAV: "NAV",
  MOBILE_MENU: "MOBILE_MENU",
  TRANSITIONING: "TRANSITIONING",
};

const navReducer = (state, action) => {
  switch (action.type) {
    case type.NAV:
      return {
        ...state,
        nav: action.payload,
      };
    case type.MOBILE_MENU:
      return {
        ...state,
        mobileMenu: action.payload,
      };
    case type.TRANSITIONING:
      return {
        ...state,
        isTransitioning: action.payload,
      };
    default:
      return state;
  }
};

const NavState = (props) => {
  const initialState = {
    nav: "home",
    mobileMenu: false,
    isTransitioning: false,
  };
  const [state, dispatch] = useReducer(navReducer, initialState);

  const changeNav = (value) => {
    dispatch({
      type: type.NAV,
      payload: value,
    });
  };
  const changeMobileMenu = (value, priority = false) => {
    // Skip debounce for priority actions or if we're closing the menu (back button)
    if (!priority && state.isTransitioning && value !== false) return;
    
    // For priority or back actions, force immediate state reset
    if (priority || value === false) {
      // For back button/closing actions, we want to ensure it always works
      dispatch({
        type: type.MOBILE_MENU,
        payload: value,
      });
      
      // Use a shorter transition time for back button to feel more responsive
      const transitionTime = value === false ? 300 : 400;
      
      dispatch({
        type: type.TRANSITIONING,
        payload: true,
      });
      
      setTimeout(() => {
        dispatch({
          type: type.TRANSITIONING,
          payload: false,
        });
      }, transitionTime);
      
      return;
    }
    
    // Normal transition (non-priority, non-back)
    dispatch({
      type: type.TRANSITIONING,
      payload: true,
    });
    
    dispatch({
      type: type.MOBILE_MENU,
      payload: value,
    });
    
    setTimeout(() => {
      dispatch({
        type: type.TRANSITIONING,
        payload: false,
      });
    }, 400);
  };
  return (
    <NavContext.Provider
      value={{
        changeNav: changeNav,
        nav: state.nav,
        mobileMenu: state.mobileMenu,
        isTransitioning: state.isTransitioning,
        changeMobileMenu: changeMobileMenu,
      }}
    >
      {props.children}
    </NavContext.Provider>
  );
};

export default NavState;
