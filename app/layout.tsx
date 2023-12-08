import type { Metadata } from "next";
import { Epilogue, Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";

const inter = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Convenir Admin",
  description: "The convenir admin dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="flex">
          <Sidebar />
          <div className=" flex-1 px-2 py-4 bg-slate-800 text-white">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
