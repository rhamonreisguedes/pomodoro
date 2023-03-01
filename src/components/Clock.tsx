import React from "react";
import { useState, useEffect } from "react";

type Props = {
  focusTime: number;
  restTime: number;
  numberOfCicles: number;
  image: string;
};

const Clock = ({ focusTime, restTime, numberOfCicles, image }: Props) => {
  const [focus, setFocus] = useState<number>(focusTime * 60);
  const [rest, setRest] = useState<number>(restTime * 60);
  const [start, setStart] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [cicles, setCicles] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (start && focus >= 0 && cicles < numberOfCicles) {
        setFocus(focus - 1);
      } else if (start && rest > 0 && cicles < numberOfCicles) {
        setRest(rest - 1);
      } else if (rest === 0 && cicles < numberOfCicles) {
        setFocus(focusTime * 60);
        setRest(restTime * 60);
        setCicles(cicles + 1);
      } else if (cicles === numberOfCicles) {
        setCicles(0);
        setStart(false);
        setFocus(focusTime * 60);
        setRest(restTime * 60);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [start, focus, rest, cicles, focusTime, restTime, numberOfCicles]);

  useEffect(() => {
    if (focus >= 0) {
      setSeconds(focus % 60);
      setMinutes(Math.floor(focus / 60));
    } else {
      if (rest >= 0) {
        setSeconds(rest % 60);
        setMinutes(Math.floor(rest / 60));
      }
    }
  }, [focus, rest]);

  const handleStart = () => {
    setStart(true);
  };

  const handleStop = () => {
    setStart(false);
  };

  const handleRestart = () => {
    setFocus(focusTime * 60);
    setRest(restTime * 60);
    setStart(true);
  };

  return (
    <div className="text-center">
      <div className="text-6xl p-5 md:p-4 md:text-9xl text-green-900 font-semibold">
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </div>
      <div className="flex justify-center p-1">
        <img src={image} alt='' className="w-1/3 md:w-2/12"/>
      </div>
      <div className="text-3xl p-1">
        <span className="font-semibold">Ciclo: </span>
        {cicles + 1 < numberOfCicles ? cicles + 1 : numberOfCicles}/ 
        <span className="font-semibold">{numberOfCicles}</span>
      </div>
      <div className="text-3xl p-1">
        <span className="font-semibold">Modo:</span> {focus >= 0 ? "Foco" : "Descanso"}
      </div>
      <div className="text-3xl p-1 flex flex-col justify-center items-center text-center md:flex-row">
        <button onClick={handleStart} className="py-3 px-1 m-1 text-lg font-semibold rounded-md bg-emerald-500 hover:bg-emerald-400 w-6/12 md:w-2/12 md:text-2xl">
          Começar
        </button>
        <button onClick={handleStop} className="py-3 px-4 m-1 text-lg font-semibold rounded-md bg-red-500 hover:bg-red-400 w-6/12 md:w-2/12 md:text-2xl">
          Parar
        </button>
        <button onClick={handleRestart} className="py-3 px-4 m-1 text-lg font-semibold rounded-md bg-cyan-500 hover:bg-cyan-400 w-6/12 md:w-2/12 md:text-2xl">
          Recomeçar
        </button>
      </div>
    </div>
  );
};

export default Clock;
