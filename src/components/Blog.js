import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import BlogPopup from "./BlogPopup";
const data = [
  {
    title: "International Computer Drivers License",
    img: "img/blog/blog-post-1.jpg",
    tag: "Certificate",
    date: { date: "23", month: "Apr", year: "2022" },
    des: [
      "The International Computer Driver's License (ICDL) is a globally recognized certification that verifies an individual's competence in essential computer skills. Offered by various accredited institutions worldwide, the ICDL assesses proficiency in areas such as basic computer operation, word processing, spreadsheets, presentations, internet browsing, email management, and IT security.",
      "The certification is designed to ensure that individuals have the necessary skills to effectively use computer applications and navigate digital environments, both in personal and professional settings. It's particularly valuable for individuals seeking to enhance their employability or advance their careers in fields where computer literacy is essential.",
      "I obtained my ICDL certification through the Arab International Academy, based in Jordan, via their online program. This certification has equipped me with the skills needed to excel in today's digital landscape, providing me with a recognized credential that showcases my proficiency in essential computer operations.",
    ],
  },
  {
    title: "SUPERVISOR CERTIFICATION PROGRAM (SCP)",
    img: "img/blog/blog-post-2.jpg",
    tag: "Certificate",
    date: { date: "18", month: "Feb", year: "2023" },
    des: [
      "The Supervisor Certification Program (SCP) offered by Routes for Development and Consultancy is a comprehensive training initiative designed to equip individuals with the essential skills and knowledge required for effective supervisory roles in various industries. This program focuses on developing competencies in team leadership, supervisory skills, customer interaction, teamwork, communication, and time management.",
      "I am proud to have completed the Supervisor Certification Program (SCP) offered by Routes for Development and Consultancy. This rigorous training initiative has equipped me with the essential skills and knowledge needed for effective supervisory roles in various industries. Through the SCP, I honed my abilities in team leadership, supervisory skills, customer interaction, teamwork, communication, and time management.",
      "Participants in the SCP undergo a structured curriculum that covers a range of topics essential for successful supervision. This includes learning how to lead teams effectively, manage workflows, handle customer interactions professionally, foster teamwork and collaboration among team members, communicate clearly and persuasively, and efficiently manage time and resources.",
    ],
  },
  {
    title: "Front-end Web Development",
    img: "img/blog/blog-post-3.jpg",
    tag: "Certificate",
    date: { date: "31", month: "May", year: "2023" },
    des: [
      "The Front-End Development Certificate program at Code Alpha is an intensive curriculum designed to equip individuals with the skills and knowledge necessary to excel in creating user-facing digital experiences. Through this program, participants delve into the fundamentals of front-end technologies such as HTML, CSS, and JavaScript, mastering the art of crafting visually appealing and responsive web interfaces.",
      "I am proud to have earned my Front-End Development Certificate from Code Alpha. This rigorous program has provided me with a comprehensive understanding of front-end development principles and techniques. Through hands-on projects and practical exercises, I have honed my skills in designing and implementing user-friendly interfaces, optimizing website performance, and ensuring cross-browser compatibility.",
      "Overall, earning my Front-End Development Certificate from Code Alpha has been a rewarding journey that has equipped me with the skills and confidence to pursue a successful career in web development. I am excited to apply my newfound knowledge and expertise to create innovative and impactful digital experiences for users around the world.",
    ],
  },
  {
    title: "Full-Stack ReactJS Web Development",
    img: "img/blog/blog-post-4.jpg",
    tag: "Certificate",
    date: { date: "01", month: "Mar", year: "2024" },
    des: [
      "The Full-Stack ReactJS Web Development program from Roaya International Academy is an immersive learning experience tailored to equip individuals with a comprehensive skill set for building modern web applications. Focused on utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js), participants dive deep into both front-end and back-end development using cutting-edge technologies.",
      "I am thrilled to have completed the Full-Stack ReactJS Web Development program from Roaya International Academy, where I gained proficiency in React.js, JavaScript, Node.js, Firebase, JSON Web Token (JWT), Redux.js, Search Engine Optimization (SEO), and the MERN stack. This rigorous curriculum provided me with hands-on experience in building dynamic and responsive web applications from start to finish.",
      "Throughout the program, I learned how to leverage React.js to create interactive user interfaces, Node.js for server-side development, and Firebase for real-time database management. Additionally, mastering technologies such as JSON Web Token (JWT) and Redux.js allowed me to implement secure authentication and state management in my applications.",
      "One of the highlights of the program was gaining expertise in Search Engine Optimization (SEO), enabling me to optimize web content for better visibility and ranking on search engine results pages. By mastering the MERN stack, I acquired the skills needed to develop scalable and efficient full-stack applications that meet the demands of today's digital landscape.",
      "Overall, completing the Full-Stack ReactJS Web Development program from Roaya International Academy has empowered me to tackle complex web development projects with confidence. I am excited to apply my newfound skills and knowledge to create innovative and impactful solutions that drive positive outcomes for businesses and users alike.",
    ],
  },
  {
    title: "Full-Stack AngularJS Web Development",
    img: "img/blog/blog-post-5.jpg",
    tag: "Certificate",
    date: { date: "25", month: "May", year: "2023" },
    des: [
      "The Full Stack Angular Web Development program from Anera and VestaCare Company is a comprehensive training initiative designed to provide individuals with a well-rounded skill set for proficiently handling both front-end and back-end web development tasks using Angular technology. Throughout the program, participants immerse themselves in a variety of tools and technologies essential for modern web application development.",
      "I'm pleased to announce my successful completion of the Full Stack Angular Web Development program from Anera and VestaCare Company. This intensive program equipped me with a diverse skill set, including Front-End Development, MySQL, TypeScript, Angular, Object-Oriented Programming (OOP), Cascading Style Sheets (CSS), Bootstrap, Web Development, JavaScript, GitHub, HTML, Back-End Web Development, Full-Stack Development, and Java.",
      "During the program, I deepened my understanding of Angular, mastering the creation of dynamic and interactive user interfaces. TypeScript proved invaluable for building scalable front-end applications, while MySQL allowed me to efficiently design and manage databases for seamless data storage and retrieval in my projects.",
      "My proficiency in Object-Oriented Programming (OOP) and JavaScript was further refined, enabling me to develop robust and well-structured code. I also gained expertise in crafting visually appealing and responsive web designs using Cascading Style Sheets (CSS) and Bootstrap. Additionally, delving into Back-End Web Development with Java, I learned to build RESTful APIs and server-side applications to complement my front-end projects.",
      "Completing the Full Stack Angular Web Development program has empowered me to tackle complex web development projects confidently. With this newfound expertise, I am eager to contribute to the creation of innovative and impactful web solutions that meet the evolving needs of businesses and users in today's digital landscape.",
    ],
  },
];
//image Size: 748 x 364

