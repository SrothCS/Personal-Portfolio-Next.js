import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Experience from "@/components/main/Experience"; // Adjust the path if necessary
import Gallery from "@/components/main/gallery"; // Adjust the path if necessary
import Image from "next/image"; 


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Experience />
        
         
      </div>
    </main>
  );
}