import express from 'express';
import AWS from 'aws-sdk';

const app = express();
const port = 3000;

app.use(express.json()); // JSON形式のリクエストボディを解析するためのミドルウェア

// AWS SDKの設定
AWS.config.update({
  region: 'ap-northeast-1', // 例: 東京リージョン
  // credentials: { ... } // AWS認証情報。Lambda/ECSではIAMロールを使用するため不要
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = 'Users'; // DynamoDBのテーブル名

// ユーザープロフィールを取得するAPI
app.get('/profile/:userId', async (req, res) => {
  const { userId } = req.params;
  const params = {
    TableName: TABLE_NAME,
    Key: { userId },
  };

  try {
    const result = await dynamoDb.get(params).promise();
    if (result.Item) {
      res.status(200).json(result.Item);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).send('Internal Server Error');
  }
});

// ユーザープロフィールを保存・更新するAPI
app.post('/profile', async (req, res) => {
  const { userId, name, email, ...otherData } = req.body;
  const params = {
    TableName: TABLE_NAME,
    Item: {
      userId,
      name,
      email,
      ...otherData,
    },
  };

  try {
    await dynamoDb.put(params).promise();
    res.status(201).json({ message: 'Profile saved successfully' });
  } catch (error) {
    console.error('Error saving user profile:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});