'use strict';

const { expect } = require('chai');
const { describe } = require("mocha");

describe('isEven Constant Test', () => {
    const isEven = require("../dist/fp/isEven/constant").default;
    it('1 is not even', () => {
        expect(isEven(1)).to.equal(false);
    });
    it('2 is even', () => {
        expect(isEven(2)).to.equal(true);
    });
});

describe('isEven N Test', () => {
    const isEvenON = require("../dist/fp/isEven/n").default;
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

describe('isEven Random Test', () => {
    const isEvenR = require("../dist/fp/isEven/random").default;
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
