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

beforeAll(() => {
  console.log("before all tests");
});

beforeEach(() => {
  num = 2;
});

describe("math", () => {
  let num;

  beforeEach(() => {
    num = 2;
  });

  afterEach(() => {
    num = null;
  });

  test("adds 1 + 2 to equal 3", () => {
    expect(1 + num).toBe(3);
  });
});

let counter = 0;

test("test 1", () => {
  counter++;
  expect(counter).toBe(1);
});

test("test 2", () => {
  counter++;
  expect(counter).toBe(1);
});

afterEach(() => {
  counter = 0;
});
