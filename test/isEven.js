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

const isEvenON = (v) => cm.f('isEven','N',v);
describe('isEven N Test', () => {
    it('1 is not even', () => {
        expect(isEvenON(1)).to.equal(false);
    });
    it('2 is even', () => {
        expect(isEvenON(2)).to.equal(true);
    });
    it('2001 is not even', () => {
        expect(isEvenON(2001)).to.equal(false);
    });
    it('2002 is even', () => {
        expect(isEvenON(2002)).to.equal(true);
    });
});

const isEvenR = (v) => cm.f('isEven','Random',v);
describe('isEven Random Test', () => {
    it('1 is not even', () => {
        expect(isEvenR(1)).to.equal(false);
    });
    it('2 is even', () => {
        expect(isEvenR(2)).to.equal(true);
    });
    it('2001 is not even', () => {
        expect(isEvenR(2001)).to.equal(false);
    });
    it('2002 is even', () => {
        expect(isEvenR(2002)).to.equal(true);
    });
    it('2000002 is even', () => {
        expect(isEvenR(2000002)).to.equal(true);
    });
});
