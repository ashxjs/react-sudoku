import { Moment } from "moment";
import { Dispatch, SetStateAction } from "react";

export type RowColumn = {
  row: number;
  column: number;
};

export enum DifficultyEnum {
  EASY = 60,
  MEDIUM = 40,
  HARD = 20,
  EXPERT = 15,
}

export type GameContextType = {
  grid: number[];
  setGrid: Dispatch<SetStateAction<number[]>>;
  difficulty: DifficultyEnum;
  setDifficulty: Dispatch<SetStateAction<DifficultyEnum>>;
  activeCase: number;
  setActiveCase: Dispatch<SetStateAction<number>>;
  won: boolean;
  setWon: Dispatch<SetStateAction<boolean>>;
  timeGameStarted: Moment;
  setTimeGameStarted: Dispatch<SetStateAction<Moment>>;
  errorIndex: number;
  setErrorIndex: Dispatch<SetStateAction<number>>;
};
