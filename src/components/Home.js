import { useContext } from "react";
import Image from "next/image";
import NavContext from "../context/navContext";
import AnimationText from "./AnimationText";

const Home = ({ leftImg, video, leftImgSrc }) => {
  const { nav, changeNav } = useContext(NavContext);

  return (
    <section id="home" className={`${nav === "home" ? "active" : ""}`}>
      {/* Text Rotator Starts */}
      <div className="main-text-container">
        {video && (
          <video className="bg-video" autoPlay loop muted poster="/img/bg-video-poster.jpg">
            <source src="/img/video.mp4" type="video/mp4" />
            <source src="/img/video.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        )}
        {leftImg && (
          <Image
            className="leftimagepicture"
            src={leftImgSrc ? leftImgSrc : "/img/leftimage-dark.jpg"}
            alt=""
            width={500} // Set appropriate width
            height={500} // Set appropriate height
            layout="responsive" // Adjust layout as needed
          />
        )}
        <div className="main-text" id="selector">
          <h3>Hi there!</h3>
          <AnimationText />
          <p>
            {`I'm`} a web developer located in Lebanon, dedicated to creating engaging and aesthetically pleasing web applications by employing meticulously designed code with a focus on user experience. I also concentrate on high-end functionality with a strong emphasis on secure coding practices.
          </p>
          <div className="call-to-actions-home">
            <div className="text-left">
              <a
                href="#about"
                onClick={() => changeNav("about")}
                className="btn link-portfolio-one"
              >
                <span>
                  <i className="fa fa-user" />
                  more about me
                </span>
              </a>
              <a
                href="#work"
                onClick={() => changeNav("work")}
                className="btn btn-secondary link-portfolio-two"
              >
                <span>
                  <i className="fa fa-suitcase" />
                  portfolio
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Text Rotator Ends */}
    </section>
  );
};

export default Home;
