import Link from "next/link";
import "./navbar.scss";
import { motion } from "framer-motion";
import { itemNav, slideNav } from "../animate";

export default function Navbar() {
  const links = [
    {
      title: "Home",
      path: "home",
    },
    {
      title: "Sobre",
      path: "sobre",
    },
    {
      title: "Projetos",
      path: "projetos",
    },
    {
      title: "Tecnologias",
      path: "tecnologias",
    },
  ];

  return (
    <motion.nav
      variants={slideNav}
      animate="enter"
      exit="exit"
      initial="initial"
      className="navSlide"
    >
      <ul>
        <div className="title">
          <p>Navegação</p>
        </div>
        <div>
          {links.map((link, id) => {
            return (
              <motion.li
                variants={itemNav}
                initial="initial"
                animate="enter"
                exit="exit"
                key={id}
              >
                <Link href={`#${link.path}`} className="link">
                  {link.title}
                </Link>
              </motion.li>
            );
          })}
        </div>
      </ul>
    </motion.nav>
  );
}
