import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});



export const metadata = {
  title: "shanty",
  description: "Yoga space",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
