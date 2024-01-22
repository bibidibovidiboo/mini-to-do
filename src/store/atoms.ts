import { atom } from 'recoil';
import { Todo } from 'src/model/types';

const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});

export default todoListState;
