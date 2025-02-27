import CustomerReview from "@/components/Homepage/CustomerReview";
import HeroSection from "@/components/Homepage/HeroSection";
import Questionare from "@/components/Homepage/Questionare";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CustomerReview />
      <Questionare />
    </main>
  );
}
