import { Link } from "react-router-dom";


type Props = {
  title: string,
  to: string,
};

const ChooseBox = ({ title, to }: Props) => {
  return (
    <Link to={to} className="border-solid border-2 border-black rounded-md p-10 box-border text-center m-5 md:w-1/4 md:h-2/3 hover:scale-105 hover:ease-in duration-500">
      <div >
        {title}
      </div>
    </Link>
  );
};

export default ChooseBox;
