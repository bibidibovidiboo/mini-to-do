import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { RecoilRoot } from 'recoil';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

const App: React.FC = () => {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </RecoilRoot>
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;
