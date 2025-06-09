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
  const changeMobileMenu = (value) => {
    // Debounce menu transitions to prevent recoil effects
    if (state.isTransitioning) return;
    
    // Set transitioning state
    dispatch({
      type: type.TRANSITIONING,
      payload: true,
    });
    
    // Change the mobile menu state
    dispatch({
      type: type.MOBILE_MENU,
      payload: value,
    });
    
    // Reset transitioning state after animation completes
    setTimeout(() => {
      dispatch({
        type: type.TRANSITIONING,
        payload: false,
      });
    }, 400); // Match this with the CSS transition duration
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
