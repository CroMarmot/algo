# algo

[![CircleCI](https://circleci.com/gh/CroMarmot/algo/tree/master.svg?style=svg)](https://circleci.com/gh/CroMarmot/algo?branch=master) ![Node.js CI](https://github.com/CroMarmot/algo/workflows/Node.js%20CI/badge.svg?branch=master)

the algorithms library with controllable time complexity.

## Install

```bash
yarn add @cromarmot/algo
```

## Functions

### isEven

#### Constant
```js
const{ CompManager } = require("@cromarmot/algo");

const cm = CompManager.createCompManager();

const isEven = (v) => cm.f('isEven','Constant',v);

console.log(isEven(1)); // false
console.log(isEven(2)); // true
console.log(isEven(3)); // false
```

#### O(N)

```js
const{ CompManager } = require("@cromarmot/algo");

const cm = CompManager.createCompManager();

const isEvenON = (v) => cm.f('isEven','N',v);

console.log(isEvenON(1)); // false
console.log(isEvenON(2)); // true
console.log(isEvenON(3)); // false
```

### isNumberOne(NLogN)

```js
const{ CompManager } = require("@cromarmot/algo");

const cm = CompManager.createCompManager();

const isNumberOne = (v) => cm.f('isNumberOne', 'NLogN', v);

console.log(isNumberOne(1)); // true
console.log(isNumberOne(2)); // false
console.log(isNumberOne(3)); // false
```

## Test


```
yarn test
```

## Cover

```
yarn cover
```
