
import Clock from "../components/Clock";
import { useState } from "react";

type Props = {};

const Personalized = (props: Props) => {
  const [form, setForm] = useState<boolean>(true);
  const [clock, setClock] = useState(false);
  const [focusTime, setFocusTime] = useState<number | string>('');
  const [restTime, setRestTime] = useState<number | string>('');
  const [numberOfCicles, setNumberOfCicles] = useState<number | string>('');

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
      setForm(false);
      setClock(true);
  };

  const handleFocusTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocusTime(e.target.value);
  }

  const handleRestTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRestTime(e.target.value)
  }

  const handleNumberOfCicles = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfCicles(e.target.value)
  }

  return (
    <div>
      {form && (
        <form className="flex flex-col justify-center w-2/3 align-center">
          <label>
            Minutos para concentração:
            <input
              type="string"
              placeholder="Exemplo: 50"
              value={focusTime}
              onChange={handleFocusTime}
            />
          </label>
          <label>
            Minutos para descanso:
            <input
              type="string"
              placeholder="Exemplo: 15"
              value={restTime}
              onChange={handleRestTime}
            />
          </label>
          <label>
            Quantos ciclos:
            <input
              type="string"
              placeholder="Exemplo: 15"
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
      {clock && <Clock focusTime={+focusTime} restTime={+restTime} numberOfCicles={+numberOfCicles} />}
    </div>
  );
};

export default Personalized;
