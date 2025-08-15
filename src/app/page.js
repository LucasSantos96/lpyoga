import About from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import SummerSale from "@/components/SummerSale";


export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero/>
      <About/>
      <AboutUs/>
      <WhyChoose/>
      <SummerSale/>
    </main>
  );
}
