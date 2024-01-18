import React from 'react';
import styled from 'styled-components';

const TodoHead = () => {
  return (
    <TodoHeadBlock>
      <h1>2024년 1월 18일</h1>
      <div className='day'>목요일</div>
      <div className='tasks-left'>할 일 1개 남음</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    font-size: 21px;
    color: #868e96;
  }

  .tasks-left {
    margin-top: 40px;
    font-size: 18px;
    font-weight: bold;
    color: #20c997;
  }
`;
