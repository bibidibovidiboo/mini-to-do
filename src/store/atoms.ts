import { atom } from 'recoil';
import { Todo } from 'src/model/types';

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
  effects: [localStorageEffect('todo_list')],
});

export default todoListState;
