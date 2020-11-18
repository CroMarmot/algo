'use strict';
const { describle } = require('mocha');
const { expect } = require('chai');
const { CompManager } = require("../dist/index.js");
describe('comp manager', () => {
    it('reg and use', () => {
        const cm = CompManager.createCompManager();
        cm.reg('doubleValue','N',(v)=>{return 2*v;});
        const doubleValue = (v) => cm.f('doubleValue','N',v);
        expect(doubleValue(1)).to.equal(2);
        expect(doubleValue(2)).to.equal(4);
    });

    it('reg and way2', () => {
        const cm = CompManager.createCompManager();
        cm.reg('doubleValue','N',(v)=>{return 2*v;});
        const doubleValue = cm.ff.doubleValue.N;
        expect(doubleValue(1)).to.equal(2);
        expect(doubleValue(2)).to.equal(4);
    });

    it('reg and unreg', () => {
        const cm = CompManager.createCompManager();
        cm.reg('doubleValue','N',(v)=>{return 2*v;});
        cm.unreg('doubleValue','N');
        try {
            const doubleValue = (v) => cm.f('doubleValue','N',v);
            assert(false,'must error')
            expect(false).to.equal(true)
        }catch (e) {
        }
    });

    it('double reg', () => {
        const cm = CompManager.createCompManager();
        cm.reg('times','N',(v)=>{return 2*v;});
        cm.reg('times','N',(v)=>{return 3*v;});
        expect(cm.ff.times.N(1)).to.equal(3);
    });

    it('multiple arg reg', () => {
        const cm = CompManager.createCompManager();
        cm.reg('sum','N',(a,b,c,d)=>{return a+b+c+d;});
        expect(cm.ff.sum.N(1,2,3,4)).to.equal(10);
        expect(cm.ff.sum.N(5,0,2,9)).to.equal(16);
    });
});

