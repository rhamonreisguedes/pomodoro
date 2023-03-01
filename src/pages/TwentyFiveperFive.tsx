import React from "react";
import Clock from "../components/Clock";
import image1 from "../images/001.png";

type Props = {};

const TwentyFiveperFive = (props: Props) => {
  return (
    <div className="bg-green-100 h-screen">
      <Clock focusTime={25} restTime={5} numberOfCicles={4} image={image1} />
    </div>
  );
};

export default TwentyFiveperFive;
