import "./globals.css";
import { Figtree } from "next/font/google";
import { ThemeProvider } from 'next-themes'
import Navbar from "./Homepage/Overview/navbar";
// import Switcher13 from "./themeformodes/theme";

const rhd = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Aishwarya",
  description: "Welcome to Digital Journal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
      <body className={`${rhd.className} max-w-3xl flex-auto p-10 mx-auto leading-loose`}>
        {/* <Switcher13/> */}
        <Navbar/>
        {children}
      </body>
      </ThemeProvider>
    </html>
  );
}
