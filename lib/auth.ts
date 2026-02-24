export function validateLogin(email: string, password: string) {
  const normalizedEmail = email.trim().toLowerCase();

  if (!normalizedEmail.includes("@")) {
    return { ok: false, message: "Invalid email" };
  }
  if (password.length < 6) {
    return { ok: false, message: "Password must be at least 6 characters" };
  }

  return { ok: true, message: "Valid" };
}
