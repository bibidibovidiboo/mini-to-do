import React, { ReactNode } from 'react';
import styled from 'styled-components';

type OwnProps = {
  children: React.ReactNode;
};

const TodoTemplate = ({ children }: OwnProps) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplate;

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;
