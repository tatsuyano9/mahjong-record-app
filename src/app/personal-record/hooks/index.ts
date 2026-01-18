import * as React from "react";

import { leaguesData } from "@/mocks/league";
import { userData1 } from "@/mocks/user";
import {
  LeagueIdType,
  LeagueMember,
  LeagueSeasonIdType,
  LeagueSeasonMember,
} from "@/types/domain/league";

export const usePersonalRecord = () => {
  const { userId, name, joiningLeagueIds } = userData1;

  // 参加しているリーグのシーズン情報を結合して表示用に整形
  const joiningLeagueSeasons = joiningLeagueIds?.flatMap((leagueId) => {
    const league = leaguesData[leagueId];
    // 各リーグのシーズンIDを取得
    const leagueSeasonIds = Object.keys(league.seasons) as LeagueSeasonIdType[];

    return leagueSeasonIds.map((leagueSeasonId) => {
      const leagueSeason = league.seasons[leagueSeasonId];
      return {
        id: leagueSeasonId,
        leagueId: leagueId,
        name: `${league.name} - ${leagueSeason.name}`,
      };
    });
  });

  const [selectedLeagueSeasonId, setSelectedLeagueSeasonId] = React.useState<
    LeagueSeasonIdType | ""
  >("");
  const [selectedLeagueSeasonMember, setSelectedLeagueSeasonMember] =
    React.useState<LeagueSeasonMember | null>(null);

  const onChangeLeagueSeason = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedLeagueSeasonId(e.target.value as LeagueSeasonIdType);
    },
    [selectedLeagueSeasonId]
  );

  const onDisplayButtonClick = React.useCallback(() => {
    if (!selectedLeagueSeasonId) {
      setSelectedLeagueSeasonMember(null);
      console.log("League season not selected");
      return;
    }

    const selectedLeague = joiningLeagueSeasons?.find(
      (season) => season.id == selectedLeagueSeasonId
    );

    // selectedLeague が undefined でないことを保証する
    if (!selectedLeague) {
      setSelectedLeagueSeasonMember(null);
      console.log("Selected league season not found");
      return;
    }

    const league = leaguesData[selectedLeague.leagueId];
    const leagueSeason = league.seasons[selectedLeagueSeasonId];
    const leagueSeasonMember = leagueSeason.members[userId];

    setSelectedLeagueSeasonMember(leagueSeasonMember || null);

    console.log("Selected League Season Member:", selectedLeagueSeasonMember);
  }, [selectedLeagueSeasonId, joiningLeagueSeasons, userId]);

  return {
    userName: name,
    joiningLeagueSeasons,
    selectedLeagueSeasonId,
    selectedLeagueSeasonMember,
    onChangeLeagueSeason,
    onDisplayButtonClick,
  };
};
