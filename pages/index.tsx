import Catalogue from "@/components/Catalogue";
import Hero from "@/components/Hero";
import XTemplate from "@/components/template/XTemplate";

export default function Home() {

  return (
    <XTemplate>
      <Hero />
      <Catalogue />
    </XTemplate>
  );
}
