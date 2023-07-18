export interface ProjectProps{
  name: string;
  description: string;
  tags: string;
  link: string;
  media: string | Array<string>;
}
import github from '../assets/icons/github.svg';
import { Link } from "react-router-dom";
import Slider from './Slider';
import ReactPlayer from 'react-player';

const Project = ({name, description, tags, link, media}: ProjectProps) =>{

  
  return (


    <div className=" w-full bg-ciel border-2 border-stone-900 dark:border-0 dark:bg-background flex flex-row justify-items-center m-5 p-3 rounded-md">
      <section className=" pr-3 m-3 w-2/4 flex flex-col justify-around">
        <section>
           <h2 className=" font-Poppins text-stone-900 dark:text-ciel text-4xl text-left pb-2">{name}</h2>
        <p className=" text-justify text-l font-Poppins dark:font-tittilium antialiased tracking-wide leading-relaxed text-stone-900 dark:text-white">{description}</p>
        </section>
       
        <section className=' mt-2 p-3'>
        <Link to={link} target="_blank">
          <img className="h-8 filter invert hover:filter-none transition-colors" src={github} alt="github-icon" />
        </Link>
           <h5 className=" text-light-ciel dark:text-purple text-left m-2"> {tags}</h5>
        </section>
      </section>
      <section className=" p-3 m-1 w-2/4 hover:w-full transition-all">
        {
          Array.isArray(media) ? 
          <Slider images={media} /> :
          <ReactPlayer
          url='https://youtu.be/XQNHgjvIK84'
          height="100%"
          width="100%"
          controls={true}
          playing
          
        />
        }        
      </section>
    </div>
   
  )
}

export default Project;