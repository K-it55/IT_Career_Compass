import { useState } from 'react';
import { questions } from '../data/questions';
import { jobData } from '../data/jobData'; // jobDataをインポート

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
  const [bestMatch, setBestMatch] = useState('');

  const handleAnswer = (selectedScores: ResultScores) => {
    setScores((prevScores) => ({
      frontend: prevScores.frontend + selectedScores.frontend,
      backend: prevScores.backend + selectedScores.backend,
      infra: prevScores.infra + selectedScores.infra,
      pm: prevScores.pm + selectedScores.pm,
      data: prevScores.data + selectedScores.data,
      designer: prevScores.designer + selectedScores.designer,
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    let bestJob = '';
    let maxScore = -1;

    for (const job in scores) {
      if (scores[job as keyof ResultScores] > maxScore) {
        maxScore = scores[job as keyof ResultScores];
        bestJob = job;
      }
    }

    setBestMatch(bestJob);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="aptitude-test-container">
      {bestMatch ? (
        // 診断結果と詳細を表示
        <div className="result-container">
          <h2>診断結果</h2>
          <h3>あなたに最も向いているのは「{jobData[bestMatch as keyof typeof jobData].name}」です！</h3>
          
          <div className="job-details">
            <h4>職種説明</h4>
            <p>{jobData[bestMatch as keyof typeof jobData].description}</p>
            
            <h4>学習ロードマップ</h4>
            <ul>
              {jobData[bestMatch as keyof typeof jobData].roadmap.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        // 質問表示
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