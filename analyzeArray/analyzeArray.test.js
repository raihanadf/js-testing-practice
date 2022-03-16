import analyzeArray from "./analyzeArray";

test("ngikngok [1,8,3,4,2,6]", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("test array [5,1,2,3,7,1]", () => {
  expect(analyzeArray([5, 1, 2, 3, 7, 1])).toEqual({
    average: 19 / 6,
    min: 1,
    max: 7,
    length: 6,
  });
});

