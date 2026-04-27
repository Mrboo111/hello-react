import React from 'react';
import { render, screen } from '@testing-library/react';
import ApiSample from './ApiSample';

describe('ApiSample (非同期テスト)', () => {
  it('APIからデータを取得して表示すること', async () => {
    // 1. Arrange: fetchを偽物にすり替える（モック化）
    const mockUser = { name: '偽の太郎' };
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockUser,
    });

    render(<ApiSample />);

    // 2. Assert: 最初は「読み込み中...」が出ているはず
    expect(screen.getByText('読み込み中...')).toBeInTheDocument();

    // 3. Act & Assert: データが表示されるのを「待つ」
    // findByText は、要素が出るまで最大1秒間待ってくれます
    const userName = await screen.findByText('ユーザー名: 偽の太郎');
    expect(userName).toBeInTheDocument();
    
    // 4. fetchが1回だけ呼ばれたかもチェック
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});