import { Link } from "react-router-dom";
import github from '../assets/icons/github.svg';
import {AiFillYoutube} from 'react-icons/ai'

const Projects = ( ) => {
  return (
    <main>
      <div className=" bg-violet-Ocean m-3 p-4">
			<h1 className=" font-Poppins text-pink">Projects</h1>
      </div>

      <div className=" bg-background flex flex-row justify-items-center">
        <section className=" pr-3 m-3">
          <h2 className=" font-Poppins text-ciel text-4xl text-left pb-2">Facil Market</h2>
          <p className=" text-justify text-sm ">This proyect is a Marketplace app. Here, we ofert a platform for the buyer and sellers can get your bussiness so easy and accessible for. In this repository you find the source code and the documentation asociated with the development and funcionalities of the app.</p>
          <h5 className=" text-purple">#PERN #Team #UX/UI #Marketplace #API</h5>
          <Link to="https://github.com/adharainfinita/facil-market-proyect" target="_blank">
            <img className="h-8 filter invert" src={github} alt="github-icon" />
          </Link>
          <Link to="https://youtu.be/XQNHgjvIK84" target="_blank">
            <AiFillYoutube className=" w-24 h-24"/>
          </Link>
            
        </section>
        <section className=" p-3 m-3">
          <img className=" h-full w-100" src="public/Captura de pantalla_2023-07-14_10-42-14.png" alt="facil-market"/> 
        </section>
      </div>

      <div>
        <section>
          <h2>Travelling Countries</h2>
          <p>Description</p>
          <p>Technologies</p>
        </section>
        <section>
          <img src="" alt="" />
        </section>
      </div>

      <div>
        <section>
          <h2>Rick & Morty app</h2>
        </section>
        <section>
          <p>Description</p>
          <p>Technologies</p>
        </section>
      </div>
      
    </main>
  )
}

export default Projects;