'use strict';
let expect = require('chai').expect;

const { CompManager } = require("../dist/index.js");

const cm = CompManager.createCompManager();

const isEven = (v) => cm.f('isEven','Constant',v);
describe('isEven Constant Test', () => {
    it('1 is not even', () => {
        expect(isEven(1)).to.equal(false);
    });
    it('2 is even', () => {
        expect(isEven(2)).to.equal(true);
    });
});

