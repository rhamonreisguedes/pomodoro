import React from "react";
import ChooseBox from "../components/ChooseBox";
import Title from "../components/Title";
import image1 from '../images/001.png'
import image2 from '../images/002.png'
import image3 from '../images/003.png'

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="bg-green-100 h-screen">
      <Title innerText="POMODORO" subtitle={"Escolha a melhor opção para os seus objetivos:"}/>
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center md:h-96">
        <ChooseBox
          title={"25:5"}
          to={"/25:5"}
          comment={`Indicado para iniciantes`}
          comment2={"- 25 minutos de foco"}
          comment3={"- 5 minutos de descanso"}
          comment4={"- 4 ciclos"}
          image={image1}
        />
        <ChooseBox
          title={"60:10"}
          to={"/60:10"}
          comment={"Indicado para experientes"}
          comment2={"- 60 minutos de foco"}
          comment3={"- 10 minutos de descanso"}
          comment4={"- 4 ciclos"}
          image={image2}
        />
       <ChooseBox
          title={"Personalizada"}
          to={"/personalizado"}
          comment={"Indicado para muito experientes."}
          comment2={"- Número livre de minutos para foco"}
          comment3={"- Número livre de minutos para descanso"}
          comment4={"- Quantos ciclos você escolher"}
          image={image3}
        />
      </div>
    </div>
  );
};

export default Home;
