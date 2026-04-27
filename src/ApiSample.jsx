import React, { useState, useEffect } from 'react';

const ApiSample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  if (!data) return <div>読み込み中...</div>;
  return <div>ユーザー名: {data.name}</div>;
};

export default ApiSample;