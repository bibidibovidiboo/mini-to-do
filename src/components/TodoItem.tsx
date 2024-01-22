import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdCreate, MdDelete } from 'react-icons/md';
import { Todo } from '../model/types';
import { useSetRecoilState } from 'recoil';
import todoListState from 'src/store/atoms';

const TodoItem = ({ id, done, text }: Todo) => {
  const setTodoList = useSetRecoilState(todoListState);

  const handleDelete = (id?: string) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={() => handleDelete(id)}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

export default TodoItem;

const Update = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #38d9a9;
  }
`;

const Remove = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<{ done: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Form = styled.form`
  display: contents;
  text-decoration-line: none;
`;

const Input = styled.input<{ done: boolean }>`
  flex: 1;
  font-size: 21px;
  color: #495057;
  border: none;
  outline: none;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;
