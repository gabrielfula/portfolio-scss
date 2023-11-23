import Image from "next/image";
import "./home.scss";
import { Github, Linkedin } from "lucide-react";
import ButtonCV from "../buttonCV/buttonCV";

export default function Home() {
  return (
    <div className="home">
      <div className="textHome">
        <div>
          <h1>
            Gabriel <span>Fulaneto!</span>
          </h1>
          <p>Web Developer Front-End</p>
        </div>
        <div className="icons">
          <Github />
          <Linkedin />
          <ButtonCV />
        </div>
      </div>
      <div>
        <Image
          src="/imagens/PersonalImage.jpeg"
          width={300}
          height={400}
          alt="Imagem Pessoal"
          className="image"
        />
      </div>
    </div>
  );
}
