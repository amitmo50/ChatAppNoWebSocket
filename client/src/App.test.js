import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Input from './components/input/input';
import TextContainer from './components/textContainer/textContainer';


afterEach(cleanup);

test('renders Input Componenet', () => {
  render(<Input />);
  const textField = screen.getByPlaceholderText(/Type a message.../i);
  expect(textField).toBeInTheDocument();
});

test('renders TextContainer Componenet', () => {
  render(<TextContainer users={[{userName: 'Amit'} ,{userName: 'Aviv'}]}/>);
  const header = screen.getByText(/People Chatting Now:/i);
  expect(header).toBeInTheDocument();
});