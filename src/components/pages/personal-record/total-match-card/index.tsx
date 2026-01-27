import * as React from "react";

import { useTotalMatchCard } from "./hooks";

import { LeagueSeasonMember } from "@/types/domain/league";

interface TotalMatchCardProps {
  selectedLeagueSeasonMember: LeagueSeasonMember | null;
}

export const TotalMatchCard: React.FC<TotalMatchCardProps> = ({
  selectedLeagueSeasonMember,
}) => {
  const { gamesPlayed } = useTotalMatchCard({ selectedLeagueSeasonMember });
  const unit = "戦";
  const description = undefined;

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl border border-gray-100 transform transition-transform duration-300 hover:scale-105">
      <p className="text-sm font-semibold text-gray-400 mb-2">総対戦数</p>
      <h3 className="text-3xl font-extrabold text-slate-700 tracking-tight">
        {gamesPlayed !== null && gamesPlayed !== undefined ? (
          <>
            {typeof gamesPlayed === "number"
              ? Math.floor(gamesPlayed)
              : gamesPlayed}
            {unit && (
              <span className="text-xl font-semibold text-brand-500 ml-1">
                {unit}
              </span>
            )}
          </>
        ) : (
          <span className="text-3xl text-gray-400">-</span>
        )}
      </h3>
      {description && (
        <p className="mt-2 text-xs text-gray-400 text-center">{description}</p>
      )}
    </div>
  );
};
