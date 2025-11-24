import { LeagueMembersData } from "./league-member";

import { League } from "@/types/domain/league";

export const leagueData1: League = {
  id: "000000",
  name: "雀望リーグ",
  createdAt: new Date(2000, 9, 3),
  members: LeagueMembersData,
};

export const leagueData2: League = {
  id: "000001",
  name: "雀リーグ",
  createdAt: new Date(2000, 9, 4),
  members: LeagueMembersData,
};

export const leaguesData: League[] = [leagueData1, leagueData2];
