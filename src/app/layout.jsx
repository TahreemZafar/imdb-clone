import Header from "@/Components/Header";
import Providers from "./Providers";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";
import SearchBox from "@/Components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clone",
  description: "IMDb Clone website created by Tahreem Zafar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>

          <Header />

          <Navbar />

           <SearchBox />

          {children}
          
        </Providers>
      </body>
    </html>
  );
}