const Blog = () => {
  const { nav } = useContext(NavContext);
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };
  return (
    <Fragment>
      <BlogPopup open={modal} close={() => setModal(false)} data={activeData} />
      <section id="blog" className={`${nav === "blog" ? "active" : ""}`}>
        <div className="container page-title text-center">
          <h2 className="text-center">
            latest <span>posts</span>
          </h2>
          <span className="title-head-subtitle">
            tips, insights, and best practices about web developpment and design
          </span>
        </div>
        <div className="container">
          <div className="row">
            {data.map((data, i) => (
              <div className="col-12 col-sm-6" key={i}>
                <article>
                  {/* Figure Starts */}
                  <figure className="blog-figure">
                    <a href="#" onClick={() => onClick(i)}>
                      <img className="img-fluid" src={data.img} alt="" />
                    </a>
                    <div className="post-date">
                      {" "}
                      <span>{data.date.date}</span>
                      <span>{data.date.month}</span>
                    </div>
                  </figure>
                  {/* Figure Ends */}
                  <a href="#" onClick={() => onClick(i)}>
                    <h4>{data.title}</h4>
                  </a>
                  {/* Excerpt Starts */}
                  <div className="blog-excerpt">
                    <p>{data.des[0].substring(0, 92)}... </p>
                    <a
                      href="#"
                      onClick={() => onClick(i)}
                      className="btn readmore"
                    >
                      <span>Read more</span>
                    </a>
                  </div>
                  {/* Excerpt Ends */}
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Blog;
