import { describe, it, expect } from 'vitest';

// テストのグループ化
describe('算数のテスト', () => {
  
  // 個別のテストケース
  it('1 + 1 は 2 になること', () => {
    // Arrange（準備） & Act（実行）
    const result = 1 + 1;
    
    // Assert（検証）
    expect(result).toBe(2);
  });

});