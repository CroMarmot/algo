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
const isEven = require("@cromarmot/algo/dist/fp/isEven/constant").default;
const cm = CompManager.createCompManager();
cm.reg('isEven','Constant', isEven);
const isEvenConst = (v) => cm.f('isEven','Constant',v);
// or
// const isEvenConst  = cm.ff.isEven.Constant;
console.log(isEvenConst(1)); // false
console.log(isEvenConst(2)); // true
console.log(isEvenConst(3)); // false
```

#### O(N)

```js
const{ CompManager } = require("@cromarmot/algo");
const isEven = require("@cromarmot/algo/dist/fp/isEven/n").default;
const cm = CompManager.createCompManager();
cm.reg('isEven','N', isEven);
const isEvenON = cm.ff.isEven.N;
console.log(isEvenON(1)); // false
console.log(isEvenON(2)); // true
console.log(isEvenON(3)); // false
```

#### O(Random)

```js
const{ CompManager } = require("@cromarmot/algo");
const isEven = require("@cromarmot/algo/dist/fp/isEven/random").default;
const cm = CompManager.createCompManager();
cm.reg('isEven','Random', isEven);
const isEvenR = cm.ff.isEven.Random;
console.log(isEvenR(1)); // false
console.log(isEvenR(2)); // true
console.log(isEvenR(3)); // false
```

### isNumberOne(NLogN)

```js
const{ CompManager } = require("@cromarmot/algo");
const ino = require("@cromarmot/is-number-one");
const cm = CompManager.createCompManager();
cm.reg('isNumberOne','NLogN', ino);

const isNumberOne = cm.ff.isNumberOne.NLogN
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
