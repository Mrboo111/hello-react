import { describe, it, expect } from 'vitest';
import { countTodos, clearCompleted } from './utils';
import { toggleCompleted } from './utils';

describe('TODO管理のロジックテスト', () => {
  // テスト用データ（Arrange: 準備）
  const dummyTodos = [
    { id: 1, text: 'テスト1', completed: true },
    { id: 2, text: 'テスト2', completed: false },
    { id: 3, text: 'テスト3', completed: false },
  ];

  it('countTodos: 正しく集計できること', () => {
    const result = countTodos(dummyTodos);
    expect(result.completed).toBe(1); // 完了は1つ
    expect(result.active).toBe(2);    // 未完了は2つ
  });

  it('clearCompleted: 完了済みを除去できること', () => {
    const result = clearCompleted(dummyTodos);
    expect(result.length).toBe(2);
    expect(result[0].text).toBe('テスト2'); // 残っているのは未完了のもの
  });
});

it('toggleCompleted: 指定したIDの完了状態が反転すること', () => {
  const todos = [{ id: 1, text: 'test', completed: false }];
  const result = toggleCompleted(todos, 1);
  expect(result[0].completed).toBe(true);
});

it('toggleCompleted: 存在しないIDの場合は何も変わらないこと', () => {
  const todos = [{ id: 1, text: 'test', completed: false }];
  const result = toggleCompleted(todos, 999);
  expect(result).toEqual(todos); // 中身が変わっていないか確認
});

it('toggleCompleted: 元の配列を破壊していないこと（イミュータブル）', () => {
  const todos = [{ id: 1, text: 'test', completed: false }];
  const result = toggleCompleted(todos, 1);
  expect(result).not.toBe(todos); // 別のメモリ（新しい配列）であることを確認
});