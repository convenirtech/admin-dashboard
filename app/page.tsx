import Image from "next/image";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className=" mx-auto">
      {/* <NavBar/> */}
      <main className=" bg-gray-100 min-h-screen">
        <Header />
      </main>
    </div>
  );
}
