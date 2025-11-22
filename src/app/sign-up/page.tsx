"use client";

import * as React from "react";

import { Spacer } from "@/components/common/ui/spacer";
import { InputArea } from "@/components/pages/entry-pages/input-area";
import { LinkArea } from "@/components/pages/entry-pages/link-area";

const SignUpPage: React.FC = () => {
  return (
    <Spacer
      minH="screen"
      display="flex"
      className="items-center justify-center bg-background text-foreground"
    >
      <Spacer w="80" p="6" rounded="lg" border className="space-y-4">
        <Spacer>
          <h3 className="text-center text-lg font-bold">新規登録</h3>
        </Spacer>
        <InputArea
          label="ユーザー名"
          type="text"
          placeholder="ユーザー名を入力"
          onChange={() => {}}
        />
        <InputArea
          label="メールアドレス"
          type="email"
          placeholder="メールアドレスを入力"
          onChange={() => {}}
        />
        <InputArea
          label="パスワード"
          type="password"
          placeholder="パスワードを入力"
          onChange={() => {}}
        />
        <InputArea
          label="パスワード（確認用）"
          type="password"
          placeholder="もう一度パスワードを入力"
          onChange={() => {}}
        />
        <button
          className="w-full bg-black text-white py-2 rounded hover:opacity-90"
          onClick={() => {}}
        >
          アカウントを作成
        </button>
        <LinkArea attrs={{ href: "/login" }}>ログインはこちら</LinkArea>
      </Spacer>
    </Spacer>
  );
};

export default SignUpPage;
