import * as React from "react";

import { useTotalPointCard } from "./hooks";

import { LeagueSeasonMember } from "@/types/domain/league";

interface TotalPointCardProps {
  selectedLeagueSeasonMember: LeagueSeasonMember | null;
}

export const TotalPointCard: React.FC<TotalPointCardProps> = ({
  selectedLeagueSeasonMember,
}) => {
  const { totalPoints } = useTotalPointCard({ selectedLeagueSeasonMember });
  const unit = "pt";
  const description = undefined;

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl border border-gray-100 transform transition-transform duration-300 hover:scale-105">
      <p className="text-sm font-semibold text-gray-400 mb-2">総合pt</p>
      <h3 className="text-3xl font-extrabold text-slate-700 tracking-tight">
        {totalPoints !== null && totalPoints !== undefined ? (
          <>
            {typeof totalPoints === "number"
              ? totalPoints.toFixed(2)
              : totalPoints}
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
