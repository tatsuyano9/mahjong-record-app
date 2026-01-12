import { ColorState } from "./color";
import { LeagueIdType } from "./league";
import { AppDate } from "../utils/app-date";

export type User = {
  userId: UserIdType;
  name: string;
  email: string;
  joiningLeagueIds?: LeagueIdType[];
  createdAt: AppDate;
  color: ColorState;
};

export type UserIdType = string;
