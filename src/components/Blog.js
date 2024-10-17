import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import BlogPopup from "./BlogPopup";
const data = [
  {
    title: "Exploring the Flux AI Image Generator",
    img: "img/blog/blog-post-1.jpg",
    tag: "AI Technology",
    date: { date: "17", month: "Oct", year: "2024" },
    des: [
      "The Flux AI Image Generator is an innovative tool that harnesses the power of artificial intelligence to create stunning, high-quality images from simple text prompts. This cutting-edge technology streamlines the creative process for designers, artists, and content creators, making it easier than ever to generate unique visuals tailored to specific needs.",
      "I am excited to share my experience with the Flux AI Image Generator, which I recently explored for a project. This tool utilizes advanced machine learning algorithms to interpret textual descriptions and translate them into vivid imagery, saving significant time and effort compared to traditional design methods.",
      "The user-friendly interface of Flux AI allows users to input descriptive prompts, and within moments, it generates a variety of image options. This capability is particularly valuable for brainstorming sessions, allowing teams to visualize concepts quickly and effectively. I found the generator to be impressively accurate in capturing the essence of the prompts I provided, producing diverse styles and compositions.",
      "One of the standout features of the Flux AI Image Generator is its ability to produce images that can be used across multiple platforms and formats. Whether for social media posts, website graphics, or marketing materials, the images generated are high-resolution and easily customizable. This flexibility enables users to create content that aligns perfectly with their branding and aesthetic.",
      "Using the Flux AI Image Generator has not only enhanced my productivity but also sparked my creativity. By generating visuals rapidly, I can focus more on refining concepts and strategies rather than getting bogged down in the design process. As AI technology continues to evolve, tools like Flux are at the forefront of transforming how we approach visual content creation, opening new avenues for creativity and innovation.",
    ],
  },
  {
    title: "Unleashing Potential with Cursor AI",
    img: "img/blog/blog-post-2.jpg",
    tag: "AI Technology",
    date: { date: "12", month: "Sep", year: "2024" },
    des: [
      "Cursor AI is a groundbreaking tool designed to enhance productivity and creativity in various domains, including software development, content creation, and data analysis. By leveraging artificial intelligence, Cursor AI streamlines workflows and empowers users to achieve more in less time, transforming the way we interact with technology.",
      "I am thrilled to share my insights on Cursor AI, which I recently integrated into my daily tasks. This innovative platform acts as a powerful assistant, offering intelligent suggestions, automating repetitive tasks, and even generating code snippets. With its intuitive interface, Cursor AI seamlessly integrates into existing workflows, making it a valuable addition for professionals across different fields.",
      "One of the standout features of Cursor AI is its ability to learn from user interactions. As I utilized the tool, I noticed it adapted to my preferences, providing increasingly relevant suggestions that aligned with my unique style and requirements. This level of customization not only enhances efficiency but also fosters a more personalized user experience.",
      "Cursor AI excels in collaboration as well, making it an excellent choice for teams working on complex projects. Its capability to analyze input from multiple sources and provide insights in real time encourages a more dynamic and engaging collaborative environment. I found that using Cursor AI significantly improved communication within my team, as we could share ideas and feedback instantaneously.",
      "Adopting Cursor AI has been a game changer in my work routine. It has allowed me to focus on higher-level thinking and creativity rather than getting bogged down by tedious tasks. As artificial intelligence continues to evolve, tools like Cursor AI are paving the way for a future where technology amplifies human potential, enabling us to tackle challenges with confidence and innovation.",
    ],
  },
  {
    title: "Innovating with Luma Labs: The Future of Visual Content Creation",
    img: "img/blog/blog-post-3.jpg",
    tag: "AI Technology",
    date: { date: "05", month: "May", year: "2024" },
    des: [
      "Luma Labs is revolutionizing the way visual content is created and managed through its innovative AI-driven platform. Designed for artists, designers, and marketers, Luma Labs offers a suite of tools that empower users to produce high-quality visuals efficiently and effectively, redefining the creative process.",
      "I recently explored Luma Labs for my content creation projects, and I am excited to share my experience. The platform's intuitive interface allows users to generate stunning graphics, animations, and videos from simple prompts or existing assets. This capability not only saves time but also sparks creativity, enabling me to experiment with new ideas effortlessly.",
      "One of the standout features of Luma Labs is its collaborative environment. Teams can work together in real-time, sharing assets and providing feedback instantly. This functionality has transformed how I collaborate with my colleagues, making the process more dynamic and productive. The ability to see changes and iterations live encourages a more fluid exchange of ideas.",
      "Luma Labs also integrates advanced machine learning algorithms to analyze user preferences and project requirements, delivering personalized recommendations that enhance the creative process. This adaptability has made my work more efficient, as I can quickly access the tools and resources that best fit my style and objectives.",
      "Using Luma Labs has not only streamlined my workflow but also expanded my creative horizons. The platform empowers users to push boundaries and explore new avenues in visual storytelling. As AI technology continues to advance, tools like Luma Labs are paving the way for a future where creativity is amplified, allowing us to bring our visions to life with unparalleled ease.",
    ],
  },
  {
    title: "Unlocking New Possibilities: The Latest React Framework Update",
    img: "img/blog/blog-post-4.jpg",
    tag: "Web Development",
    date: { date: "09", month: "Oct", year: "2024" },
    des: [
      "The latest update to the React Framework has brought a host of exciting features and enhancements that promise to elevate the development experience. With a focus on performance, developer experience, and accessibility, this update positions React as a leading choice for building dynamic web applications.",
      "I am thrilled to explore the new capabilities introduced in this update. One of the most notable features is the improved server-side rendering (SSR) capabilities, which significantly enhance performance and reduce load times. This improvement allows developers to create applications that deliver a seamless experience for users, even in data-intensive scenarios.",
      "Additionally, the update introduces a new hook called `useTransition`, which simplifies managing state transitions in applications. This hook allows developers to mark updates as transitions, enabling smoother UI updates and improved responsiveness. I found this feature particularly helpful for creating engaging user interactions without sacrificing performance.",
      "The React team has also focused on enhancing accessibility with new built-in features that make it easier to build applications that comply with accessibility standards. This emphasis on inclusivity is a crucial step toward ensuring that all users can benefit from the web experiences we create.",
      "Overall, the latest React Framework update empowers developers with the tools needed to build high-performance, user-friendly applications. As I dive deeper into these new features, I am excited about the opportunities they present for innovation and creativity in my projects. React continues to evolve, and this update solidifies its place as a cornerstone of modern web development.",
    ],
  },
  {
    title: "Exploring the Exciting Features of WordPress 6.5 “Regina”",
    img: "img/blog/blog-post-5.jpg",
    tag: "Update",
    date: { date: "2", month: "April", year: "2024" },
    des: [
      "The latest version of WordPress, 6.5, named 'Regina' in honor of jazz violinist Regina Carter, was released on April 2, 2024. This update brings a host of new features and improvements that enhance the platform's functionality, particularly for content creators and developers.",
      "1. Enhanced Block Editor Experience: One of the standout features of WordPress 6.5 is the improved Block Editor. This update introduces new block types and enhances the performance of existing ones, making it easier for users to create rich, engaging content. The update streamlines the editing process, allowing for more intuitive layouts and designs without requiring extensive coding knowledge.",
      "2. Improved Accessibility: WordPress 6.5 places a strong emphasis on accessibility. The update includes various improvements that make the platform more usable for individuals with disabilities. This is part of WordPress's ongoing commitment to ensuring that everyone can create and manage content on the web effectively.",
      "3. Performance Enhancements: With each new release, performance optimizations are critical, and WordPress 6.5 is no exception. The update features faster load times and better overall performance, ensuring that websites built on this platform run smoothly and efficiently.",
      "4. Security Fixes**: Security remains a top priority for WordPress, and version 6.5 comes with numerous security fixes to protect sites from vulnerabilities. Regular updates like these help maintain the integrity of websites and safeguard against potential threats.",
      "5. Community Contributions: The success of WordPress 6.5 is attributed to the collaborative efforts of over 700 contributors from the WordPress community. This release exemplifies the power of open-source development and the importance of community input in shaping the future of the platform.",
      "In conclusion, the release of WordPress 6.5 'Regina' marks a significant milestone in the evolution of the platform, providing users with powerful new tools and features that enhance their content creation experience. Whether you're a blogger, business owner, or developer, this update promises to improve your workflow and empower you to create exceptional web experiences.",
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
