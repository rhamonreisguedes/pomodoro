import Clock from "../components/Clock";
import { useState } from "react";

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
      focusTime === '0' ||
      restTime === '0' ||
      numberOfCicles === '0'
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
    <div>
      {form && (
        <form className="flex flex-col justify-center w-2/3 align-center">
          <label className="p-2">
            Foco:
            <input
              className="p-2 w-1/5"
              type="string"
              placeholder="número de minutos"
              value={focusTime}
              onChange={handleFocusTime}
            />
          </label>
          <label className="p-2">
            Descanso:
            <input
              className="p-2 w-1/5"
              type="string"
              placeholder="número de minutos"
              value={restTime}
              onChange={handleRestTime}
            />
          </label>
          <label className="p-2">
            Ciclos:
            <input
              className="p-2 w-1/5"
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
            className="bg-red-500"
          />
        </form>
      )}
      {message && <p>Valores Inválidos. Por favor, inserir novos valores.</p>}
      {clock && (
        <Clock
          focusTime={+focusTime}
          restTime={+restTime}
          numberOfCicles={+numberOfCicles}
        />
      )}
    </div>
  );
};

export default Personalized;
