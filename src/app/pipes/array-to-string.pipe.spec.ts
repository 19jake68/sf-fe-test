import { ArrayToStringPipe } from './array-to-string.pipe';

describe('ArrayToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayToStringPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform the array into string', () => {
    const pipe = new ArrayToStringPipe();
    const array = ['one', 'two', 'three'];
    const result = 'one and two and three';
    expect(pipe.transform(array)).toBe(result);
  });

  it('should transform the array into string using `,` separator', () => {
    const pipe = new ArrayToStringPipe();
    const array = ['one', 'two', 'three'];
    const result = 'one,two,three';
    expect(pipe.transform(array, ',')).toBe(result);
  });
});
