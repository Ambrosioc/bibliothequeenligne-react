import { getLastBooks } from "./apiBookServices";

describe("getLastBooks", () => {
  test("renders", () => {
    const wrapper = getLastBooks().then((data) => {
      return data;
    });
    expect(wrapper).toBe(true);
  });
});
