import { capitalizeFirstLetter } from '../../../src/common/utils'

describe("capitalizeFirstLetter", () => {
  test("Capitalize word", () => {
    const word = 'hello';
    const capitalizeWord = capitalizeFirstLetter(word);
    expect(capitalizeWord).toBe('Hello');
  });
});
