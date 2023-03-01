import Clock from "../components/Clock";
import image2 from "../images/002.png";

type Props = {};

const SixtyperTen = (props: Props) => {
  return (
    <div className="bg-green-100 h-screen">
      <Clock focusTime={60} restTime={10} numberOfCicles={4} image={image2} />;
    </div>
  );
};

export default SixtyperTen;
