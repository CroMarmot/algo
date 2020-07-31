# algo

[![CircleCI](https://circleci.com/gh/CroMarmot/algo/tree/master.svg?style=svg)](https://circleci.com/gh/CroMarmot/algo?branch=master)

the algorithms library with controllable time complexity.

## Install

```bash
yarn add @cromarmot/algo
```

## Functions

### isEven(Constant)

```js
const{ CompManager } = require("@cromarmot/algo");

const cm = CompManager.createCompManager();

const isEven = (v) => cm.f('isEven','Constant',v);

console.log(isEven(1)); // false
console.log(isEven(2)); // true
console.log(isEven(3)); // true

const isEvenON = (v) => cm.f('isEven','N',v);

console.log(isEven(1)); // false
console.log(isEven(2)); // true
console.log(isEven(3)); // true
```

### isNumberOne(NLogN)

```js
const{ CompManager } = require("@cromarmot/algo");

const cm = CompManager.createCompManager();

const isNumberOne = (v) => cm.f('isNumberOne', 'NLogN', v);

console.log(isNumberOne(1));
console.log(isNumberOne(2));
console.log(isNumberOne(3));
```

## Test


```
yarn test
```

## Cover

```
yarn cover
```
