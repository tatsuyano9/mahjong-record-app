import { mockLeagueDetails } from "@/mocks/league-detail";
import { mockUser } from "@/mocks/user";

export const useLeague = () => {
  const user = mockUser;

  const targetLeagueId = "league1";
  const league = mockLeagueDetails.find((l) => l.id === targetLeagueId) ?? null;

  const error: string | null = league ? null : "リーグが見つかりません";

  return { user, league, error };
};
