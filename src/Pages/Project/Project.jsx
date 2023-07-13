import BoxIcon from "../../Components/BoxIcon/BoxIcon";
import BoxProject from "../../Components/BoxProject/BoxProject";
import Nav from "../../Components/Nav/Nav";

//Imagens
import portifolio from "../../img/portifolio.jpg";
import rickMorty from "../../img/rick-and-morty.jpg";
import secretWord from "../../img/secret-word.jpg";
import filmLib from "../../img/film-lib.jpg";
import miniBlog from "../../img/mini-blog.jpg";
import neonLanding from "../../img/neon-landing.jpg";
import pokedex from "../../img/pokedex.jpg";

//Tecnologias - Icons
import { FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFirebase,
  SiStyledcomponents,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const Project = () => {
  return (
    <>
      <div className="h-auto min-h-[900px] text-white text-2xl " id="project">
        <Nav></Nav>
        <div className="  flex flex-col justify-center  items-center">
          <h1 className="text-4xl text-center font-bold py-10 uppercase">
            Projetos:
          </h1>
          <div className="max-w-[1200px] flex flex-wrap gap-10 justify-center ">
            <BoxProject
              img={portifolio}
              title="Meu portifolio"
              description="Ele foi desenvolvido utilizando React. "
              github="https://github.com/Gabriel-Nascentes/portfolio_react"
              site={"/"}
              boxIcon={
                <>
                  <BoxIcon icon={<FaReact></FaReact>}></BoxIcon>
                  <BoxIcon icon={<SiTailwindcss></SiTailwindcss>}></BoxIcon>
                </>
              }
            ></BoxProject>
            <BoxProject
              img={rickMorty}
              title="Memory Game"
              description="O jogo foi desenvolvido utilizando React a fim de solidificar o aprendizado. "
              github="https://github.com/Gabriel-Nascentes/rick-and-morty_memory-game"
              site="https://memory-game-kappa-murex.vercel.app/"
              boxIcon={
                <>
                  <BoxIcon icon={<FaReact></FaReact>}></BoxIcon>
                </>
              }
            ></BoxProject>
            <BoxProject
              img={secretWord}
              title="Secret Word"
              description="Um jogo de palava secreta muito divertido. "
              github="https://github.com/Gabriel-Nascentes/secret_word"
              site="https://secret-word-red.vercel.app/"
              boxIcon={
                <>
                  <BoxIcon icon={<SiJavascript></SiJavascript>}></BoxIcon>
                  <BoxIcon icon={<SiHtml5></SiHtml5>}></BoxIcon>
                  <BoxIcon icon={<SiCss3></SiCss3>}></BoxIcon>
                </>
              }
            ></BoxProject>{" "}
            <BoxProject
              img={miniBlog}
              title="MiniBlog"
              description="A simulação de um sistema de blog onde é feito o login, post de fotos com tag's e legendas, gerenciamento de atividades do usuários e cadastro do usário."
              github="https://github.com/Gabriel-Nascentes/Mini-blog"
              site="https://miniblog-psi.vercel.app/"
              boxIcon={
                <>
                  <BoxIcon icon={<FaReact></FaReact>}></BoxIcon>{" "}
                  <BoxIcon icon={<SiFirebase></SiFirebase>}></BoxIcon>{" "}
                  <BoxIcon
                    icon={<SiStyledcomponents></SiStyledcomponents>}
                  ></BoxIcon>
                </>
              }
            ></BoxProject>{" "}
            <BoxProject
              img={filmLib}
              title="Films Lib"
              description="Utilizando a API (themoviedb) foi feito uma biblioteca de filmes que apresenta informações dos filmes. "
              github="https://github.com/Gabriel-Nascentes/Film-lib_api_TMBD"
              site="https://film-lib-two.vercel.app/"
              boxIcon={
                <>
                  <BoxIcon icon={<FaReact></FaReact>}></BoxIcon>{" "}
                </>
              }
            ></BoxProject>{" "}
            <BoxProject
              img={neonLanding}
              title="Neon Landing Page"
              description="A criação de uma Landing page com tema Neon."
              github="https://github.com/Gabriel-Nascentes/lading-page_neon"
              site="https://neon-lading-page.vercel.app/"
              boxIcon={
                <>
                  <BoxIcon icon={<FaReact></FaReact>}></BoxIcon>
                  <BoxIcon icon={<SiTailwindcss></SiTailwindcss>}></BoxIcon>
                </>
              }
            ></BoxProject>{" "}
            <BoxProject
              img={pokedex}
              title="Pokédex"
              description="Utilizando a API (PokeApi) é feito uma biblioteca que apresenta alguns pokemons e algumas informações."
              github="https://github.com/Gabriel-Nascentes/api_pokemon_react"
              site="https://gabriel-nascentes.github.io/api_pokemon_react/"
              boxIcon={
                <>
                  <BoxIcon icon={<FaReact></FaReact>}></BoxIcon>{" "}
                </>
              }
            ></BoxProject>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
