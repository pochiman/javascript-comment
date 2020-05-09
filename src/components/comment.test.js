import React from 'react';
import { render } from '@testing-library/react';
import Comment from './comment';

test('renders comment without crashing', () => {
  const mockData = {
    avatar: '',
    name: 'Brad',
    title: 'author',
    time: '2 minutes ago',
    content: 'So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.',
    replies: 21,
    upvotes: 123,
    downvotes: 0
  }

  const { getByText, getByAltText } = render(<Comment data={mockData}/>);

  expect(getByAltText(/avatar/i)).toBeInTheDocument();
  expect(getByText(/Brad/i)).toBeInTheDocument();
  expect(getByText(/AUTHOR/i)).toBeInTheDocument();
  expect(getByText(/MINUTES/i)).toBeInTheDocument();
  expect(getByText(/Taycan/i)).toBeInTheDocument();
});
