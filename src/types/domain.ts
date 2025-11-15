export type User = {
  name: string;
};

export type League = {
  id: string;
  name: string;
  memberCount?: number;
  gameCount?: number;
};

export type LeagueStanding = {
  rank: number;
  playerName: string;
  totalPt: number;
  first: number;
  second: number;
  third: number;
  fourth: number;
};

export type LeagueDetailGraphSeries = {
  playerName: string;
};

export type LeagueDetailTitle = {
  label: string;
  playerName: string;
  value: string;
};

export type LeagueDetail = {
  id: string;
  name: string;
  createdAt: string;
  lastRecordedAt: string;
  ruleName: string;
  totalGames: number;
  standings: LeagueStanding[];
  graphSeries: LeagueDetailGraphSeries[];
  titles: LeagueDetailTitle[];
};
