import { greet } from "./greet";

test("挨拶を返す(本来の実装)", () => {
    expect(greet("太郎")).toBe("Hello!太郎");
})

