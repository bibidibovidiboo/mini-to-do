import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useRecoilValue } from 'recoil';
import todoListState from 'src/store/atoms';

const TodoList = () => {
  const TodoList = useRecoilValue(todoListState);

  return (
    <TodoListBlock>
      {TodoList.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
          />
        );
      })}
    </TodoListBlock>
  );
};

export default TodoList;

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
