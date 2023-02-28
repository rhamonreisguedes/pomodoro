import React from "react";

type Props = {
  innerText: string;
  subtitle: string;
};

const Title = ({ innerText, subtitle }: Props) => {
  return (
    <div>
      <div className="text-center text-lg p-6 md:text-5xl font-bold">
        {innerText}
      </div>
      <div className="text-center text-lg p-6 md:text-xl font-bold">
        {subtitle}
      </div>
    </div>
  );
};

export default Title;
