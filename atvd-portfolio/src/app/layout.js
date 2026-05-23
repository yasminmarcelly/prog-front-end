import { Calistoga, Inter } from "next/font/google";
import "./globals.css";

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Yasmin Marcelly",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${calistoga.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}