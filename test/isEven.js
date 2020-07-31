'use strict';
let expect = require('chai').expect;
let { isEven } = require('../dist/index.js');
describe('isEven Test', () => {
    it('1 is not even', () => {
        expect(isEven(1)).to.equal(false);
    });
    it('2 is even', () => {
        expect(isEven(2)).to.equal(true);
    });
});
