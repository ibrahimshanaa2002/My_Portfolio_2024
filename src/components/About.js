import { useContext } from "react";
import NavContext from "../context/navContext";
const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          about <span>me</span>
        </h2>
        <span className="title-head-subtitle">
          I design and code beautiful things, and I&apos;m passionate about my
          work.
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/dark-about.jpg"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
              {`I'm`} A web developer based in Lebanon, I strive to build
              immersive and beautiful web applications through carefully crafted
              code and user-centric design.
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">First Name</span>
                    Ibrahim
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Last Name</span>
                    Shanaa
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Birthdate</span>24 Sep
                    2002
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Nationality</span>
                    Palestinian
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Experience</span>2 year
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Address</span>
                    Lebanon
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Freelance</span>
                    Available
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Languages</span>
                    Arabic, English
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Phone</span>+961 76 760
                    016
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    ibrahim.shanaa122@gmail.com
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">LinkedIn</span>
                    ibrahim-sh
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">GitHub</span>
                    ibrahimshanaa2002
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-12 resume-btn-container">
              <a
                href="/assets/IbrahimShanaaCV.pdf"
                download="IbrahimShanaaCV.pdf"
                className="btn btn-resume"
              >
                <span>
                  <i className="fa fa-download" />
                  Download my CV
                </span>
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experience
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Feb 2023 - May 2023 · 5 mos
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Full-Stack Angular Web Developer
                        <span className="separator" />
                        <span className="font-weight-700">VestaCare</span>
                      </span>
                    </div>
                    <div className="card-body text-justify">
                      <p>
                        Implemented acquired skills by collaborating with a team
                        on a dynamic dashboard project using the Angular
                        framework. Contributed to the development of an
                        interactive and efficient dashboard, showcasing
                        practical application of HTML, TypeScript, CSS, and
                        Angular expertise.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Sep 2023 - Oct 2023 · 2 mos
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Frontend Web Developer
                        <span className="separator" />
                        <span className="font-weight-700">Code Alpha</span>
                      </span>
                    </div>
                    <div className="card-body text-justify">
                      <p>
                        During my internship in front-end development, I honed
                        my skills in HTML, CSS, Bootstrap, and JavaScript while
                        actively utilizing GitHub for version control.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        May 2024 - Present
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Wordpress Developer
                        <span className="separator" />
                        <span className="font-weight-700">
                          Independent Contractor
                        </span>
                      </span>
                    </div>
                    <div className="card-body text-justify">
                      <p>
                        I develop and customize WordPress websites, focusing on
                        theme development, plugin integration, and responsive
                        design. My work ensures optimized performance and a
                        seamless user experience, tailored to meet client needs.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Education
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2021 - 2025
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Bachelor&apos;s degree
                        <span className="separator" />
                        <span className="font-weight-700">
                          Lebanese International University
                        </span>
                      </span>
                    </div>
                    <div className="card-body text-justify">
                      <p>
                        I pursued a Bachelor&apos;s degree in Computer Science
                        at Lebanese International University, where I delved
                        into the fundamentals of computing, including
                        programming languages, algorithms, and software
                        development methodologies.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2007 - 2010
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        high school
                        <span className="separator" />
                        <span className="font-weight-700">Bissan School</span>
                      </span>
                    </div>
                    <div className="card-body text-justify">
                      <p>
                        During my secondary education, I completed the Lebanese
                        Baccalaureate program, which encompassed a diverse range
                        of subjects including mathematics, sciences, humanities,
                        and languages.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">html</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={95}
                  style={{ width: "95%" }}
                />
                <span className="percent" style={{ right: "calc(5% - 21px)" }}>
                  95%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">javascript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">typescript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={55}
                  style={{ width: "55%" }}
                />
                <span className="percent" style={{ right: "calc(45% - 21px)" }}>
                  55%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">css</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Tailwind css</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={95}
                  style={{ width: "95%" }}
                />
                <span className="percent" style={{ right: "calc(5% - 21px)" }}>
                  95%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">wordpress</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={95}
                  style={{ width: "95%" }}
                />
                <span className="percent" style={{ right: "calc(5% - 21px)" }}>
                  95%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">React JS</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">angular js</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={70}
                  style={{ width: "70%" }}
                />
                <span className="percent" style={{ right: "calc(30% - 21px)" }}>
                  70%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">MySQL</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
