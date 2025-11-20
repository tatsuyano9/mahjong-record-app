import { User } from "../domain";

export type Match = {
  id: string;
  leagueId: string;
  playedAt: Date;
  createdAt: Date;
  results: MatchResult;
};

export type MatchResult = {
  EAST: IndividualMatchResult;
  SOUTH: IndividualMatchResult;
  WEST: IndividualMatchResult;
  NORTH: IndividualMatchResult;
  createdAt: Date;
};

export type IndividualMatchResult = {
  player: User;
  score: number;
  rank: number;
};
