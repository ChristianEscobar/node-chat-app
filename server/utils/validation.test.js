const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    let value = 12345;
    expect(isRealString(value)).toBe(false);
  });

  it('should reject srings with only spaces', () => {
    let value = '         ';
    expect(isRealString(value)).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
    let value = ' my test string ';
    expect(isRealString(value)).toBe(true);
  });
});