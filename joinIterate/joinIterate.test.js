import { expect } from 'chai';
import join from './joinIterate';

describe('join() function', () => {
  it('should return string', () => {
    expect(join([1, 4, 5], '-')).to.be.a('string');
  });

  it('should throw TypeError if first argument isn\'t array or second isn\'t string', () => {
    expect(() => join(null)).to.throw(TypeError);
    expect(() => join([1, 4, 'Hello'], 3)).to.throw(TypeError);
  });

  it('should join array elements with join string literal', () => {
    expect(join([1, 4, 5], '-')).to.equal('1-4-5');
  });

  it('should join only array elements if lenght of array is greater than 1', () => {
    expect(join(['54', 2], 'H')).to.equal('54H2');
    expect(join(['54'], 'H')).to.equal('54');
  });

  it('should return empty string if array is not specified or length is less than 1', () => {
    expect(join([], 'H')).to.equal('');
  });

  it('should join array element with empty string if join string is not specified', () => {
    expect(join([1, 2])).to.equal('12');
  });
});
