import { validateLogin } from "@/lib/auth";

describe("validateLogin", () => {
  it("rejects invalid email", () => {
    expect(validateLogin("not-an-email", "123456")).toEqual({
      ok: false,
      message: "Invalid email",
    });
  });

  it("rejects short password", () => {
    expect(validateLogin("a@a.com", "123")).toEqual({
      ok: false,
      message: "Password must be at least 6 characters",
    });
  });

  it("accepts valid credentials format", () => {
    expect(validateLogin("A@A.COM ", "123456")).toEqual({
      ok: true,
      message: "Valid",
    });
  });
});
