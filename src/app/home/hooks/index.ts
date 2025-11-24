import { leaguesData } from "@/mocks/league";
import { userData1 } from "@/mocks/user";

export const useHome = () => {
  const user = userData1;
  const leagues = leaguesData;

  const error: string | null = null;

  const hasLeagues = leagues.length > 0;

  return { user, leagues, error, hasLeagues };
};
