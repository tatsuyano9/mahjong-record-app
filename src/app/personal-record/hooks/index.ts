import * as React from "react";

import { leaguesData } from "@/mocks/league";
import { userData1 } from "@/mocks/user";
import { LeagueIdType, LeagueMember } from "@/types/domain/league";

export const usePersonalRecord = () => {
  const { userId, name, joiningLeagueIds } = userData1;

  const joiningLeagues = joiningLeagueIds?.map((leagueId) => {
    return { id: leagueId, name: leaguesData[leagueId].name };
  });

  const [selectedLeagueId, setSelectedLeagueId] = React.useState<
    LeagueIdType | ""
  >("");
  const [selectedLeagueMember, setSelectedLeagueMember] =
    React.useState<LeagueMember | null>(null);

  const onChangeLeague = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedLeagueId(e.target.value as LeagueIdType);
    },
    [selectedLeagueId]
  );

  const onDisplayButtonClick = React.useCallback(() => {
    if (!selectedLeagueId) {
      setSelectedLeagueMember(null);
      // TODO: ログ確認用(あとで削除)
      console.log("League not selected");
      return;
    }

    const league = leaguesData[selectedLeagueId];
    const leagueMember = league.members[userId];

    setSelectedLeagueMember(leagueMember || null);

    // TODO: ログ確認用(あとで削除)
    console.log("Selected League Member:", selectedLeagueMember);
  }, [selectedLeagueId, selectedLeagueMember, leaguesData]);

  return {
    userName: name,
    joiningLeagues,
    selectedLeagueId,
    selectedLeagueMember,
    onChangeLeague,
    onDisplayButtonClick,
  };
};
