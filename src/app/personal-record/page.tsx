"use client";

import * as React from "react";

import Header from "@/components/common/container/header";

const PersonalRecordPage: React.FC = () => {
  const [selectedLeagueSeasonId, setSelectedLeagueSeasonId] =
    React.useState("");

  const joiningLeagueSeasons = [
    { id: "season1", name: "2024春シーズン" },
    { id: "season2", name: "2024冬シーズン" },
  ];

  const userName = "ユーザー名";

  const onChangeLeagueSeason = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLeagueSeasonId(e.target.value);
  };

  const onDisplayButtonClick = () => {
    console.log("表示ボタンが押されました");
  };

  return (
    <div className="flex-1 bg-white min-h-screen font-jp">
      <Header />
      <div className="flex flex-col max-w-7xl gap-4 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-2xl font-bold text-text-dark">
          {userName}さんの個人記録
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold text-xl text-gray-500">シーズン選択</div>
          <div className="flex flex-row gap-2">
            <select
              className="w-full border border-gray-300 rounded-md p-2 text-text-dark"
              value={selectedLeagueSeasonId}
              onChange={onChangeLeagueSeason}
            >
              <option value="">シーズンを選択してください</option>
              {joiningLeagueSeasons &&
                joiningLeagueSeasons.map((leagueSeason, index) => (
                  <option key={index} value={leagueSeason.id}>
                    {leagueSeason.name}
                  </option>
                ))}
            </select>
            <div className="flex">
              <button
                className="w-12 bg-brand-500 rounded text-white justify-center items-center"
                onClick={onDisplayButtonClick}
              >
                表示
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 text-text-muted">
          シーズンを選択して表示ボタンをクリックしてください
        </div>
      </div>
    </div>
  );
};

export default PersonalRecordPage;
