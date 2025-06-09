import { useEffect, useRef } from "react";

const BackMobile = ({ changeMobileMenu, mobileMenu }) => {
  const backBtnRef = useRef(null);
  
  const handleBack = (e) => {
    e.preventDefault();
    // Force immediate menu close with priority
    changeMobileMenu(false, true);
  };
  
  // Reset any potential stuck state on mount
  useEffect(() => {
    return () => {
      // Clean up by ensuring menu is closed when unmounting
      changeMobileMenu(false, false);
    };
  }, []);
  
  return (
    <span
      className="back-mobile"
      id="back-mobile"
      ref={backBtnRef}
      onClick={handleBack}
    >
      <i className="fa fa-arrow-left" />
    </span>
  );
};
export default BackMobile;
