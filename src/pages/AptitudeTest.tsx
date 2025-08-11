import { useState } from 'react';
import { questions } from '../data/questions';
import { jobData } from '../data/jobData';
import ChartComponent from '../components/ChartComponent';

type ResultScores = {
  frontend: number;
  backend: number;
  infra: number;
  security: number;
  data: number;
  pm: number;
};

const AptitudeTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<ResultScores>({
    frontend: 0,
    backend: 0,
    infra: 0,
    security: 0,
    data: 0,
    pm: 0,
  });
  const [bestMatches, setBestMatches] = useState<string[]>([]); // 複数の職種を格納する配列に変更

  const handleAnswer = (selectedScores: ResultScores) => {
    setScores((prevScores) => ({
      frontend: prevScores.frontend + selectedScores.frontend,
      backend: prevScores.backend + selectedScores.backend,
      infra: prevScores.infra + selectedScores.infra,
      security: prevScores.security + selectedScores.security,
      data: prevScores.data + selectedScores.data,
      pm: prevScores.pm + selectedScores.pm,
    }));

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
  const scoresArray = Object.entries(scores); // スコアを [ ['frontend', 50], ['backend', 50], ... ] の配列に変換

  // 配列から最高点を取得
  const maxScore = scoresArray.reduce((max, [_, score]) => {
    return score > max ? score : max;
  }, -1);

  // 最高点と同じスコアを持つ職種だけをフィルタリング
  const bestJobs = scoresArray
    .filter(([_, score]) => score === maxScore)
    .map(([job, _]) => job);

  setBestMatches(bestJobs);
};


  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="aptitude-test-container">
      {bestMatches.length > 0 ? ( // 診断が完了したら結果を表示
        <div className="result-container">
          <h2>診断結果</h2>
          <ChartComponent scores={scores} />
          {bestMatches.length === 1 ? (
            // 最高点が1つだけの場合
            <>
              <h3>あなたに最も向いているのは「{jobData[bestMatches[0] as keyof typeof jobData].name}」です！</h3>
              <div className="job-details">
                <h4>職種説明</h4>
                <p>{jobData[bestMatches[0] as keyof typeof jobData].description}</p>
                <h4>学習ロードマップ</h4>
                <ul>
                  {jobData[bestMatches[0] as keyof typeof jobData].roadmap.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            // 最高点が複数ある場合
            <>
              <h3>あなたの最高点は同点でした！以下の職種が向いている可能性があります。</h3>
              <div className="job-details">
                {bestMatches.map((jobKey, index) => {
                  const jobDetail = jobData[jobKey as keyof typeof jobData];
                  return (
                    <div key={index}>
                      <h4>{jobDetail.name}</h4>
                      <p>{jobDetail.description}</p>
                      <h5>学習ロードマップ</h5>
                      <ul>
                        {jobDetail.roadmap.map((step, stepIndex) => (
                          <li key={stepIndex}>{step}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      ) : (
        // 診断中の画面
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