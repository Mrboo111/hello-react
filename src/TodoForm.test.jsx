import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoForm from './TodoForm';

describe('TodoFormコンポーネント', () => {
  it('文字を入力して追加ボタンを押すと、入力内容が onAdd に渡されること', async () => {
    const mockAdd = vi.fn();
    const user = userEvent.setup();
    
    render(<TodoForm onAdd={mockAdd} />);

    // 1. 入力欄を探して「新しいTODO」と入力する
    const input = screen.getByPlaceholderText('新しいTODOを入力'); // placeholderに合わせて変えてください
    await user.type(input, '新しいTODO');

    // 2. ボタンをクリックする
    const button = screen.getByRole('button', { name: '追加' });
    await user.click(button);

    // 3. 正しく呼ばれたか検証
    expect(mockAdd).toHaveBeenCalledWith('新しいTODO');
    
    // 4. 追加後、入力欄が空になっているか（これ重要！）
    expect(input.value).toBe('');
  });
});