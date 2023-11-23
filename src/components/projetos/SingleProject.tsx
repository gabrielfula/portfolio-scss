import Image from "next/image";
import "./single.scss";

type TypeProjects = {
  id?: number;
  title: string;
  img: string;
  desc: string;
};

export default function SingleProject({ title, img, desc }: TypeProjects) {
  return (
    <section>
      <div className="container">
        <div className="contentProjetos">
          <div>
            <Image
              src="/imagens/PersonalImage.jpeg"
              width={300}
              height={400}
              alt="Imagem Projeto"
              className="image"
            />
          </div>
          <div>
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
