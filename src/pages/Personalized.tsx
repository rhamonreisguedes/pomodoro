import Clock from "../components/Clock";
import { useState } from "react";
import image3 from "../images/003.png";

type Props = {};

const Personalized = (props: Props) => {
  const [form, setForm] = useState<boolean>(true);
  const [clock, setClock] = useState(false);
  const [focusTime, setFocusTime] = useState<number | string>("");
  const [restTime, setRestTime] = useState<number | string>("");
  const [numberOfCicles, setNumberOfCicles] = useState<number | string>("");
  const [message, setMessage] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (
      Number.isNaN(+focusTime) ||
      Number.isNaN(+restTime) ||
      Number.isNaN(+numberOfCicles) ||
      focusTime === "" ||
      restTime === "" ||
      numberOfCicles === "" ||
      !Number.isInteger(+focusTime) ||
      !Number.isInteger(+restTime) ||
      !Number.isInteger(+numberOfCicles) ||
      focusTime === "0" ||
      restTime === "0" ||
      numberOfCicles === "0"
    ) {
      setMessage(true);
    } else {
      setForm(false);
      setClock(true);
      setMessage(false);
    }
  };

  const handleFocusTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocusTime(e.target.value);
  };

  const handleRestTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestTime(e.target.value);
  };

  const handleNumberOfCicles = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfCicles(e.target.value);
  };

  return (
    <div className="bg-green-100 h-screen">
      {form && (
        <form className="flex flex-col justify-center items-center text-lg md:text-2xl">
          <p className="font-semibold p-2">Preencha os campos abaixo:</p>
          <label className="p-2 flex flex-col justify-center items-center">
            <span className="font-semibold">Foco:</span>
            <input
              className="p-3"
              type="string"
              placeholder="número de minutos"
              value={focusTime}
              onChange={handleFocusTime}
            />
          </label>
          <label className="p-3 flex flex-col justify-center items-center">
            <span className="font-semibold">Descanso:</span>
            <input
              className="p-2"
              type="string"
              placeholder="número de minutos"
              value={restTime}
              onChange={handleRestTime}
            />
          </label>
          <label className="p-3 flex flex-col justify-center items-center">
            <span className="font-semibold">Ciclos:</span>
            <input
              className="p-2"
              type="string"
              placeholder="número de ciclos"
              value={numberOfCicles}
              onChange={handleNumberOfCicles}
            />
          </label>

          <input
            type="submit"
            value="Enviar"
            onClick={handleSubmit}
            className="bg-green-500 w-3/12 p-3 rounded-md font-semibold hover:bg-green-400 hover:cursor-pointer"
          />
        </form>
      )}

      {message && (
        <div>
        <p className="text-red-600 font-bold text-lg text-center p-2">
          Valores Inválidos.
        </p>
        <p className="text-red-600 font-bold text-lg text-center p-2">
          Por favor, inserir novos valores.
        </p>
        </div>
      )}
      {clock && (
        <Clock
          focusTime={+focusTime}
          restTime={+restTime}
          numberOfCicles={+numberOfCicles}
          image={image3}
        />
      )}
    </div>
  );
};

export default Personalized;
