import React from 'react';
import './App.css';
import avatar from './avatar.jpg';
import Comment from './components/comment';

function App() {
  const data = {
    avatar,
    name: 'Brad',
    title: 'author',
    time: '2 minutes ago',
    content: 'So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.',
    replies: 21,
    upvotes: 123,
    downvotes: 0
  }

  return (
    <div className="App">
      <Comment data={data}/>
    </div>
  );
}

export default App;
