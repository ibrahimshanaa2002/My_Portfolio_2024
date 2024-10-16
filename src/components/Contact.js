import emailjs from "emailjs-com";
import { useContext, useState } from "react";
import NavContext from "../context/navContext";
const Contact = () => {
  const { nav } = useContext(NavContext);

  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_w9ekazf", // service id
          "template_3tyz2ma", // template id
          mailData,
          "b--YnZgZda7PVRf8Q" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <section id="contact" className={`${nav === "contact" ? "active" : ""}`}>
      <div className="contact-container">
        {/* Main Heading Starts */}
        <div className="container page-title text-center">
          <h2 className="text-center">
            get <span>in touch</span>
          </h2>
          <span className="title-head-subtitle">
            I’m always open to discussing programming projects or partnerships.
          </span>
        </div>
        {/* Main Heading Ends */}
        <div className="container">
          <div className="row contact">
            {/* Contact Infos Starts */}
            <div className="col-12 col-md-4 col-xl-4 leftside">
              <ul className="custom-list">
                <li>
                  <h6 className="font-weight-600">
                    {" "}
                    <span className="contact-title">Phone</span>
                    <i className="fa fa-whatsapp" />
                    <span className="contact-content">
                      <a
                        className="text-white"
                        href="https://wa.me/96176760016?text=Hello%20From%20Your%20Portfolio!"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +961 76 760 016
                      </a>
                    </span>
                  </h6>
                </li>
                <li>
                  <h6 className="font-weight-600">
                    {" "}
                    <span className="contact-title">email</span>
                    <i className="fa fa-envelope-o fs-14" />
                    <span className="contact-content">
                      <a
                        className="text-white"
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=ibrahim.shanaa122@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ibrahim.shanaa122@gmail.com
                      </a>
                    </span>
                  </h6>
                </li>
                <li>
                  <h6 className="font-weight-600">
                    <span className="contact-title">LinkedIn</span>

                    <i className="fa fa-linkedin" />
                    <span className="contact-content">
                      <a
                        className="text-white"
                        href="https://www.linkedin.com/in/ibrahim-sh/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ibrahim-sh
                      </a>
                    </span>
                  </h6>
                </li>
                <li>
                  <h6 className="font-weight-600">
                    <span className="contact-title">gitHub </span>
                    <i className="fa fa-github" />
                    <span className="contact-content">
                      <a
                        className="text-white"
                        href="https://github.com/ibrahimshanaa2002"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ibrahimshanaa2002
                      </a>
                    </span>
                  </h6>
                </li>
              </ul>
              {/* Social Media Profiles Starts */}
              <div className="social">
                <h6 className="font-weight-600 uppercase">Social Profiles</h6>
                <ul className="list-inline social social-intro text-center p-none">
                  <li className="facebook">
                    <a
                      title="Facebook"
                      href="https://www.facebook.com/ibrahimShanaa7676"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="instagram">
                    <a
                      title="Instagram"
                      href="https://www.instagram.com/ibrahim_shanaa/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li className="twitter">
                    <a
                      title="Twitter"
                      href="https://twitter.com/shanaa122"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="skype">
                    <a
                      title="Skype"
                      href="https://join.skype.com/invite/Mq8bwWo2Ug0p"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-skype" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Social Media Profiles Ends */}
            </div>
            {/* Contact Infos Ends */}
            {/* Contact Form Starts */}
            <div className="col-12 col-md-8 col-xl-8 rightside">
              <p>
                If you have any suggestion, project or even you want to say
                Hello.. please fill out the form below and I will reply you
                shortly.
              </p>
              <form className="contactform" onSubmit={(e) => onSubmit(e)}>
                <div className="row">
                  {/* Name Field Starts */}
                  <div className="form-group col-xl-6">
                    {" "}
                    <i className="fa fa-user prefix" />
                    <input
                      id="name"
                      name="name"
                      onChange={(e) => onChange(e)}
                      value={name}
                      type="text"
                      className="form-control"
                      placeholder="YOUR NAME"
                      required=""
                    />
                  </div>
                  {/* Name Field Ends */}
                  {/* Email Field Starts */}
                  <div className="form-group col-xl-6">
                    {" "}
                    <i className="fa fa-envelope prefix" />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      onChange={(e) => onChange(e)}
                      value={email}
                      className="form-control"
                      placeholder="YOUR EMAIL"
                      required=""
                    />
                  </div>
                  {/* Email Field Ends */}
                  {/* Comment Textarea Starts */}
                  <div className="form-group col-xl-12">
                    {" "}
                    <i className="fa fa-comments prefix" />
                    <textarea
                      id="comment"
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                      className="form-control"
                      placeholder="YOUR MESSAGE"
                      required=""
                      defaultValue={""}
                    />{" "}
                  </div>
                </div>

                {/* Submit Form Button Starts */}
                <div className="submit-form">
                  <button
                    className="btn button-animated"
                    type="submit"
                    name="send"
                  >
                    <span>
                      <i className="fa fa-send" /> Send Message
                    </span>
                  </button>
                </div>

                {/* Submit Form Button Ends */}
                <div className="form-message">
                  <div
                    className={error ? "empty_notice" : "returnmessage"}
                    style={{ display: error == null ? "none" : "block" }}
                  >
                    <span>
                      {error
                        ? "Please Fill Required Fields"
                        : "Your message has been received, We will contact you soon."}
                    </span>
                  </div>{" "}
                  <span className="output_message text-center font-weight-600 uppercase" />
                </div>
              </form>
            </div>
            {/* Contact Form Ends */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
