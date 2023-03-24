test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});

test("adds 1 * 2 to equal 2", () => {
  expect(1 * 2).toBe(2);
});

test("adds 6 / 2 to equal 3", () => {
  expect(6 / 2).toBe(3);
});

test("adds 7 / 2 to equal 3", () => {
  expect(7 / 2).toBe(3.5);
});

const mockFn = jest.fn();

test("mock function is called", () => {
  mockFn();
  expect(mockFn).toHaveBeenCalled();
});

// test("renders correctly", () => {
//   const component = renderer.create(<App />);
//   expect(component.toJSON()).toMatchSnapshot();
// });
