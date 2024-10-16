import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Ibrahim Shanaa",
          "a Web Developer",
          "a Wordpress Developer",
          "a Freelancer",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
