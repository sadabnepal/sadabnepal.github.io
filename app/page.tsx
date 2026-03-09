import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Summary from "@/components/Summary";
import Skills from "@/components/Skills";
import GithubProjects from "@/components/GithubProjects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import YouTube from "@/components/YouTube";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen relative">
      <section className="relative w-full h-[400vh]">
        <ScrollyCanvas />
        <Overlay />
      </section>

      <Summary />
      <Skills />
      <GithubProjects />
      <Experience />
      <YouTube />
      <Education />
    </main>
  );
}
