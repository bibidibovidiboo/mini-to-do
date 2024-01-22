import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { useSetRecoilState } from 'recoil';
import todoListState from 'src/store/atoms';

const TodoCreate = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>('');
  const setTodoList = useSetRecoilState(todoListState);

  const onToggle = () => setOpen(!open);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim().length === 0) {
      return;
    }
    setTodoList((prev) =>
      prev.concat({
        id: uuidv4(),
        text: value,
        done: false,
      })
    );
    setValue('');
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={handleAdd}>
            <Input
              autoFocus
              value={value}
              placeholder='할 일을 입력 후 Enter 를 누르세요 😊'
              onChange={handleChangeInput}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

export default TodoCreate;

const CircleButton = styled.button<{ open: boolean }>`
  display: flex;
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 50%);
  align-items: center;
  justify-content: center;

  background: #38d9a9;
  z-index: 5;
  cursor: pointer;
  font-size: 60px;
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  transition: 0.125s all ease-in;

  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px 32px 72px 32px;
  border-top: 1px solid #e9ecef;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;
