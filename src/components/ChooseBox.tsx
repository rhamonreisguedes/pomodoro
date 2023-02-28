import { Link } from "react-router-dom";


type Props = {
  title: string,
  to: string,
  comment: string,
  comment2?: string,
  comment3?: string,
  comment4?: string,
  image: string
};

const ChooseBox = ({ title, to, comment, comment2, comment3, comment4, image }: Props) => {
  return (
    <Link to={to} className="bg-green-200 border-solid border-2 border-black rounded-md text-center py-4 my-4 md:text-lg md:mx-5 md:w-1/4 md:h-96 hover:scale-105 hover:ease-in duration-500 hover:bg-green-400">
      <div className="p-3 font-bold text-2xl">
        {title}
      </div>
      <div className="flex justify-center">
        <img src={image} alt='' width={'130px'}/>
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
