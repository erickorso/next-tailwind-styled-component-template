import { NextSeo } from "next-seo";
import Hero from "@/components/Hero";
import XFooter from "@/components/template/XFooter";
import XNavBar from "@/components/template/XNavBar";

export default function Home() {
  const SEO = {
    title: "Next JS Template",
    description: "Next JS Template with Tailwind CSS and React Icons",

    openGraph: {
      title: "Next JS Template",
      description: "Next JS Template with Tailwind CSS and React Icons",
      type: "website",
      locale: "en_IN",
      url: "https://github.com/erickorso/",
      site_name: "Next JS Template",
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <NextSeo {...SEO} />
      <main className="overflow-hidden">
        <XNavBar />
        <Hero />
        <XFooter />
      </main>
    </div>
  );
}
