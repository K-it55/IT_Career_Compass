export const questions = [
  {
    id: 1,
    text: '新しい技術やツールを学ぶこと自体に面白さを感じますか？',
    options: [
      { text: 'はい', scores: { frontend: 4, backend: 4, infra: 4, pm: 2, data: 3, designer: 3 } },
      { text: 'いいえ', scores: { frontend: 1, backend: 1, infra: 1, pm: 3, data: 2, designer: 2 } },
      { text: 'どちらでもない', scores: { frontend: 3, backend: 3, infra: 3, pm: 3, data: 3, designer: 3 } },
    ],
  },
  {
    id: 2,
    text: '論理的に物事を考え、複雑な問題を解くのが得意ですか？',
    options: [
      { text: 'はい', scores: { frontend: 3, backend: 5, infra: 4, pm: 4, data: 5, designer: 2 } },
      { text: 'いいえ', scores: { frontend: 1, backend: 1, infra: 1, pm: 1, data: 1, designer: 3 } },
      { text: 'どちらでもない', scores: { frontend: 2, backend: 3, infra: 3, pm: 3, data: 3, designer: 2 } },
    ],
  },
  {
    id: 3,
    text: 'デザインや見た目にこだわり、美しいものを作ることに興味がありますか？',
    options: [
      { text: 'はい', scores: { frontend: 4, backend: 1, infra: 1, pm: 2, data: 1, designer: 5 } },
      { text: 'いいえ', scores: { frontend: 2, backend: 4, infra: 4, pm: 3, data: 4, designer: 1 } },
      { text: 'どちらでもない', scores: { frontend: 3, backend: 2, infra: 2, pm: 3, data: 2, designer: 3 } },
    ],
  },
  {
    id: 4,
    text: '膨大なデータから傾向やパターンを見つけ出す作業が好きですか？',
    options: [
      { text: 'はい', scores: { frontend: 2, backend: 3, infra: 2, pm: 2, data: 5, designer: 1 } },
      { text: 'いいえ', scores: { frontend: 3, backend: 2, infra: 3, pm: 4, data: 1, designer: 4 } },
      { text: 'どちらでもない', scores: { frontend: 3, backend: 3, infra: 3, pm: 3, data: 3, designer: 2 } },
    ],
  },
  {
    id: 5,
    text: 'チームをまとめたり、プロジェクト全体の進行管理をすることに興味がありますか？',
    options: [
      { text: 'はい', scores: { frontend: 2, backend: 2, infra: 2, pm: 5, data: 3, designer: 2 } },
      { text: 'いいえ', scores: { frontend: 3, backend: 3, infra: 3, pm: 1, data: 2, designer: 3 } },
      { text: 'どちらでもない', scores: { frontend: 3, backend: 3, infra: 3, pm: 3, data: 3, designer: 3 } },
    ],
  },
  {
    id: 6,
    text: 'システムの基盤となるサーバーやネットワークを構築・管理することに魅力を感じますか？',
    options: [
      { text: 'はい', scores: { frontend: 2, backend: 3, infra: 5, pm: 2, data: 2, designer: 1 } },
      { text: 'いいえ', scores: { frontend: 4, backend: 3, infra: 1, pm: 3, data: 3, designer: 4 } },
      { text: 'どちらでもない', scores: { frontend: 3, backend: 3, infra: 3, pm: 3, data: 3, designer: 3 } },
    ],
  },
  {
    id: 7,
    text: 'ユーザーが直接触れる部分（ボタンや画面など）の開発をしたいですか？',
    options: [
      { text: 'はい', scores: { frontend: 5, backend: 2, infra: 1, pm: 2, data: 1, designer: 3 } },
      { text: 'いいえ', scores: { frontend: 1, backend: 5, infra: 4, pm: 3, data: 4, designer: 2 } },
      { text: 'どちらでもない', scores: { frontend: 3, backend: 3, infra: 3, pm: 3, data: 3, designer: 3 } },
    ],
  },
  {
    id: 8,
    text: 'コードを書く際に、可読性やメンテナンス性を重視しますか？',
    options: [
      { text: 'はい', scores: { frontend: 4, backend: 5, infra: 3, pm: 3, data: 4, designer: 2 } },
      { text: 'いいえ', scores: { frontend: 2, backend: 2, infra: 2, pm: 2, data: 2, designer: 3 } },
      { text: 'どちらでもない', scores: { frontend: 3, backend: 3, infra: 3, pm: 3, data: 3, designer: 3 } },
    ],
  },
  {
    id: 9,
    text: '新しい人や技術について、人に教えるのが得意ですか？',
    options: [
      { text: 'はい', scores: { frontend: 2, backend: 2, infra: 3, pm: 4, data: 2, designer: 2 } },
      { text: 'いいえ', scores: { frontend: 3, backend: 3, infra: 2, pm: 2, data: 3, designer: 3 } },
      { text: 'どちらでもない', scores: { frontend: 3, backend: 3, infra: 3, pm: 3, data: 3, designer: 3 } },
    ],
  },
  {
    id: 10,
    text: '細部にまで気を配り、不具合を見つけるのが得意ですか？',
    options: [
      { text: 'はい', scores: { frontend: 4, backend: 4, infra: 4, pm: 3, data: 3, designer: 4 } },
      { text: 'いいえ', scores: { frontend: 1, backend: 1, infra: 1, pm: 2, data: 2, designer: 1 } },
      { text: 'どちらでもない', scores: { frontend: 3, backend: 3, infra: 3, pm: 3, data: 3, designer: 3 } },
    ],
  },
  {
    id: 11,
    text: '長期的な視点で、システムの将来像を考えるのが好きですか？',
    options: [
      { text: 'はい', scores: { frontend: 3, backend: 4, infra: 5, pm: 5, data: 4, designer: 2 } },
      { text: 'いいえ', scores: { frontend: 2, backend: 1, infra: 1, pm: 1, data: 1, designer: 4 } },
      { text: 'どちらでもない', scores: { frontend: 3, backend: 3, infra: 3, pm: 3, data: 3, designer: 3 } },
    ],
  },
  {
    id: 12,
    text: 'ユーザーからのフィードバックを元に、改善を繰り返すことにやりがいを感じますか？',
    options: [
      { text: 'はい', scores: { frontend: 5, backend: 3, infra: 2, pm: 4, data: 3, designer: 5 } },
      { text: 'いいえ', scores: { frontend: 1, backend: 2, infra: 3, pm: 2, data: 2, designer: 1 } },
      { text: 'どちらでもない', scores: { frontend: 3, backend: 3, infra: 3, pm: 3, data: 3, designer: 3 } },
    ],
  },
];