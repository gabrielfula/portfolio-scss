import SingleProject from "./SingleProject";
import "./projetos.scss";

export default function Projetos() {
  const projetos = [
    {
      id: 1,
      title: "Projeto 1",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2v8jGQFEHwDE0bEIm2Sofs-0n5RUWyiNtY_JQw46IozVB-YPU",
      desc: "bgakjbfvakljbvklzjbvljkakij lorem iagnabfkabfakjb jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
    },
    {
      id: 2,
      title: "Projeto 2",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2v8jGQFEHwDE0bEIm2Sofs-0n5RUWyiNtY_JQw46IozVB-YPU",
      desc: "bgakjbfvakljbvklzjbvljkakij lorem iagnabfkabfakjb jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
    },
    {
      id: 3,
      title: "Projeto 3",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2v8jGQFEHwDE0bEIm2Sofs-0n5RUWyiNtY_JQw46IozVB-YPU",
      desc: "bgakjbfvakljbvklzjbvljkakij lorem iagnabfkabfakjb jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
    },
    {
      id: 4,
      title: "Projeto 4",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2v8jGQFEHwDE0bEIm2Sofs-0n5RUWyiNtY_JQw46IozVB-YPU",
      desc: "bgakjbfvakljbvklzjbvljkakij lorem iagnabfkabfakjb jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
    },
    {
      id: 5,
      title: "Projeto 5",
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2v8jGQFEHwDE0bEIm2Sofs-0n5RUWyiNtY_JQw46IozVB-YPU",
      desc: "bgakjbfvakljbvklzjbvljkakij lorem iagnabfkabfakjb jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",
    },
  ];

  return (
    <div className="projetos">
      <div>
        {projetos.map((item) => {
          return (
            <SingleProject title={item.title} img={item.img} desc={item.desc} />
          );
        })}
      </div>
    </div>
  );
}
