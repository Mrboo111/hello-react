import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.node,
        // テスト用のグローバル変数を許可する設定
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        vi: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
      sourceType: 'module',
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
];