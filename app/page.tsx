import { Contact } from "@/components/sections";

export default function Home() {
  return (
    <main>
      <section id="home" className={`section`}>
        <h1>hero</h1>
      </section>

      <section id="about" className={`section`}>
        <h1>About</h1>
      </section>

      <section id="services" className={`section`}>
        <h1>Services</h1>
      </section>

      <section id="projects" className={`section`}>
        <h1>Projects</h1>
      </section>

      <Contact />
    </main>
  );
}
