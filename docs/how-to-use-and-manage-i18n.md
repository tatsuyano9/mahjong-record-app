# How to use and manage I18n

## What is I18n

I18nはInternationalizationの略。ソフトウェアやウェブサイトを、様々な言語、地域、文化に容易に適応できるように設計するプロセス。I18nを意識して実装することで、多言語管理が容易にできるだけでなく、文言等のhard codingを避けることができる。

## Project Structure

このプロジェクトでは、以下のような構造でi18nを管理しています：

- `src/i18n/`: i18nの設定ファイルを格納
  - `routing.ts`: ルーティングの設定（対応言語、デフォルト言語の指定など）
  - `navigation.ts`: ナビゲーション関連の設定
  - `request.ts`: リクエスト関連の設定

- `src/messages/`: 翻訳ファイルを格納
  - `ja.json`: 日本語の翻訳
  - `en.json`: 英語の翻訳

- `src/app/[locale]/`: ロケールに応じたページコンポーネントを格納

## Configuration

このプロジェクトでは、`next-intl`を使用して国際化を実装しています。

主な設定は以下の通りです：

1. 対応言語：
   - 日本語（ja）
   - 英語（en）

2. デフォルト言語：
   - 日本語（ja）

## How to Access

日本語: [http://localhost:3000/](http://localhost:3000/)にアクセスすると自動的に日本語へリダイレクトする。
English: [http://localhost:3000/en](http://localhost:3000/en)にアクセスする。

## How to Add New Translations

新しい翻訳を追加する手順は以下の通りです：

1. `src/messages/`配下の各言語ファイル（`ja.json`、`en.json`）に新しいキーと翻訳を追加します。
2. 翻訳は以下のような階層構造で管理します：

```json
{
  "sectionName": {
    "key": "Translated text"
  }
}
```

## How to Use Translations in Components

コンポーネント内で翻訳を使用する方法：

1. コンポーネントで`next-intl`のhookを使用します：

```typescript
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations();
  return <div>{t('sectionName.key')}</div>;
}
```

2. Server Componentsでの使用：

```typescript
import { getTranslations } from 'next-intl/server';

export default async function MyServerComponent() {
  const t = await getTranslations();
  return <div>{t('sectionName.key')}</div>;
}
```

## Best Practices

1. 翻訳キーの命名規則
   - キーは英語で記述し、わかりやすい名前をつける
   - セクション名は機能やページ単位で分ける
   - キー名は具体的な内容を表す。そのテキストの英語翻訳が理想

2. 翻訳の管理
   - 新しい機能を追加する際は、必ず全ての言語の翻訳を追加する
   - 未翻訳のキーがないようにする
   - 定期的に不要な翻訳キーを削除する

3. 動的な値の扱い
   - 翻訳テキスト内で変数を使用する場合は、プレースホルダーを使用する
   - 例：`"welcome": "こんにちは、{name}さん"`

## Testing

1. 各言語での表示確認
   - 開発時は各言語でページを表示し、レイアウトの崩れがないか確認
   - 文字数の違いによるUIの破綻がないか確認

2. 未翻訳キーの確認
   - デプロイ前に全ての言語ファイルをチェック
   - 必要な翻訳が全て存在することを確認

## Future Improvement

- 言語切り替えをどのように行うか検討し、実装する。現在、英語ページを参照するには英語のリンクにアクセスするしかなく、UX的にあまり良くない。
- 現在はすべてのコンポーネントの翻訳を一箇所で管理する構成になっている。しかし、この構成だと今後ページやコンポーネントが増えたときに管理が大変になってしまう。特に複数人が別の箇所のコンポーネントの実装を行い、同じ翻訳ファイルを編集した場合、コンフリクトが毎回発生する。今回は簡単のためこのような実装としたが、今後はコンポーネントベースで分ける構成を検討する必要がある。
