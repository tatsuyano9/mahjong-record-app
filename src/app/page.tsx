import * as React from "react";

import { Plus, Trophy, Users } from "lucide-react";

type User = {
  name: string;
};

type League = {
  id: string;
  name: string;
  member_count?: number;
  game_count?: number;
};

export const Home: React.FC = () => {
  const user: User = { name: "テストユーザー" };

  const leagues: League[] = [
    { id: "league1", name: "雀聖リーグ", member_count: 4, game_count: 20 },
    { id: "league2", name: "天鳳ファミリー", member_count: 6, game_count: 50 },
  ];

  const error: string | null = null;

  return (
    <div className="flex-1 bg-white min-h-full font-jp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-dark mb-2">
            こんにちは、{user?.name || "ユーザー"}さん
          </h1>
          <p className="text-text-muted">
            麻雀の記録を管理して、友達と楽しい時間を過ごしましょう
          </p>
        </div>

        {/* Leagues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leagues.length > 0 ? (
            leagues.map((league) => (
              <div
                key={league.id}
                className="bg-white rounded-lg border-2 border-brand-200 hover:shadow-lg transition-shadow duration-200 overflow-hidden"
              >
                {/* League Header */}
                <div className="bg-gradient-to-r from-brand-500 to-brand-400 p-6">
                  <h2 className="text-xl font-bold text-white mb-2">
                    {league.name}
                  </h2>
                  <div className="flex items-center space-x-4 text-white text-sm">
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      <span>{league.member_count ?? 0}人</span>
                    </div>
                    <div className="flex items-center">
                      <Trophy size={16} className="mr-1" />
                      <span>{league.game_count ?? 0}局</span>
                    </div>
                  </div>
                </div>

                {/* League Stats */}
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-text-muted mb-3">
                      最近の成績
                    </h3>
                    <div className="bg-brand-50 rounded-lg p-4 border border-brand-300">
                      <div className="text-2xl font-bold text-brand-600 mb-1">
                        +12,000点
                      </div>
                      <p className="text-xs text-text-muted">直近5局の獲得点</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white font-medium rounded-lg transition-colors duration-150">
                      詳細を見る
                    </button>
                    <button className="flex-1 px-4 py-2 border-2 border-brand-500 text-brand-600 font-medium rounded-lg hover:bg-brand-50 transition-colors duration-150">
                      記録する
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="md:col-span-2 lg:col-span-3">
              <div className="text-center py-16 bg-brand-50 rounded-lg border-2 border-dashed border-brand-300">
                <Trophy size={48} className="mx-auto text-brand-200 mb-4" />
                <p className="text-text-muted mb-6 text-lg">
                  まだリーグに参加していません
                </p>
              </div>
            </div>
          )}

          {/* Create League Button */}
          <div className="bg-white rounded-lg border-2 border-dashed border-brand-200 hover:border-brand-500 hover:bg-brand-50 transition-all duration-200 cursor-pointer flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus size={32} className="text-brand-600" />
              </div>
              <h3 className="font-bold text-brand-600 mb-2 text-lg">
                新しいリーグを作成
              </h3>
              <p className="text-sm text-text-muted">
                リーグを作成して友達を招待しましょう
              </p>
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-8 bg-error-bg border-2 border-error-border rounded-lg p-4">
            <p className="text-error-text text-sm">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
