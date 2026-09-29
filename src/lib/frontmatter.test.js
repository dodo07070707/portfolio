// node src/frontmatter.test.js
import assert from 'node:assert/strict';
import { parseFrontmatter } from './frontmatter.js';

const { data, body } = parseFrontmatter(`---
title: FINGOO
tags: [React Native, Zustand]
github: https://github.com/a/b
empty:
---
## 개요
본문`);

assert.equal(data.title, 'FINGOO');
assert.deepEqual(data.tags, ['React Native', 'Zustand']);
assert.equal(data.github, 'https://github.com/a/b');
assert.equal('empty' in data, false);
assert.equal(body, '## 개요\n본문');
assert.deepEqual(parseFrontmatter('no meta'), { data: {}, body: 'no meta' });
console.log('ok');
