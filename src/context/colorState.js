import { useEffect, useReducer } from "react";
import ColorContext from "./colorContext";

const type = {
  COLOR: "COLOR",
};

const navReducer = (state, action) => {
  switch (action.type) {
    case type.COLOR:
      return {
        ...state,
        color: action.payload,
      };

    default:
      return state;
  }
};

const ColorState = (props) => {
  const getInitialColor = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedColor') || 'yellow';
    }
    return 'yellow';
  };

  const initialState = {
    color: getInitialColor(),
  };

  const [state, dispatch] = useReducer(navReducer, initialState);

  useEffect(() => {
    // Load initial theme
    const savedColor = getInitialColor();
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('data-theme', savedColor);
    link.setAttribute('href', `/css/skins/${savedColor}.css`);
    document.head.appendChild(link);
  }, []);

  const changeColor = (value) => {
    // Save to localStorage
    localStorage.setItem('selectedColor', value);

    // Remove existing theme stylesheet if it exists
    const existingTheme = document.querySelector('link[data-theme]');
    if (existingTheme) {
      existingTheme.remove();
    }

    // Create and append new theme stylesheet
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('data-theme', value);
    link.setAttribute('href', `/css/skins/${value}.css`);
    document.head.appendChild(link);

    // Update state
    dispatch({
      type: type.COLOR,
      payload: value,
    });
  };

  return (
    <ColorContext.Provider
      value={{
        changeColor: changeColor,
        color: state.color,
      }}
    >
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorState;
