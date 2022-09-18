import { postfixDimensions } from './utils';
describe('postfixDimensions', () => {
  it('should return px', () => {
    expect(postfixDimensions('100')).toEqual('100px');
  });
  it('should return as is', () => {
    expect(postfixDimensions('100%')).toEqual('100%');
  });
});
