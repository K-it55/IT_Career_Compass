import React, { useState } from 'react';
import { questions } from '../data/questions';

// 診断結果の型を定義
type ResultScores = {
  frontend: number;
  backend: number;
  data: number;
  infra: number;
};

const AptitudeTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<ResultScores>({
    frontend: 0,
    backend: 0,
    data: 0,
    infra: 0,
  });
  const [result, setResult] = useState('');

  const handleAnswer = (selectedScores: ResultScores) => {
    // スコアを加算
    setScores((prevScores) => ({
      frontend: prevScores.frontend + selectedScores.frontend,
      backend: prevScores.backend + selectedScores.backend,
      data: prevScores.data + selectedScores.data,
      infra: prevScores.infra + selectedScores.infra,
    }));

    // 次の質問へ進む
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // 全ての質問が終了したら結果を判定
      calculateResult();
    }
  };

  const calculateResult = () => {
    let bestMatch = '';
    let maxScore = -1;

    // スコアが最も高い職種を見つける
    for (const job in scores) {
      if (scores[job as keyof ResultScores] > maxScore) {
        maxScore = scores[job as keyof ResultScores];
        bestMatch = job;
      }
    }
    
    // 職種名を日本語に変換
    const jobNames: { [key: string]: string } = {
      frontend: 'フロントエンドエンジニア',
      backend: 'バックエンドエンジニア',
      data: 'データサイエンティスト',
      infra: 'インフラエンジニア',
    };

    setResult(`あなたに最も向いているのは「${jobNames[bestMatch]}」です！`);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="aptitude-test-container">
      {result ? (
        // 結果表示画面
        <div>
          <h2>診断結果</h2>
          <p>{result}</p>
          {/* 結果の詳細や学習ロードマップへの誘導などを追加 */}
        </div>
      ) : (
        // 質問表示画面
        <div>
          <h2>IT適職診断</h2>
          <p>{currentQuestion.text}</p>
          <div className="options-container">
            {currentQuestion.options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option.scores)}>
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AptitudeTest;