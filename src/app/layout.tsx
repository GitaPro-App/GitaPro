import type { Metadata } from "next";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import "./global.css";

export const metadata: Metadata = {
  title: "GitaPro",
  description: "Learn the Gita in a fun way"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  );
}