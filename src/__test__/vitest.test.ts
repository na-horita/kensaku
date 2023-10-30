export class HikisuError extends Error { };
export class RangeError extends Error { };

const add = (a: number, b: number): number => {
  if (a < 0 || a > 100 || b < 0 || b > 100) {
    throw new HikisuError("aとbは0から100までの数値である必要があります。");
    }

  const sum = a + b;
  if (sum > 100) {
    return 100;
  } else {
    return sum;
  }
};

test("合計の上限は、100である", () => {
  expect(add(10, 90)).toBe(100);
});

test("合計が130でも、100を返す", () => {
  expect(add(50, 80)).toBe(100);
});

test("引数がマイナス値ならばエラー文を出す", () => {
  expect(() => add(-50, 80)).toThrow();
});

test("引数がマイナス値ならばエラーでない", () => {
  expect(() => add(40, 30)).not.toThrow();
});

test("add関数の引数が0から100までの数値でない場合、エラーがスローされることを確認する", () => {
  expect(() => add(-1, 50)).toThrow(HikisuError);
  expect(() => add(10, -50)).toThrow(HikisuError);
  expect(() => add(50, 101)).toThrow(HikisuError);
  expect(() => add(500, 10)).toThrow(HikisuError);
  expect(() => add(500, 10)).toThrow(Error);
  expect(() => add(500, 10)).toThrow();
});

test("返り値が１０か１０以上", () => {
  expect(add(5, 5)).toBeGreaterThanOrEqual(10);
  expect(add(5, 5)).toBeGreaterThanOrEqual(8);
});

test("小数点計算", () => {
    expect(0.1+0.4).toBeCloseTo(0.5);
})