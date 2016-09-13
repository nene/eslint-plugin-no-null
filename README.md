# eslint-plugin-no-null

ESLint rule to disallow null literals, to encourage using undefined instead.

# Installation

After having installed [ESLint](https://www.github.com/eslint/eslint), install the rule:

```bash
$ npm install eslint-plugin-no-null --save-dev
```

# Configuration

Add `no-null` to your `.eslintrc`:

```json
{
  "plugins": [
    "no-null"
  ],
  "rules": {
    "no-null/no-null": 2
  }
}
```
