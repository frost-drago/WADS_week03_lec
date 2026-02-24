import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Homework",
  description: "Next.js login lab with Jest testing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif" }}>{children}</body>
    </html>
  );
}
