import { useState } from 'react';
import { jobData } from '../data/jobData';
import '../JobInfo.css';

const jobTitles = [
  { key: 'frontend', name: 'フロントエンドエンジニア' },
  { key: 'backend', name: 'バックエンドエンジニア' },
  { key: 'infra', name: 'インフラエンジニア' },
  { key: 'security', name: 'セキュリティエンジニア' },
  { key: 'data', name: 'データサイエンティスト' },
  { key: 'pm', name: 'プロジェクトマネージャー/ITコンサルタント' },
];

const JobInfo = () => {
  const [selectedJob, setSelectedJob] = useState('');

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