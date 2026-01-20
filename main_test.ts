import { test, expect } from "bun:test";
import { add } from "./main.ts";

test("addTest", () => {
  expect(add(2, 3)).toBe(5);
});
