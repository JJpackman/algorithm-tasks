import { memoize } from '../memoization/times10';
import { factorial } from './factorial';
import { expect } from 'chai';

describe('factorial functionality and memoization', () => {
  describe('factorial() functionality', () => {
    it('should throw TypeError if miss parameter or parameter isn\'t a positive number', () => {
      expect(() => factorial()).to.throw(TypeError);
      expect(() => factorial(-100)).to.throw(TypeError);
      expect(() => factorial(null)).to.throw(TypeError);
      expect(() => factorial('5')).to.throw(TypeError);
    });

    it('should calculate factorial from n', () => {
      expect(factorial(3)).to.equal(6);
      expect(factorial(4)).to.equal(24);
      expect(factorial(1)).to.equal(1);
    });
  });

  describe('memoization of factorial() function', () => {
    let memoFactorial;

    beforeEach(() => {
      memoFactorial = memoize(factorial);
    });

    it('should return true if result of function factorial() isn\'t cached before', () => {
      expect(memoFactorial(4)).to.be.true;
    });

    it('should return false if result of function factorial() is already been cached', () => {
      memoFactorial(20);
      expect(memoFactorial(20)).to.be.false;
    });
  });
});
