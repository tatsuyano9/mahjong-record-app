"use client";

import * as React from "react";

import Header from "@/components/common/container/header";

import { usePersonalRecord } from "./hooks";

const PersonalRecordPage: React.FC = () => {
  const {
    userName,
    joiningLeagues,
    selectedLeagueId,
    selectedLeagueMember,
    onChangeLeague,
    onDisplayButtonClick,
  } = usePersonalRecord();

  return (
    <div className="flex-1 bg-white min-h-screen font-jp">
      <Header />
      <div className="flex flex-col max-w-7xl gap-4 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-2xl font-bold text-text-dark">
          {userName}さんの個人記録
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold text-xl text-gray-500">リーグ選択</div>
          <div className="flex flex-row gap-2">
            <select
              className="w-full border border-gray-300 rounded-md p-2 text-text-dark"
              value={selectedLeagueId}
              onChange={onChangeLeague}
            >
              <option value="">リーグを選択してください</option>
              {joiningLeagues &&
                joiningLeagues.map((league, index) => (
                  <option key={index} value={league.id}>
                    {league.name}
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
        <div className="flex flex-col gap-2">
          <div className="font-bold text-xl text-gray-500">総合ポイント</div>
          {selectedLeagueMember?.totalPoints ? (
            <div className="text-lg font-bold text-text-dark">
              {selectedLeagueMember.totalPoints} pt
            </div>
          ) : (
            <div className="text-text-muted">リーグを選択して下さい。</div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold text-xl text-gray-500">総対局数</div>
          {selectedLeagueMember?.gamesPlayed ? (
            <div className="text-lg font-bold text-text-dark">
              {selectedLeagueMember.gamesPlayed} 戦
            </div>
          ) : (
            <div className="text-text-muted">リーグを選択して下さい。</div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold text-xl text-gray-500">リーグ内順位</div>
          {selectedLeagueMember?.rank ? (
            <div className="text-lg font-bold text-text-dark">
              {selectedLeagueMember.rank} 位
            </div>
          ) : (
            <div className="text-text-muted">リーグを選択して下さい。</div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-bold text-xl text-gray-500">各順位回数</div>
          {selectedLeagueMember?.numberOfEachOrder ? (
            <div className="text-base font-bold text-text-dark rounded-md overflow-hidden border border-gray-300">
              <table className="min-w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">
                      順位
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left">
                      得点
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">1位</td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      {selectedLeagueMember.numberOfEachOrder.first}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">2位</td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      {selectedLeagueMember.numberOfEachOrder.second}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-300">3位</td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      {selectedLeagueMember.numberOfEachOrder.third}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">4位</td>
                    <td className="py-2 px-4">
                      {selectedLeagueMember.numberOfEachOrder.fourth}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-text-muted">リーグを選択して下さい。</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalRecordPage;
