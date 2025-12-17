import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-middle min-h-screen items-center bg-background font-sans">
      <Hero />
      <Menu />
    </div>
  );
}
