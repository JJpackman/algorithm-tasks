import uniqSort from './uniqSort';
import { expect } from 'chai';

describe('Unique sort algorithm', () => {
  it('should return an array', () => {
    expect(uniqSort([1, 5, 2, 1])).to.be.an('array');
  });

  it('should not return any duplicate values in result array', () => {
    const testArr = uniqSort([1, 5, 2, 1]);

    expect(testArr).to.have.members([1, 5, 2]);
    expect(testArr.length).to.equal(3);
  });

  it('should return sorted array', () => {
    expect(uniqSort([4,2,2,3,2,2,2])).to.deep.equal([2,3,4]);
  });

  it('should return empty array if \'arr\' param not passed', () => {
    expect(uniqSort()).to.be.an('array');
    expect(uniqSort().length).to.equal(0);
  });

  it('should throw TypeError if passed parameter is not array', () => {
    expect(() => uniqSort(1)).to.throw(TypeError);
    expect(() => uniqSort(null)).to.throw(TypeError);
  });
});
