import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "GitaNow",
  description: "Learn the Gita in a fun way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
