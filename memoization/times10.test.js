import { memoize, times10 } from './times10';
import { expect } from 'chai';

describe('memoization process', () => {
  describe('times10() function', () => {
    it('should throw TypeError if n param isn\'t number type or if it\'s NaN or Infinity', () => {
      expect(() => times10()).to.throw(TypeError);
      expect(() => times10(NaN)).to.throw(TypeError);
      expect(() => times10(true)).to.throw(TypeError);
      expect(() => times10(4 / 0)).to.throw(TypeError);
      expect(() => times10(-Infinity)).to.throw(TypeError);
    });

    it('should multiply n by 10', () => {
      expect(times10(10)).to.equal(100);
      expect(times10(5.542)).to.equal(55.42);
    });
  });

  describe('memoization of times10() function', () => {
    let memoTimes10;

    beforeEach(() => {
      memoTimes10 = memoize(times10);
    });

    it('should return true if result of function times10() isn\'t cached before', () => {
      expect(memoTimes10(4)).to.be.true;
    });

    it('should return false if result of function times10() is already been cached', () => {
      memoTimes10(4);
      expect(memoTimes10(4)).to.be.false;
    });
  });
});
