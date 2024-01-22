import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import Head from "next/head";

const inter = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "StudyNex",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" reverseOrder={false} />
        <NextTopLoader color="#4983f6" />
        {children}
      </body>
    </html>
  );
}
