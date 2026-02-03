export const useLeague = () => {
  // TODO: リーグ記録データをモックデータまたはAPIから取得する
  // リーグ記録データ（全シーズン通して）
  const winStreak = { text: "5連勝", player: "岩田" };
  const loseStreak = { text: "3連敗", player: "富田" };
  const highestScore = { text: "48000点", player: "岩田" };
  const lowestScore = { text: "-12000点", player: "野口" };

  // TODO: シーズン一覧データをモックデータまたはAPIから取得する
  // シーズン一覧データ
  const seasons = [
    {
      id: "season1",
      name: "2024春シーズン",
      memberCount: 8,
      gameCount: 32,
      isOngoing: true,
    },
    {
      id: "season2",
      name: "2024冬シーズン",
      memberCount: 6,
      gameCount: 24,
      isOngoing: false,
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
