import Hero from "@/components/Hero";
import Menu from "@/components/CakeCard";
import Image from "next/image";
import CakeCard from "@/components/CakeCard";
import CakeSection from "@/components/CakeSection";
import WhyWilhideBakers from "@/components/WhyUs";
import OccasionsSection from "@/components/OccasionSection";

export default function Home() {
  return (
    <div className="flex flex-col justify-center align-middle min-h-screen items-center bg-background font-sans">
      <Hero />
      <CakeSection />
      <WhyWilhideBakers />
      <OccasionsSection />
    </div>
  );
}
