import { greet } from "./greet";

vi.mock("./greet", () => ({
    greet(name: string) {
        return `おはようございます!${name}`
    }
}));

test("挨拶を返す(本来の実装でない)", () => {
    expect(greet("太郎")).toBe("おはようございます!太郎");
})

