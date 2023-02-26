import React from "react";
import ChooseBox from "../components/ChooseBox";
import Title from "../components/Title";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Title innerText={"Escolha a melhor opção para os seus objetivos:"}/>
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center md:h-screen">
        <ChooseBox title={'25:5'} to={'/'}/>
        <ChooseBox title={'Personalizado'} to={'/'}/>
        <ChooseBox title={'60:10'} to={'/'}/>
      </div>
    </div>
  );
};

export default Home;
