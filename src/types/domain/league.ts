import { User } from "@/types/domain";

export type League = {
  id: string;
  name: string;
  owner: User;
  createdAt: Date;
  members: LeagueMember[];
};

export type LeagueMember = {
  player: User;
  joinedAt: Date;
  role: Role;
  createdAt: Date;

  // 集計系
  totalPoints: number;
  gamesPlayed: number;
  rank: number;
};

export type Role = "owner" | "member";
