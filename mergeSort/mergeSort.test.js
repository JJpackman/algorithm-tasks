import { mergeSort } from './mergeSort';
import { expect } from 'chai';

describe('merge sort algorithm', () => {
  it('should return empty list if list parameter is missed', () => {
    expect(mergeSort([])).to.deep.equal([]);
  });

  it('should sort list in ascending order if asc parameter is missed', () => {
    expect(mergeSort([44, 5, -3, 1])).to.deep.equal([-3, 1, 5, 44]);
  });

  it('should sort list of even length in ascending order', () => {
    expect(mergeSort([44, 5, -3, 1], true)).to.deep.equal([-3, 1, 5, 44]);
    expect(mergeSort([2, 9, -24, 4, -4, 45, 12, 82], true)).to.deep.equal([-24, -4, 2, 4, 9, 12, 45, 82]);
  });

  it('should sort list of odd length in ascending order', () => {
    expect(mergeSort([5, -3, 1], true)).to.deep.equal([-3, 1, 5]);
    expect(mergeSort([2, 9, -24, 4, -4, 12, 82], true)).to.deep.equal([-24, -4, 2, 4, 9, 12, 82]);
  });

  it('should sort list of even length in descending order', () => {
    expect(mergeSort([6, 33, -5, 52], false)).to.deep.equal([52, 33, 6, -5]);
    expect(mergeSort([2, 53], false)).to.deep.equal([53, 2]);
  });

  it('should sort list of odd length in descending order', () => {
    expect(mergeSort([6, 33, 22, 3, 4, -5, 52], false)).to.deep.equal([52, 33, 22, 6, 4, 3, -5]);
    expect(mergeSort([2, 53, -34], false)).to.deep.equal([53, 2, -34]);
  });
});
