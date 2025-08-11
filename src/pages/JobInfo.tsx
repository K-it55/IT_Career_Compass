import { useState, useEffect } from 'react';
import { jobData } from '../data/jobData';
import '../JobInfo.css';

// Qiita記事の型定義
type QiitaArticle = {
  title: string;
  url: string;
  user: {
    id: string;
  };
};

const jobTitles = [
  { key: 'frontend', name: 'フロントエンドエンジニア' },
  { key: 'backend', name: 'バックエンドエンジニア' },
  { key: 'infra', name: 'インフラエンジニア' },
  { key: 'security', name: 'セキュリティエンジニア' },
  { key: 'data', name: 'データサイエンティスト' },
  { key: 'pm', name: 'プロジェクトマネージャー/ITコンサルタント' },
];

const jobToTag: { [key: string]: string } = {
  frontend: 'React OR Vue.js OR JavaScript',
  backend: 'Ruby on Rails OR Python OR PHP',
  infra: 'AWS OR Docker OR Kubernetes',
  security: 'セキュリティ OR セキュアコーディング',
  data: 'データサイエンス OR 機械学習 OR Python',
  pm: 'プロジェクトマネジメント OR ITコンサル',
};

const JobInfo = () => {
  const [selectedJob, setSelectedJob] = useState('');
  const [recommendedArticles, setRecommendedArticles] = useState<QiitaArticle[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Qiita APIから記事を取得する関数
  const fetchQiitaArticles = async (jobKey: string) => {
    setIsLoading(true);
    const tag = jobToTag[jobKey];
    if (!tag) {
      setRecommendedArticles([]);
      setIsLoading(false);
      return;
    }

    try {
      const API_TOKEN = '402428ea8bb8208b9e8efd1049b7ed4fc8d1e37f'; // ここに取得したAPIキーを貼り付ける
      const response = await fetch(
        `https://qiita.com/api/v2/items?query=${tag}&per_page=5`,
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        }
      );
      const data: QiitaArticle[] = await response.json();
      setRecommendedArticles(data);
    } catch (error) {
      console.error('Failed to fetch Qiita articles:', error);
      setRecommendedArticles([]);
    } finally {
      setIsLoading(false);
    }
  };

  // 選択された職種が変更されたときに記事を取得
  useEffect(() => {
    if (selectedJob) {
      fetchQiitaArticles(selectedJob);
    }
  }, [selectedJob]);

  const handleJobSelect = (jobKey: string) => {
    setSelectedJob(jobKey);
  };

  if (selectedJob) {
    const jobDetail = jobData[selectedJob as keyof typeof jobData];
    return (
      <div className="job-info-container">
        <div className="job-details-view">
          <button onClick={() => setSelectedJob('')} className="back-button">
            戻る
          </button>
          <h2>{jobDetail.name}</h2>
          
          {/* 元の職種説明とロードマップの表示部分 */}
          <div className="job-details">
            <h4>職種説明</h4>
            <p>{jobDetail.description}</p>
            <h4>学習ロードマップ</h4>
            <ul>
              {jobDetail.roadmap.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </div>

          {/* Qiita記事の表示部分 */}
          <div className="qiita-articles-container">
            <h4>{jobDetail.name}におすすめのQiita記事</h4>
            {isLoading ? (
              <p>記事を読み込み中...</p>
            ) : (
              <ul>
                {recommendedArticles.map((article, index) => (
                  <li key={index}>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                    <span> (by {article.user.id})</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="job-info-container">
      <h2>IT職種を知る</h2>
      <p>気になる職種を選んで、仕事内容や学習ロードマップを見てみましょう。</p>
      <div className="options-container">
        {jobTitles.map((job) => (
          <button key={job.key} onClick={() => handleJobSelect(job.key)}>
            {job.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobInfo;