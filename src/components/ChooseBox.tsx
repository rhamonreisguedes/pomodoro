import { Link } from "react-router-dom";


type Props = {
  title: string,
  to: string,
  comment: string,
  comment2?: string,
  comment3?: string,
  comment4?: string,
};

const ChooseBox = ({ title, to, comment, comment2, comment3, comment4 }: Props) => {
  return (
    <Link to={to} className="border-solid border-2 border-black rounded-md text-center py-5 my-5 md:mx-5 md:w-1/4 md:h-2/3 hover:scale-105 hover:ease-in duration-500">
      <div className="p-3 ">
        {title}
      </div>
      <div className="p-1">
        {comment}
      </div>
      <div className="p-1">
        {comment2? comment2 : ''}
      </div>
      <div className="p-1">
        {comment3? comment3 : ''}
      </div>
      <div className="p-1">
        {comment4? comment4 : ''}
      </div>
    </Link>
  );
};

export default ChooseBox;
