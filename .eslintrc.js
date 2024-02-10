module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        jsx: true,
        useJSXTextNode: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint-config-prettier',
        'plugin:import/recommended',
    ],
    plugins: ['@typescript-eslint', 'import', 'prettier', 'react', 'react-hooks'],
    settings: { 'import/resolver': { typescript: {} } },
    rules: {
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
            },
        ],

        'react/prop-types': 'off',

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': [
            'warn',
            {
                additionalHooks: 'useRecoilCallback',
            },
        ],

        'import/newline-after-import': 'warn',

        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'type'],
                pathGroups: [
                    {
                        pattern: '{react,react-dom}',
                        group: 'builtin',
                        position: 'before',
                    },
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
};
