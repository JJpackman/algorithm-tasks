import { expect } from 'chai';
import binarySearch from './binarySearch';

describe('binary search algorithm functionality', () => {
  it('should return -1 if sortedList parameter is missed or item not found', () => {
    expect(binarySearch([1, 2, 4, 65], 7)).to.equal(-1);
    expect(binarySearch()).to.equal(-1);
  });

  it('should return index of founded item of ascending order sortedList', () => {
    expect(binarySearch([1, 2, 4, 65], 65)).to.equal(3);
    expect(binarySearch([6], 6)).to.equal(0);
    expect(binarySearch([12, 24, 496, 652], 496, true)).to.equal(2);
  });

  it('should return index of founded item of descending order sortedList', () => {
    expect(binarySearch([123, 66, 52, 46], 123, false)).to.equal(0);
    expect(binarySearch([98, 66, 52, 46], 52, false)).to.equal(2);
  });
});
