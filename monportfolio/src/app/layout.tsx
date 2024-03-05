import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navigation/navbar/index";
import Footer from "./navigation/footer/index";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Site portfolio de Mathieu Giard",
  description: "Déployé à l'aide de GitHub Pages",
};

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar></Navbar>
      {children}          
        
      <Footer></Footer>
      </body>
    </html>
  );
}
