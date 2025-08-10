import React, { useState } from 'react';
import { questions } from '../data/questions';

type ResultScores = {
  frontend: number;
  backend: number;
  infra: number;
  pm: number;
  data: number;
  designer: number;
};

const AptitudeTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<ResultScores>({
    frontend: 0,
    backend: 0,
    infra: 0,
    pm: 0,
    data: 0,
    designer: 0,
  });
  const [result, setResult] = useState('');

  const handleAnswer = (selectedScores: ResultScores) => {
    setScores((prevScores) => ({
      frontend: prevScores.frontend + selectedScores.frontend,
      backend: prevScores.backend + selectedScores.backend,
      infra: prevScores.infra + selectedScores.infra,
      pm: prevScores.pm + selectedScores.pm,
      data: prevScores.data + selectedScores.data,
      designer: prevScores.designer + selectedScores.designer,
    }));

    // questions.length が自動的に更新される
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    let bestMatch = '';
    let maxScore = -1;

    for (const job in scores) {
      if (scores[job as keyof ResultScores] > maxScore) {
        maxScore = scores[job as keyof ResultScores];
        bestMatch = job;
      }
    }

    const jobNames: { [key: string]: string } = {
      frontend: 'フロントエンドエンジニア',
      backend: 'バックエンドエンジニア',
      infra: 'インフラエンジニア',
      pm: 'ITコンサルタント／プロジェクトマネージャー',
      data: 'データサイエンティスト',
      designer: 'Webデザイナー',
    };

    setResult(`あなたに最も向いているのは「${jobNames[bestMatch]}」です！`);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="aptitude-test-container">
      {result ? (
        <div>
          <h2>診断結果</h2>
          <p>{result}</p>
        </div>
      ) : (
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