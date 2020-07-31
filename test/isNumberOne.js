'use strict';
let expect = require('chai').expect;

const { CompManager } = require("../dist/index.js");

const cm = CompManager.createCompManager();

const isNumberOne = (v) => cm.f('isNumberOne','NLogN',v);
describe('isNumberOne NLogN Test', () => {
    it('1 is 1', () => {
        expect(isNumberOne(1)).to.equal(true);
    });
    it('2 is not 1', () => {
        expect(isNumberOne(2)).to.equal(false);
    });
    it('3 is not 1', () => {
        expect(isNumberOne(3)).to.equal(false);
    });
});
