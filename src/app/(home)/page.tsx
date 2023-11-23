import Header from "@/components/header/header";
import Home from "@/components/home/home";
import Projetos from "@/components/projetos/projetos";
import Sobre from "@/components/sobre/sobre";
import Tecnologias from "@/components/tecnologias/tecnologias";

export default function Index() {
  return (
    <>
      <section id="home">
        <Header />
        <Home />
      </section>
      <section id="sobre">
        <Sobre />
      </section>
      <div id="projetos">
        <Projetos />
      </div>
      <section id="tecnologias">
        <Tecnologias />
      </section>
    </>
  );
}
