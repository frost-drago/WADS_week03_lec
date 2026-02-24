import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "@/components/LoginForm";

describe("LoginForm", () => {
  it("shows error for invalid email", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    await user.type(screen.getByLabelText("email"), "nope");
    await user.type(screen.getByLabelText("password"), "123456");
    await user.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.getByRole("status")).toHaveTextContent("Invalid email");
  });

  it("shows error for short password", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    await user.type(screen.getByLabelText("email"), "a@a.com");
    await user.type(screen.getByLabelText("password"), "123");
    await user.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.getByRole("status")).toHaveTextContent(
      "Password must be at least 6 characters",
    );
  });

  it("shows valid for correct inputs", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);

    await user.type(screen.getByLabelText("email"), "a@a.com");
    await user.type(screen.getByLabelText("password"), "123456");
    await user.click(screen.getByRole("button", { name: /login/i }));

    expect(screen.getByRole("status")).toHaveTextContent("Valid");
  });
});
