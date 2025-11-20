"use client";

import * as React from "react";

import { Spacer } from "@/components/common/ui/spacer";
import { InputArea } from "@/components/pages/entry-pages/input-area";
import { LinkArea } from "@/components/pages/entry-pages/link-area";

const LoginPage: React.FC = () => {
  return (
    <Spacer
      minH="screen"
      display="flex"
      className="items-center justify-center bg-background text-foreground"
    >
      <Spacer w="80" p="6" rounded="lg" border className="space-y-4">
        <Spacer>
          <h3 className="text-center text-lg font-bold">ログイン</h3>
        </Spacer>
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
        <button
          className="w-full bg-black text-white py-2 rounded hover:opacity-90"
          onClick={() => {}}
        >
          ログイン
        </button>
        <LinkArea attrs={{ href: "/" }}>パスワードを忘れた方はこちら</LinkArea>
        <LinkArea attrs={{ href: "/sign-up" }}>新規登録はこちら</LinkArea>
      </Spacer>
    </Spacer>
  );
};

export default LoginPage;
