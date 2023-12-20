import Financial from "@/components/Financial";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Wrapper from "@/components/navbar/Wrapper";
import FinancialConsistency from "@/components/FinancialConsistency";
import JoinWithUs from "@/components/JoinWtihUs";

export default function Home() {
  return (
    <Wrapper>
      <Hero />
      <Financial /> 
      <Featured />
      <FinancialConsistency />
      <JoinWithUs />
    </Wrapper>
  )
} 
