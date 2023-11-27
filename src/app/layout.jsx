import { Inter, Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const pp = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Agus Peiretti",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pp.className}>{children}</body>
    </html>
  );
}
