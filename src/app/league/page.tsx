"use client";

import * as React from "react";

import Header from "@/components/common/container/header";

import { useLeague } from "./hooks";

const LeaguePage: React.FC = () => {
  const { winStreak, loseStreak, highestScore, lowestScore, seasons } =
    useLeague();

  return (
    <div className="flex-1 bg-white min-h-screen font-jp">
      <Header />
      <div className="flex flex-col max-w-7xl gap-4 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 画面上部：リーグ全シーズンの記録 */}
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-bold text-text-dark">リーグ記録</div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {/* 連勝記録 */}
            <div className="bg-white rounded-lg border-2 border-brand-200 p-4">
              <div className="text-sm text-text-muted mb-2">連勝記録</div>
              <div className="text-3xl font-bold text-brand-600">
                {winStreak}
              </div>
            </div>
            {/* 連敗記録 */}
            <div className="bg-white rounded-lg border-2 border-brand-200 p-4">
              <div className="text-sm text-text-muted mb-2">連敗記録</div>
              <div className="text-3xl font-bold text-brand-600">
                {loseStreak}
              </div>
            </div>
            {/* 最高スコア */}
            <div className="bg-white rounded-lg border-2 border-brand-200 p-4">
              <div className="text-sm text-text-muted mb-2">最高スコア</div>
              <div className="text-3xl font-bold text-brand-600">
                {highestScore}
              </div>
            </div>
            {/* 最低スコア */}
            <div className="bg-white rounded-lg border-2 border-brand-200 p-4">
              <div className="text-sm text-text-muted mb-2">最低スコア</div>
              <div className="text-3xl font-bold text-brand-600">
                {lowestScore}
              </div>
            </div>
          </div>
        </div>

        {/* 画面下部：シーズン一覧 */}
        <div className="flex flex-col gap-4 mt-8">
          <div className="text-2xl font-bold text-text-dark">シーズン一覧</div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {seasons.map((season) => (
              <div
                key={season.id}
                className="bg-white rounded-lg border-2 border-gray-300 p-4 hover:shadow-lg transition-shadow"
              >
                <div className="text-lg font-bold text-text-dark mb-2">
                  {season.name}
                </div>
                <div className="text-sm text-text-muted">
                  参加者：{season.memberCount}人
                </div>
                <div className="text-sm text-text-muted">
                  対局数：{season.gameCount}局
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaguePage;
