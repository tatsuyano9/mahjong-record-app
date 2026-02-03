import * as React from "react";

import { leaguesData } from "@/mocks/league";

export const useLeague = () => {
  // リーグ記録データ（全シーズン通して）
  const winStreak = "5連勝";
  const loseStreak = "3連敗";
  const highestScore = "48000点";
  const lowestScore = "-12000点";

  // シーズン一覧データ
  const seasons = [
    {
      id: "season1",
      name: "2024春シーズン",
      memberCount: 8,
      gameCount: 32,
    },
    {
      id: "season2",
      name: "2024冬シーズン",
      memberCount: 6,
      gameCount: 24,
    },
  ];

  return {
    winStreak,
    loseStreak,
    highestScore,
    lowestScore,
    seasons,
  };
};
