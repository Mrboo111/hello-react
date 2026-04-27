import userEvent from '@testing-library/user-event'; // 一番上に追加

// ... 既存のテスト ...

it('削除ボタンを押したときに onDelete が呼ばれること', async () => {
  // 1. Arrange: 偽の関数（Mock関数）を作る
  const mockDelete = vi.fn(); 
  const user = userEvent.setup();
  
  render(<TodoItem todo={mockTodo} onDelete={mockDelete} />);
  
  // 2. Act: 削除ボタンを探してクリックする
  const deleteButton = screen.getByRole('button', { name: '削除' });
  await user.click(deleteButton);
  
  // 3. Assert: 関数が 1回 呼ばれたか確認する
  expect(mockDelete).toHaveBeenCalledTimes(1);
  expect(mockDelete).toHaveBeenCalledWith(mockTodo.id); // 正しいIDで呼ばれたか
});