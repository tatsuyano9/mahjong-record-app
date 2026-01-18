import { User, UserIdType } from "./user";
import { AppDate } from "../utils/app-date";

export type LeagueIdType = string;

export type LeagueSeasonIdType = string;

export type League = {
  leagueId: LeagueIdType;
  name: string;
  createdAt: AppDate;
  members: Record<UserIdType, LeagueMember>;
  seasons: Record<LeagueSeasonIdType, LeagueSeason>;
  //仮で追加
  lastRecordedAt: AppDate;
  ruleName: string;
  totalGames: number;
  titles?: LeagueTitle[];
};

export type LeagueMember = {
  player: User;
  joinedAt: AppDate;
  role: Role;

  // 集計系
  totalPoints: number;
  gamesPlayed: number;
  rank: number;
  numberOfEachOrder: NumberOfEachOrder;
};

export type LeagueSeason = {
  leagueSeasonId: LeagueSeasonIdType;
  name: string;
  members: Record<UserIdType, LeagueSeasonMember>;
};

export type LeagueSeasonMember = {
  player: User;
  // 集計系
  totalPoints: number;
  gamesPlayed: number;
  rank: number;
  numberOfEachOrder: NumberOfEachOrder;
};

export type NumberOfEachOrder = {
  first: number;
  second: number;
  third: number;
  fourth: number;
};

export type Role = "owner" | "member";

export type LeagueTitle = {
  label: string;
  playerName: string;
  value: string;
};
