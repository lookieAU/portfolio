import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Plaban Datta",
  description: "Contact me for some cookies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=1024"></meta>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
