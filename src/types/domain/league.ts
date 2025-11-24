import { User } from "./user";

export type League = {
  id: string;
  name: string;
  createdAt: Date;
  members: LeagueMember[];
};

export type LeagueMember = {
  player: User;
  joinedAt: Date;
  role: Role;

  // 集計系
  totalPoints: number;
  gamesPlayed: number;
  rank: number;
};

export type Role = "owner" | "member";
