export const questions = [
  {
    id: 1,
    text: '新しい技術やツールを学ぶのが好きですか？',
    options: [
      { text: 'はい', scores: { frontend: 3, backend: 3, data: 2, infra: 3 } },
      { text: 'いいえ', scores: { frontend: 1, backend: 1, data: 1, infra: 1 } },
      { text: 'どちらでもない', scores: { frontend: 2, backend: 2, data: 2, infra: 2 } },
    ],
  },
  {
    id: 2,
    text: 'デザインやユーザーインターフェースに興味がありますか？',
    options: [
      { text: 'はい', scores: { frontend: 5, backend: 1, data: 1, infra: 1 } },
      { text: 'いいえ', scores: { frontend: 1, backend: 3, data: 3, infra: 3 } },
      { text: 'どちらでもない', scores: { frontend: 3, backend: 2, data: 2, infra: 2 } },
    ],
  },
  {
    id: 3,
    text: '論理的な思考で問題を解決するのが好きですか？',
    options: [
      { text: 'はい', scores: { frontend: 3, backend: 5, data: 4, infra: 4 } },
      { text: 'いいえ', scores: { frontend: 1, backend: 1, data: 1, infra: 1 } },
      { text: 'どちらでもない', scores: { frontend: 2, backend: 3, data: 3, infra: 3 } },
    ],
  },
  // 質問を追加...
];