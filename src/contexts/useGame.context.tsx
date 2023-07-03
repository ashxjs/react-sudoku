import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import moment, { Moment } from "moment";
import { generateNewGrid } from "../hooks/useBoard.hook";
import { DifficultyEnum, GameContextType } from "../types";

const initialValues: GameContextType = {
  grid: [],
  setGrid: () => {},
  difficulty: DifficultyEnum.MEDIUM,
  setDifficulty: () => {},
  activeCase: -1,
  setActiveCase: () => {},
  won: false,
  setWon: () => {},
  timeGameStarted: moment(),
  setTimeGameStarted: () => {},
  errorIndex: -1,
  setErrorIndex: () => {},
};

export const GameContext = createContext<GameContextType>(initialValues);

export const GameProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [won, setWon] = useState<boolean>(false);
  const [errorIndex, setErrorIndex] = useState<number>(-1);
  const [activeCase, setActiveCase] = useState<number>(-1);
  const [grid, setGrid] = useState(() => generateNewGrid());
  const [timeGameStarted, setTimeGameStarted] = useState<Moment>(moment());
  const [difficulty, setDifficulty] = useState<number>(DifficultyEnum.MEDIUM);

  return (
    <GameContext.Provider
      value={{
        grid,
        setGrid,
        difficulty,
        setDifficulty,
        activeCase,
        setActiveCase,
        won,
        setWon,
        timeGameStarted,
        setTimeGameStarted,
        errorIndex,
        setErrorIndex,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
