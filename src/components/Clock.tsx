import React from "react";
import { useState, useEffect } from "react";

type Props = {
  focusTime: number;
  restTime: number;
  numberOfCicles: number;
};

const Clock = ({ focusTime, restTime, numberOfCicles }: Props) => {
  const [focus, setFocus] = useState<number>(focusTime * 60);
  const [rest, setRest] = useState<number>(restTime * 60);
  const [start, setStart] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [cicles, setCicles] = useState<number>(numberOfCicles);
  const [shownCicles, setShownCicles] = useState<number>(1);

  useEffect(() => {
    const timer = setInterval(() => {
      if (start && focus >= 0 && cicles > 0) {
        setFocus(focus - 1);
      } else if (start && rest >= 0 && cicles > 0) {
        setRest(rest - 1);
      }
      else if(focus < 0 && rest < 0 && cicles > 0){
        setFocus(focusTime * 60);
        setRest(restTime * 60);
        setCicles(cicles - 1);
        setShownCicles(shownCicles + 1);
      }else if(cicles === 0){
        setCicles(numberOfCicles);
        setShownCicles(1);
        setStart(false);
      }
      console.log(focus);
      console.log(rest);
      console.log(cicles);
      console.log(start);
    }, 1000);
    return () => clearInterval(timer);
  }, [start, focus, rest, cicles, focusTime, restTime, numberOfCicles, shownCicles]);

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
      <div className="p-2">
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </div>
      <div>
        Status: {focus >= 0 && rest > 0 ? 'Foco' : 'Descanso'}
      </div>
      <div>
        Ciclo: {shownCicles}
      </div>
      <div>
        <button onClick={handleStart} className="p-2">
          Começar
        </button>
        <button onClick={handleStop} className="p-2">
          Parar
        </button>
        <button onClick={handleRestart} className="p-2">
          Recomeçar
        </button>
      </div>
    </div>
  );
};

export default Clock;
