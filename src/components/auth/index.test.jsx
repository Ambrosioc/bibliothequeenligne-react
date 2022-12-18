import { SignIn } from "./SignIn";

describe("SignIn", () => {
  test("renders", () => {
    const wrapper = <SignIn />;
    expect(wrapper.exists()).toBe(true);
  });
});
