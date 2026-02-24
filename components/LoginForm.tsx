"use client";

import { useState } from "react";
import { validateLogin } from "@/lib/auth";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = validateLogin(email, password);
    setStatus(result.message);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>

        <form
          onSubmit={handleSubmit}
          aria-label="login-form"
          className={styles.form}
        >
          <div>
            <div className={styles.label}>Email</div>
            <input
              aria-label="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hehehe@example.com"
            />
          </div>

          <div>
            <div className={styles.label}>Password</div>
            <input
              aria-label="password"
              type="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="min 6 chars"
            />
          </div>

          <button type="submit" className={styles.button}>
            Login
          </button>

          {status && (
            <p role="status" className={styles.status}>
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
