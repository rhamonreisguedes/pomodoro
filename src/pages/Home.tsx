import React from "react";
import ChooseBox from "../components/ChooseBox";
import Title from "../components/Title";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Title innerText={"Escolha a melhor opção para os seus objetivos:"} />
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-center md:h-96">
        <ChooseBox
          title={"25:5"}
          to={"/25:5"}
          comment={"Indicado para iniciantes"}
          comment2={"- 25 minutos de foco"}
          comment3={"- 5 minutos de descanso"}
          comment4={"- 4 ciclos"}
        />
        <ChooseBox
          title={"60:10"}
          to={"/60:10"}
          comment={"Indicado para experientes"}
          comment2={"- 60 minutos de foco"}
          comment3={"- 10 minutos de descanso"}
          comment4={"- 4 ciclos"}
        />
       <ChooseBox
          title={"Personalizado"}
          to={"/personalizado"}
          comment={"Indicado para muito experientes."}
          comment2={"- Tempo de foco da sua maneira"}
          comment3={"- Tempo de descanso da sua maneira"}
          comment4={"- Quantos ciclos você escolher"}
        />
      </div>
    </div>
  );
};

export default Home;
