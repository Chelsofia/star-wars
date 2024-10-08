import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Star Wars",
  description: "All about StarWars created by Chelsofia",
  keywords: "star wars, jedi, darth vader",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <br />
        <br />
        <Footer />
      </body>
    </html>
  );
}
