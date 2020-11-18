'use strict';
const { describe } = require('mocha');
const { expect } = require('chai');

describe('isNumberOne N Test', () => {
    const isNumberOne = require('../dist/fp/isNumberOne/n').default;
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

describe('isNumberOne NLogN Test', () => {
    const isNumberOne = require('@cromarmot/is-number-one');
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
